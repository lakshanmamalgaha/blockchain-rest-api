pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;

contract DataQualityContract {

    uint8 private precisionFactor = 1.0;

    struct RegulatorStreamEvent {
        uint256 deviceID;
        uint16 roomNo;
        string action;
    }

    struct RegulatorStreamEventDTO {
        string deviceID;
        string roomNo;
        string action;
    }

    struct TempStreamEvent {
        uint256 deviceID;
        uint16 roomNo;
        uint16 temp;
    }

    struct TempStreamEventDTO {
        string deviceID;
        string roomNo;
        string temp;
    }

    struct AlertStreamEvent {
        uint16 roomNo;
    }

    AlertStreamEvent[] public AlertStreamEvents;

    enum Actions{
        Start,
        Off
    }

    Actions public currentAction;

    event LogAlertStreamEvent(AlertStreamEvent streamEvent);
    event LogTempStreamEventDTO(TempStreamEventDTO streamEvent);

    function processRegulatorStream(RegulatorStreamEventDTO memory incomingRegulatorStreamEventDTO) public {
        RegulatorStreamEvent memory incomingRegulatorStreamEvent = RegulatorStreamEvent({
        deviceID : parseIntdeviceID(incomingRegulatorStreamEventDTO.deviceID),
        roomNo : parseIntroomNo(incomingRegulatorStreamEventDTO.roomNo),
        action : incomingRegulatorStreamEventDTO.action
        });

        if (keccak256(abi.encodePacked(incomingRegulatorStreamEvent.action)) == keccak256(abi.encodePacked("start"))) {
            currentAction = Actions.Start;
        }

        if (keccak256(abi.encodePacked(incomingRegulatorStreamEvent.action)) == keccak256(abi.encodePacked("off"))) {
            currentAction = Actions.Off;
        }
    }

    function processTempStream(TempStreamEventDTO memory incomingTempStreamEventDTO) public {
        TempStreamEvent memory incomingTempStreamEvent = TempStreamEvent({
        deviceID : parseIntdeviceID(incomingTempStreamEventDTO.deviceID),
        roomNo : parseIntroomNo(incomingTempStreamEventDTO.roomNo),
        temp : parseInttemp(incomingTempStreamEventDTO.temp)
        });

        emit LogTempStreamEventDTO(incomingTempStreamEventDTO);

        if (currentAction == Actions.Start) {
            if (incomingTempStreamEvent.temp > 4) {
                AlertStreamEvents.push(AlertStreamEvent({
                roomNo : incomingTempStreamEvent.roomNo
                }));

                emit LogAlertStreamEvent(AlertStreamEvent({
                roomNo : incomingTempStreamEvent.roomNo
                }));
            }
        }

    }

    function nextAction() internal {
        currentAction = Actions(uint(currentAction) + 1);
    }


    function parseIntdeviceID(string memory s) private view returns (uint256) {
        bytes memory b = bytes(s);
        uint256 result = 0;
        for (uint i = 0; i < b.length; i++) {
            if (uint8(b[i]) >= 48 && uint8(b[i]) <= 57) {
                result = result * 10 + (uint8(b[i]) - 48);
            }
        }
        return result * precisionFactor;
    }

    function parseIntroomNo(string memory s) private view returns (uint16) {
        bytes memory b = bytes(s);
        uint16 result = 0;
        for (uint i = 0; i < b.length; i++) {
            if (uint8(b[i]) >= 48 && uint8(b[i]) <= 57) {
                result = result * 10 + (uint8(b[i]) - 48);
            }
        }
        return result * precisionFactor;
    }

    function parseInttemp(string memory s) private view returns (uint16) {
        bytes memory b = bytes(s);
        uint16 result = 0;
        for (uint i = 0; i < b.length; i++) {
            if (uint8(b[i]) >= 48 && uint8(b[i]) <= 57) {
                result = result * 10 + (uint8(b[i]) - 48);
            }
        }
        return result * precisionFactor;
    }


}

contract MainContract is DataQualityContract {

    function processPatternRegulatorStream(RegulatorStreamEventDTO memory incomingRegulatorStreamEventDTO) public {
        processRegulatorStream(incomingRegulatorStreamEventDTO);
    }

    function processPatternTempStream(TempStreamEventDTO memory incomingTempStreamEventDTO) public {
        processTempStream(incomingTempStreamEventDTO);
    }


    function getAlertStreamEvents() public view returns (AlertStreamEvent[] memory) {
        return AlertStreamEvents;
    }
}

