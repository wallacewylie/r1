function showInput() {
    if (document.getElementById("firstname").value == " ") {
        return false;
    } else {
        document.getElementById('display').innerHTML = "First Name: " +
            document.getElementById("firstname").value + "<br><br>" + "Last Name: " +
            document.getElementById("lastname").value + "<br><br>" + "Email Address: " +
            document.getElementById("emailaddress").value + "<br><br>" + "Company: " +
            document.getElementById("company").value + "<br><br>" + "Title: " +
            document.getElementById("title").value + "<br><br>" + "Country: " +
            document.getElementById("country").value + "<br><br>" + "State: " +
            document.getElementById("states").value + "<br><br>" + "Additional Comments: " +
            document.getElementById("additionalcomments").value;
    }
}

function countrySelectCheck(countrySelect) {
        if (document.getElementById("country").value == "United States") {
            document.getElementById("statesMenu").style.display = "block";
        }
        else {
            document.getElementById("statesMenu").style.display = "none";
        }
}
