function calculateRisk() {
    var gender = true; // false for male, true for female
    var age = 0;
    var chol = 0;
    var smoker = false;
    var hdl = 0;
    var sysBP = 0;

    var pts = 0;
    var risk = 0;

    // Age points
    if (age >= 30 && age <= 34) pts += (gender ? 9 : 0);
    else if (age >= 35 && age <= 39) pts += (gender ? 8 : 0);
    else if (age >= 40 && age <= 44) pts += (gender ? 7 : 1);
    else if (age >= 45 && age <= 49) pts += (gender ? 5 : 3);
    else if (age >= 50 && age <= 54) pts += (gender ? 4 : 4);
    else if (age >= 55 && age <= 59) pts += (gender ? 3 : 5);
    else if (age >= 60 && age <= 64) pts += (gender ? 2 : 6);
    else if (age >= 65 && age <= 69) pts += (gender ? 1 : 7);
    else if (age >= 70) pts += (gender ? 0 : 8);

    // Cholesterol points
    if (chol < 160) pts += 0;
    else if (chol >= 160 && chol <= 199) pts += 4;
    else if (chol >= 200 && chol <= 239) pts += 7;
    else if (chol >= 240 && chol <= 279) pts += 9;
    else if (chol >= 280) pts += 11;

    // Smoking points
    if (smoker) pts += (gender ? 0 : 8);

    // HDL points
    if (hdl >= 60) pts += -1;
    else if (hdl >= 50 && hdl <= 59) pts += 0;
    else if (hdl >= 40 && hdl <= 49) pts += 1;
    else if (hdl < 40) pts += 2;

    // Systolic Blood Pressure points
    if (sysBP < 120) pts += 0;
    else if (sysBP >= 120 && sysBP <= 129) pts += 1;
    else if (sysBP >= 130 && sysBP <= 139) pts += 2;
    else if (sysBP >= 140 && sysBP <= 159) pts += 3;
    else if (sysBP >= 160) pts += 4;

    // Calculate 10-year risk
    if (gender) {
        if (pts <= 9) risk = 1;
        else if (pts >= 10 && pts <= 12) risk = 2;
        else if (pts >= 13 && pts <= 14) risk = 3;
        else if (pts >= 15 && pts <= 16) risk = 4;
        else if (pts >= 17 && pts <= 18) risk = 5;
        else if (pts >= 19 && pts <= 20) risk = 6;
        else if (pts >= 21 && pts <= 22) risk = 8;
        else if (pts >= 23 && pts <= 24) risk = 10;
        else if (pts >= 25 && pts <= 26) risk = 12;
        else if (pts >= 27 && pts <= 28) risk = 16;
        else if (pts >= 29) risk = 20;
    } else {
        if (pts <= 9) risk = 0;
        else if (pts >= 10 && pts <= 12) risk = 1;
        else if (pts >= 13 && pts <= 14) risk = 1;
        else if (pts >= 15 && pts <= 16) risk = 1;
        else if (pts >= 17 && pts <= 18) risk = 2;
        else if (pts >= 19 && pts <= 20) risk = 2;
        else if (pts >= 21 && pts <= 22) risk = 3;
        else if (pts >= 23 && pts <= 24) risk = 4;
        else if (pts >= 25 && pts <= 26) risk = 5;
        else if (pts >= 27 && pts <= 28) risk = 6;
        else if (pts >= 29) risk = 8;
    }

    return risk;
}

console.log(calculateRisk());