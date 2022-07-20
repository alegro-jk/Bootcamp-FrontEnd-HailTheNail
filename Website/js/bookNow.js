window.onload = function() {

    var logo_home = document.getElementById('logo_home');
    if(logo_home) {
        logo_home.onclick = function() {
        { document.location = "htn.html" }
        }
    }

    var menulink = document.getElementById('menulink');
    var menu = document.getElementById('menu');

    menulink.onclick = function() {
        if(menu.style.display == "none") {
            menu.style.display = "block";
        }
        else {
            menu.style.display = "none";
        }
    }

}

    function formdata() {
        var fname= document.getElementById("fname").value;
        var lname= document.getElementById("lname").value;
        var birthday= document.getElementById("birthday").value;
        var email= document.getElementById("email").value;
        var phone= document.getElementById("phone").value;
        var contact= document.getElementById("contact").value;
        var avail= document.getElementById("avail");
        var pref_tech= document.getElementById("pref_tech").value;
        var pref_branch= document.getElementById("pref_branch").value;
        var day_visit= document.getElementById("day_visit").value;
        var time= document.getElementById("time").value;
        var req= document.getElementById("req").value;

        if(fname == "" || lname == "" || birthday == "" || email == "" || phone == "" ||
        contact == "" || avail == "" || pref_tech == "" || pref_branch == "" ||
        day_visit == "" || time == "" || req == "") {
            alert("Please fill out all the needed information.");
            return false;
        }
        else {
            alert("Form submitted! Thank you!")
        }
    }