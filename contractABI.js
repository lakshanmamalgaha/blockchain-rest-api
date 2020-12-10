module.exports = {
  abi: [
    {
      inputs: [],
      name: "countLabReports",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "countPersons",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "countPrescriptionReports",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "getLabReport",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "file",
              type: "string",
            },
            {
              internalType: "int256",
              name: "date",
              type: "int256",
            },
            {
              internalType: "string",
              name: "hospitleName",
              type: "string",
            },
            {
              internalType: "string",
              name: "notes",
              type: "string",
            },
          ],
          internalType: "struct PatientData.LabReport",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "getPerson",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "bmi",
              type: "string",
            },
            {
              internalType: "string",
              name: "bloodPressure",
              type: "string",
            },
            {
              internalType: "int256",
              name: "date",
              type: "int256",
            },
            {
              internalType: "string",
              name: "age",
              type: "string",
            },
            {
              internalType: "string",
              name: "notes",
              type: "string",
            },
          ],
          internalType: "struct PatientData.PersonalData",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "getPrescriptionReport",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "file",
              type: "string",
            },
            {
              internalType: "int256",
              name: "date",
              type: "int256",
            },
            {
              internalType: "string",
              name: "hospitleName",
              type: "string",
            },
            {
              internalType: "string",
              name: "notes",
              type: "string",
            },
            {
              internalType: "string",
              name: "dname",
              type: "string",
            },
          ],
          internalType: "struct PatientData.PrescriptionReport",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "numOfLabReports",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "numOfPersons",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "numOfPrescriptionReports",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "file",
              type: "string",
            },
            {
              internalType: "int256",
              name: "date",
              type: "int256",
            },
            {
              internalType: "string",
              name: "hospitleName",
              type: "string",
            },
            {
              internalType: "string",
              name: "notes",
              type: "string",
            },
          ],
          internalType: "struct PatientData.LabReport",
          name: "labReport",
          type: "tuple",
        },
      ],
      name: "setLabReport",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "bmi",
              type: "string",
            },
            {
              internalType: "string",
              name: "bloodPressure",
              type: "string",
            },
            {
              internalType: "int256",
              name: "date",
              type: "int256",
            },
            {
              internalType: "string",
              name: "age",
              type: "string",
            },
            {
              internalType: "string",
              name: "notes",
              type: "string",
            },
          ],
          internalType: "struct PatientData.PersonalData",
          name: "personalData",
          type: "tuple",
        },
      ],
      name: "setPerson",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "file",
              type: "string",
            },
            {
              internalType: "int256",
              name: "date",
              type: "int256",
            },
            {
              internalType: "string",
              name: "hospitleName",
              type: "string",
            },
            {
              internalType: "string",
              name: "notes",
              type: "string",
            },
            {
              internalType: "string",
              name: "dname",
              type: "string",
            },
          ],
          internalType: "struct PatientData.PrescriptionReport",
          name: "prescriptionReport",
          type: "tuple",
        },
      ],
      name: "setPrescriptionReport",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
