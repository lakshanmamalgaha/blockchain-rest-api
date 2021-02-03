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

    AlertStreamEvent[] public AlertStreamEvents;

    function process(RoomStreamEvent memory incomingRoomStreamEvent) public{
        if ((incomingRoomStreamEvent.temp > 4) || ((incomingRoomStreamEvent.humidity <= 80) && (incomingRoomStreamEvent.humidity > 85))){
            AlertStreamEvents.push(AlertStreamEvent({
                roomNo: incomingRoomStreamEvent.roomNo,
                temp: incomingRoomStreamEvent.temp,
                humidity: incomingRoomStreamEvent.humidity
            }));
        }
    }
}

contract MainContract is DataQualityContract{
	event LogNewAlertStream(RoomStreamEvent streamEvent);
	
    function processEvent(RoomStreamEvent memory incomingRoomStreamEvent) public{
        process(incomingRoomEvent);
		emit LogNewAlertStream(incomingRoomStreamEvent);
    }
    

    
    function getFirstElement() public view returns(AlertStreamEvent memory){
        return AlertStreamEvents[0];
    }
    
    function getAlertStreamEvents() public view returns(AlertStreamEvent[] memory) {
        return AlertStreamEvents;
    }
}