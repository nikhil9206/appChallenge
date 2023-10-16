function risk() {
    var age = parseInt(getText("age_input"));
    var gender = (parseInt(getValue("gender_input")) == 2); // false for male, true for female
    var checkboxElement = document.getElementById('smoker_input');
    var is_smoker = checkboxElement.checked;  // `isChecked` will be either true or false    
    var mamm = false;
    var cervix = false;
    var colon = false;
    var lung = false;
    var prostate = false;
    var breast = true;

    var breastBlock = document.getElementById("breast");
    var lungBlock = document.getElementById("lung");
    var colonBlock = document.getElementById("colon");
    var cervixBlock = document.getElementById("cervix");
    var prostateBlock = document.getElementById("prostate");


    if (isNaN(age)) {
        setText("alerttext", "Please enter a valid number for the fields");
    } else if (age < 20) {
        setText("alerttext", "An age of at least 20 is recommended to use this tool.");
    } else if (age > 120) {
        setText("alerttext", "Age cannot exceed 120 years.");
    } else {
        setText("alerttext", "");
    } 

    // all breast cancer
    if (age < 40) {
        breastBlock.style.display = 'none';
        setText("breasttext", "")
    } else if (gender == false) {
        breastBlock.style.display = 'none';
        setText("breasttext", "")
    } else if (age >= 40 && age < 45 && gender == true) {
        breastBlock.style.display = 'block';
        setText("breasttext", "Women ages 40 to 44 should have the choice to start annual breast cancer screening with mammograms if they wish to do so. The pros and cons of screening should be considered when making this decision.");
    } else if (age >= 45 && age < 55 && gender == true) {
        breastBlock.style.display = 'block';
        setText("breasttext", "Women ages 45 to 54 should get mammograms every year. Be sure you understand the pros and cons of breast cancer screening.");
    } else if (age >= 55 && age < 65 && gender == true) {
        breastBlock.style.display = 'block';
        setText("breasttext", "Women ages 55 to 64, should switch to getting mammograms every 2 years, or you can continue to get one every year.");
    } else if (age >= 65 && gender == true) {
        breastBlock.style.display = 'block';
        setText("breasttext", "Women ages 65 and over should get a mammogram every 2 years, or you can choose to get one every year. Be sure you understand the pros and cons of breast cancer screening.");
    }

    // all cevix cancer
    if (age < 25) {
        cervixBlock.style.display = 'none';
        setText("cervixtext", "");
    } else if (gender == false){
        cervixBlock.style.display = 'none';
        setText("cervixtext", "");
    } else if (age >= 25 && age <= 65) {
        cervixBlock.style.display = 'block';
        setText("cervixtext","Starting at age 25 and through age 65, all people with a cervix should have a primary HPV test every 5 years.")
    } else if (age > 65) {
        cervixBlock.style.display = 'block';
        setText("cervixtext","No testing is needed if you’ve had regular cervical cancer testing with normal results during the previous 10 years.")
    }

    if (age >= 20 && age < 45) {
        colonBlock.style.display = 'block';
        setText("colontext", "Find out if you are at higher than average risk for colon cancer because of family history, genetic disorders, or other factors. If not, then testing is not needed at this time. If you are at increased risk, talk to a health care provider about when you need to start testing and what tests are right for you.")
    } else if (age >= 45 && age <= 75) {
        colonBlock.style.display = 'block';
        setText("colontext", "All people at average risk should start testing at age 45. There are several testing options. Talk with a health care provider about which tests are best for you and how often testing should be done.");
    } else if (age >= 76 && age <= 85) {
        colonBlock.style.display = 'block';
        setText("colontext", "People aged 76 to 85 should talk with their health care provider about whether continuing screening is right for them.");
    } else if (age > 85) {
        colonBlock.style.display = 'block';
        setText("colontext", "Most people older than 85 should no longer be screened.");
    }

    if (is_smoker) {
        lungBlock.style.display = 'block';
        setText("lungtext", "If you have a smoking history, talk to a health care provider about it and whether you should get an annual low-dose CT scan to screen for early lung cancer. Screening may benefit if you smoke now or smoked before (quit within the past 15 years), have no signs of lung cancer, and have a 20 pack-year smoking history. ")
    } else {
        lungBlock.style.display = 'none';
        setText("lungtext", "");
    }

    if (age < 40) {
        prostateBlock.style.display = 'none';
        setText("prostatetext", "")
    } else if (gender == true) {
        prostateBlock.style.display = 'none';
        setText("prostatetext", "");
    } else if (age >= 40 && age < 45 && gender == false) {
        prostateBlock.style.display = 'block';
        setText("prostatetext", "Men with more than one close relative who had prostate cancer before age 65 are at even higher risk and should talk with a doctor about testing starting at age 40.");
    } else if (age >= 45 && age < 50 && gender == false) {
        prostateBlock.style.display = 'block';
        setText("prostatetext", "Starting at age 45, men at higher than average risk of prostate cancer should talk with a doctor about the uncertainties, risks, and potential benefits of testing so they can decide if they want to be tested.");
    } else if (age >= 50 && gender == false) {
        prostateBlock.style.display = 'block';
        setText("prostatetext", "Starting at age 50, all men at average risk should talk with a health care provider about the uncertainties, risks, and potential benefits of testing so they can decide if they want to be tested. Overall health status, and not age alone, is important when making decisions about prostate cancer testing. Men who can expect to live at least 10 more years should talk with a health care provider about the uncertainties, risks, and potential benefits of testing so they can decide if they want to be tested.");
    }


}
