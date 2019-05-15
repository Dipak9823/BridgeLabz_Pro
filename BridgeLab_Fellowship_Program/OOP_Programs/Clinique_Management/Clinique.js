var filestream=require("fs");
var util=require("../../Utility/Oops_Util");
var content=filestream.readFileSync("info.json");

var data=JSON.parse(content);
function clin() {
    util.clinicManagement(data);
    util.appointment(data);
} clin();


