(function  () {

    /*
    Create the object with the info about me.
     */
        
    // A global. Like a badass
    window.Stefan = {};

    Stefan.presentation = function() {
        return 'Hi, I´m Stefan. This is my site and I have no idea what to do with it.';
    };

    Stefan.age = 22;

    Stefan.location = {};
    Stefan.location.city = 'Arvika';
    Stefan.location.country = 'Sweden';

    Stefan.work = 'Web developer at Ord&Bild Reklambyrå';

    Stefan.interests = '["Web development", "Sports", "Apple"]';

    Stefan.skills = '["HTML", "CSS", "Javascript", "jQuery", "PHP", "MySQL", "CodeIgniter", "Laravel", "Wordpress", "Drupal", "Facebook API", "Twitter API", "LinkedIn API", "Google Maps API", "Responsive Web Design", "Regular Expressions", "jQuery Mobile", "Photoshop", "Illustrator", "InDesign", "Flash", "Git"]';

    Stefan.learning = '["Backbone.js", "Ruby", "Ruby On Rails", "Sinatra"]';

    var commands = [
        'stefan.presentation()',
        'stefan.age',
        'stefan.location',
        'stefan.location.city',
        'stefan.location.country',
        'stefan.work',
        'stefan.interests',
        'stefan.skills',
        'stefan.learning'
    ];


    /*
    Autocomplete
     */
    var arrowDownCount = 0;
    function autoComplete (value, e) {
        // Create a regexp with the value from the input
        var regexp = new RegExp('^'+value, 'g');
        
        // Remove all current <li> from the <ul>
        $('#autocomplete').html('');
        
        // Loop through the commands-array
        for (var i = commands.length - 1; i >= 0; i--) {
            if ( value.length != 0 && commands[i].search(regexp) != '-1' ) {
                $('#autocomplete').append('<li>'+commands[i]+'</li>');
            } 
        };
        
        // Cache the suggestions
        var suggestions = $('#autocomplete').find('li');
        
        // If the user hits arrowdown
        if (e.keyCode == 40) {
            $('li.active-autocomplete').removeClass('active-autocomplete');
            console.log(suggestions[arrowDownCount]);
            $(suggestions[arrowDownCount]).addClass('active-autocomplete');
            arrowDownCount++;
        } else {
            arrowDownCount = 0;
        }

        if (e.keyCode == 13 && arrowDownCount != 0) {
            //$('input').val($(suggestions[arrowDownCount-1]).text());
            executeCommand($(suggestions[arrowDownCount-1]).text());
        }
        
    }


    /*
    Write stuff on the site
     */
    function executeCommand (value) {
        arrowDownCount = 0;
        var arrCheck = $.inArray( value, commands );
        
        switch (arrCheck) {
            // Stefan.presentation()
            case 0:
                $('#console').append('<li><span class="command">Stefan.presentation()</span><br>'+Stefan.presentation()+'</li>');                                    
            break;
            // Stefan.age
            case 1:
                $('#console').append('<li><span class="command">Stefan.age</span><br>'+Stefan.age+'</li>');
            break;
            // Stefan.location
            case 2:
                $('#console').append('<li><span class="command">Stefan.location</span>'+Stefan.location+'</li>');
            break;
            // Stefan.location.city
            case 3:
                $('#console').append('<li><span class="command">Stefan.location.city</span><br>'+Stefan.location.city+'</li>');
            break;
            // Stefan.location.country
            case 4:
                $('#console').append('<li><span class="command">Stefan.location.country</span><br>'+Stefan.location.country+'</li>');
            break;
            // Stefan.work
            case 5:
                $('#console').append('<li><span class="command">Stefan.work</span><br>'+Stefan.work+'</li>');
            break;
            // Stefan.interests
            case 6:
                $('#console').append('<li><span class="command">Stefan.interests</span><br>'+Stefan.interests+'</li>');
            break;
            // Stefan.skills
            case 7:
                $('#console').append('<li><span class="command">Stefan.skills</span><br><span class="array">'+Stefan.skills+'</span></li>');
            break;
            // Stefan.learning
            case 8:
                $('#console').append('<li><span class="command">Stefan.learning</span><br><span class="array">'+Stefan.learning+'</span></li>');
            break;

            // Error
            default:
                $('#console').append('<li class="error">ReferenceError: '+value+' is not defined</li>');        
        }
        $('input').val('');
        $('#autocomplete').html('');
    }

    /*
    Bind functions to the keyup-event
     */

    $('input').on('keyup', function(e) {
        // Store the value of the input
        var value = $(this).val().toLowerCase();

        // Run the autoComplete-function
        autoComplete(value, e);
        
        // If the user hits return (keycode = 13)
        if (e.keyCode == 13 && arrowDownCount == 0) {
            executeCommand(value);        
        } 
    
    }); // on keyup

})();