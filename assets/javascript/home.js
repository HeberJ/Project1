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
    // Globale variables
    //******************************************************************************************************************
    // Initialize Firebase
    //40 weeks of pregnancy
    var username = sessionStorage.getItem('username');
    var baby_due_date;

    db.ref('users/' + username).on('value', function(snapshot) {
        baby_due_date = new Date(snapshot.val().user_baby_due_date_string);
        updateProgressBar(baby_due_date);
    });
    //==========================================================================
    // Progress bar udates
    //==========================================================================
    function updateProgressBar(baby_due_date) {
        console.log(baby_due_date);
        //Setting todays date
        var todays_date = new Date();
        //Finding the difference bewtween the dates by milli sec.
        var date_difference = baby_due_date - todays_date;
        //Converting millisecs to weeks
        var weeks_Left_unil_baby = Math.ceil(
            date_difference / (1000 * 3600 * 24 * 7)
        );
        //Updating how many weeks are left on HTML

        //Finding the progress of the pregnancy by percent
        var progress_percent = (1 - weeks_Left_unil_baby / 40) * 100;
        console.log(progress_percent);
        $('.progress-bar, progress').width(progress_percent + '%');
    }

    //*************************************************************
    // Table Data Object
    //*************************************************************
    var tableData = [
        {week_6: 
            [{week: "6", size: "1/4 inch", info: "Blood is circulating, hands and feet are little paddle shapes. Eyes, nose, and ears are sprouting"}]
        },
        {week_7:
            [{week: "7", size: "1/2 inch", info: "Arm and leg joints forming, kidneys have started developing"}]        
        },
        {week_8:
            [{week: "8", size: ".60 inches", info: "Slightly webbed fingers and toes, tail is gone"}]
        },
        {week_9:
            [{week: "9", size: "1 inch", info: "Major organs have formed and are now growing (Brain, heart, lungs)"}]
        },
        {week_10:
            [{week: "10", size: "1.2 inches", info: "Cartilage and bones forming, fingernails and hair start appearing"}]
        }
    ]

});

