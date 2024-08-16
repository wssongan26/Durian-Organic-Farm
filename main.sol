// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DurianSupplyChain {
    address public Owner = msg.sender;

    enum Stages {
        Farm,
        Distributor,
        Retail,
        Sold,
        Rated
    }

    struct Feedback {
        string feedback;
        int sweetness;
        int taste;
        int fragrance;
        int creaminess;
    }

    // Define a mapping to store feedback for each Durian
    mapping(uint256 => Feedback) public durianFeedback;

    struct Durian {
        uint256 id;
        string description;
        uint256 durianType;
        uint256 harvestDate;
        uint256 distributorArrivalDate;
        uint256 retailerArrivalDate;
        uint256 soldDate;
        uint256 rateDate;
        uint256 farmID;
        uint256 disID;
        uint256 retailID;
        uint256 custID;
        Feedback feedback;
        Stages stage;
        uint256 price; // New field to store the price
    }

    mapping(uint256 => Durian) durianStock;

    struct Farm {
        address addr;
        uint256 id;
        string name;
        string location;
    }

    mapping(address => bool) public farmAddresses;
    mapping(uint256 => Farm) public farmMap;

    struct Distributor {
        address addr;
        uint256 id;
        string name;
        string location;
    }

    mapping(address => bool) public distributorAddresses;
    mapping(uint256 => Distributor) public distributorMap;

    struct Retail {
        address addr;
        uint256 id;
        string name;
        string location;
    }

    mapping(address => bool) public retailAddresses;
    mapping(uint256 => Retail) public retailMapping;

    struct Customer {
        address addr;
        uint256 id;
        string name;
    }

    mapping(address => bool) public customerAddresses;
    mapping(uint256 => Customer) public customerMapping;

    struct JobApplication {
        string firstName;
        string lastName;
        string email;
        string phone;
        string jobTitle;
        string city;
        string gender;
    }

    mapping(address => JobApplication) public jobApplications;

    function jobApplication(
        string memory _firstName,
        string memory _lastName,
        string memory _email,
        string memory _phone,
        string memory _jobTitle,
        string memory _city,
        string memory _gender
    ) public {
        require(bytes(_firstName).length > 0, "First Name is required");
        require(bytes(_lastName).length > 0, "Last Name is required");
        require(bytes(_email).length > 0, "Email is required");
        require(bytes(_phone).length > 0, "Phone Number is required");
        require(bytes(_jobTitle).length > 0, "Job Title is required");
        require(bytes(_city).length > 0, "City is required");
        require(bytes(_gender).length > 0, "Gender is required");

        // Check if the job title is "Farmer"
        if (keccak256(bytes(_jobTitle)) == keccak256(bytes("Farmer"))) {
            // Increase the farmer count
            farmCount++;
            farmAddresses[msg.sender] = true;
            farmMap[farmCount] = Farm(msg.sender, farmCount, _firstName, _city);
        }

        jobApplications[msg.sender] = JobApplication({
            firstName: _firstName,
            lastName: _lastName,
            email: _email,
            phone: _phone,
            jobTitle: _jobTitle,
            city: _city,
            gender: _gender
        });

        jobApplicationCount++; // Increment the job application count
    }

    uint256 public durianCount = 0;
    uint256 public treeId = 0;
    uint256 public farmCount = 0;
    uint256 public distributorCount = 0;
    uint256 public retailCount = 0;
    uint256 public customerCount = 0;
    uint256 public jobApplicationCount = 0;

    modifier onlyOnce() {
        require(
            !farmAddresses[msg.sender] &&
                !distributorAddresses[msg.sender] &&
                !retailAddresses[msg.sender] &&
                !customerAddresses[msg.sender],
            "Address is already registered with a role"
        );
        _;
    }

    function createFarm(string memory _name, string memory _place) public onlyOnce {
        farmCount++;
        farmAddresses[msg.sender] = true;
        farmMap[farmCount] = Farm(msg.sender, farmCount, _name, _place);
    }

    function createDistributor(string memory _name, string memory _place) public onlyOnce {
        distributorCount++;
        distributorAddresses[msg.sender] = true;
        distributorMap[distributorCount] = Distributor(msg.sender, distributorCount, _name, _place);
    }

    function createRetail(string memory _name, string memory _place) public onlyOnce {
        retailCount++;
        retailAddresses[msg.sender] = true;
        retailMapping[retailCount] = Retail(msg.sender, retailCount, _name, _place);
    }

    function createCustomer(string memory _name) public {
        customerCount++;
        customerAddresses[msg.sender] = true;
        customerMapping[customerCount] = Customer(msg.sender, customerCount, _name);
    }

    // Add a mapping to track the existence of Durians
    mapping(uint256 => bool) public durianExists;

    // Modify the addDurian function to mark Durian as existing
    function addDurian(string memory _description, uint256 _durianType) public {
        require(farmCount > 0);
        durianCount++; //add durian increase by 1
        treeId++; // Increment the treeId
        Feedback memory f = Feedback({
            feedback: "0",
            sweetness: 0,
            taste: 0,
            fragrance: 0,
            creaminess: 0
        });
        durianStock[durianCount] = Durian(
            durianCount,
            _description,
            _durianType,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            f,
            Stages.Farm,
            0 // Initialize price to 0
        );
        uint256 _id = farmExist(msg.sender);
        durianStock[durianCount].farmID = _id;
        durianStock[durianCount].harvestDate = block.timestamp;
        durianStock[durianCount].stage = Stages.Farm;

        // Mark the Durian as existing
        durianExists[durianCount] = true;
    }

    // Modifier to restrict access to the owner (farmer)
    modifier onlyOwner() {
        require(msg.sender == Owner, "Only the owner (farmer) can perform this action");
        _;
    }

    modifier validID(uint256 _id) {
        require(_id > 0);
        require(_id > 0 && _id <= durianCount);

        _;
    }

    // New modifier to check if the sender is a farmer
    modifier isFarmer() {
        require(farmAddresses[msg.sender], "Only registered farmers can perform this action");
        _;
    }

    // New function to allow farmers to add durians
    function farmerAddDurian(string memory _description, uint256 _durianType) public isFarmer {
        addDurian(_description, _durianType);
    }

    // New modifier to check if the sender is the customer
    modifier isCustomer(uint256 _durianID) {
        require(customerAddresses[msg.sender], "Only registered customers can perform this action");
        _;
    }

    function setFeedback(uint256 _durianID, string memory _feedback) internal validID(_durianID) {
        Feedback memory f = Feedback({
            feedback: _feedback,
            sweetness: 0,
            taste: 0,
            fragrance: 0,
            creaminess: 0
        });
        durianFeedback[_durianID] = f;
        durianStock[_durianID].rateDate = block.timestamp;
        durianStock[_durianID].stage = Stages.Rated;
    }

    function farmExist(address _address) private view returns (uint256) {
        require(farmCount > 0);
        for (uint256 i = 1; i <= farmCount; i++) {
            if (farmMap[i].addr == _address) return farmMap[i].id;
        }
        return 0;
    }

    function distributorExist(address _address) private view returns (uint256) {
        require(distributorCount > 0);
        for (uint256 i = 1; i <= distributorCount; i++) {
            if (distributorMap[i].addr == _address) return distributorMap[i].id;
        }
        return 0;
    }

    function retailExist(address _address) private view returns (uint256) {
        require(retailCount > 0);
        for (uint256 i = 1; i <= retailCount; i++) {
            if (retailMapping[i].addr == _address) return retailMapping[i].id;
        }
        return 0;
    }

    function customerExist(address _address) private view returns (uint256) {
        require(customerCount > 0);
        for (uint256 i = 1; i <= customerCount; i++) {
            if (customerMapping[i].addr == _address) return customerMapping[i].id;
        }
        return 0;
    }

    function farm2distributor(uint256 _durianID) public validID(_durianID) {
        uint256 _id = distributorExist(msg.sender);
        require(durianStock[_durianID].stage == Stages.Farm);
        durianStock[_durianID].disID = _id;
        durianStock[_durianID].distributorArrivalDate = block.timestamp;
        durianStock[_durianID].stage = Stages.Distributor;
    }

    function distributor2retail(uint256 _durianID) public validID(_durianID) {
        uint256 _id = retailExist(msg.sender);
        require(durianStock[_durianID].stage == Stages.Distributor);
        durianStock[_durianID].retailID = _id;
        durianStock[_durianID].retailerArrivalDate = block.timestamp;
        durianStock[_durianID].stage = Stages.Retail;
    }

    function retail2customer(uint256 _durianID) public validID(_durianID) {
        uint256 _id = customerExist(msg.sender);
        require(durianStock[_durianID].stage == Stages.Retail);

        // Update the customer ID for the specified durian
        durianStock[_durianID].custID = _id;

        // Mark the durian as sold and set the sold date
        durianStock[_durianID].stage = Stages.Sold;
        durianStock[_durianID].soldDate = block.timestamp;
    }

    mapping(uint256 => uint256) public feedbackCount;

    function addFeedback(
        uint256 _durianID,
        string memory _feedback,
        int256 _sweetness,
        int256 _taste,
        int256 _fragrance,
        int256 _creaminess
    ) public validID(_durianID) {
        require(durianStock[_durianID].stage == Stages.Sold, "Feedback can only be added after purchase");

        Feedback memory f = Feedback({
            feedback: _feedback,
            sweetness: _sweetness,
            taste: _taste,
            fragrance: _fragrance,
            creaminess: _creaminess
        });

        // Set the feedback for the specified Durian ID
        durianFeedback[_durianID] = f;

        durianStock[_durianID].rateDate = block.timestamp;
        // Update the stage of the Durian to Rated
        durianStock[_durianID].stage = Stages.Rated;
    }

    struct DurianDetail {
        uint256 id;
        uint256 durianType;
        uint256 harvestDate;
    }

    function getAllDurianDetailsByFarm(uint256 _farmID) public view returns (DurianDetail[] memory) {
        uint256 count = 0;

        // First, count the number of durians that belong to the specified farm
        for (uint256 i = 1; i <= durianCount; i++) {
            if (durianStock[i].farmID == _farmID) {
                count++;
            }
        }

        // Initialize an array to store the details of durians
        DurianDetail[] memory durianDetails = new DurianDetail[](count);

        // Populate the array with durian details
        count = 0; // Reset count for indexing the durianDetails array
        for (uint256 i = 1; i <= durianCount; i++) {
            if (durianStock[i].farmID == _farmID) {
                // Store the relevant details in the struct
                DurianDetail memory detail;
                detail.id = durianStock[i].id;
                detail.durianType = durianStock[i].durianType;
                detail.harvestDate = durianStock[i].harvestDate;

                // Add the struct to the array
                durianDetails[count] = detail;
                count++;
            }
        }

        return durianDetails;
    }

    function getDurian(uint256 _id) public view returns (Durian memory) {
        require(_id > 0 && _id <= durianCount);
        return durianStock[_id];
    }

    function getTotalDurianCount() public view returns (uint256) {
        return durianCount;
    }

    function getTotalFarm() public view returns (uint256) {
        return farmCount;
    }

    function getTotalDist() public view returns (uint256) {
        return distributorCount;
    }

    function getTotalRet() public view returns (uint256) {
        return retailCount;
    }

    function getTotalCust() public view returns (uint256) {
        return customerCount;
    }

    // New function to get the job application count
    function getJobApplicationCount() public view returns (uint256) {
        return jobApplicationCount;
    }

    function getFarmExistenceByAddress(address _address) public view returns (uint256) {
        uint256 _id = farmExist(_address);
        return _id;
    }

    function getDistExistenceByAddress(address _address) public view returns (uint256) {
        uint256 _id = distributorExist(_address);
        return _id;
    }

    function getRetExistenceByAddress(address _address) public view returns (uint256) {
        uint256 _id = retailExist(_address);
        return _id;
    }

    function getCustExistenceByAddress(address _address) public view returns (uint256) {
        uint256 _id = customerExist(_address);
        return _id;
    }

    function getDurianStage(uint256 _durianID) public validID(_durianID) view returns (Stages) {
        return durianStock[_durianID].stage;
    }

    // Return 3 map become array
    function getAllFarmMap() public view returns (Farm[] memory) {
        // Cannot return map, we need to convert it array and return it
        Farm[] memory allFarm = new Farm[](farmCount);

        uint256 i = 0;
        uint256 j = 1;
        for (i = 0; i < farmCount; i++) {
            allFarm[i] = farmMap[j];
            j++;
        }

        return allFarm;
    }

    function getAllDistributorMap() public view returns (Distributor[] memory) {
        // Cannot return map, we need to convert it array and return it
        Distributor[] memory allDistributor = new Distributor[](distributorCount);

        uint256 i = 0;
        uint256 j = 1;
        for (i = 0; i < distributorCount; i++) {
            allDistributor[i] = distributorMap[j];
            j++;
        }

        return allDistributor;
    }

    function getAllRetailerMap() public view returns (Retail[] memory) {
        // Cannot return map, we need to convert it array and return it
        Retail[] memory allRetailer = new Retail[](retailCount);

        uint256 i = 0;
        uint256 j = 1;
        for (i = 0; i < retailCount; i++) {
            allRetailer[i] = retailMapping[j];
            j++;
        }

        return allRetailer;
    }

    function getFeedbackCountByCustomer(uint256 _customerID) public view returns (uint256) {
        require(_customerID > 0 && _customerID <= customerCount, "Invalid customer ID");

        uint256 feedbackCountByCustomer = 0;

        for (uint256 i = 1; i <= durianCount; i++) {
            if (durianStock[i].custID == _customerID && durianStock[i].stage == Stages.Rated) {
                feedbackCountByCustomer++;
            }
        }

        return feedbackCountByCustomer;
    }

    function getFeedbackDetail(uint256 _durianID) public view returns (Feedback memory) {
        return durianFeedback[_durianID];
    }

    function getAllCustomerMap() public view returns (Customer[] memory) {
        Customer[] memory allCustomer = new Customer[](customerCount);

        uint256 i = 0;
        uint256 j = 1;
        for (i = 0; i < customerCount; i++) {
            allCustomer[i] = customerMapping[j];
            j++;
        }

        return allCustomer;
    }
}
