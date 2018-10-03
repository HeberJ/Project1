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

    //******************************************************************************************************************
    // Button Clicks
    //******************************************************************************************************************
    //==========================================================================
    // Action for loggin button.
    //==========================================================================
    $('#submitLogin').on('click', function() {
        event.preventDefault();

        var loggin_name = $('#username')
            .val()
            .trim();
        var loggin_password = $('#password')
            .val()
            .trim();

        db.ref('users/' + loggin_name).on('value', function(snapshot) {
            if (snapshot.val().user_password === loggin_password) {
                sessionStorage.setItem('username', loggin_name);
                window.location.href = '../../home.html';
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

        if (username && user_password && user_baby_due_date_string) {
            if (user_password.length > 5) {
                // Setting user info to Firebase
                db.ref('/users/' + username).set({
                    username,
                    user_password,
                    user_baby_due_date_string
                });
            } else {
                alert('Password must be longer than 6 characters long.');
            }
        } else {
            alert('Please fill in all the fields.');
        }
    });

    //******************************************************************************************************************
    // Animations
    //******************************************************************************************************************
    // show/hide table/card on mobile
    $('#weekInfoBtn').click(function() {
        $('.back').slideToggle('slow', 'linear');
        $('.front').slideToggle('slow', 'linear');
        $('#weekInfoBtn').toggle('slow', 'linear');
        $('#weekInfoBtn2').toggle('slow', 'linear');
    });

    $('#weekInfoBtn2').click(function() {
        $('.back').slideToggle('slow', 'linear');
        $('.front').slideToggle('slow', 'linear');
        $('#weekInfoBtn2').toggle('slow', 'linear');
        $('#weekInfoBtn').toggle('slow', 'linear');
    });
});
