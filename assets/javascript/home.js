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
    var weeks_of_baby;

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
        weeks_of_baby = Math.ceil(date_difference / (1000 * 3600 * 24 * 7));
        console.log(weeks_of_baby);
        //Updating how many weeks are left on HTML

        //Finding the progress of the pregnancy by percent
        var progress_percent = (weeks_of_baby / 40) * 100;
        console.log(progress_percent);
        $('.progress-bar').width(progress_percent + '%');
        updateTable(weeks_of_baby);
    }

    function updateTable(weeks_of_baby) {
        $('.weekNumber').html(weeks_of_baby);
        $.each(tableData, function(index, value) {
            if (tableData[index].week === weeks_of_baby) {
                var table_row = $('<tr>');
                table_row.append('<td>' + tableData[index].week);
                table_row.append('<td>' + tableData[index].sizes);
                table_row.append('<td>' + tableData[index].info);
                $('thead').append(table_row);
            }
        });
    }

    //*************************************************************
    // Table Data Object
    //*************************************************************
    var tableData = [
        {
            week: 6,
            sizes: '1/4 inch',
            info:
                'Blood is circulating, hands and feet are little paddle shapes. Eyes, nose, and ears are sprouting'
        },
        {
            week: 7,
            sizes: '1/2 inch',
            info: 'Arm and leg joints forming, kidneys have started developing'
        },
        {
            week: 8,
            sizes: '.60 inches',
            info: 'Slightly webbed fingers and toes, tail is gone'
        },
        {
            week: 9,
            sizes: '1 inch',
            info:
                'Major organs have formed and are now growing (Brain, heart, lungs)'
        },
        {
            week: 10,
            sizes: '1.2 inches',
            info:
                'Cartilage and bones forming, fingernails and hair start appearing'
        },
        {
            week: 30,
            sizes: '15.7 inches',
            info: `Her eyesight continues to develop, though it's not very keen; even after she's born, she'll keep her eyes closed for a good part of the day.`
        }
    ];
});
