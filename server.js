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
const upload = multer({ storage: storage });

const app = express();

//bodyparser for parsing body of the REST POST requests
const bodyParser = require("body-parser");

//node.js path library for utility functions
var path = require("path");
//blockchain related

const Web3 = require("web3");
//importing abi of the smart contract deployed on the blockchain
const { abi } = require("./contractABI");

//initiating web3 to connect with the locally hosted blockchain
let web3 = new Web3("ws://localhost:7545");

//setting up ethereum account for transactions
web3.eth.defaultAccount = web3.eth.accounts[0];

//address of the deployed smart contract
const contract_address = "0x78d20D8cFC0d7489fb8B6c01cC736CF623A3b016";
const account = "0x78E21612Cd9EBcBe744AC4f86889eB9c0dcdD9F8";

//setting up smart contract initialization from web3
const DataContract = new web3.eth.Contract(abi, contract_address);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;

var router = express.Router();

//application endpoints
router.get("/getPersonCount", async (req, res) => {
  let result = await DataContract.methods.countPersons().call();
  res.status(200).send({ error: false, data: result });
});

router.post("/newPerson", async (req, res) => {
  const { id, bmi, bloodPressure, age, notes } = req.body;
  let result = await DataContract.methods
    .setPerson([id, bmi, bloodPressure, Date.now(), age, notes])
    .send({ from: account, gas: 3000000 });

  res.json({ error: false, data: result });
});

router.get("/getPerson", async (req, res) => {
  let result = await DataContract.methods
    .getPerson(parseInt(req.query.id))
    .call({ from: account, gas: 3000000 });
  res.status(200).send({ error: false, data: result });
});

router.post("/newLabReport", upload.single("file"), async (req, res) => {
  const { id, hospitalName, notes } = req.body;
  let result = await DataContract.methods
    .setLabReport([id, req.file.filename, Date.now(), hospitalName, notes])
    .send({ from: account, gas: 3000000 });

  res.json({ error: false, data: result });
});

router.get("/getLabReport", async (req, res) => {
  let result = await DataContract.methods
    .getLabReport(parseInt(req.query.id))
    .call({ from: account, gas: 3000000 });
  res.status(200).send({ error: false, data: result });
});

router.post(
  "/newPrescriptionReport",
  upload.single("file"),
  async (req, res) => {
    const { id, hospitalName, notes, dname } = req.body;
    let result = await DataContract.methods
      .setPrescriptionReport([
        id,
        req.file.filename,
        Date.now(),
        hospitalName,
        notes,
        dname,
      ])
      .send({ from: account, gas: 3000000 });

    res.json({ error: false, data: result });
  }
);

router.get("/getPrescriptionReport", async (req, res) => {
  let result = await DataContract.methods
    .getPrescriptionReport(parseInt(req.query.id))
    .call({ from: account, gas: 3000000 });
  res.status(200).send({ error: false, data: result });
});

app.use("/api", router);

app.listen(port);
console.log("Server started at: " + port);
