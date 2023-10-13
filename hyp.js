function risk() {
    var sys = parseInt(getText("sys_input"));
    var dia = parseInt(getText("dia_input"));

    if (isNaN(sys) || isNaN(dia)) {
        setText("alerttext", "Please enter a valid number for the fields");
    } else if (sys < 90 || sys > 300) {
        setText("alerttext", "Systolic pressure must be between 90 and 300");
    } else if (dia < 50 || dia > 240) {
        setText("alerttext", "Diastolic pressure must be between 50 and 240");
    } else if (dia > sys) {
        setText("alerttext", "Diastolic pressure must be lower than systolic pressure"); 
    } else if (sys < 120 && dia < 80) {
        setText("risk_output", "Low");
        setText("alerttext", "");
        setText("classtext", "Low");
        setText("desctext", "Your blood pressure is at a healthy level.")
    } else if (sys < 130 && dia < 80) {
        setText("risk_output", "Elevated");
        setText("alerttext", "");
        setText("classtext", "Elevated");
        setText("desctext", "You're in a prehypertensive state. You should watch your blood pressure levels and try to maintain a healthy lifestyle.")
    } else if (sys < 140 || dia < 90) {
        setText("risk_output", "Stage 1 Hypertension");
        setText("alerttext", "");
        setText("classtext", "Stage 1 Hypertension");
        setText("desctext", "You have hypertension. You should consult a doctor and try to maintain a healthy lifestyle.")
    } else if (sys < 180 || dia < 120) {
        setText("risk_output", "Stage 2 Hypertension");
        setText("alerttext", "");
        setText("classtext", "Stage 2 Hypertension");
        setText("desctext", "You have hypertension. You should consult a doctor and try to maintain a healthy lifestyle.")
    } else {
        setText("risk_output", "Hypertensive Crisis");
        setText("alerttext", "");
        setText("classtext", "Hypertensive Crisis");
        setText("desctext", "You have hypertension. You should consult a doctor and try to maintain a healthy lifestyle.")
    }
}
