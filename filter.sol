pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;

contract DataQualityContract {
    
    struct RoomStreamEvent {
        uint8 roomNo;
        uint8 temp;
        uint8 humidity;
    }

    struct AlertStreamEvent {
        uint8 roomNo;
        uint8 temp;
        uint8 humidity;
    }
    
    event LogNewAlertStream(RoomStreamEvent streamEvent);
    
    AlertStreamEvent[] public AlertStreamEvents;

      function process(RoomStreamEvent memory incomingRoomStreamEvent) public{
        if ((incomingRoomStreamEvent.temp > 4) || ((incomingRoomStreamEvent.humidity <= 80) && (incomingRoomStreamEvent.humidity > 85))){
            AlertStreamEvents.push(AlertStreamEvent({
                roomNo: incomingRoomStreamEvent.roomNo,
                temp: incomingRoomStreamEvent.temp,
                humidity: incomingRoomStreamEvent.humidity
            }));
             emit LogNewAlertStream(incomingRoomStreamEvent);

        }
    }
    
    function getAlertStreamEvents() public view returns(AlertStreamEvent[]) {
        return AlertStreamEvents;
    }

}
