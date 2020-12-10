pragma solidity 0.7.0;
pragma experimental ABIEncoderV2;

contract PatientData {
    uint256 public numOfPersons = 0;
    uint256 public numOfLabReports = 0;
    uint256 public numOfPrescriptionReports = 0;

    struct PersonalData {
        uint256 id;
        string bmi;
        string bloodPressure;
        int256 date;
        string age;
        string notes;
    }

    struct LabReport {
        uint256 id;
        string file;
        int256 date;
        string hospitleName;
        string notes;
        
    }

    struct PrescriptionReport {
        uint256 id;
        string file;
        int256 date;
        string hospitleName;
        string notes;
        string dname;
    }

    mapping(uint256 => PersonalData) persons;
    mapping(uint256 => LabReport) labReports;
    mapping(uint256 => PrescriptionReport) prescriptionReports;

    function setPerson(PersonalData memory personalData) public {
        persons[numOfPersons + 1] = personalData;
        numOfPersons++;
    }

    function getPerson(uint256 id) public view returns (PersonalData memory) {
        return persons[id];
    }

    function countPersons() public view returns (uint256) {
        return numOfPersons;
    }

    function setLabReport(LabReport memory labReport) public {
        labReports[numOfLabReports + 1] = labReport;
        numOfLabReports++;
    }

    function getLabReport(uint256 id) public view returns (LabReport memory) {
        return labReports[id];
    }

    function countLabReports() public view returns (uint256) {
        return numOfLabReports;
    }

    function setPrescriptionReport(PrescriptionReport memory prescriptionReport)
        public
    {
        prescriptionReports[numOfPrescriptionReports + 1] = prescriptionReport;
        numOfPrescriptionReports++;
    }

    function getPrescriptionReport(uint256 id)
        public
        view
        returns (PrescriptionReport memory)
    {
        return prescriptionReports[id];
    }

    function countPrescriptionReports() public view returns (uint256) {
        return numOfPrescriptionReports;
    }
}
