$(document).ready(function() {
    //******************************************************************************************************************
    // Firebase
    //******************************************************************************************************************
    // Initialize Firebase
    var config = {
        apiKey: 'AIzaSyCFzjooljdUzuaCdgT0bpYltwVLdEIFuvw',
        authDomain: 'dev-dads.firebaseapp.com',
        databaseURL: 'https://dev-dads.firebaseio.com',
        projectId: 'dev-dads',
        storageBucket: '',
        messagingSenderId: '811600816993'
    };
    firebase.initializeApp(config);

    // Create a variable to reference the database
    var db = firebase.database();

    // Initiating user with atleast one user
    db.ref('/users/Sample').set({
        username: 'Example User',
        user_password: 'password',
        user_baby_due_date_string: 'mm/dd/yyyy'
    });

    //******************************************************************************************************************
    // Button Clicks
    //******************************************************************************************************************
    //==========================================================================
    // Action for loggin button.
    //==========================================================================
    $('#submitLogin').on('click', function() {
        event.preventDefault();

        //Taking username from user
        var loggin_name = $('#username')
            .val()
            .trim();
        //Taking password from user
        var loggin_password = $('#password')
            .val()
            .trim();

        //Varrifies username and password
        db.ref('/users/' + loggin_name).on('value', function(snapshot) {
            if (snapshot.val().user_password === loggin_password) {
                sessionStorage.setItem('username', loggin_name);
                window.location.href = 'home.html';
            }
        });
    });

    //==========================================================================
    // Load new account page
    //==========================================================================
    $('#createAccount').on('click', function() {
        //Loading the create page.
        window.location.href = 'createAcct.html';
    });

    //==========================================================================
    // Create new Account
    //==========================================================================
    $('#submitNewAcct').on('click', function() {
        event.preventDefault();
        // User's information to creat account
        var username = $('#createUsername')
            .val()
            .trim();
        var user_password = $('#createPassword')
            .val()
            .trim();
        var user_baby_due_date_string = $('#dueDate').val();
        var username_exists = false;

        //Checking if use input meet criteria
        db.ref('/users').once('value', function(snapshot) {
            // This is checking if username already exists
            if (snapshot.hasChild(username)) {
                username_exists = true;
            }

            if (username_exists) {
                // Alerts user if user name is take
                alert('User name not available. Please select a new username');
            } else if (user_password.length < 5) {
                // Alerts user if password is to short
                alert('Login password must be longer than 6 characters long');
            } else if (username && user_password && user_baby_due_date_string) {
                // Setting user info to Firebase
                db.ref('/users/' + username).set({
                    username,
                    user_password,
                    user_baby_due_date_string
                });
                window.location.href = 'index.html';
            } else {
                alert('Please fill in all the fields.');
            }
        });
    });

    //******************************************************************************************************************
    // APIs
    //******************************************************************************************************************

    
    
});
