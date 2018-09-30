$(document).ready(function () {
    //******************************************************************************************************************
    // Global variables
    //******************************************************************************************************************
    var progress_bar_classes = $('#progress, #progress-bar');
    //progress_bar_classes.width("100%");

    //******************************************************************************************************************
    // Firebase
    //******************************************************************************************************************
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCFzjooljdUzuaCdgT0bpYltwVLdEIFuvw",
        authDomain: "dev-dads.firebaseapp.com",
        databaseURL: "https://dev-dads.firebaseio.com",
        projectId: "dev-dads",
        storageBucket: "",
        messagingSenderId: "811600816993"
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
    function updateProgressBar(baby_due_date) {
        window.location.href = "../../home.html";
        //40 weeks of pregnancy
        //Setting todays date
        var todays_date = new Date();
        //Finding the difference bewtween the dates by milli sec.
        var date_difference = baby_due_date - todays_date;
        //Converting millisecs to weeks
        var weeks_Left_unil_baby = Math.ceil(date_difference / (1000 * 3600 * 24 * 7));
        //Updating how many weeks are left on HTML

        //Finding the progress of the pregnancy by percent
        var progress_percent = (1 - (weeks_Left_unil_baby / 40)) * 100;
        console.log(progress_percent);
        $('.progress-bar').width(progress_percent);
    }


    //******************************************************************************************************************
    // Button Clicks
    //******************************************************************************************************************
    //==========================================================================
    // Action for loggin button.
    //==========================================================================
    $("#submitLogin").on("click", function () {
        event.preventDefault();

        var loggin_name = $("#username").val().trim();
        var loggin_password = $("#password").val().trim();

        //if pass and user then
        db.ref('users/' + loggin_name).on('value', function(snapshot) {
            if(snapshot.val().user_password === loggin_password) {
                var baby_due_date = new Date(snapshot.val().user_baby_due_date_string);
                updateProgressBar(baby_due_date);
            }
        });
    });

    //==========================================================================
    // Load new account page
    //==========================================================================
    $("#createAccount").on("click", function () {
        //Loading the create page.
        window.location.href = "createAcct.html"
    });

    //==========================================================================
    // Create new Account
    //==========================================================================
    $('#submitNewAcct').on('click', function () {
        event.preventDefault();
        // User's information to creat account
        var username = $("#createUsername").val().trim();
        var user_password = $("#createPassword").val().trim();
        //var user_baby_due_date_string = "12/01/18"

        // Setting user info to Firebase
        db.ref('/users/'+username).set({
            username,
            user_password,
            user_baby_due_date_string: "12/01/18",
        });
    });


    //******************************************************************************************************************
    // Animations
    //******************************************************************************************************************
        // show/hide table/card on mobile
        $('#weekInfoBtn').click(function() {
            $('.back').slideToggle("slow", "linear");
            $('.front').slideToggle("slow", "linear");
            $('#weekInfoBtn').toggle("slow", "linear");
            $('#weekInfoBtn2').toggle("slow", "linear");
        });

        $('#weekInfoBtn2').click(function() {
            $('.back').slideToggle("slow", "linear");
            $('.front').slideToggle("slow", "linear");
            $('#weekInfoBtn2').toggle("slow", "linear");
            $('#weekInfoBtn').toggle("slow", "linear");
        });
});
