const express = require("express");
const multer = require("multer");

//setting up multer for binary medical record storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
    },
});
const upload = multer({storage: storage});
var cors = require('cors');
var app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
//bodyparser for parsing body of the REST POST requests
const bodyParser = require("body-parser");

//node.js path library for utility functions
var path = require("path");
//blockchain related

const Web3 = require("web3");
//importing abi of the smart contract deployed on the blockchain
const {filterAbi, windowAbi, patternAbi, sequenceAbi} = require("./contractABI");


//initiating web3 to connect with the locally hosted blockchain
let web3 = new Web3("ws://localhost:7545");

//setting up ethereum account for transactions
web3.eth.defaultAccount = web3.eth.accounts[0];

//address of the deployed smart contract
const contract_address = "0x242FB920aC7560c0B58F345C51F4529f93B3027D";

// Filter
const filter_contract_address = "0xe1358A0d5d926B0b0B109ef67B16ca4e740b4aa3";
// Window
const window_contract_address = "0x242FB920aC7560c0B58F345C51F4529f93B3027D";
// Pattern
const pattern_contract_address = "0x242FB920aC7560c0B58F345C51F4529f93B3027D";
// Sequence
const sequence_contract_address = "0x242FB920aC7560c0B58F345C51F4529f93B3027D";

//account address
const account = "0x84b32420eBE97802D2727C2e5A6654079fd35744";

//setting up smart contract initialization from web3
const DataContract = new web3.eth.Contract(filterAbi, filter_contract_address);
// Filter
const FilterContract = new web3.eth.Contract(filterAbi, filter_contract_address);
// Window
const WindowContract = new web3.eth.Contract(windowAbi, contract_address);
// Pattern
const PatternContract = new web3.eth.Contract(patternAbi, contract_address);
// Sequence
const SequenceContract = new web3.eth.Contract(sequenceAbi, contract_address);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 7801;

var router = express.Router();

/*
* Filter
* */
router.post("/process_filter", async (req, res) => {
    const {roomNo, temp, humidity} = req.body;
    let result = await FilterContract.methods
        .process([roomNo, temp, humidity])
        .send({from: account, gas: 3000000});

    res.json({error: false, data: result});
});

router.get("/getAlertStreamEvents", async (req, res) => {
    let result = await FilterContract.methods.getAlertStreamEvents().call();
    res.status(200).send({error: false, data: result});
});

router.get("/alertStreamEvents/:index", async (req, res) => {
    let result = await FilterContract.methods.AlertStreamEvents(req.params.index).call();
    res.status(200).send({error: false, data: result});
});

router.post("/process", async (req, res) => {
    const {roomNo, temp, humidity} = req.body;
    let result = await DataContract.methods
        .process([roomNo, temp, humidity])
        .send({from: account, gas: 3000000});

    res.json({error: false, data: result});
});

router.post("/processEvent", async (req, res) => {
    const {roomNo, temp, humidity} = req.body;
    let result = await DataContract.methods
        .process([roomNo, temp, humidity])
        .send({from: account, gas: 3000000});

    res.json({error: false, data: result});
});

router.post("/processWindow", async (req, res) => {
    const {machineId, weight} = req.body;
    let result = await DataContract.methods
        .process([machineId, weight])
        .send({from: account, gas: 3000000});

    res.json({error: false, data: result});
});

app.use("/api", router);

app.listen(port);
console.log("Server started at: " + port);
