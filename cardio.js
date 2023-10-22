function calculateRisk() {
    //weird error thing
    var text_error_handler = getText("age_input");

    var error = false;

    var gender = (parseInt(getValue("gender_input")) == 2); // false for male, true for female
    var age = parseInt(getValue("age_input"));
    var chol = parseInt(getText("chol_input"));
    var smoker = false;
    var hdl = parseInt(getText("hdl_input"));
    var ldl = parseInt(getText("ldl_input"));
    var sysBP = parseInt(getText("sysBP_input"));
    var diaBP = parseInt(getText("diaBP_input"));
    var race = parseInt(getValue("race_input"));
    var bp_treatment = getValue("asp_input");

    var pts = 0;
    var risk = 0;

    // Age points (trinary, women:men)
    if (age >= 20 && age <= 34) {
        pts += (gender ? -7 : -9);   
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 4;
        else if (chol >= 200 && chol <= 239) pts += 7;
        else if (chol >= 240 && chol <= 279) pts += 9;
        else if (chol >= 280) pts += 11;
        // Smoking points
        if (smoker) pts += 8;
    }  
    else if (age >= 35 && age <= 39) {
        pts += (gender ? -3 : -4);
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 4;
        else if (chol >= 200 && chol <= 239) pts += 7;
        else if (chol >= 240 && chol <= 279) pts += 9;
        else if (chol >= 280) pts += 11;
        if (smoker) pts += 8;
    }
    else if (age >= 40 && age <= 44) {
        pts += (gender ? 0 : 0);
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 3;
        else if (chol >= 200 && chol <= 239) pts += 5;
        else if (chol >= 240 && chol <= 279) pts += 6;
        else if (chol >= 280) pts += 8;
        if (smoker) pts += 5;
    }
    else if (age >= 45 && age <= 49) {
        pts += (gender ? 3 : 3);
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 3;
        else if (chol >= 200 && chol <= 239) pts += 5;
        else if (chol >= 240 && chol <= 279) pts += 6;
        else if (chol >= 280) pts += 8;
        if (smoker) pts += 5;
    }
    else if (age >= 50 && age <= 54) {
        pts += (gender ? 6 : 6);
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 2;
        else if (chol >= 200 && chol <= 239) pts += 3;
        else if (chol >= 240 && chol <= 279) pts += 4;
        else if (chol >= 280) pts += 5;
        if (smoker) pts += 3;
    } 
    else if (age >= 55 && age <= 59) {
        pts += (gender ? 8 : 8);
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 2;
        else if (chol >= 200 && chol <= 239) pts += 3;
        else if (chol >= 240 && chol <= 279) pts += 4;
        else if (chol >= 280) pts += 5;
        if (smoker) pts += 3;
    }
    else if (age >= 60 && age <= 64) {
        pts += (gender ? 10 : 10);
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 1;
        else if (chol >= 200 && chol <= 239) pts += 1;
        else if (chol >= 240 && chol <= 279) pts += 2;
        else if (chol >= 280) pts += 3;
        if (smoker) pts += 1;
    }
    else if (age >= 65 && age <= 69) {
        pts += (gender ? 12 : 11);
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 1;
        else if (chol >= 200 && chol <= 239) pts += 1;
        else if (chol >= 240 && chol <= 279) pts += 2;
        else if (chol >= 280) pts += 3;
        if (smoker) pts += 1;
    }
    else if (age >= 70 && age <= 74) {
        pts += (gender ? 14 : 12);
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 0;
        else if (chol >= 200 && chol <= 239) pts += 0;
        else if (chol >= 240 && chol <= 279) pts += 1;
        else if (chol >= 280) pts += 1;
        if (smoker) pts += 1;
    }
    else if (age >= 75) {
        pts += (gender ? 16 : 13);
        //Cholesterol points
        if (chol < 160) pts += 0;
        else if (chol >= 160 && chol <= 199) pts += 0;
        else if (chol >= 200 && chol <= 239) pts += 0;
        else if (chol >= 240 && chol <= 279) pts += 1;
        else if (chol >= 280) pts += 1;
        if (smoker) pts += 1;
    }   

    // HDL points
    if (hdl >= 60) pts += -1;
    else if (hdl >= 50 && hdl <= 59) pts += 0;
    else if (hdl >= 40 && hdl <= 49) pts += 1;
    else if (hdl < 40) pts += 2;

    // Systolic Blood Pressure points
    if (bp_treatment == "on") {
        if (sysBP < 120) pts += (gender ? 0 : 0);
        else if (sysBP >= 120 && sysBP <= 129) pts += (gender ? 3 : 1);
        else if (sysBP >= 130 && sysBP <= 139) pts += (gender ? 4 : 2);
        else if (sysBP >= 140 && sysBP <= 159) pts += (gender ? 5 : 2);
        else if (sysBP >= 160) pts += (gender ? 6 : 3);
    }
    else {
        if (sysBP < 120) pts += (gender ? 0 : 0);
        else if (sysBP >= 120 && sysBP <= 129) pts += (gender ? 1 : 0);
        else if (sysBP >= 130 && sysBP <= 139) pts += (gender ? 2 : 1);
        else if (sysBP >= 140 && sysBP <= 159) pts += (gender ? 3 : 1);
        else if (sysBP >= 160) pts += (gender ? 4 : 2);
    }

    // Calculate 10-year risk
    if (gender) {
        if (pts < 9) risk = 0;
        else if (pts >= 9 && pts <= 12) risk = 1;
        else if (pts >= 13 && pts <= 14) risk = 2;
        else if (pts == 15) risk = 3;
        else if (pts == 16) risk = 4;
        else if (pts == 17) risk = 5;
        else if (pts == 18) risk = 6;
        else if (pts == 19) risk = 8;
        else if (pts == 20) risk = 11;
        else if (pts == 21) risk = 14;
        else if (pts == 22) risk = 17;
        else if (pts == 23) risk = 22;
        else if (pts == 24) risk = 27;
        else if (pts >= 25) risk = 30;
    } else {
        if (pts == 0) risk = 0;
        else if (pts >= 1 && pts <= 4) risk = 1;
        else if (pts >= 5 && pts <= 6) risk = 2;
        else if (pts == 7) risk = 3;
        else if (pts == 8) risk = 4;
        else if (pts == 9) risk = 5;
        else if (pts == 10) risk = 6;
        else if (pts == 11) risk = 8;
        else if (pts == 12) risk = 10;
        else if (pts == 13) risk = 12;
        else if (pts == 14) risk = 16;
        else if (pts == 15) risk = 20;
        else if (pts == 16) risk = 25;
        else if (pts >= 17) risk = 30;
    }

    if (race == 2) risk = Math.floor(risk * 1.25);

    var risklog = 0;
    var risk2 = 0;

    if (gender && race == 2) {
        risklog += 17.114*Math.log(age);
        risklog += 0.939*Math.log(chol);
        risklog -= 18.92*Math.log(hdl);
        risklog += 4.475*Math.log(age)*Math.log(hdl);
        if (bp_treatment) {
            risklog += 29.291*Math.log(sysBP);
            risklog -= 6.432*Math.log(age)*Math.log(sysBP);
        } else {
            risklog += 27.82*Math.log(sysBP);
            risklog -= 6.087*Math.log(age)*Math.log(sysBP);
        }

        if (smoker) risklog += 0.691;
        if (diabetes) risklog += 0.874;

        risk2 = 100*(1 - Math.pow(0.9533, Math.exp(risklog - 86.61)));

    } else if (gender && race != 2) {
        risklog -= 27.799*Math.log(age);
        risklog += 4.884*Math.log(age)*Math.log(age);
        risklog += 13.54*Math.log(chol);
        risklog -= 3.114*Math.log(age)*Math.log(chol);
        risklog -= 13.578*Math.log(hdl);
        risklog += 3.149*Math.log(age)*Math.log(hdl);
        if (bp_treatment) {
            risklog += 2.019*Math.log(sysBP);
            risklog -= 0.733*Math.log(age)*Math.log(sysBP);
        } else {
            risklog += 1.957*Math.log(sysBP);
            risklog -= 0.661*Math.log(age)*Math.log(sysBP);
        }
        if (smoker) risklog += 7.574 - 1.665*Math.log(age);
        if (diabetes) risklog += 0.661;

        risk2 = 100*(1 - Math.pow(0.9665, Math.exp(risklog + 29.18)));

    } else if (!gender && race == 2) {
        risklog += 2.469*Math.log(age);
        risklog += 0.302*Math.log(chol);
        risklog -= 0.307*Math.log(hdl);
        if (bp_treatment) risklog += 1.916*Math.log(sysBP);
        else risklog += 1.809*Math.log(sysBP);
        if (smoker) risklog += 0.549;
        if (diabetes) risklog += 0.645;

        risk2 = 100*(1 - Math.pow(0.8954, Math.exp(risklog - 19.54)));
    } else if (!gender && race != 2) {
        risklog += 12.344*Math.log(age);
        risklog += 11.853*Math.log(chol);
        risklog -= 2.664*Math.log(age)*Math.log(chol);
        risklog -= 7.99*Math.log(hdl);
        risklog += 1.769*Math.log(age)*Math.log(hdl);
        if (bp_treatment) risklog += 1.797*Math.log(sysBP);
        else risklog += 1.764*Math.log(sysBP);
        if (smoker) {
            risklog += 7.837;
            risklog -= 1.795*Math.log(age);
        }
        if (diabetes) risklog += 0.658;

        risk2 = 100*(1 - Math.pow(0.9144, Math.exp(risklog - 61.18)));
    }

    risk = Math.round((risk+risk2)/2);

    //Risk classification
    var riskclass = "";
    if (risk < 5) riskclass = "Low";
    else if (risk >= 5 && risk <= 7) riskclass = "Borderline Low";
    else if (risk >= 8 && risk <= 11) riskclass = "Intermediate";
    else if (risk >= 12 && risk <= 19) riskclass = "Intermediate-High";
    else if (risk >= 20) riskclass = "High";
    


    // get weight and height
    var height = parseInt(getText("hft_input")) * 12 + parseInt(getText("hin_input"));
    var weight = parseInt(getText("weight_input"));

    //Setting texts to default
    setText("risknum", "");
    setText("classtext", "");
    setText("rclasstext", "");
    setText("desctext", "");
    setText("bminum", "");

    //Error messages
    if (isNaN(age) || isNaN(chol) || isNaN(hdl) || isNaN(sysBP) || isNaN(diaBP)) {
        setText("alerttext", "All numerical fields must be filled out or must contain a valid number");
    } else if (sysBP < 90 || sysBP > 300) {
        setText("alerttext", "Systolic pressure must be between 90 and 300");
    } else if (diaBP < 50 || diaBP > 240) {
        setText("alerttext", "Diastolic pressure must be between 50 and 240");
    } else if (diaBP > sysBP) {
        setText("alerttext", "Diastolic pressure must be lower than systolic pressure"); 
    } else if (age < 20) {
        setText("alerttext", "An age of at least 20 is recommended to use this tool.");
    } else if (chol < 130 || chol > 320) {
        setText("alerttext", "Total cholesterol must be between 130 and 320");
    } else if (hdl < 20 || hdl > 100) {
        setText("alerttext", "HDL must be between 20 and 100");
    } else if (ldl < 30 || ldl > 300) {
        setText("alerttext", "LDL must be between 30 and 300");
    } else if (chol < (hdl + ldl)) {
        setText("alerttext", "The sum of HDL and LDL must be less than total cholesterol");
    } else {
        setText("risknum",  risk + "%");
        //risk class and class-based advice
        if (riskclass == "Low") {
            setText("rclasstext", "You have a low risk of getting a CV disease.");
            setText("riskadvicetext", "Maintain a healthy lifestyle to keep your risk low.");
        } else if (riskclass == "Borderline Low") {
            setText("rclasstext", "You have a borderline low risk of getting a CV disease.");
            setText("riskadvicetext", "Maintain a healthy lifestyle to reduce the chances of getting a CVD.");
        } else if (riskclass == "Intermediate") {
            setText("rclasstext", "You have an intermediate risk of getting a CV disease.");
            setText("riskadvicetext", "Adopt and maintain a healthy lifestyle to reduce the chances of getting a CVD. You should also regularly meet your healthcare provider to monitor your health.");
        } else if (riskclass == "Intermediate-High") {
            setText("rclasstext", "You have an intermediate-high risk of getting a CV disease.");
            setText("riskadvicetext", "Adopt and maintain a healthy lifestyle to reduce the chances of getting a CVD. You should also regularly meet your healthcare provider to monitor your health.");
        } else if (riskclass == "High") {
            setText("rclasstext", "You have a high risk of getting a CV disease.");
            setText("riskadvicetext", "Adopt and maintain a healthy lifestyle to reduce the chances of getting a CVD. You should also regularly meet and work closely with your healthcare provider to monitor your health and develop a plan for your health.");
        }
        //calculating hypertension risk and bmi
        hyprisk();
        var bmi = (weight / (height * height)) * 703;
        bmi = Math.round(bmi * 10) / 10;
        setText("bminum", bmi);
    }
}

function hyprisk() {
    var sys = parseInt(getText("sysBP_input"));
    var dia = parseInt(getText("diaBP_input"));

   
    if (sys < 120 && dia < 80) {
        setText("classtext", "You don't have hypertension.");
        setText("desctext", "Your blood pressure is at a healthy level.")
    } else if (sys < 130 && dia < 80) {
        setText("classtext", "You are at risk of developing hypertension.");
        setText("desctext", "You should watch your blood pressure levels and try to maintain a healthy lifestyle.")
    } else if (sys < 140 || dia < 90) {
        setText("classtext", "You have stage 1 hypertension");
        setText("desctext", "You should consult a doctor and try to maintain a healthy lifestyle.")
    } else if (sys < 180 || dia < 120) {
        setText("classtext", "You have stage 2 hypertension");
        setText("desctext", "You should consult a doctor and try to maintain a healthy lifestyle.")
    } else {
        setText("classtext", "You are in a hypertensive crisis");
        setText("desctext", "You should consult a doctor and try to maintain a healthy lifestyle.")
    }
}
