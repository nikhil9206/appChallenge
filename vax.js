function risk() {
    var age = getText("age_input");
    var flu = false;
    var covid = false;
    var tdp = false;
    var mmr = false;
    var hpv = false;
    var meningitis = false;
    var zoster = false;
    var rsv = false;
    var pneumonia = false;


    if (isNaN(age)) {
        setText("alerttext", "Please enter a valid number for the fields");
    } else if (age < 20) {
        setText("alerttext", "An age of at least 20 is recommended to use this tool.");
    } else if (age > 120) {
        setText("alerttext", "Age cannot exceed 120 years.");
    }
    else {
        setText("alerttext", "");
        flu = true;
        covid = true;
        tdp = true;
        mmr = true;
        hpv = age <= 25;
        meningitis = age <= 30;
        zoster = age >= 50;
        rsv = age >= 60;
        pneumonia = age >= 65;
    } 


    if (flu) {
        setText("flutext", "Influenza (yearly)");
    } else {
        setText("flutext", "");
    }
    if (covid) {
        setText("covidtext", "COVID-19 (as recommended by CDC)")
    } else {
        setText("covidtext", "");
    }

    if (tdp) {
        setText("tdptext", "Tetanus, diphtheria, and pertussis (every 10 years)")
    } else {
        setText("tdptext", "");
    }

    if (mmr) {
        setText("mmrtext", "MMR (at least one as an adult)")
    } else {
        setText("mmrtext", "");
    }

    if (hpv) {
        setText("hpvtext", "HPV (at least once)")
    } else {
        setText("hpvtext", "");
    }

    if (meningitis) {
        setText("meningitistext", "Meningitis (at least once)")
    } else {
        setText("meningitistext", "");
    }

    if (zoster) {
        setText("zostertext", "Zoster (at least once)")
    } else {
        setText("zostertext", "");
    }

    if (rsv) {
        setText("rsvtext", "RSV (at least once)")
    } else {
        setText("rsvtext", "");
    }

    if (pneumonia) {
        setText("pneumoniatext", "Pneumonia (at least once)")
    } else {
        setText("pneumoniatext", "");
    }
}