pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;

contract DataQualityContract {

    uint8 private precisionFactor = 1.0;

    struct RoomStreamEvent {
        uint16 roomNo;
        uint16 temp;
        uint16 humidity;
    }

    struct RoomStreamEventDTO {
        string roomNo;
        string temp;
        string humidity;
    }

    struct AlertStreamEvent {
        uint16 roomNo;
        uint16 temp;
        uint16 humidity;
    }

    AlertStreamEvent[] public AlertStreamEvents;

    event LogRoomStreamEvent(RoomStreamEvent streamEvent);

    function process(RoomStreamEventDTO memory incomingRoomStreamEventDTO) public {

        RoomStreamEvent memory incomingRoomStreamEvent = RoomStreamEvent({
        roomNo : parseIntroomNo(incomingRoomStreamEventDTO.roomNo),
        temp : parseInttemp(incomingRoomStreamEventDTO.temp),
        humidity : parseInthumidity(incomingRoomStreamEventDTO.humidity)
        });


        if ((incomingRoomStreamEvent.temp > 4) || ((incomingRoomStreamEvent.humidity < 80) || (incomingRoomStreamEvent.humidity > 85))) {
            AlertStreamEvents.push(AlertStreamEvent({
            roomNo : incomingRoomStreamEvent.roomNo,
            temp : incomingRoomStreamEvent.temp,
            humidity : incomingRoomStreamEvent.humidity
            }));
            emit LogRoomStreamEvent(incomingRoomStreamEvent);
        }
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

    function parseInthumidity(string memory s) private view returns (uint16) {
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

    function processFilter(RoomStreamEventDTO memory incomingRoomStreamEvent) public {
        process(incomingRoomStreamEvent);
    }


    function getFirstElement() public view returns (AlertStreamEvent memory){
        return AlertStreamEvents[0];
    }

    function getAlertStreamEvents() public view returns (AlertStreamEvent[] memory) {
        return AlertStreamEvents;
    }
}
