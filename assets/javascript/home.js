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
            week: 1,
            sizes: '',
            info:
                `This is week one of your pregnancy, but you're not officially pregnant yet. It might seem confusing, but your doctor will track your pregnancy and due date from the first day of your last period.`
        },
        {
            week: 2,
            sizes: '',
            info:
                `During the end of the second week, an egg is released from an ovary. This is when you are most likely to conceive if you have unprotected intercourse.`
        },
        {
            week: 3,
            sizes: '',
            info:
                `The zygote spends the next few days traveling down the fallopian tube. During this time, it divides to form a ball of cells called a blastocyst.`
        },
        {
            week: 4,
            sizes: '',
            info:
                `At this point in the mother's menstrual cycle, the lining of the uterus is thick with blood and ready to support a baby. The blastocyst sticks tightly to the wall of the uterus and receives nourishment from the mother's blood.`
        },
        {
            week: 5,
            sizes: '0.13 inch',
            info:
                `Your week-5 embryo doesn't look like much more than a tadpole right now, but he or she's already starting to form major organs—heart, stomach, liver, and kidneys—and systems—digestive, circulatory, and nervous`
        },
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
            week: 11,
            sizes: '1.61',
            info:
                `You can't see it, but baby's moving fluidly and gracefully inside your 11 weeks pregnant belly. Your 11-week fetus has skin that’s see-through, but is on its way to becoming more opaque. At 11 weeks, baby's fingers and toes aren't webbed anymore. Tooth buds, hair follicles, and nail beds are forming too.`
        },
        {
            week: 12,
            sizes: '2.13',
            info:
                `Your fetus at 12 weeks is almost done developing his or her body’s important systems and parts, which means it’s all about getting bigger and more mature from here on out. Yep, baby's about to enter the growth and maturation stage, in which organs and tissues will grow and develop rapidly.`
        },
        {
            week: 13,
            sizes: '2.19',
            info:
                `A 13-week ultrasound could detect baby’s gender, but since it can be pretty tough to make out little boy or girl parts, your doctor will probably wait until the mid-pregnancy ultrasound (around 18 to 22 weeks), when it will be much more obvious, to look and see whether you’re having a girl or a boy.`
        },
        {
            week: 14,
            sizes: '3.42',
            info:
                `A 14-week fetus’ kidneys are making urine, and the liver and spleen are doing their jobs too. You might be surprised to hear that baby at 14 weeks is growing lanugo, a thin, peach fuzz-like hair, all over—it'll help keep the body warm!`
        },
        {
            week: 15,
            sizes: '3.98',
            info:
                `You probably can't feel it yet, but a 15 weeks pregnant ultrasound would reveal that baby's squirming a ton in there, now that he or she is able to move all limbs and joints! Baby might even be hiccupping inside your 15 weeks pregnant belly.`
        },
        {
            week: 16,
            sizes: '4.57',
            info:
                `Inside your 16 weeks pregnant belly, baby’s listening to your voice, thanks to tiny bones forming in his or her ears. Your 16-week fetus is growing hair, lashes, and eyebrows. And his or her taste buds are forming.`
        },
        {
            week: 17,
            sizes: '5.12',
            info:
                `Baby's rubbery cartilage is now turning to bone. And baby's growing some meat on those bones, putting on some fat. Your 17-week fetus is growing a stronger, thicker umbilical cord too.`
        },
        {
            week: 18,
            sizes: '5.59',
            info:
                `Your 18- week fetus is working his or her muscles and practicing all kinds of moves. Can you believe baby's yawning, hiccupping, sucking, and swallowing? He or she is twisting, rolling, punching, and kicking too—and is big enough that you might be able to feel him or her doing it!`
        },
        {
            week: 19,
            sizes: '6.02',
            info:
                `Your 19-week fetus is developing a protective coating over his or her skin called vernix caseosa. It's greasy and white and you may see some of it at birth. Baby at 19 weeks is also working on his or her on five senses. Yep, nerve cells for sense of taste, hearing, sight, and smell are all developing in baby's brain.`
        },
        {
            week: 20,
            sizes: '6.46',
            info:
                `Your 20-week fetus now has working taste buds. He or she is gulping down several ounces of amniotic fluid each day—that's significantly more than before.`
        },
        {
            week: 21,
            sizes: '10.51',
            info:
                `As baby's digestive system preps for the outside world, he or she's manufacturing meconium—the tarry black substance you'll find in the first dirty diaper.`
        },
        {
            week: 22,
            sizes: '10.94',
            info:
                `Now that baby's eyes and lips are more developed, he or she's looking even more like a newborn. Baby's sleeping in cycles—about 12 to 14 hours per day (hint: they're probably those times you're not feeling any kicks!).`
        },
        {
            week: 23,
            sizes: '11.38',
            info:
                `Wondering what you’d see if you had a 23 weeks pregnant ultrasound? Well, baby's forming little nipples (yeah, really!) at this stage. And your cute little 23-week fetus’s face is fully formed—he or she just needs a little extra fat to fill it out. Baby's entertaining him- or herself by listening to your voice and your heartbeat, and can even hear some loud sounds like cars honking and dogs barking.`
        },
        {
            week: 24,
            sizes: '11.81',
            info:
                `Inside your 24 weeks pregnant belly, baby’s making progress. It isn’t just about anatomical stuff; it’s about looks too. Your 24-week fetus’ see-through skin is gradually becoming more opaque, and it’s taking on a fresh, pink glow, thanks to the small capillaries that have recently formed.`
        },
        {
            week: 25,
            sizes: '13.62',
            info:
                `Baby's enjoying his or her new sense of equilibrium—yep, your 25-week fetus is now learning which way is up and which is down. In the arena of 25 weeks fetal development, baby’s growing more fat and more hair too!`
        },
        {
            week: 26,
            sizes: '14.02',
            info:
                `You’ve probably got a couple weeks until your next prenatal appointment and typically there is no 26 weeks pregnant ultrasound, so you’re probably itching to find out what’s going on inside your 26 weeks pregnant belly. Here’s a look: Baby's taking breaths—of amniotic fluid, not air. It’s good practice for those first moments after birth!`
        },
        {
            week: 27,
            sizes: '14.41',
            info:
                `Inside your 27 weeks belly, baby’s practicing inhaling and exhaling with his or her rapidly developing lungs. And it's official: Baby's showing brain activity! From here on out, baby’s brain will keep getting more complex, turning that 27-week fetus into a real smarty pants.`
        },
        {
            week: 28,
            sizes: '14.80',
            info:
                `Inside your 28 weeks pregnant belly, baby's starting to develop more fat, so his or her once-wrinkly skin is starting to get smoother. In pretty amazing news, baby's practicing breathing. Your 28-week fetus’ lungs are mature enough that if he or she were to be born now, he or she would probably survive. Wow!`
        },
        {
            week: 29,
            sizes: '15.2',
            info:
                `Baby's getting a little cramped in there—that’s a given, seeing how fast he or she's growing. That means all those kicks and jabs are getting stronger. You might even feel a subtle, repetitive twitch. That’s your week 29 fetus hiccupping. Cool!`
        },
        {
            week: 30,
            sizes: '15.7 inches',
            info: `Her eyesight continues to develop, though it's not very keen; even after she's born, she'll keep her eyes closed for a good part of the day.`
        },
        {
            week: 31,
            sizes: '16.18',
            info:
                `If you have an uncomplicated pregnancy, you probably won’t have a 30 weeks pregnant ultrasound. But, if you could see what baby’s up to, here’s what you’d find: Your 30-week fetus’ skin is now getting smoother, but his or her brain is getting wrinklier—that’s to make way for all that essential brain tissue. Your baby at 30 weeks is now strong enough to grasp a finger! That’s a skill he or she will certainly use post-birth`
        },
        {
            week: 32,
            sizes: '16.19',
            info:
                `Your week 31 fetus is going through major brain and nerve development. His or her eyes are developing too—the irises can now react to light! (A little light does shine into your 31 weeks pregnant belly at times!) In fact, all five of baby’s senses are in working order.`
        },
        {
            week: 33,
            sizes: '17.20',
            info:
                `Baby's getting ready for his or her descent—and, as we mentioned—is likely in the head-down position now. He or she is probably feeling even more cramped.`
        },
        {
            week: 34,
            sizes: '17.72',
            info:
                `If your doctor orders it, you could have a biophysical profile (BPP), which is a combination of a 34 weeks pregnant ultrasound and a special non-stress test, which measures baby’s heart rate over a period of time. Together, these two tests help the doctor confirm that baby’s reacting well to stress and thriving.`
        },
        {
            week: 35,
            sizes: '18.19',
            info:
                `Baby’s hearing is now fully developed, and your 35-week fetus responds best to high-pitched noises. If you are pregnant with a boy, you would see on a 35 weeks pregnant ultrasound that his testes have probably fully descended (bet you hadn’t thought about that one!).`
        },
        {
            week: 36,
            sizes: '18.66',
            info:
                `At 36 weeks pregnant, baby's liver and kidneys are in working order. Circulation and immune systems are basically good to go. Now, baby is getting closer and closer to being able to breathe on his or her own. Plus, your 36-week fetus’s skin is getting smooth and soft, and his or her gums are rigid.`
        },
        {
            week: 37,
            sizes: '19.13',
            info:
                `Baby's practicing some cool new skills: inhaling, exhaling, sucking, gripping, and blinking. In less cute news, baby's getting the first sticky poop (called meconium) ready for his or her first diaper.`
        },
        {
            week: 38,
            sizes: '19.61',
            info:
                `Inside your 38 weeks pregnant belly, baby may have about an inch or so of hair already. Baby's slowly shedding that white goo on the skin (remember, that stuff called vernix caseosa?) but you might see some of it at birth.`
        },
        {
            week: 39,
            sizes: '19.96',
            info:
                `Inside your 39 weeks pregnant belly, baby's probably able to flex his or her limbs now. Baby's brain is still rapidly developing—he or she’s getting smarter by the week! Baby's nails may extend past the fingertips now.`
        },
        {
            week: 40,
            sizes: '20.16',
            info:
                `Once you’ve completed a full-term pregnancy and reached 40 weeks, your doctor will likely want to do a biophysical profile. ICYMI, this is a two-fold test. You’ll have a non-stress test, where baby’s movement and your contractions are monitored to see how baby’s heart rate reacts. You’ll also have a 40 weeks pregnant ultrasound to see what the amniotic fluid levels look like.`
        }
    ];


//=====================================================
//Video resources
//=====================================================
// Hide the Videos when page opens//
$(document).ready(function(){
    $(".iframe").hide();
});

// Show Videos when clicked//
$("#videos").click(function(){
$(".iframe").show();
});

//Return to home//
$("#return").click(function(){
$(".iframe").hide();
});



// YouTube Script with AJAX call//

  var search = "Developing_Dad"
  var queryURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=PLREt7zmQ0ia9h4ei96HMYofMIKAjjJeqP&key=AIzaSyCyVZ7FuPdYiUNsKb2pwPSJpaezNGp0yA0";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.items)
    response.items.map(function(item){
      console.log(item.contentDetails.videoId)
      var videoId= item.contentDetails.videoId
      var iFrame = $('<iframe src="https://www.youtube.com/embed/'+videoId+'?controls=0" frameborder="0" scrolling="no" id="myFrame"></iframe>');
  $(".wrapper").append(iFrame)
  console.log(iFrame)
    });

    //Return to home//
    $('#return').click(function() {
        $('.iframe').hide();
    });

    // YouTube Script with AJAX call//

    var search = 'Developing_Dad';
    var queryURL =
        'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=PLREt7zmQ0ia9h4ei96HMYofMIKAjjJeqP&key=AIzaSyCyVZ7FuPdYiUNsKb2pwPSJpaezNGp0yA0';

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        // console.log(response.items[0].contentDetails.videoId);
        // console.log(response.items[1].contentDetails.videoId);
        // console.log(response.items[2].contentDetails.videoId);
        //var data = JSON.parse(response.items);
        console.log(response.items);
        response.items.map(function(item) {
            console.log(item.contentDetails.videoId);
            var videoId = item.contentDetails.videoId;
            var iFrame = $(
                '<iframe src="https://www.youtube.com/embed/' +
                    videoId +
                    '?controls=0" frameborder="0" scrolling="no" id="myFrame"></iframe>'
            );
            // iFrame.appendTo('.wrapper');
            $('.wrapper').append(iFrame);
            console.log(iFrame);
        });
        var videoId = 'I6BdAtlV79g';
        var x = 'https://www.youtube.com/embed/' + videoId + '?controls=0';
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
