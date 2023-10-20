function risk() {
    var age = parseInt(getText("age_input"));
    var flu = false;
    var covid = false;
    var tdp = false;
    var mmr = false;
    var hpv = false;
    var meningitis = false;
    var zoster = false;
    var rsv = false;
    var pneumonia = false;
    var hepatitis = false;


    var fluBlock = document.getElementById("flu");
    var covidBlock = document.getElementById("covid");
    var tdpBlock = document.getElementById("tdp");
    var mmrBlock = document.getElementById("mmr");
    var hpvBlock = document.getElementById("hpv");
    var meningitisBlock = document.getElementById("meningitis");
    var zosterBlock = document.getElementById("zoster");
    var rsvBlock = document.getElementById("rsv");
    var pneumoniaBlock = document.getElementById("pneumonia");
    var hepatitisBlock = document.getElementById("hepatitis");


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
        if (age <= 25) {
            hpv = true;
        }
        if (age <= 30) {
            meningitis = true;
        }
        if (age >= 50) {
            zoster = true;
        }
        if (age >= 60) {
            rsv = true;
        }
        if (age >= 65) {
            pneumonia = true;
        }
        if (age <= 60) {
            hepatitis = true;
        }
    } 


    if (flu) {
        fluBlock.style.display = "block";
        setText("flutext", "Influenza (yearly)");
    } else {
        fluBlock.style.display = "none";
        setText("flutext", "");
    }
    if (covid) {
        covidBlock.style.display = "block";
        setText("covidtext", "COVID-19 (as recommended by CDC)");
    } else {
        covidBlock.style.display = "none";
        setText("covidtext", "");
    }

    if (tdp) {
        tdpBlock.style.display = "block";
        setText("tdptext", "Tetanus, diphtheria, and pertussis (every 10 years)");
    } else {
        tdpBlock.style.display = "none";
        setText("tdptext", "");
    }

    if (mmr) {
        mmrBlock.style.display = "block";
        setText("mmrtext", "MMR (at least one as an adult)");
    } else {
        mmrBlock.style.display = "none";
        setText("mmrtext", "");
    }

   

    if (meningitis) {
        meningitisBlock.style.display = "block";
        setText("meningitistext", "Meningitis (at least once)");
    } else {
        meningitisBlock.style.display = "none";
        setText("meningitistext", "");
    }

    if (zoster) {
        zosterBlock.style.display = "block";
        setText("zostertext", "Zoster (at least once)");
    } else {
        zosterBlock.style.display = "none";
        setText("zostertext", "");
    }

    if (rsv) {
        rsvBlock.style.display = "block";
        setText("rsvtext", "RSV (at least once)");
    } else {
        rsvBlock.style.display = "none";
        setText("rsvtext", "");
    }

    if (pneumonia) {
        pneumoniaBlock.style.display = "block";
        setText("pneumoniatext", "Pneumonia (at least once)");
    } else {
        pneumoniaBlock.style.display = "none";
        setText("pneumoniatext", "");
    }

    if (hepatitis) {
        hepatitisBlock.style.display = "block";
        setText("hepatitistext", "Hepatitis (Should recive 2-4 doses)");
    } else {
        hepatitisBlock.style.display = "none";
        setText("hepatitistext", "");
    }

    if (hpv) {
        hpvBlock.style.display = "block";
        setText("hpvtext", "HPV (at least once)");
    } else {
        hpvBlock.style.display = "none";
        setText("hpvtext", "");
    }
}
