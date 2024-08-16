async function connectMetamask() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("Please install Metamask");
  }
}

async function connectContract() {
  const abi =[
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_durianType",
          "type": "uint256"
        }
      ],
      "name": "addDurian",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_durianID",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_feedback",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "_sweetness",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_taste",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_fragrance",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_creaminess",
          "type": "int256"
        }
      ],
      "name": "addFeedback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "createCustomer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_place",
          "type": "string"
        }
      ],
      "name": "createDistributor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_place",
          "type": "string"
        }
      ],
      "name": "createFarm",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_place",
          "type": "string"
        }
      ],
      "name": "createRetail",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_durianID",
          "type": "uint256"
        }
      ],
      "name": "distributor2retail",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_durianID",
          "type": "uint256"
        }
      ],
      "name": "farm2distributor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_durianType",
          "type": "uint256"
        }
      ],
      "name": "farmerAddDurian",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_firstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_lastName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_phone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_jobTitle",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_city",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_gender",
          "type": "string"
        }
      ],
      "name": "jobApplication",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_durianID",
          "type": "uint256"
        }
      ],
      "name": "retail2customer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "customerAddresses",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "customerCount",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "customerMapping",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "distributorAddresses",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "distributorCount",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "distributorMap",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "durianCount",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "durianExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
      "name": "durianFeedback",
      "outputs": [
        {
          "internalType": "string",
          "name": "feedback",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "sweetness",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "taste",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "fragrance",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "creaminess",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "farmAddresses",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "farmCount",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "farmMap",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
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
      "name": "feedbackCount",
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
      "inputs": [],
      "name": "getAllCustomerMap",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "internalType": "struct DurianSupplyChain.Customer[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllDistributorMap",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            }
          ],
          "internalType": "struct DurianSupplyChain.Distributor[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_farmID",
          "type": "uint256"
        }
      ],
      "name": "getAllDurianDetailsByFarm",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "durianType",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "harvestDate",
              "type": "uint256"
            }
          ],
          "internalType": "struct DurianSupplyChain.DurianDetail[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllFarmMap",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            }
          ],
          "internalType": "struct DurianSupplyChain.Farm[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllRetailerMap",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            }
          ],
          "internalType": "struct DurianSupplyChain.Retail[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getCustExistenceByAddress",
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
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getDistExistenceByAddress",
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
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getDurian",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "durianType",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "harvestDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "distributorArrivalDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "retailerArrivalDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "soldDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rateDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "farmID",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "disID",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "retailID",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "custID",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "feedback",
                  "type": "string"
                },
                {
                  "internalType": "int256",
                  "name": "sweetness",
                  "type": "int256"
                },
                {
                  "internalType": "int256",
                  "name": "taste",
                  "type": "int256"
                },
                {
                  "internalType": "int256",
                  "name": "fragrance",
                  "type": "int256"
                },
                {
                  "internalType": "int256",
                  "name": "creaminess",
                  "type": "int256"
                }
              ],
              "internalType": "struct DurianSupplyChain.Feedback",
              "name": "feedback",
              "type": "tuple"
            },
            {
              "internalType": "enum DurianSupplyChain.Stages",
              "name": "stage",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            }
          ],
          "internalType": "struct DurianSupplyChain.Durian",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_durianID",
          "type": "uint256"
        }
      ],
      "name": "getDurianStage",
      "outputs": [
        {
          "internalType": "enum DurianSupplyChain.Stages",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getFarmExistenceByAddress",
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
          "internalType": "uint256",
          "name": "_customerID",
          "type": "uint256"
        }
      ],
      "name": "getFeedbackCountByCustomer",
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
          "internalType": "uint256",
          "name": "_durianID",
          "type": "uint256"
        }
      ],
      "name": "getFeedbackDetail",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "feedback",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "sweetness",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "taste",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "fragrance",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "creaminess",
              "type": "int256"
            }
          ],
          "internalType": "struct DurianSupplyChain.Feedback",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getJobApplicationCount",
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
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getRetExistenceByAddress",
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
      "inputs": [],
      "name": "getTotalCust",
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
      "inputs": [],
      "name": "getTotalDist",
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
      "inputs": [],
      "name": "getTotalDurianCount",
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
      "inputs": [],
      "name": "getTotalFarm",
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
      "inputs": [],
      "name": "getTotalRet",
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
      "inputs": [],
      "name": "jobApplicationCount",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "jobApplications",
      "outputs": [
        {
          "internalType": "string",
          "name": "firstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lastName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "phone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "jobTitle",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "city",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "gender",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "retailAddresses",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retailCount",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "retailMapping",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "treeId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  const Address = "0x4f3535E2d04B694D00Af4d7646ACA6aeD1351fD2";
  try {
    window.web3 = await new Web3(window.ethereum);
    window.contract = new window.web3.eth.Contract(abi, Address);
    alert("Connected to contract");
  } catch (error) {
    console.log(error);
    alert("Failed to connect to contract");
  }
}

// Function to create a farm
async function createFarm() {
  var farmname = document.getElementById("farmName").value;
  var farmlocation = document.getElementById("farmLocation").value;

  if (farmname == "" || farmlocation == "") {
    alert("Please fill in all the information");
    return;
  } else {
    const walletAddress = await connectMetamask();
    console.log(walletAddress);
    await connectContract();

    const contractAddress = await contract.options.address;
    console.log("Contract Address = " + contractAddress);

    var farmCount = await contract.methods.getTotalFarm().call();
    console.log("FarmCount = " + farmCount);

    if (farmCount == 0) {
      await contract.methods.createFarm(farmname, farmlocation).send({
        from: walletAddress,
      });
      alert("Farm is registered successfully");
      farmCount = await contract.methods.getTotalFarm().call();
      console.log("FarmCount = " + farmCount);
    } else {
      var farm = await contract.methods
        .getFarmExistenceByAddress(walletAddress)
        .call();
      console.log("Farm ID = " + farm);

      if (farm != 0) {
        alert(
          "This account has already registered as a farm. " +
            "Please log in instead or use another account to register a new farm."
        );
      } else {
        // Check if the account has registered as another role
        var distributor = await contract.methods
          .getDistExistenceByAddress(walletAddress)
          .call();
        var retailer = await contract.methods
          .getRetExistenceByAddress(walletAddress)
          .call();
        var customer = await contract.methods
          .getCustExistenceByAddress(walletAddress)
          .call();

        if (distributor != 0 || retailer != 0 || customer != 0) {
          alert(
            "This account has already registered as a distributor, retailer, or customer. " +
              "Please use another account to register as a farm."
          );
        } else {
          await contract.methods.createFarm(farmname, farmlocation).send({
            from: walletAddress,
          });
          alert("Farm is registered successfully");
          farmCount = await contract.methods.getTotalFarm().call();
          console.log("FarmCount = " + farmCount);
        }
      }
    }
  }
}

async function verifyFarm() {
  const walletAddress = await connectMetamask();
  console.log("Login Wallet Address = " + walletAddress);
  await connectContract();

  const contractAddress = await contract.options.address;
  console.log("Login Contract Address = " + contractAddress);

  // check whether current metamask account is exists in the contract or not
  var farmCount = await contract.methods.getTotalFarm().call();
  console.log("Login FarmCount = " + farmCount);

  if (farmCount == 0) {
    alert("This account has not registered a farm yet");
  } else {
    var farm = await contract.methods
      .getFarmExistenceByAddress(walletAddress)
      .call();
    console.log("Owner Address = " + farm);
    console.log("Wallet Address = " + walletAddress);
    if (farm == 0) {
      alert("This account has not registered a farm yet");
    } else {
      alert("Login successfully");
      farmCount = await contract.methods.getTotalFarm().call();
      console.log("FarmCount = " + farmCount);
      var div = document.getElementById("addDurianDiv");
      div.style.display = "block";

      // //get number of durians added for this address
      // var durianCount = await contract.methods.getDurianCountByAddress(walletAddress).call();
      // console.log("DurianCount = " + durianCount)
      // if(durianCount > 0){
      //     var div2 = document.getElementById("growDurianDiv");
      //     div2.style.display = "block";
      // }
    }
  }
}

async function addDurian() {
  const walletAddress = await connectMetamask();
  console.log("Login Wallet Address = " + walletAddress);
  await connectContract();

  const contractAddress = await contract.options.address;
  console.log("Login Contract Address = " + contractAddress);

  var durianType = document.getElementById("durianType").value;
  var durianDescription = document.getElementById("durianDescription").value;

  if (durianType == "" || durianDescription == "") {
    alert("Please fill in all the information");
    return;
  } else {
    await contract.methods.addDurian(durianDescription, durianType).send({
      from: walletAddress,
    });
    alert("Durian is added successfully");

    // var div = document.getElementById("growDurianDiv");
    // div.style.display = "block";
  }
  // displayDurianID()
}

//check durian detail at farm
document.addEventListener("DOMContentLoaded", function () {
  var buttonCheck = document.querySelector("#buttonCheckDurian");

  if (buttonCheck) {
    buttonCheck.addEventListener("click", async function () {
      try {
        const walletAddress = await connectMetamask();
        console.log("Login Wallet Address = " + walletAddress);

        await connectContract();

        var durianId = document.querySelector("#durianDetailsCus").value;
        let checkDurian = await window.contract.methods
          .getDurian(durianId)
          .call();

        console.log(checkDurian);

        var date = new Date(checkDurian.harvestDate * 1000);
        var options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        };
        var readableDate = date.toLocaleString(undefined, options);

        var durianType;
        switch (parseInt(checkDurian.durianType)) {
          case 1:
            durianType = "Musang King";
            break;
          case 2:
            durianType = "D24";
            break;
          case 3:
            durianType = "Red Prawn";
            break;
          case 4:
            durianType = "Black Thorn";
            break;
        }
		const farmId = checkDurian.farmID;
		const farm = await window.contract.methods.farmMap(farmId).call();
        let displayDurian = `
			<h1>Details of Durian</h1>
			<p>Farm id: ${checkDurian.farmID}</p>
			<p>Durian Type: ${durianType}</p>
			<p>Durian Description: ${checkDurian.description}</p>
			<p>Durian Tree ID: ${checkDurian.id}</p>
			<p>Durian harvest date: ${readableDate}</p>
			<p>Farm Wallet Address: ${farm.addr}</p>

		  `;

        document.querySelector("#resultFarm").innerHTML = displayDurian;
      } catch (error) {
        console.log(error);
        alert(
          "An error occurred when checking a durian, durian may not exist."
        );
      }
    });
  }
});

//get durian count
// Function to get the total Durian count
// Function to get Durian Count by Farm ID
async function getDurianCount() {
  try {
    // Get the Farm ID entered by the user
    const farmId = document.getElementById("farmId").value;

    // Ensure the Farm ID is not empty
    if (farmId === "") {
      alert("Please enter a Farm ID");
      return;
    }

    // Call the smart contract function to get the Durian count for the specified Farm ID
    const count = await contract.methods.getTotalDurianCount().call();

    // Display the total Durian count for the Farm
    console.log(`Total Durians for Farm ID ${farmId}:`, count);

    // Update the HTML element to display the count
    document.getElementById("totalDurianCount").textContent = count;
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while fetching Durian count.");
  }
}

//display durian




// Function to create a distributor
async function createDistributor() {
  var distributorName = document.getElementById("distributorName").value;
  var distributorLocation = document.getElementById(
    "distributorLocation"
  ).value;

  if (distributorName == "" || distributorLocation == "") {
    alert("Please fill in all the information");
    return;
  } else {
    const walletAddress = await connectMetamask();
    console.log(walletAddress);
    await connectContract();

    const contractAddress = await contract.options.address;
    console.log("Contract Address = " + contractAddress);

    var distributorCount = await contract.methods.getTotalDist().call();
    console.log("Distributor Count = " + distributorCount);

    if (distributorCount == 0) {
      await contract.methods
        .createDistributor(distributorName, distributorLocation)
        .send({
          from: walletAddress,
        });
      alert("Distributor is registered successfully");
      distributorCount = await contract.methods.getTotalDist().call();
      console.log("Distributor Count = " + distributorCount);
    } else {
      var distributor = await contract.methods
        .getDistExistenceByAddress(walletAddress)
        .call();
      console.log("Distributor ID = " + distributor);

      if (distributor != 0) {
        alert(
          "This account has already registered as a distributor. " +
            "Please log in instead or use another account to register a new distributor."
        );
      } else {
        // Check if the account has registered as another role
        var farm = await contract.methods
          .getFarmExistenceByAddress(walletAddress)
          .call();
        var retailer = await contract.methods
          .getRetExistenceByAddress(walletAddress)
          .call();
        var customer = await contract.methods
          .getCustExistenceByAddress(walletAddress)
          .call();

        if (farm != 0 || retailer != 0 || customer != 0) {
          alert(
            "This account has already registered as a farm, retailer, or customer. " +
              "Please use another account to register as a distributor."
          );
        } else {
          await contract.methods
            .createDistributor(distributorName, distributorLocation)
            .send({
              from: walletAddress,
            });
          alert("Distributor is registered successfully");
          distributorCount = await contract.methods.getTotalDist().call();
          console.log("Distributor Count = " + distributorCount);
        }
      }
    }
  }
}

async function verifyDistributor() {
  const walletAddress = await connectMetamask();
  console.log("Login Wallet Address = " + walletAddress);
  await connectContract();

  const contractAddress = await contract.options.address;
  console.log("Login Contract Address = " + contractAddress);

  // check whether current metamask account is exists in the contract or not
  var distributorCount = await contract.methods.getTotalDist().call();
  console.log("Login distributorCount = " + distributorCount);

  if (distributorCount == 0) {
    alert("This account has not registered a distributor yet");
  } else {
    var distributor = await contract.methods
      .getDistExistenceByAddress(walletAddress)
      .call();
    console.log("Owner Address = " + distributor);
    console.log("Wallet Address = " + walletAddress);
    if (distributor == 0) {
      alert("This account has not registered a distributor yet");
    } else {
      alert("Login successfully");
      distributorCount = await contract.methods.getTotalDist().call();
      console.log("distributorCount = " + distributorCount);
      var div = document.getElementById("receiveDurianDiv");
      div.style.display = "block";
    }
  }
}

async function receiveDurianfromFarm() {
  try {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();

    const contractAddress = await contract.options.address;
    console.log("Login Contract Address = " + contractAddress);

    // Get the Durian ID input
    var durianIDInput = document.getElementById("durianId");
    var durianID = durianIDInput.value;

    // Check if the user is a distributor before allowing the operation
    var isDistributor = await contract.methods
      .getDistExistenceByAddress(walletAddress)
      .call();
    if (isDistributor == 0) {
      alert("This operation can only be performed by a distributor.");
      return;
    }

    // Validate that durianID is a positive integer
    if (!/^[1-9]\d*$/.test(durianID)) {
      alert("Please enter a valid Durian ID (a positive integer).");
      return;
    }

    await contract.methods.farm2distributor(durianID).send({
      from: walletAddress,
    });
    alert("Durian is received by distributor successfully");
    var getDurianID = await contract.methods.getDurian(durianID).call();
    console.log("Durian ID = " + getDurianID);
  } catch (error) {
    console.error(error);
    alert("An error occurred while processing the operation.");
  }
}

// got date
/* async function receiveDurianfromFarm() {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();

    const durianId = document.querySelector("#durianId").value;
    let transaction;

    try {
        transaction = await window.contract.methods.farm2distributor(durianId).send({
            from: walletAddress,
        });
        console.log("Transaction hash: " + transaction.transactionHash);
    } catch (error) {
        console.log(error);
        alert("An error occurred when receiving durian from the farm.");
        return;
    }

    // Update the HTML element with the distributor arrival date
    const distributorArrivalDate = new Date(
        (await window.contract.methods
            .getDurian(durianId)
            .call()).distributorArrivalDate * 1000
    );
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
    };
    const readableDistributorArrivalDate = distributorArrivalDate.toLocaleString(
        undefined,
        options
    );

    const resultDurianStatus = document.querySelector("#resultDurianStatus");
    resultDurianStatus.innerHTML =
        "Status: Received by distributor on " +
        readableDistributorArrivalDate;
}*/

//track durian at distributror
/*document.addEventListener("DOMContentLoaded", async function () {
	const buttonTrack = document.querySelector("#buttonTrackDurian1");
  
	if (buttonTrack) {
	  buttonTrack.addEventListener("click", async function () {
		const walletAddress = await connectMetamask();
		console.log("Login Wallet Address = " + walletAddress);
		await connectContract();
		const durianId = document.querySelector("#resultDurianWhereCus").value;
  
		try {
		  const durianInfo = await contract.methods.getDurian(durianId).call();
		  const trackDurianInt = await contract.methods.getDurianStage(durianId).call();
		  console.log("Status of durian: " + trackDurianInt);
		  const result = getStatusText(trackDurianInt, durianInfo);
		  console.log(result);
		  document.querySelector("#durianStatusText").textContent = result;
		} catch (error) {
		  console.log(error);
		  alert(
			"An error occurred when tracking a durian because this durian does not exist!!"
		  );
		}
	  });
	}
  
	function getStatusText(trackDurianInt, durianInfo) {
	  switch (parseInt(trackDurianInt)) {
		case 0:
		  return "The durian is still on the farm";
		case 1:
		  const distributorArrivalDate = new Date(durianInfo.distributorArrivalDate * 1000);
		  const options = {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour12: true,
			hour: "numeric",
			minute: "numeric",
		  };
		  const readableDistributorArrivalDate = distributorArrivalDate.toLocaleString(undefined, options);
		  return "The durian has reached the distributor on " + readableDistributorArrivalDate;
		case 2:
		  return "The durian has reached the retailer";
		case 3:
		  return "The durian has reached the customer";
		default:
		  return "Status is unknown";
	  }
	}
  });*/

//distributor check
var buttonCheck = document.querySelector("#buttonCheckDurian1");
if (buttonCheck) {
  buttonCheck.addEventListener("click", async function checkDurianDetails() {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();
    var durianId = document.querySelector("#durianDetailsCus").value;
    let checkDurian;

    try {
      checkDurian = await window.contract.methods.getDurian(durianId).call();
      console.log(checkDurian);
    } catch (error) {
      console.log(error);
      alert("An error occurred when checking a durian, durian does not exist.");
      return; // Exit the function on error
    }

    var date = new Date(checkDurian.harvestDate * 1000);
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    var readableDate = date.toLocaleString(undefined, options);
    var durianType;

    switch (parseInt(checkDurian.durianType)) {
      case 1:
        durianType = "Musang King";
        break;
      case 2:
        durianType = "D24";
        break;
      case 3:
        durianType = "Red Prawn";
        break;
      case 4:
        durianType = "Black Thorn";
        break;
    }
    // Fetch farm details from the blockchain based on the durian's farm ID
    const farmId = checkDurian.farmID;
    const farm = await window.contract.methods.farmMap(farmId).call();

    let displayDurian = `
      <h1>Details of Durian</h1>
      <p>Farm id: ${checkDurian.farmID} </p>
	  <p>Farm Name: ${farm.name}</p>
  	  <p>Farm Location: ${farm.location}</p>
      <p>Farm Wallet Address: ${farm.addr}</p>

	  <p>Durian ID: ${durianId}</p> <!-- Display durianId -->
      <p>Durian Type: ${durianType} </p>
     
	  <p>Durian Description: ${checkDurian.description} </p>
	  <p>Durian Tree ID: ${checkDurian.id}</p>
      <p>Durian harvest date: ${readableDate}</p>
    `;

    // Check if distributorArrivalDate is available and add it to the display
    if (checkDurian.stage >= 1 && checkDurian.distributorArrivalDate > 0) {
      var distributorArrivalDate = new Date(
        checkDurian.distributorArrivalDate * 1000
      );
      var distributorArrivalDateReadable =
        distributorArrivalDate.toLocaleString(undefined, options);
      const distributorId = checkDurian.disID;
      const distributor = await window.contract.methods
        .distributorMap(distributorId)
        .call();

      displayDurian += `
	  <p>Distributor ID: ${distributor.id}</p>
		<p>Distributor Name: ${distributor.name}</p>
		<p>Distributor Location: ${distributor.location}</p>
			<p>Durian reached distributor on: ${distributorArrivalDateReadable}</p>
			<p>Distributor Wallet Address: ${distributor.addr}</p>

      `;
    }

    console.log(document.querySelector("#resultFarm"));
    document.querySelector("#resultFarm").innerHTML = displayDurian;
  });
}

// Function to create a retailer
async function createRetail() {
  var retailerName = document.getElementById("retailName").value;
  var retailerLocation = document.getElementById("retailLocation").value;

  if (retailerName == "" || retailerLocation == "") {
    alert("Please fill in all the information");
    return;
  } else {
    const walletAddress = await connectMetamask();
    console.log(walletAddress);
    await connectContract();

    const contractAddress = await contract.options.address;
    console.log("Contract Address = " + contractAddress);

    var retailCount = await contract.methods.getTotalRet().call();
    console.log("Retailer Count = " + retailCount);

    if (retailCount == 0) {
      await contract.methods.createRetail(retailerName, retailerLocation).send({
        from: walletAddress,
      });
      alert("Retailer is registered successfully");
      retailCount = await contract.methods.getTotalRet().call();
      console.log("Retailer Count = " + retailCount);
    } else {
      var retailer = await contract.methods
        .getRetExistenceByAddress(walletAddress)
        .call();
      console.log("Retailer ID = " + retailer);

      if (retailer != 0) {
        alert(
          "This account has already registered as a retailer. " +
            "Please log in instead or use another account to register a new retailer."
        );
      } else {
        // Check if the account has registered as another role
        var farm = await contract.methods
          .getFarmExistenceByAddress(walletAddress)
          .call();
        var distributor = await contract.methods
          .getDistExistenceByAddress(walletAddress)
          .call();
        var customer = await contract.methods
          .getCustExistenceByAddress(walletAddress)
          .call();

        if (farm != 0 || distributor != 0 || customer != 0) {
          alert(
            "This account has already registered as a farm, distributor, or customer. " +
              "Please use another account to register as a retailer."
          );
        } else {
          await contract.methods
            .createRetail(retailerName, retailerLocation)
            .send({
              from: walletAddress,
            });
          alert("Retailer is registered successfully");
          retailCount = await contract.methods.getTotalRet().call();
          console.log("Retailer Count = " + retailCount);
        }
      }
    }
  }
}

async function verifyRetail() {
  const walletAddress = await connectMetamask();
  console.log("Login Wallet Address = " + walletAddress);
  await connectContract();

  const contractAddress = await contract.options.address;
  console.log("Login Contract Address = " + contractAddress);

  // Check whether the current MetaMask account is registered as a retailer
  var retailCount = await contract.methods.getTotalRet().call();
  console.log("Login retailCount = " + retailCount);

  if (retailCount == 0) {
    alert("This account has not registered as a retailer yet");
    hideReceiveDurianSection(); // Hide the receiveDurianDiv section
  } else {
    var retail = await contract.methods
      .getRetExistenceByAddress(walletAddress)
      .call();
    console.log("Owner Address = " + retail);
    console.log("Wallet Address = " + walletAddress);
    if (retail == 0) {
      alert("This account has not registered as a retailer yet");
      hideReceiveDurianSection(); // Hide the receiveDurianDiv section
    } else {
      alert("Login successfully");
      retailCount = await contract.methods.getTotalRet().call();
      console.log("retailCount = " + retailCount);
      showReceiveDurianSection(); // Show the receiveDurianDiv section
    }
  }
}

function showReceiveDurianSection() {
  var section = document.getElementById("receiveDurianDiv");
  if (section) {
    section.style.display = "block";
  }
}

async function receiveDuriantoRetail() {
  const walletAddress = await connectMetamask();
  console.log("Login Wallet Address = " + walletAddress);
  await connectContract();

  const contractAddress = await contract.options.address;
  console.log("Login Contract Address = " + contractAddress);

  var durianID = document.getElementById("durianID").value;

  // Check if the logged-in account is a retailer
  var isRetailer = await contract.methods
    .getRetExistenceByAddress(walletAddress)
    .call();
  if (isRetailer == 0) {
    alert("You are not registered as a retailer. Cannot receive durian.");
    return; // Exit the function
  }

  await contract.methods.distributor2retail(durianID).send({
    from: walletAddress,
  });
  alert("Durian is received by retail successfully");
  var getDurianID = await contract.methods.getDurian(durianID).call();
  console.log("Durian ID = " + getDurianID);
}

//track both farm ,distributor and retailer
/*document.addEventListener("DOMContentLoaded", async function () {
    const buttonTrackDistributor = document.querySelector("#buttonTrackDurianDistributor");
    const buttonTrackRetailer = document.querySelector("#buttonTrackDurianRetailer");
  
    if (buttonTrackDistributor) {
        buttonTrackDistributor.addEventListener("click", async function () {
            await trackDurian(1); // 1 represents the distributor stage
        });
    }

    if (buttonTrackRetailer) {
        buttonTrackRetailer.addEventListener("click", async function () {
            await trackDurian(2); // 2 represents the retailer stage
        });
    }

    async function trackDurian(stage) {
        const walletAddress = await connectMetamask();
        console.log("Login Wallet Address = " + walletAddress);
        await connectContract();
        const durianId = document.querySelector("#resultDurianWhereCus").value;

        try {
            const durianInfo = await contract.methods.getDurian(durianId).call();
            const trackDurianInt = await contract.methods.getDurianStage(durianId).call();
            console.log("Status of durian: " + trackDurianInt);
            const result = getStatusText(trackDurianInt, durianInfo, stage);
            console.log(result);
            document.querySelector("#durianStatusText").textContent = result;
        } catch (error) {
            console.log(error);
            alert("An error occurred when tracking a durian because this durian does not exist!!");
        }
    }

    function getStatusText(trackDurianInt, durianInfo, stage) {
        switch (parseInt(trackDurianInt)) {
            case 0:
                return "The durian is still on the farm";
            case 1:
               
                    const distributorArrivalDate = new Date(durianInfo.distributorArrivalDate * 1000);
                    return "The durian has reached the distributor on " + formatDate(distributorArrivalDate);
               
            case 2:
				const retailerArrivalDate = new Date(durianInfo.retailerArrivalDate * 1000);
				return "The durian has reached the retailer on " + formatDate(retailerArrivalDate);
                
            case 3:
                return "The durian has reached the customer";
            default:
                return "Status is unknown";
        }
    }

    function formatDate(date) {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour12: true,
            hour: "numeric",
            minute: "numeric",
        };
        return date.toLocaleString(undefined, options);
    }
});*/

document.addEventListener("DOMContentLoaded", async function () {
  const buttonTrackDistributor = document.querySelector(
    "#buttonTrackDurianDistributor"
  );
  const buttonTrackRetailer = document.querySelector(
    "#buttonTrackDurianRetailer"
  );
  const buttonTrackFarm = document.querySelector("#buttonTrackFarm"); // Add this line

  if (buttonTrackDistributor) {
    buttonTrackDistributor.addEventListener("click", async function () {
      await trackDurian(1); // 1 represents the distributor stage
    });
  }

  if (buttonTrackRetailer) {
    buttonTrackRetailer.addEventListener("click", async function () {
      await trackDurian(2); // 2 represents the retailer stage
    });
  }

  if (buttonTrackFarm) {
    // Add this block
    buttonTrackFarm.addEventListener("click", async function () {
      await trackDurian(0); // 0 represents the farm stage
    });
  }

  async function trackDurian(stage) {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();
    const durianId = document.querySelector("#resultDurianWhereCus").value;

    try {
      const durianInfo = await contract.methods.getDurian(durianId).call();
      const trackDurianInt = await contract.methods
        .getDurianStage(durianId)
        .call();
      console.log("Status of durian: " + trackDurianInt);
      const result = getStatusText(trackDurianInt, durianInfo, stage);
      console.log(result);
      document.querySelector("#durianStatusText").textContent = result;
    } catch (error) {
      console.log(error);
      alert(
        "An error occurred when tracking a durian because this durian does not exist!!"
      );
    }
  }

  function getStatusText(trackDurianInt, durianInfo, stage) {
    switch (parseInt(trackDurianInt)) {
      case 0:
        const harvestDate = new Date(durianInfo.harvestDate * 1000); // Add this line
        return "The durian was harvested on " + formatDate(harvestDate); // Add this line
      case 1:
        const distributorArrivalDate = new Date(
          durianInfo.distributorArrivalDate * 1000
        );
        return (
          "The durian has reached the distributor on " +
          formatDate(distributorArrivalDate)
        );
      case 2:
        const retailerArrivalDate = new Date(
          durianInfo.retailerArrivalDate * 1000
        );
        return (
          "The durian has reached the retailer on " +
          formatDate(retailerArrivalDate)
        );
      case 3:
        return "The durian has reached the customer";
      default:
        return "Status is unknown";
    }
  }

  function formatDate(date) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleString(undefined, options);
  }
});

//check retailer
var buttonCheck = document.querySelector("#buttonCheckDurian2");
if (buttonCheck) {
  buttonCheck.addEventListener("click", async function checkDurianDetails() {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();
    var durianId = document.querySelector("#durianDetailsCus").value;
    let checkDurian;

    try {
      checkDurian = await window.contract.methods.getDurian(durianId).call();
      console.log(checkDurian);
    } catch (error) {
      console.log(error);
      alert("An error occurred when checking a durian, durian does not exist.");
      return; // Exit the function on error
    }

    var date = new Date(checkDurian.harvestDate * 1000);
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    var readableDate = date.toLocaleString(undefined, options);
    var durianType;

    switch (parseInt(checkDurian.durianType)) {
      case 1:
        durianType = "Musang King";
        break;
      case 2:
        durianType = "D24";
        break;
      case 3:
        durianType = "Red Prawn";
        break;
      case 4:
        durianType = "Black Thorn";
        break;
    }
    // Fetch farm details from the blockchain based on the durian's farm ID
    const farmId = checkDurian.farmID;
    const farm = await window.contract.methods.farmMap(farmId).call();
    //const treeId = checkDurian.treeId; // Fetch the treeId

    let displayDurian = `
      <h1>Details of Durian</h1>
      <p>Farm id: ${checkDurian.farmID} </p>
	  <p>Farm Name: ${farm.name}</p>
  <p>Farm Location: ${farm.location}</p>
  <p>Farm Wallet Address: ${farm.addr}</p>
  <p>Durian ID: ${durianId}</p> <!-- Display durianId -->
      <p>Durian Type: ${durianType} </p>
      <p>Durian Description: ${checkDurian.description} </p>
	  <p>Durian Tree ID: ${checkDurian.id}</p>
      <p>Durian harvest date: ${readableDate}</p>
    `;

    // Check if distributorArrivalDate is available and add it to the display
    if (checkDurian.stage >= 1 && checkDurian.distributorArrivalDate > 0) {
      var distributorArrivalDate = new Date(
        checkDurian.distributorArrivalDate * 1000
      );
      var distributorArrivalDateReadable =
        distributorArrivalDate.toLocaleString(undefined, options);
      // Fetch distributor details from the blockchain based on the durian's distributor ID
      const distributorId = checkDurian.disID;
      const distributor = await window.contract.methods
        .distributorMap(distributorId)
        .call();

      displayDurian += `
  <p>Distributor ID: ${distributor.id}</p>
    <p>Distributor Name: ${distributor.name}</p>
    <p>Distributor Location: ${distributor.location}</p>
	<p>Distributor Wallet Address: ${distributor.addr}</p>
        <p>Durian reached distributor on: ${distributorArrivalDateReadable}</p>
      `;
    }

    // Check if retailerArrivalDate is available and add it to the display
    if (checkDurian.stage >= 2 && checkDurian.retailerArrivalDate > 0) {
      var retailerArrivalDate = new Date(
        checkDurian.retailerArrivalDate * 1000
      );
      var retailerArrivalDateReadable = retailerArrivalDate.toLocaleString(
        undefined,
        options
      );
      // Fetch retailer details from the blockchain based on the durian's retailer ID
      const retailerId = checkDurian.retailID;
      const retailer = await window.contract.methods
        .retailMapping(retailerId)
        .call(); //this 2 only can show the farm id and name

      displayDurian += `
	  <p>Retailer ID: ${retailer.id}</p>
    <p>Retailer Name: ${retailer.name}</p>
    <p>Retailer Location: ${retailer.location}</p>
	<p>Retailer Wallet Address: ${retailer.addr}</p>
        <p>Durian reached retailer on: ${retailerArrivalDateReadable}</p>
      `;
    }

    console.log(document.querySelector("#resultFarm"));
    document.querySelector("#resultFarm").innerHTML = displayDurian;
  });
}

async function passDurianToCustomer() {
  const walletAddress = await connectMetamask();
  console.log("Login Wallet Address = " + walletAddress);
  await connectContract();

  const contractAddress = await contract.options.address;
  console.log("Login Contract Address = " + contractAddress);

  var durianID = document.getElementById("durianID").value;

  // Check if the user is a customer before allowing the operation
  var isCustomer = await contract.methods
    .getCustExistenceByAddress(walletAddress)
    .call();
  if (isCustomer == 0) {
    alert("Only customers are allowed to perform this operation.");
    return;
  }

  await contract.methods.retail2customer(durianID).send({
    from: walletAddress,
  });

   // Record the sold date in the durian object
   checkDurian.soldDate = Math.floor(Date.now() / 1000);

  alert("Durian is passed to the customer successfully");
  var getDurianID = await contract.methods.getDurian(durianID).call();
  console.log("Durian ID = " + getDurianID);

  // Call the showFeedbackInputFields function to display the feedback input fields
  showFeedbackInputFields();
}

//Customer

async function createCustomer() {
  var customerName = document.getElementById("customerName").value;

  if (customerName == "") {
    alert("Please fill in all the information");
    return;
  } else {
    const walletAddress = await connectMetamask();
    console.log(walletAddress);
    await connectContract();

    const contractAddress = await contract.options.address;
    console.log("Contract Address = " + contractAddress);

    var customerCount = await contract.methods.getTotalCust().call();
    console.log("Customer Count = " + customerCount);

    if (customerCount == 0) {
      await contract.methods.createCustomer(customerName).send({
        from: walletAddress,
      });
      alert("Customer is registered successfully");
      customerCount = await contract.methods.getTotalCust().call();
      console.log("Customer Count = " + customerCount);
    } else {
      var customer = await contract.methods
        .getCustExistenceByAddress(walletAddress)
        .call();
      console.log("Customer ID = " + customer);

      if (customer != 0) {
        alert(
          "This account has already registered as a customer. " +
            "Please log in instead or use another account to register a new customer."
        );
      } else {
        // Check if the account has registered as another role
        var farm = await contract.methods
          .getFarmExistenceByAddress(walletAddress)
          .call();
        var distributor = await contract.methods
          .getDistExistenceByAddress(walletAddress)
          .call();
        var retailer = await contract.methods
          .getRetExistenceByAddress(walletAddress)
          .call();

        if (farm != 0 || distributor != 0 || retailer != 0) {
          alert(
            "This account has already registered as a farm, distributor, or retailer. " +
              "Please use another account to register as a customer."
          );
        } else {
          await contract.methods.createCustomer(customerName).send({
            from: walletAddress,
          });
          alert("Customer is registered successfully");
          customerCount = await contract.methods.getTotalCust().call();
          console.log("Customer Count = " + customerCount);
        }
      }
    }
  }
}

async function verifyCustomer() {
  const walletAddress = await connectMetamask();
  console.log("Login Wallet Address = " + walletAddress);
  await connectContract();

  const contractAddress = await contract.options.address;
  console.log("Login Contract Address = " + contractAddress);

  // Check whether the current MetaMask account is registered as a customer
  let customerCount;
  try {
    customerCount = await contract.methods.getTotalCust().call();
    console.log("Login CustomerCount = " + customerCount);
  } catch (error) {
    console.log(error);
    alert("An error occurred when verifying your account");
  }

  if (customerCount == 0) {
    alert("This account has not registered as a customer yet");
  } else {
    let customerExist;
    try {
      customerExist = await contract.methods
        .getCustExistenceByAddress(walletAddress)
        .call();
      console.log("CustomerExist? = " + customerExist);
      console.log("Wallet Address =" + walletAddress);
    } catch (error) {
      console.log(error);
      alert(
        "An error occurred when checking whether the customer exists or not"
      );
    }

    if (customerExist == 0) {
      alert("This account has not yet registered as a customer");
    } else {
      alert("Customer is logged in successfully");
      customerCount = await contract.methods.getTotalCust().call();
      console.log("After CustomerCount = " + customerCount);

      // Show the customerActions div
      const customerActionsDiv = document.getElementById("customerActions");
      if (customerActionsDiv) {
        customerActionsDiv.style.display = "block";
      }
    }
  }
}
//track
document.addEventListener("DOMContentLoaded", async function () {
  const buttonTrack = document.querySelector("#buttonTrackDurian");

  if (buttonTrack) {
    buttonTrack.addEventListener("click", async function () {
      const walletAddress = await connectMetamask();
      console.log("Login Wallet Address = " + walletAddress);
      await connectContract();
      const durianId = document.querySelector("#resultDurianWhereCus").value;

      try {
        const trackDurian = await contract.methods
          .getDurianStage(durianId)
          .call();
        console.log("Status of durian: " + trackDurian);
        const result = getStatusText(trackDurian);
        console.log(result);
        document.querySelector("#durianStatusText").textContent = result;
      } catch (error) {
        console.log(error);
        alert(
          "An error occurred when tracking a durian because this durian does not exist!!"
        );
      }
    });
  }

  function getStatusText(trackDurianInt) {
    switch (parseInt(trackDurianInt)) {
      case 0:
        return "The durian is still on the farm";
      case 1:
        return "The durian has reached the distributor";
      case 2:
        return "The durian has reached the retailer";
      case 3:
        return "The durian has reached the customer";
      default:
        return "Status is unknown";
    }
  }
});
//check
/*var buttonCheck = document.querySelector("#buttonCheckDurian");
if (buttonCheck) {
  buttonCheck.addEventListener("click", async function checkDurianDetails() {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();
    var durianId = document.querySelector("#durianDetailsCus").value;
    let checkDurian;
    try {
      checkDurian = await window.contract.methods.getDurian(durianId).call();
      console.log(checkDurian);
    } catch (error) {
      console.log(error);
      alert("An error occur when checking a durian, durian is not exist.");
    }
    console.log("CW" + checkDurian.stage);
    var date = new Date(checkDurian.harvestDate * 1000);
    // var readableDate = date.toLocaleDateString();
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    var readableDate = date.toLocaleString(undefined, options);
    var durianType;

    switch (parseInt(checkDurian.durianType)) {
      case 1:
        durianType = "Musang King";
        break;
      case 2:
        durianType = "D24";
        break;
      case 3:
        durianType = "Red Prawn";
        break;
      case 4:
        durianType = "Black Thorn";
        break;
    }

    let displayDurian = "";
    // if(parseInt(checkDurian.stage) >= 1){
    displayDurian += `
              <h1>Details of Durian</h1>
              <p>Farm id: ${checkDurian.farmID} </p>
			 
              <p>Durian Type: ${durianType} </p>
              <p>Durian Tree: ${checkDurian.description} </p>
              <p>Durian harvest date: ${readableDate}</p>
  
          `;
    // }
    console.log(document.querySelector("#resultFarm"));
    document.querySelector("#resultFarm").innerHTML = displayDurian;
  });
}*/

/*async function addFeedback() {
  try {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();

    const contractAddress = await contract.options.address;
    console.log("Login Contract Address = " + contractAddress);

    // Ensure Metamask is connected and the customer is logged in

    const durianIDInput = document.querySelector("#durianID");
    const sweetness = parseInt(document.querySelector("#sweetness").value);
    const taste = parseInt(document.querySelector("#taste").value);
    const fragrance = parseInt(document.querySelector("#fragrance").value);
    const creaminess = parseInt(document.querySelector("#creaminess").value);
    const feedbackDescription = document.querySelector(
      "#feedbackDescription"
    ).value;

    // Ensure Durian ID is not empty
    const durianIDValue = durianIDInput.value.trim();
    if (durianIDValue === "") {
      alert("Please enter a Durian ID.");
      return;
    }

    // Validate that durianID is a positive integer
    const durianID = parseInt(durianIDValue);
    if (isNaN(durianID) || durianID <= 0) {
      alert("Please enter a valid Durian ID.");
      return;
    }

    // Check if the user is a customer before allowing feedback submission
    const isCustomer = await contract.methods
      .getCustExistenceByAddress(walletAddress)
      .call();
    if (isCustomer == 0) {
      alert("Only customer accounts can add feedback.");
      return;
    }

    // Check if all feedback ratings are provided and valid
    if (
      isNaN(sweetness) ||
      isNaN(taste) ||
      isNaN(fragrance) ||
      isNaN(creaminess) ||
      sweetness < 1 ||
      sweetness > 5 ||
      taste < 1 ||
      taste > 5 ||
      fragrance < 1 ||
      fragrance > 5 ||
      creaminess < 1 ||
      creaminess > 5
    ) {
      alert(
        "Please provide valid feedback ratings (1 to 5) for all categories."
      );
      return;
    }

    // Check if feedback description is provided
    if (feedbackDescription.trim() === "") {
      alert("Please provide a feedback description.");
      return;
    }

    // Call the addFeedback function in the contract
    const response = await contract.methods
      .addFeedbackWithRatings(
        durianID,
        sweetness,
        taste,
        fragrance,
        creaminess,
        feedbackDescription
      )
      .send({ from: walletAddress });

    alert("Feedback added successfully");
  } catch (error) {
    console.error(error);
    alert("An error occurred while adding feedback");
  }
}*/

// Function to show the feedback input fields when the customer wants to add feedback
/*function showFeedbackInputFields() {
  document.getElementById("addDurianDiv").style.display = "block";
}*/

if (window.location.href.endsWith("ganweisong.job_appliform.html")) {
  document.addEventListener("DOMContentLoaded", function () {
    const buttonSubmit = document.querySelector("#submitButton");

    if (buttonSubmit) {
      buttonSubmit.addEventListener("click", handleSubmitForm);
    }

    async function handleSubmitForm(e) {
      e.preventDefault();

      // Check if MetaMask is already connected
      let walletAddress = null;
      try {
        walletAddress = await connectMetamask();
        console.log("Login Wallet Address = " + walletAddress);
      } catch (error) {
        console.error("MetaMask not connected:", error);
        return;
      }

      // Ensure that MetaMask is connected before proceeding
      if (!walletAddress) {
        alert("Please connect MetaMask before submitting the form.");
        return;
      }

      const firstName = document.querySelector("#FirstName").value;
      const lastName = document.querySelector("#LastName").value;
      const email = document.querySelector("#Email").value;
      const phone = document.querySelector("#phoneBox").value;
      const jobTitle = document.querySelector("#desc1").value;
      const city = document.querySelector("#cityBox").value;
      const gender = document.querySelector(
        'input[name="applicantGender"]:checked'
      ).value;

      try {
        // Connect to the contract (you can also move this outside the try-catch block if it only needs to be connected once)
        await connectContract();

        // Call the jobApplication function on your smart contract
        await contract.methods
          .jobApplication(
            firstName,
            lastName,
            email,
            phone,
            jobTitle,
            city,
            gender
          )
          .send({ from: walletAddress });

        alert("Job application submitted successfully!");
        // Clear the form
        clearForm();

        // Redirect to ganweisong.appreciate.html
        window.location.href = "ganweisong.appreciate.html";
      } catch (error) {
        console.error(error);
        alert("Error submitting job application.");
      }
    }

    function clearForm() {
      // Clear the form fields
      document.querySelector("#FirstName").value = "";
      document.querySelector("#LastName").value = "";
      document.querySelector("#Email").value = "";
      document.querySelector("#phoneBox").value = "";
      document.querySelector("#desc1").value = "";
      document.querySelector("#cityBox").value = "";
      document.querySelector(
        'input[name="applicantGender"]:checked'
      ).checked = false;
    }
  });
}


  

// Find the "Check" button and add an event listener
/*var buttonCheck = document.querySelector("#buttonCheckDurian3");
if (buttonCheck) {
  buttonCheck.addEventListener("click", async function checkDurianDetails() {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();
    var durianId = document.querySelector("#durianDetailsCus").value;
    let checkDurian;

    try {
      checkDurian = await window.contract.methods.getDurian(durianId).call();
      console.log(checkDurian);
    } catch (error) {
      console.log(error);
      alert("An error occurred when checking a durian, durian does not exist.");
      return; // Exit the function on error
    }

    var date = new Date(checkDurian.harvestDate * 1000);
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    var readableDate = date.toLocaleString(undefined, options);
    var durianType;

    switch (parseInt(checkDurian.durianType)) {
      case 1:
        durianType = "Musang King";
        break;
      case 2:
        durianType = "D24";
        break;
      case 3:
        durianType = "Red Prawn";
        break;
      case 4:
        durianType = "Black Thorn";
        break;
    }

    // Fetch farm details from the blockchain based on the durian's farm ID
    const farmId = checkDurian.farmID;
    const farm = await window.contract.methods.farmMap(farmId).call();

    let displayDurian = `
      <h1>Details of Durian</h1>
      <p>Farm id: ${checkDurian.farmID} </p>
      <p>Farm Name: ${farm.name}</p>
      <p>Farm Location: ${farm.location}</p>
      <p>Farm Wallet Address: ${farm.addr}</p>
      <p>Durian ID: ${durianId}</p> <!-- Display durianId -->
      <p>Durian Type: ${durianType} </p>
      <p>Durian Description: ${checkDurian.description} </p>
      <p>Durian Tree ID: ${checkDurian.id}</p>
      <p>Durian harvest date: ${readableDate}</p>
    `;

    // Check if distributorArrivalDate is available and add it to the display
    if (checkDurian.stage >= 1 && checkDurian.distributorArrivalDate > 0) {
      var distributorArrivalDate = new Date(
        checkDurian.distributorArrivalDate * 1000
      );
      var distributorArrivalDateReadable =
        distributorArrivalDate.toLocaleString(undefined, options);
      // Fetch distributor details from the blockchain based on the durian's distributor ID
      const distributorId = checkDurian.disID;
      const distributor = await window.contract.methods
        .distributorMap(distributorId)
        .call();

      displayDurian += `
        <p>Distributor ID: ${distributor.id}</p>
        <p>Distributor Name: ${distributor.name}</p>
        <p>Distributor Location: ${distributor.location}</p>
        <p>Distributor Wallet Address: ${distributor.addr}</p>
        <p>Durian reached distributor on: ${distributorArrivalDateReadable}</p>
      `;
    }

    // Check if retailerArrivalDate is available and add it to the display
    if (checkDurian.stage >= 2 && checkDurian.retailerArrivalDate > 0) {
      var retailerArrivalDate = new Date(
        checkDurian.retailerArrivalDate * 1000
      );
      var retailerArrivalDateReadable = retailerArrivalDate.toLocaleString(
        undefined,
        options
      );
      // Fetch retailer details from the blockchain based on the durian's retailer ID
      const retailerId = checkDurian.retailID;
      const retailer = await window.contract.methods
        .retailMapping(retailerId)
        .call();

      displayDurian += `
        <p>Retailer ID: ${retailer.id}</p>
        <p>Retailer Name: ${retailer.name}</p>
        <p>Retailer Location: ${retailer.location}</p>
        <p>Retailer Wallet Address: ${retailer.addr}</p>
        <p>Durian reached retailer on: ${retailerArrivalDateReadable}</p>
      `;
    }
 // Display sold date if available
 if (checkDurian.stage >= 3 && checkDurian.soldDate > 0) {
	var soldDate = new Date(checkDurian.soldDate * 1000);
	var soldDateReadable = soldDate.toLocaleString(undefined, options);
	displayDurian += `<p>Durian sold on: ${soldDateReadable}</p>`;
  }

  // Display rate date if available
  if (checkDurian.stage >= 4 && checkDurian.rateDate > 0) {
	var rateDate = new Date(checkDurian.rateDate * 1000);
	var rateDateReadable = rateDate.toLocaleString(undefined, options);
	displayDurian += `<p>Durian rated on: ${rateDateReadable}</p>`;
  }
    // Display durian details in the HTML
    document.querySelector("#resultFarm").innerHTML = displayDurian;

     // Fetch feedback for the durian
	 const feedbackCount = await window.contract.methods.getFeedbackCount(durianId).call();

	 if (feedbackCount > 0) {
	   // Create an array to store the feedback
	   const feedbackArray = [];
 
	   // Loop through each feedback and fetch it from the blockchain
	   for (let i = 1; i <= feedbackCount; i++) {
		 const feedback = await window.contract.methods.getFeedback(durianId, i).call();
		 feedbackArray.push(feedback);
	   }
 
	   // Display the feedback in the HTML
	   let feedbackHtml = "<h2>Feedback</h2>";
	   feedbackArray.forEach((feedback, index) => {
		 feedbackHtml += `
		   <p>Feedback ${index + 1}:</p>
		   <p>Sweetness: ${feedback.sweetness}</p>
		   <p>Taste: ${feedback.taste}</p>
		   <p>Fragrance: ${feedback.fragrance}</p>
		   <p>Creaminess: ${feedback.creaminess}</p>
		   <p>Description: ${feedback.feedback}</p>
		   <hr>
		 `;
	   });
 
	   // Append the feedback to the existing display
	   document.querySelector("#resultFarm").innerHTML = displayDurian + feedbackHtml;
	 } else {
	   document.querySelector("#resultFarm").innerHTML = displayDurian + "<p>No feedback available for this durian.</p>";
	 }
   });
 }*/


 /*async function addFeedback() {
    try {
        const walletAddress = await connectMetamask();
        console.log("Login Wallet Address = " + walletAddress);
        await connectContract();

        const contractAddress = await contract.options.address;
        console.log("Login Contract Address = " + contractAddress);

        // Ensure Metamask is connected and the customer is logged in

        const durianIDInput = document.querySelector("#durianID");
        const sweetness = parseInt(document.querySelector("#sweetness").value);
        const taste = parseInt(document.querySelector("#taste").value);
        const fragrance = parseInt(document.querySelector("#fragrance").value);
        const creaminess = parseInt(document.querySelector("#creaminess").value);
        const feedbackDescription = document.querySelector(
            "#feedbackDescription"
        ).value;

        // Ensure Durian ID is not empty
        const durianIDValue = durianIDInput.value.trim();
        if (durianIDValue === "") {
            alert("Please enter a Durian ID.");
            return;
        }

        // Validate that durianID is a positive integer
        const durianID = parseInt(durianIDValue);
        if (isNaN(durianID) || durianID <= 0) {
            alert("Please enter a valid Durian ID.");
            return;
        }

        // Check if the user is a customer before allowing feedback submission
        const isCustomer = await contract.methods
            .getCustExistenceByAddress(walletAddress)
            .call();
        if (isCustomer == 0) {
            alert("Only customer accounts can add feedback.");
            return;
        }

        // Check if all feedback ratings are provided and valid
        if (
            isNaN(sweetness) ||
            isNaN(taste) ||
            isNaN(fragrance) ||
            isNaN(creaminess) ||
            sweetness < 1 ||
            sweetness > 5 ||
            taste < 1 ||
            taste > 5 ||
            fragrance < 1 ||
            fragrance > 5 ||
            creaminess < 1 ||
            creaminess > 5
        ) {
            alert("Please provide valid feedback ratings (1 to 5) for all categories.");
            return;
        }

        // Check if feedback description is provided
        if (feedbackDescription.trim() === "") {
            alert("Please provide a feedback description.");
            return;
        }

        // Call the addFeedback function in the contract
        const response = await contract.methods
            .addFeedbackWithRatings(
                durianID,
                sweetness,
                taste,
                fragrance,
                creaminess,
                feedbackDescription
            )
            .send({ from: walletAddress });

        // Assuming checkDurian is a global object, you can update its rateDate here
        if (typeof checkDurian !== 'undefined') {
            checkDurian.rateDate = Math.floor(Date.now() / 1000);
        } else {
            console.error('checkDurian is not defined.');
        }

        alert("Feedback added successfully");
    } catch (error) {
        console.error(error);
        alert("An error occurred while adding feedback");
    }
}*/

  // Function to add feedback
  async function addFeedback() {
    try {
        const walletAddress = await connectMetamask();
        console.log("Login Wallet Address = " + walletAddress);
        await connectContract();

        const contractAddress = await contract.options.address;
        console.log("Login Contract Address = " + contractAddress);

        const durianId = parseInt(document.getElementById("durianId").value);
        const feedback = document.getElementById("feedback").value;
        const sweetness = parseInt(document.getElementById("sweetness").value);
        const taste = parseInt(document.getElementById("taste").value);
        const fragrance = parseInt(document.getElementById("fragrance").value);
        const creaminess = parseInt(document.getElementById("creaminess").value);

        // Check if the user has MetaMask installed and connected
        if (typeof window.ethereum !== "undefined") {
            // Request account access if not available
            await window.ethereum.enable();
        }

        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        // Call the addFeedback function in the contract
        await contract.methods
            .addFeedback(
                durianId,
                feedback,
                sweetness,
                taste,
                fragrance,
                creaminess
            )
            .send({ from: account });

        // Record the rateDate in seconds since Unix epoch
        const rateDate = Math.floor(Date.now() / 1000);

        // Assuming checkDurian is a global object, you can update its rateDate here
        if (typeof checkDurian !== 'undefined') {
            checkDurian.rateDate = rateDate;
        } else {
            console.error('checkDurian is not defined.');
        }

        document.getElementById("result").innerHTML =
            "Feedback added successfully!";
    } catch (error) {
        console.error(error);
        document.getElementById("result").innerHTML =
            "Error adding feedback. Please check your input and try again.";
    }
}


// Add event listener to the "Add Feedback" button
document.getElementById("addFeedbackBtn").addEventListener("click", addFeedback);


// Function to show the feedback input fields
function showFeedbackInputFields() {
	document.getElementById("addDurianDiv").style.display = "block";
  }
  


  // Find the "Check" button and add an event listener
/*var buttonCheck = document.querySelector("#buttonCheckDurian3");
if (buttonCheck) {
  buttonCheck.addEventListener("click", async function checkDurianDetails() {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();
    var durianId = document.querySelector("#durianDetailsCus").value;
    let checkDurian;

    try {
      checkDurian = await window.contract.methods.getDurian(durianId).call();
      console.log(checkDurian);
    } catch (error) {
      console.log(error);
      alert("An error occurred when checking a durian, durian does not exist.");
      return; // Exit the function on error
    }

    var date = new Date(checkDurian.harvestDate * 1000);
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    var readableDate = date.toLocaleString(undefined, options);
    var durianType;

    switch (parseInt(checkDurian.durianType)) {
      case 1:
        durianType = "Musang King";
        break;
      case 2:
        durianType = "D24";
        break;
      case 3:
        durianType = "Red Prawn";
        break;
      case 4:
        durianType = "Black Thorn";
        break;
    }

    // Fetch farm details from the blockchain based on the durian's farm ID
    const farmId = checkDurian.farmID;
    const farm = await window.contract.methods.farmMap(farmId).call();

    let displayDurian = `
      <h1>Details of Durian</h1>
      <p>Farm id: ${checkDurian.farmID} </p>
      <p>Farm Name: ${farm.name}</p>
      <p>Farm Location: ${farm.location}</p>
      <p>Farm Wallet Address: ${farm.addr}</p>
      <p>Durian ID: ${durianId}</p> <!-- Display durianId -->
      <p>Durian Type: ${durianType} </p>
      <p>Durian Description: ${checkDurian.description} </p>
      <p>Durian Tree ID: ${checkDurian.id}</p>
      <p>Durian harvest date: ${readableDate}</p>
    `;

    // Check if distributorArrivalDate is available and add it to the display
    if (checkDurian.stage >= 1 && checkDurian.distributorArrivalDate > 0) {
      var distributorArrivalDate = new Date(
        checkDurian.distributorArrivalDate * 1000
      );
      var distributorArrivalDateReadable =
        distributorArrivalDate.toLocaleString(undefined, options);
      // Fetch distributor details from the blockchain based on the durian's distributor ID
      const distributorId = checkDurian.disID;
      const distributor = await window.contract.methods
        .distributorMap(distributorId)
        .call();

      displayDurian += `
        <p>Distributor ID: ${distributor.id}</p>
        <p>Distributor Name: ${distributor.name}</p>
        <p>Distributor Location: ${distributor.location}</p>
        <p>Distributor Wallet Address: ${distributor.addr}</p>
        <p>Durian reached distributor on: ${distributorArrivalDateReadable}</p>
      `;
    }

    // Check if retailerArrivalDate is available and add it to the display
    if (checkDurian.stage >= 2 && checkDurian.retailerArrivalDate > 0) {
      var retailerArrivalDate = new Date(
        checkDurian.retailerArrivalDate * 1000
      );
      var retailerArrivalDateReadable = retailerArrivalDate.toLocaleString(
        undefined,
        options
      );
      // Fetch retailer details from the blockchain based on the durian's retailer ID
      const retailerId = checkDurian.retailID;
      const retailer = await window.contract.methods
        .retailMapping(retailerId)
        .call();

      displayDurian += `
        <p>Retailer ID: ${retailer.id}</p>
        <p>Retailer Name: ${retailer.name}</p>
        <p>Retailer Location: ${retailer.location}</p>
        <p>Retailer Wallet Address: ${retailer.addr}</p>
        <p>Durian reached retailer on: ${retailerArrivalDateReadable}</p>
      `;
    }
	const customerAddress = checkDurian.addr;
	const isCustomer = await window.contract.methods.customerAddresses(customerAddress).call();
	
	if (isCustomer) {
	  const customerId = await window.contract.methods.getCustomerIdByAddress(customerAddress).call();
	  const customer = await window.contract.methods.customerMapping(customerId).call();
	
	  // Add customer name to the display
	  displayDurian += `
    <p>Customer Name: ${customer.name}</p>
	  `;
	} else {
	  displayDurian += "<p>Customer information not available.</p>";
	}	 
    // Display sold date if available
    if (checkDurian.stage >= 3 && checkDurian.soldDate > 0) {
      var soldDate = new Date(checkDurian.soldDate * 1000);
      var soldDateReadable = soldDate.toLocaleString(undefined, options);
      displayDurian += `<p>Durian sold on: ${soldDateReadable}</p>`;
    }

    // Display rate date if available
    if (checkDurian.stage >= 4 && checkDurian.rateDate > 0) {
      var rateDate = new Date(checkDurian.rateDate * 1000);
      var rateDateReadable = rateDate.toLocaleString(undefined, options);
      displayDurian += `<p>Durian rated on: ${rateDateReadable}</p>`;
    }
    
    // Create a container for durian and feedback details
    const resultContainer = document.querySelector("#resultFarm");
    
    // Display durian details in the HTML
    resultContainer.innerHTML = displayDurian;

    // Fetch feedback for the durian
    const feedbackCount = await window.contract.methods.getFeedbackCount(durianId).call();

    if (feedbackCount > 0) {
      // Create an array to store the feedback
      const feedbackArray = [];

      // Loop through each feedback and fetch it from the blockchain
      for (let i = 1; i <= feedbackCount; i++) {
        const feedback = await window.contract.methods.getFeedback(durianId, i).call();
        feedbackArray.push(feedback);
      }

      // Display the feedback in the HTML
      let feedbackHtml = "<h2>Feedback</h2>";
      feedbackArray.forEach((feedback, index) => {
        feedbackHtml += `
          <p>Feedback ${index + 1}:</p>
          <p>Sweetness: ${feedback.sweetness}</p>
          <p>Taste: ${feedback.taste}</p>
          <p>Fragrance: ${feedback.fragrance}</p>
          <p>Creaminess: ${feedback.creaminess}</p>
          <p>Description: ${feedback.feedback}</p>
          <hr>
        `;
      });

      // Append the feedback to the existing display
      resultContainer.innerHTML += feedbackHtml;
    } else {
      resultContainer.innerHTML += "<p>No feedback available for this durian.</p>";
    }
  });
}*/


// Async function to get feedback for a Durian by its ID
/*async function getFeedbackForDurian(durianID) {
    try {
        const walletAddress = await connectMetamask();
        console.log("Connected Wallet Address = " + walletAddress);

        if (!walletAddress) {
            return "Metamask connection failed.";
        }

        const contract = await connectContract();
        if (!contract) {
            return "Contract connection failed.";
        }

        // Call the getAllFeedbackForDurian function from the smart contract
        const feedbackArray = await contract.methods.getAllFeedbackForDurian(durianID).call();

        // Process the feedback data as needed
        const feedbackResults = [];
        feedbackArray.forEach((feedback, index) => {
            const feedbackResult = {
                feedback: feedback.feedback,
                sweetness: feedback.sweetness,
                taste: feedback.taste,
                fragrance: feedback.fragrance,
                creaminess: feedback.creaminess,
            };
            feedbackResults.push(feedbackResult);
        });

        return feedbackResults;
    } catch (error) {
        console.error("Error retrieving feedback:", error);
        return "Error: " + error.message;
    }
}*/

// Function to get feedback for a Durian by its ID
async function getFeedbackForDurian(durianID) {
    try {
        const walletAddress = await connectMetamask();
        console.log("Connected Wallet Address = " + walletAddress);

        if (!walletAddress) {
            return "Metamask connection failed.";
        }

        const contract = await connectContract();
        if (!contract) {
            return "Contract connection failed.";
        }

        // Call the getAllFeedbackForDurian function from the smart contract
        const feedbackArray = await contract.methods.getAllFeedbackForDurian(durianID).call();

        // Process the feedback data as needed
        const feedbackResults = [];
        feedbackArray.forEach((feedback, index) => {
            const feedbackResult = {
                feedback: feedback.feedback,
                sweetness: feedback.sweetness,
                taste: feedback.taste,
                fragrance: feedback.fragrance,
                creaminess: feedback.creaminess,
            };
            feedbackResults.push(feedbackResult);
        });

        return feedbackResults;
    } catch (error) {
        console.error("Error retrieving feedback:", error);
        return "Error: " + error.message;
    }
}

// Function to submit feedback for a Durian
async function submitFeedback() {
    try {
        const durianID = document.getElementById('durianId').value;
        const feedbackText = document.getElementById('feedback').value;
        const sweetness = document.getElementById('sweetness').value;
        const taste = document.getElementById('taste').value;
        const fragrance = document.getElementById('fragrance').value;
        const creaminess = document.getElementById('creaminess').value;

        const walletAddress = await connectMetamask();
        if (!walletAddress) {
            console.log("Metamask connection failed.");
            return;
        }

        const contract = await connectContract();
        if (!contract) {
            console.log("Contract connection failed.");
            return;
        }

        // Convert user inputs to appropriate data types
        const durianIDNumber = parseInt(durianID);
        const sweetnessNumber = parseInt(sweetness);
        const tasteNumber = parseInt(taste);
        const fragranceNumber = parseInt(fragrance);
        const creaminessNumber = parseInt(creaminess);

        // Call the addFeedback function in your contract
        await contract.methods.addFeedback(
            durianIDNumber,
            feedbackText,
            sweetnessNumber,
            tasteNumber,
            fragranceNumber,
            creaminessNumber
        ).send({
            from: walletAddress,
            gas: 300000 // Adjust the gas limit as needed
        });

        console.log("Feedback submitted successfully!");
    } catch (error) {
        console.error("Error submitting feedback:", error);
    }
}

// Event listener for the "Add Feedback" button
document.getElementById('addFeedbackBtn').addEventListener('click', submitFeedback);



var buttonCheck = document.querySelector("#buttonCheckDurian3");

if (buttonCheck) {
  buttonCheck.addEventListener("click", async function checkDurianDetails() {
    const walletAddress = await connectMetamask();
    console.log("Login Wallet Address = " + walletAddress);
    await connectContract();
    var durianId = document.querySelector("#durianDetailsCus").value;
    let checkDurian;

    try {
      checkDurian = await window.contract.methods.getDurian(durianId).call();
      console.log(checkDurian);
    } catch (error) {
      console.log(error);
      alert("An error occurred when checking a durian, durian does not exist.");
      return; // Exit the function on error
	}

    var date = new Date(checkDurian.harvestDate * 1000);
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    var readableDate = date.toLocaleString(undefined, options);
    var durianType;

    switch (parseInt(checkDurian.durianType)) {
      case 1:
        durianType = "Musang King";
        break;
      case 2:
        durianType = "D24";
        break;
      case 3:
        durianType = "Red Prawn";
        break;
      case 4:
        durianType = "Black Thorn";
        break;
    }

    // Fetch farm details from the blockchain based on the durian's farm ID
    const farmId = checkDurian.farmID;
    const farm = await window.contract.methods.farmMap(farmId).call();
	

    let displayDurian = `
      <h1>Details of Durian</h1>
      <p>Farm id: ${checkDurian.farmID} </p>
      <p>Farm Name: ${farm.name}</p>
      <p>Farm Location: ${farm.location}</p>
      <p>Farm Wallet Address: ${farm.addr}</p>
      <p>Durian ID: ${durianId}</p> <!-- Display durianId -->
      <p>Durian Type: ${durianType} </p>
      <p>Durian Description: ${checkDurian.description} </p>
      <p>Durian Tree ID: ${checkDurian.id}</p>
      <p>Durian harvest date: ${readableDate}</p>
    `;

    // Check if distributorArrivalDate is available and add it to the display
    if (checkDurian.stage >= 1 && checkDurian.distributorArrivalDate > 0) {
      var distributorArrivalDate = new Date(
        checkDurian.distributorArrivalDate * 1000
      );
      var distributorArrivalDateReadable =
        distributorArrivalDate.toLocaleString(undefined, options);
      // Fetch distributor details from the blockchain based on the durian's distributor ID
      const distributorId = checkDurian.disID;
      const distributor = await window.contract.methods
        .distributorMap(distributorId)
        .call();

      displayDurian += `
        <p>Distributor ID: ${distributor.id}</p>
        <p>Distributor Name: ${distributor.name}</p>
        <p>Distributor Location: ${distributor.location}</p>
        <p>Distributor Wallet Address: ${distributor.addr}</p>
        <p>Durian reached distributor on: ${distributorArrivalDateReadable}</p>
      `;
    }

	
    // Check if retailerArrivalDate is available and add it to the display
    if (checkDurian.stage >= 2 && checkDurian.retailerArrivalDate > 0) {
      var retailerArrivalDate = new Date(
        checkDurian.retailerArrivalDate * 1000
      );
      var retailerArrivalDateReadable = retailerArrivalDate.toLocaleString(
        undefined,
        options
      );
      // Fetch retailer details from the blockchain based on the durian's retailer ID
      const retailerId = checkDurian.retailID;
      const retailer = await window.contract.methods
        .retailMapping(retailerId)
        .call();

      displayDurian += `
        <p>Retailer ID: ${retailer.id}</p>
        <p>Retailer Name: ${retailer.name}</p>
        <p>Retailer Location: ${retailer.location}</p>
        <p>Retailer Wallet Address: ${retailer.addr}</p>
        <p>Durian reached retailer on: ${retailerArrivalDateReadable}</p>
      `;
    }
// Get the customer's address from the checkDurian object
const customerAddress = checkDurian.custID;

// Call the smart contract function to get the customer's name
const customerName = await window.contract.methods.customerMapping(customerAddress).call();

// Add the customer's name to the displayDurian HTML
displayDurian += `
<p>Customer Id: ${customerName.id}</p>
<p>Customer Name: ${customerName.name}</p>
<p>Customer Wallet Address: ${customerName.addr}</p>

`;
    // Display sold date if available
    if (checkDurian.stage >= 3 && checkDurian.soldDate > 0) {
      var soldDate = new Date(checkDurian.soldDate * 1000);
      var soldDateReadable = soldDate.toLocaleString(undefined, options);
      displayDurian += `<p>Durian sold on: ${soldDateReadable}</p>`;

	 
    }

    // Display rate date if available
    if (checkDurian.stage >= 4 && checkDurian.rateDate > 0) {
      var rateDate = new Date(checkDurian.rateDate * 1000);
      var rateDateReadable = rateDate.toLocaleString(undefined, options);
      displayDurian += `<p>Durian rated on: ${rateDateReadable}</p>`;
    }

	// Create a container for durian and feedback details
    const resultContainer = document.querySelector("#resultFarm");

    // Display durian details in the HTML
    resultContainer.innerHTML = displayDurian;

    // Fetch feedback details for the durian
    const feedback = await window.contract.methods.getFeedbackDetail(durianId).call();

    if (feedback.feedback !== "0") {
      // Display the feedback in the HTML
      let feedbackHtml = "<h2>Feedback</h2>";
      feedbackHtml += `
        <p>Description: ${feedback.feedback}</p>
        <p>Sweetness: ${feedback.sweetness}</p>
        <p>Taste: ${feedback.taste}</p>
        <p>Fragrance: ${feedback.fragrance}</p>
        <p>Creaminess: ${feedback.creaminess}</p>
      `;

      // Append the feedback to the existing display
      resultContainer.innerHTML += feedbackHtml;
    } else {
      // Display a message when no feedback is available
      resultContainer.innerHTML += "<p>No feedback available for this durian.</p>";
    }


	
  });
}


