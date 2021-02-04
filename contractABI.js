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
    windowAbi: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint16",
                            "name": "avgWeight",
                            "type": "uint16"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct DataQualityContract.AvgWeightStreamEvent",
                    "name": "streamEvent",
                    "type": "tuple"
                }
            ],
            "name": "LogAvgWeightStreamEvent",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "getAvgWeightStreamEvent",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint16",
                            "name": "avgWeight",
                            "type": "uint16"
                        }
                    ],
                    "internalType": "struct DataQualityContract.AvgWeightStreamEvent[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "index",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "machineID",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "weight",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.WeightStreamEventDTO",
                    "name": "incomingWeightStreamEvent",
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
                            "name": "machineID",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "weight",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.WeightStreamEventDTO",
                    "name": "incomingWeightStreamEventDTO",
                    "type": "tuple"
                }
            ],
            "name": "processWindow",
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
            "name": "processedAvgWeightStreamEvents",
            "outputs": [
                {
                    "internalType": "uint16",
                    "name": "avgWeight",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
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
            "name": "window",
            "outputs": [
                {
                    "internalType": "uint16",
                    "name": "machineID",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "weight",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    patternAbi: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint16",
                            "name": "roomNo",
                            "type": "uint16"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct DataQualityContract.AlertStreamEvent",
                    "name": "streamEvent",
                    "type": "tuple"
                }
            ],
            "name": "LogAlertStreamEvent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "deviceID",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "roomNo",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "temp",
                            "type": "string"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct DataQualityContract.TempStreamEventDTO",
                    "name": "streamEvent",
                    "type": "tuple"
                }
            ],
            "name": "LogTempStreamEventDTO",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "deviceID",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "roomNo",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "action",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.RegulatorStreamEventDTO",
                    "name": "incomingRegulatorStreamEventDTO",
                    "type": "tuple"
                }
            ],
            "name": "processPatternRegulatorStream",
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
                            "name": "deviceID",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "roomNo",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "temp",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.TempStreamEventDTO",
                    "name": "incomingTempStreamEventDTO",
                    "type": "tuple"
                }
            ],
            "name": "processPatternTempStream",
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
                            "name": "deviceID",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "roomNo",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "action",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.RegulatorStreamEventDTO",
                    "name": "incomingRegulatorStreamEventDTO",
                    "type": "tuple"
                }
            ],
            "name": "processRegulatorStream",
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
                            "name": "deviceID",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "roomNo",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "temp",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.TempStreamEventDTO",
                    "name": "incomingTempStreamEventDTO",
                    "type": "tuple"
                }
            ],
            "name": "processTempStream",
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
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currentAction",
            "outputs": [
                {
                    "internalType": "enum DataQualityContract.Actions",
                    "name": "",
                    "type": "uint8"
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
                        }
                    ],
                    "internalType": "struct DataQualityContract.AlertStreamEvent[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    sequenceAbi: [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "packageId",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "stageId",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.DeliveryStageStreamEventDTO",
                    "name": "incomingDeliveryStageStreamEventDTO",
                    "type": "tuple"
                }
            ],
            "name": "processDeliveryStageStream",
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
                            "name": "packageId",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "stageId",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DataQualityContract.DeliveryStageStreamEventDTO",
                    "name": "incomingDeliveryStageStreamEventDTO",
                    "type": "tuple"
                }
            ],
            "name": "processSequence",
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
            "name": "CompleteShipmentStreamEvents",
            "outputs": [
                {
                    "internalType": "uint16",
                    "name": "packageId",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currentStage",
            "outputs": [
                {
                    "internalType": "enum DataQualityContract.Stages",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCompleteShipmentStreamEvents",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint16",
                            "name": "packageId",
                            "type": "uint16"
                        }
                    ],
                    "internalType": "struct DataQualityContract.CompleteShipmentStreamEvent[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
};
