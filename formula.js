function calculateRisk() {
    var gender = true; // false for male, true for female
    var age = getText("age_input");
    var chol = getText("chol_input");
    var smoker = false;
    var hdl = getText("hdl_input");;
    var sysBP = getText("sysBP_input");
    var bp_treatment = false;

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
    if (bp_treatment) {
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

    return risk;
}

console.log(calculateRisk());