pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;

contract DataQualityContract {

    WeightStreamEvent[10] public window;
    uint256 public index = 0;
    uint8 private precisionFactor = 1.0;

    struct WeightStreamEvent {
        uint16 machineID;
        uint16 weight;
    }

    struct WeightStreamEventDTO {
        string machineID;
        string weight;
    }

    struct AvgWeightStreamEvent {
        uint16 avgWeight;
    }

    AvgWeightStreamEvent[] public processedAvgWeightStreamEvents;

    event LogAvgWeightStreamEvent(AvgWeightStreamEvent streamEvent);

    function set(WeightStreamEventDTO memory incomingWeightStreamEventDTO) private {

        WeightStreamEvent memory incomingWeightStreamEvent = WeightStreamEvent({
        machineID : parseIntmachineID(incomingWeightStreamEventDTO.machineID),
        weight : parseIntweight(incomingWeightStreamEventDTO.weight)
        });

        if (index == window.length) {
            check();
            window[0] = incomingWeightStreamEvent;
        }
        else {
            window[index] = incomingWeightStreamEvent;
            index++;
        }

    }

    function process(WeightStreamEventDTO memory incomingWeightStreamEvent) public {
        set(incomingWeightStreamEvent);
    }

    function check() private {
        processedAvgWeightStreamEvents.push(AvgWeightStreamEvent({
        avgWeight : avgweight()
        }));

        emit LogAvgWeightStreamEvent(AvgWeightStreamEvent({
        avgWeight : avgweight()
        }));
    }

    function avgweight() private view returns (uint16) {
        uint16 sum = 0;
        for (uint16 i = 0; i < index; i++) {
            sum += window[i].weight;
        }
        uint16 avg = uint16(sum / (index));
        return avg;
    }


    function parseIntmachineID(string memory s) private view returns (uint16) {
        bytes memory b = bytes(s);
        uint16 result = 0;
        for (uint i = 0; i < b.length; i++) {
            if (uint8(b[i]) >= 48 && uint8(b[i]) <= 57) {
                result = result * 10 + (uint8(b[i]) - 48);
            }
        }
        return result * precisionFactor;
    }

    function parseIntweight(string memory s) private view returns (uint16) {
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

    function processWindow(WeightStreamEventDTO memory incomingWeightStreamEventDTO) public {
        process(incomingWeightStreamEventDTO);
    }


    function getAvgWeightStreamEvents() public view returns (AvgWeightStreamEvent[] memory) {
        return processedAvgWeightStreamEvents;
    }
}
