function risk() {
    var sys = getText("sys_input");
    var dia = getText("dia_input");

    if (sys < 120 && dia < 80) {
        setText("risk_output", "Low");
    } else if (sys < 130 && dia < 80) {
        setText("risk_output", "Elevated");
    } else if (sys < 140 || dia < 90) {
        setText("risk_output", "Stage 1 Hypertension");
    } else if (sys < 180 || dia < 120) {
        setText("risk_output", "Stage 2 Hypertension");
    } else {
        setText("risk_output", "Hypertensive Crisis");
    }
}