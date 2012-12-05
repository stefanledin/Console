(function  () {
        
    // A global. Like a badass
    window.Stefan = {};

    Stefan.presentation = function() {
        return 'Hi, I´m Stefan. This is my site and I have no idea what to do with it.';
    };

    Stefan.age = 22;

    Stefan.location = {};
    Stefan.location.city = 'Arvika';
    Stefan.location.country = 'Sweden';

    Stefan.work = 'Web developer';

    var commands = [
        'stefan.presentation()',
        'stefan.age',
        'stefan.location',
        'stefan.location.city',
        'stefan.location.country',
        'stefan.work'
    ];
    
    $('input').on('keyup', function(e) {
        
        if (e.keyCode == 13) {
            
            var value = $(this).val().toLowerCase();
            console.log(value);
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

                // Error
                default:
                    $('#console').append('<li class="error">ReferenceError: '+value+' is not defined</li>');        
            }
            $(this).val('');
    }
    });

})();