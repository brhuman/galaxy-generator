// Generator by Maksim K.
// brhumaan@gmail.com

// VARIABLES for generators
var stars_smallest;
var stars_small;
var stars_medium;
var stars_largest;
var nebula_numbers;
var comet_numbers;
var hideUi = false;

var timerSeconds; // timer to next galaxy in seconds

var gradientColors = [
    '#21343D',
    '#20253A',
    '#231D35',
    '#2A192D',
    '#2D1923',
    '#182B26',
    '#1A2615',
    '#262515',
    '#1C120F',
    '#36243b',
    '#242b3b',
    "#18262f",
    '#182b2f',    
    '#182e2f',    
    '#182f29',    
    '#150f1f',    
    '#180f1f',    
    '#0f1f14',    
    '#1f180f',    
    '#1f0f1b',    
// Dark colors
    '#000000',
    '#0e0b06',
    '#121107',
    '#07120a',
    '#091207',
    '#071209',
    '#07120a',
    '#071212',
    '#070f12',
    '#070c12',
    '#070912',
];


//************ SLIDER INITIALIZATION:
// Smallest stars
$("#slider-range-1").slider({
    range: true,
    min: 0,
    max: 800,
    values: [100, 400],
    slide: function (event, ui) {
        $("#amount-1").val(ui.values[0] + " - " + ui.values[1]);
    }
});

// Small stars
$("#slider-range-2").slider({
    range: true,
    min: 0,
    max: 400,
    values: [100, 300],
    slide: function (event, ui) {
        $("#amount-2").val(ui.values[0] + " - " + ui.values[1]);
    }
});

// Medium stars
$("#slider-range-3").slider({
    range: true,
    min: 0,
    max: 100,
    values: [20,40],
    slide: function (event, ui) {
        $("#amount-3").val(ui.values[0] + " - " + ui.values[1]);
    }
});

// Large stars
$("#slider-range-4").slider({
    range: true,
    min: 0,
    max: 20,
    values: [1, 10],
    slide: function (event, ui) {
        $("#amount-4").val(ui.values[0] + " - " + ui.values[1]);
    }
});

// Nebulas
$("#slider-range-5").slider({
    range: true,
    min: 0,
    max: 5,
    values: [2, 4],
    slide: function (event, ui) {
        $("#amount-5").val(ui.values[0] + " - " + ui.values[1]);
    }
});

// Comets
$("#slider-range-6").slider({
    range: true,
    min: 0,
    max: 8,
    values: [1, 6],
    slide: function (event, ui) {
        $("#amount-6").val(ui.values[0] + " - " + ui.values[1]);
    }
});

// Seconds
$("#slider-range-7").slider({
    range: 'max',
    min: 3,
    max: 120,
    value: [5],
    slide: function (event, ui) {
        $("#amount-7").val(ui.value);
    }
});




// Write values to HTML
$("#amount-1").val($("#slider-range-1").slider("values", 0) +
    " - " + $("#slider-range-1").slider("values", 1));
    
$("#amount-2").val($("#slider-range-2").slider("values", 0) +
    " - " + $("#slider-range-2").slider("values", 1));

$("#amount-3").val($("#slider-range-3").slider("values", 0) +
    " - " + $("#slider-range-3").slider("values", 1));

$("#amount-4").val($("#slider-range-4").slider("values", 0) +
    " - " + $("#slider-range-4").slider("values", 1));

$("#amount-5").val($("#slider-range-5").slider("values", 0) +
    " - " + $("#slider-range-5").slider("values", 1));

$("#amount-6").val($("#slider-range-6").slider("values", 0) +
    " - " + $("#slider-range-6").slider("values", 1));

$("#amount-7").val($("#slider-range-7").slider("value"));

// $("#ui-hide-checkbox").prop('checked', hideUi);


// Variable Get
variableGet();
function variableGet() {
    //stars_smallest
    var stars_smallest_arr = $("#slider-range-1").slider("option", "values");
    stars_smallest = randomNumber(stars_smallest_arr[0], stars_smallest_arr[1]);
    
    //stars_small
    var stars_small_arr = $("#slider-range-2").slider("option", "values");
    stars_small = randomNumber(stars_small_arr[0], stars_small_arr[1]);
    
    //stars_medium
    var stars_medium_arr = $("#slider-range-3").slider("option", "values");
    stars_medium = randomNumber(stars_medium_arr[0], stars_medium_arr[1]);
    
    //stars_largest
    var stars_largest_arr = $("#slider-range-4").slider("option", "values");
    stars_largest = randomNumber(stars_largest_arr[0], stars_largest_arr[1]);
    
    // Nebula numbers
    var nebula_numbers_arr = $("#slider-range-5").slider("option", "values");
    nebula_numbers = randomNumber(nebula_numbers_arr[0], nebula_numbers_arr[1]);

    // Comet numbers
    var comet_numbers_arr = $("#slider-range-6").slider("option", "values");
    comet_numbers = randomNumber(comet_numbers_arr[0], comet_numbers_arr[1]);

    // Timer to next galaxy
    timerSeconds = $("#slider-range-7").slider('option','value');

    // if ($('#ui-hide-checkbox').is(':checked')) {
    //     hideUi = true;
    // } else {
    //     hideUi = false;
    // }
}

// First app start
nextGalaxy();

// Start timer from button
$(".next-galaxy-button").click(function(){
    nextGalaxy();
})

// Generate new galaxy
function nextGalaxy() {
    console.log("nextGalaxy()");
    
    $(".preloader").fadeIn({
        duration: 300,
    })  

    setTimeout(() => {
        clearApp(); // Remove old values from HTML
        variableGet(); // Get values from UI sliders
        startMainGenerator(); // All units generators here
    }, 300);

    setTimeout(() => {
        $(".preloader").fadeOut({
            duration: 300,
        })
    }, 700);
}


// Clear app from all childrens
function clearApp() {
    return $(".fog-wrapper, .star-wrapper, .nebula-wrapper, .comet-wrapper").children().remove();
} 


// All generators
function startMainGenerator(){
    starGenerator(stars_smallest, stars_small, stars_medium);
    bigStarGenerator(stars_largest);
    nebulaGenerator(nebula_numbers);
    cometGenerator(comet_numbers)
    fogGenerator();
    backgroundGenerator();
}


// Background random gradient
function backgroundGenerator() {
    $('.app-wrapper').css({
        "background": 'linear-gradient( 0.' + randomNumber(0, 4) + 'turn,' + gradientColors[randomNumber(0, gradientColors.length -1)] + ' 0%, ' + gradientColors[randomNumber(0, gradientColors.length -1)] + ' 90%)',
        "opacity": "1" // Only 1
    })

    $('.wrapper-bg-2').css({
        "background": 'linear-gradient( 0.' + randomNumber(0,4) + 'turn,' + gradientColors[randomNumber(0, gradientColors.length -1)] + ' 0%, ' + gradientColors[randomNumber(0, gradientColors.length -1)] + ' 90%)',
        "opacity": "0." + randomNumber(4, 8)
    })
}


// Fog generator
function fogGenerator() {
    var randomSize = randomNumber(50, 150);
    var cometImages = [
        'img/fog-1.png',
        'img/fog-2.png',
        'img/fog-4.png',
        'img/fog-5.png',
        'img/fog-6.png',
    ];

    $("<div>", {
        'class': "fog",
        css: {
            "left": randomNumber(-10,70) + "%",
            "top": randomNumber(-10,70) + "%",
            "opacity": '0.' + randomNumber(1,8),
            "background": "url(" + cometImages[randomNumber(0, cometImages.length-1)] + ")",
        }
    }).appendTo('.fog-wrapper');          
}

// Nebula Generator
function nebulaGenerator() {
    var nebulaImages = [
        'img/nebula-1.png',
        'img/nebula-2.png',
        'img/nebula-3.png',
        'img/nebula-4.png',
        'img/nebula-5.png'
    ];

    var randomSize = randomNumber(150, 850);

    for(var i=0; i<nebula_numbers -1; i++) {

        var nebulaImage = nebulaImages.splice(randomNumber(0,nebulaImages.length),1);

        $("<div>", {
            'class': "nebula",
            css: {
                "width": randomSize,
                "height": randomSize,
                "top": randomNumber(-50, 100) + "%",
                "left": randomNumber(-50, 100) + "%",
                "backgroundImage": 'url(' + nebulaImage + ')',
                "opacity":  '0.' + randomNumber(1,2),
                "transform": 'rotate(' + randomNumber(0,180) + 'deg)',
            }
        }).appendTo('.nebula-wrapper');   
    }
}

// Comet Generator
function cometGenerator(comet_numbers) {
    var randomSize = randomNumber(50, 150);
    var cometImages = [
        'img/comet-1.png',
        'img/comet-2.png',
        'img/comet-4.png',
        'img/comet-5.png',
        'img/comet-6.png',
        'img/comet-7.png',
    ];
    
    for (var i = 0; i < comet_numbers -1; i++) {

        var cometImage = cometImages.splice(randomNumber(0,cometImages.length),1);

        $("<div>", {
            'class': "comet",
            css: {
                "width": randomSize,
                "height": randomSize,
                "top": randomNumber(-10, 110) + "%",
                "left": randomNumber(-10, 110) + "%",
                "backgroundImage": 'url(' + cometImage + ')',
                "opacity":  '0.' + randomNumber(2,4),
                "transform": 'rotate(' + randomNumber(0,360) + 'deg)'
            }
        }).appendTo('.comet-wrapper');   
    }
}

// Big star generator
function bigStarGenerator(starsNumbers){
    for(var i=0; i<starsNumbers; i++) {
        var randomSize = randomNumber(5,7);

        $("<div>", {
            'class': "big-star",
            css: {
                "width": randomSize,
                "height": randomSize,
                "top": randomNumber(0, 1000) / 10 + "%",
                "left": randomNumber(0, 1000) / 10 + "%",
                "backgroundColor": starColor(),
                "animationName": starOpacityAnimation,
                "animationDelay": randomNumber(0, 5) + 's',
                "animationDuration": randomNumber(2, 5) + 's'
            }
        }).appendTo('.star-wrapper');

        function starColor() {
            var colors = ['#fff', '#f98282', '#82f9e7', '#f5f1c4', '#c4c8f5'];
            return colors[randomNumber(0, colors.length)];
        }

        function starOpacityAnimation() {
            if (randomNumber(0, 100) > 20) {
                return 'starOpacity';
            }
        }
    }
};


// Star Generator
function starGenerator(small, medium, large) {

    for(var y = 0; y<arguments.length; y++) {
        for (var i = 0; i < arguments[y]; i++) {
            var randomSize = randomNumber(1+y, 2+y);
            $("<div>", {
                'class': "star " + starOpacityAnimation(),
                css: {
                    "width": randomSize,
                    "height": randomSize,
                    "top": randomNumber(0, 1000) / 10 + "%",
                    "left": randomNumber(0, 1000) / 10 + "%",
                    "backgroundColor": starColor(),
                    "animationName": starOpacityAnimation,
                    "animationDelay": randomNumber(0,5) + 's',
                    "animationDuration": randomNumber(2,5) + 's'
                }
            }).appendTo('.star-wrapper');
        }
    }

    function starColor(){
        var colors = ['#fff', '#f98282', '#82f9e7', '#f5f1c4','#c4c8f5'];
        return colors[randomNumber(0,colors.length)];
    }

    function starOpacityAnimation() {
        if (randomNumber(0,100) > 20) {
            return 'starOpacity';
        }
    }
}


// *************** UI
// Remove all focus after click
document.addEventListener('click', function (e) { if (document.activeElement.toString() == '[object HTMLButtonElement]') { document.activeElement.blur(); } });

// Start by enter
$(document).keypress(function (e) {
    if (e.which == 13) {
        nextGalaxy();
    }
});

// Toogle settings by space
$(document).keypress(function (e) {
    if (e.which == 32) {
        $(".ui-button-toggle").click();
    }
});

$(document).keypress(function (e) {
    if (e.which === 85 || e.which === 117) {
        console.log("Toggle ui")
        $("#ui-hide-checkbox").click();
    }
});

// Toggle UI
$(".ui-button-toggle").click(function(){
    if($('.ui-wrapper').hasClass('close_')){
        $(".ui-wrapper").removeClass('close_');
        $(".ui-wrapper").addClass('open_');
        $(".ui-wrapper .ui-content").slideToggle();
    } else if ($('.ui-wrapper').hasClass('open_')) {
        $(".ui-wrapper").removeClass('open_');
        $(".ui-wrapper").addClass('close_');
        $(".ui-wrapper .ui-content").slideToggle();   
    }
})

// Close authoe modal
$(".about-author, .about-author-modal .close").click(function(){
    $(".about-author-modal").toggleClass('on')
})

document.addEventListener("keydown", function (event) {
    console.log(event.which);
})



$("#ui-hide-checkbox").click(function () {
    console.log('firs: ' + hideUi)
    if (hideUi === false) {
        hideUi = true;
        $(".app-wrapper").addClass("hide-ui");
        console.log(hideUi)
    } else {
        hideUi = false;
        $(".app-wrapper").removeClass("hide-ui");
        console.log(hideUi)
    }
})



// Convert seconds to beauty time
function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s / 3600); //Get whole hours
    s -= h * 3600;
    var m = Math.floor(s / 60); //Get remaining minutes
    s -= m * 60;
    return h + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
}

// Random number
function randomNumber(min, max) {
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
    return rand;
}
