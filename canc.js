function risk() {
    var age = getText("age_input");

    if (age >= 21 || age <= 29) {
        setText("classtext", "Recommendations for ages 21-29");
        setText("desctext", "Breast cancer screening \n Cervical cancer screening")
    } 
}