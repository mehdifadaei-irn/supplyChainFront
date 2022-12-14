export const contractAddress = "0x4232f2CE82Ca027BDb131DA28533ec5e1F750d0f";
export const abi = [
  {
    inputs: [],
    name: "SupplyChain__OnlyOwnerCanChangeOwnibility",
    type: "error",
  },
  { inputs: [], name: "SupplyChain__ProductIdIsNotValid", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "string",
        name: "itemName",
        type: "string",
      },
    ],
    name: "Added",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "ownStateId",
        type: "uint256",
      },
    ],
    name: "CostStateAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ownStateId",
        type: "address",
      },
    ],
    name: "OwnerStateAdded",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "_prodId", type: "uint256" }],
    name: "CostOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_prodId", type: "uint256" }],
    name: "OwnerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_prodId", type: "uint256" },
      { internalType: "uint256", name: "_cost", type: "uint256" },
    ],
    name: "addNewCost",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_prodId", type: "uint256" },
      { internalType: "address", name: "_newOwner", type: "address" },
    ],
    name: "addNewOwner",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_productName", type: "string" },
      { internalType: "uint256", name: "_cost", type: "uint256" },
      { internalType: "string", name: "_descripton", type: "string" },
    ],
    name: "createItem",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "getCostsOf",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "cost", type: "uint256" },
          { internalType: "uint256", name: "timeCosted", type: "uint256" },
        ],
        internalType: "struct SupplyChain.CostState[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_prodId", type: "uint256" }],
    name: "getNumberOfCosts",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_prodId", type: "uint256" }],
    name: "getNumberOfOwners",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "getOwnersOf",
    outputs: [
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "uint256", name: "timeOwned", type: "uint256" },
        ],
        internalType: "struct SupplyChain.OwnState[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProdId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "getProdWithAddress",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "string", name: "productName", type: "string" },
          { internalType: "uint256", name: "timeCreated", type: "uint256" },
          { internalType: "string", name: "description", type: "string" },
          {
            components: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "uint256", name: "timeOwned", type: "uint256" },
            ],
            internalType: "struct SupplyChain.OwnState[]",
            name: "owners",
            type: "tuple[]",
          },
          {
            components: [
              { internalType: "uint256", name: "cost", type: "uint256" },
              { internalType: "uint256", name: "timeCosted", type: "uint256" },
            ],
            internalType: "struct SupplyChain.CostState[]",
            name: "costs",
            type: "tuple[]",
          },
        ],
        internalType: "struct SupplyChain.Product[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_prodId", type: "uint256" }],
    name: "getProduct",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "string", name: "productName", type: "string" },
          { internalType: "uint256", name: "timeCreated", type: "uint256" },
          { internalType: "string", name: "description", type: "string" },
          {
            components: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "uint256", name: "timeOwned", type: "uint256" },
            ],
            internalType: "struct SupplyChain.OwnState[]",
            name: "owners",
            type: "tuple[]",
          },
          {
            components: [
              { internalType: "uint256", name: "cost", type: "uint256" },
              { internalType: "uint256", name: "timeCosted", type: "uint256" },
            ],
            internalType: "struct SupplyChain.CostState[]",
            name: "costs",
            type: "tuple[]",
          },
        ],
        internalType: "struct SupplyChain.Product",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_prodId", type: "uint256" },
      { internalType: "uint256", name: "_state", type: "uint256" },
    ],
    name: "getSpecificCost",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "cost", type: "uint256" },
          { internalType: "uint256", name: "timeCosted", type: "uint256" },
        ],
        internalType: "struct SupplyChain.CostState",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_prodId", type: "uint256" },
      { internalType: "uint256", name: "_state", type: "uint256" },
    ],
    name: "getSpecificOwner",
    outputs: [
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "uint256", name: "timeOwned", type: "uint256" },
        ],
        internalType: "struct SupplyChain.OwnState",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "s_allProducts",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "string", name: "productName", type: "string" },
      { internalType: "uint256", name: "timeCreated", type: "uint256" },
      { internalType: "string", name: "description", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

module.exports = {
  abi,
  contractAddress,
};
