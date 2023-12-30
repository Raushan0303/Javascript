var teacher = "Sanket";
function fun(){
    var teacher = "Pulkit";
    console.log(teacher, teachingAssistant);
    teachingAssistant = "Raushan";//eligible for autoglobal
}

function gun(){
    console.log(subject);
    var subject = "js";
    console.log(teacher);
}

console.log(teacher);
gun();