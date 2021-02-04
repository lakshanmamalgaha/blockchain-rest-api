pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;

contract DataQualityContract {

    uint8 private precisionFactor = 1.0;

    struct DeliveryStageStreamEvent {
        uint16 packageId;
        uint16 stageId;
    }

    struct DeliveryStageStreamEventDTO {
        string packageId;
        string stageId;
    }

    struct CompleteShipmentStreamEvent {
        uint16 packageId;
    }

    CompleteShipmentStreamEvent[] public CompleteShipmentStreamEvents;

    enum Stages {
        Stage1,
        Stage2,
        Stage3,
        Stage4
    }

    Stages public currentStage;

    event LogCompleteShipmentStreamEvent(CompleteShipmentStreamEvent streamEvent);

    function processDeliveryStageStream(DeliveryStageStreamEventDTO memory incomingDeliveryStageStreamEventDTO) public{
        DeliveryStageStreamEvent memory incomingDeliveryStageStreamEvent = DeliveryStageStreamEvent({
        packageId : parseIntpackageId(incomingDeliveryStageStreamEventDTO.packageId),
        stageId : parseIntstageId(incomingDeliveryStageStreamEventDTO.stageId)
        });

        if(incomingDeliveryStageStreamEvent.stageId==1){
            currentStage = Stages.Stage1;
        }

        if (currentStage == Stages.Stage1 && incomingDeliveryStageStreamEvent.stageId ==2){
            nextStage();
        }

        if (currentStage == Stages.Stage2 && incomingDeliveryStageStreamEvent.stageId ==3){
            nextStage();
        }

        if (currentStage == Stages.Stage3 && incomingDeliveryStageStreamEvent.stageId ==4){
            nextStage();
            CompleteShipmentStreamEvents.push(CompleteShipmentStreamEvent(
                {
                packageId: incomingDeliveryStageStreamEvent.packageId
                }));

        emit LogCompleteShipmentStreamEvent(CompleteShipmentStreamEvent(
        {
        packageId: incomingDeliveryStageStreamEvent.packageId
        }));
        }

    }


    function nextStage() internal {
        currentStage = Stages(uint(currentStage) + 1);
    }


    function parseIntpackageId(string memory s) private view returns (uint16) {
        bytes memory b = bytes(s);
        uint16 result = 0;
        for (uint i = 0; i < b.length; i++) {
            if (uint8(b[i]) >= 48 && uint8(b[i]) <= 57) {
                result = result * 10 + (uint8(b[i]) - 48);
            }
        }
        return result * precisionFactor;
    }
    function parseIntstageId(string memory s) private view returns (uint16) {
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

    function processSequence(DeliveryStageStreamEventDTO memory incomingDeliveryStageStreamEventDTO) public {
        processDeliveryStageStream(incomingDeliveryStageStreamEventDTO);
    }


    function getCompleteShipmentStreamEvents() public view returns (CompleteShipmentStreamEvent[] memory) {
        return CompleteShipmentStreamEvents;
    }
}

