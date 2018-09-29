$(document).ready(function () {
    //******************************************************************************************************************
    // Firebase
    //******************************************************************************************************************
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC9wXblkYdSGpUua-vlK1-7SOurBhMk9WU",
        authDomain: "heber-jimenez.firebaseapp.com",
        databaseURL: "https://heber-jimenez.firebaseio.com",
        projectId: "heber-jimenez",
        storageBucket: "heber-jimenez.appspot.com",
        messagingSenderId: "998070338439"
    };
    firebase.initializeApp(config);

    // Create a variable to reference the database
    var db = firebase.database();


    //******************************************************************************************************************
    // Functiions
    //******************************************************************************************************************

    //==========================================================================
    // Progress bar udates
    //==========================================================================
    function updateProgressBar(user_name) {
        //40 weeks of pregnancy
        var days_Left_unil_baby;
        var todays_date = new Date();
        console.log('todays date:  ' + todays_date);

        var num = db.ref('users/'+user_name).on('value', function(snapshot) {
            console.log(snapshot.val().user_baby_due_dated_string);

            //Making the due date from string to a date
            var baby_due_date = new Date(snapshot.val().user_baby_due_dated_string);
            console.log(baby_due_date);

            var date_difference = Math.abs(baby_due_date.getDate() - todays_date.getDate());

            console.log(days_Left_unil_baby);
        });
    }


    //******************************************************************************************************************
    // Button Clicks
    //******************************************************************************************************************

    //==========================================================================
    // Action for loggin button.
    //==========================================================================
    $("#submitButton").on("click", function () {
        event.preventDefault();
        var user_name = $("#username").val().trim();
        updateProgressBar(user_name);
        //window.location.href = "../../home.html";
    });

    //==========================================================================
    // Creating a new accoun
    //==========================================================================
    $("#createAccount").on("click", function () {
        // Need to load the create page.

        // window.location.href = "../../"

        // User's information to creat account
        var first_name = "john";
        var last_name = "doe";
        var user_email = "email";
        var user_name = "heeb";
        var user_password = "pass";
        var user_confirm_password = "pass";
        var user_baby_due_dated_string = "12/01/18"

        // Pushing user info to Firebase
        db.ref('/users/'+user_name).set({
            first_name,
            last_name,
            user_email,
            user_name,
            user_password,
            user_confirm_password,
            user_baby_due_dated_string,

        });
    });
});