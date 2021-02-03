module.exports = {
    filterAbi: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint16",
                            "name": "roomNo",
                            "type": "uint16"
                        },
                        {
                            "internalType": "uint16",
                            "name": "temp",
                            "type": "uint16"
                        },
                        {
                            "internalType": "uint16",
                            "name": "humidity",
                            "type": "uint16"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct DataQualityContract.RoomStreamEvent",
                    "name": "streamEvent",
                    "type": "tuple"
                }
            ],
            "name": "LogRoomStreamEvent",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "roomNo",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "temp",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "humidity",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.RoomStreamEventDTO",
                    "name": "incomingRoomStreamEventDTO",
                    "type": "tuple"
                }
            ],
            "name": "process",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "roomNo",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "temp",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "humidity",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.RoomStreamEventDTO",
                    "name": "incomingRoomStreamEvent",
                    "type": "tuple"
                }
            ],
            "name": "processFilter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "AlertStreamEvents",
            "outputs": [
                {
                    "internalType": "uint16",
                    "name": "roomNo",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "temp",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "humidity",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAlertStreamEvents",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint16",
                            "name": "roomNo",
                            "type": "uint16"
                        },
                        {
                            "internalType": "uint16",
                            "name": "temp",
                            "type": "uint16"
                        },
                        {
                            "internalType": "uint16",
                            "name": "humidity",
                            "type": "uint16"
                        }
                    ],
                    "internalType": "struct DataQualityContract.AlertStreamEvent[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getFirstElement",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint16",
                            "name": "roomNo",
                            "type": "uint16"
                        },
                        {
                            "internalType": "uint16",
                            "name": "temp",
                            "type": "uint16"
                        },
                        {
                            "internalType": "uint16",
                            "name": "humidity",
                            "type": "uint16"
                        }
                    ],
                    "internalType": "struct DataQualityContract.AlertStreamEvent",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    windowAbi: [],
    patternAbi: [],
    sequenceAbi: []
};
