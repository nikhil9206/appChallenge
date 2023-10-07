function risk() {
    var age = getText("age_input");
    var mamm = false;
    var cervix = false;
    var colon = false;
    var lung = false;
    var prostate = false;
    var breast = true;


    if (isNaN(age)) {
        setText("alerttext", "Please enter a valid number for the fields");
    } else if (age < 20) {
        setText("alerttext", "An age of at least 20 is recommended to use this tool.");
    } else if (age > 120) {
        setText("alerttext", "Age cannot exceed 120 years.");
    }
    else {
        setText("alerttext", "");
        mamm = age >= 40;
        cervix = age >= 25 && age <= 65;
        colon = age >= 45 && age <= 75;
        lung = age >= 50;
        prostate = age >= 50;
    } 


    if (mamm) {
        setText("breasttext", "Breast: If you are a female, you should do a self breast exam. You should also consider getting a mammogram at least once every two years.");
    } else if (age >= 20 && age <= 120) {
        setText("breasttext", "Breast: If you are a female, you should do a self breast exam.");
    } else {
        setText("breasttext", "");
    }
    if (cervix) {
        setText("cervixtext", "Cervix: Consider getting a Pap smear at least once every five years.")
    } else {
        setText("cervixtext", "");
    }

    if (colon) {
        setText("colontext", "Colon: Consider getting a colonoscopy or another modality for colorectal cancer screening at least once every ten years. Discuss the modality with your primary care physician.")
    } else {
        setText("colontext", "");
    }

    if (lung) {
        setText("lungtext", "Lung: Consider getting a low-dose CT scan yearly. Talk with a health care provider about your smoking history and whether you should get a lung cancer screening.")
    } else {
        setText("lungtext", "");
    }

    if (prostate) {
        setText("prostatetext", "Prostate: Consider screening for prostate cancer yearly. Discuss the modality with your primary care physician.")
    } else {
        setText("prostatetext", "");
    }
}