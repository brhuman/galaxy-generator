
// Generator by Maksim K
// brhumaan@gmail.com
// VARIABLES for generators
let starsSmallest;
let starsSmall;
let starsMedium;
let starsLargest;
let nebulaNumbers;
let cometNumbers;
let hideUi = false;

const gradientColors = [
  '#182f29',
  '#150f1f',
  '#180f1f',
  '#0f1f14',
  '#1f180f',
  '#1f0f1b',
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


// Random number
function randomNumber(min, max) {
  const rand = min + Math.floor(Math.random() * (max + 1 - min));
  return rand;
}

// ************ SLIDER INITIALIZATION:

// Smallest stars
$('#slider-range-1').slider({
  range: true,
  min: 0,
  max: 800,
  values: [100, 400],
  slide(event, ui) {
    $('#amount-1').val(`${ui.values[0]} - ${ui.values[1]}`);
  },
});

// Small stars
$('#slider-range-2').slider({
  range: true,
  min: 0,
  max: 400,
  values: [100, 300],
  slide(event, ui) {
    $('#amount-2').val(`${ui.values[0]} - ${ui.values[1]}`);
  },
});

// Medium stars
$('#slider-range-3').slider({
  range: true,
  min: 0,
  max: 100,
  values: [20, 40],
  slide(event, ui) {
    $('#amount-3').val(`${ui.values[0]} - ${ui.values[1]}`);
  },
});

// Large stars
$('#slider-range-4').slider({
  range: true,
  min: 0,
  max: 20,
  values: [1, 10],
  slide(event, ui) {
    $('#amount-4').val(`${ui.values[0]} - ${ui.values[1]}`);
  },
});

// Nebulas
$('#slider-range-5').slider({
  range: true,
  min: 0,
  max: 5,
  values: [2, 4],
  slide(event, ui) {
    $('#amount-5').val(`${ui.values[0]} - ${ui.values[1]}`);
  },
});

// Comets
$('#slider-range-6').slider({
  range: true,
  min: 0,
  max: 8,
  values: [1, 6],
  slide(event, ui) {
    $('#amount-6').val(`${ui.values[0]} - ${ui.values[1]}`);
  },
});

// Seconds
$('#slider-range-7').slider({
  range: 'max',
  min: 3,
  max: 120,
  value: [5],
  slide(event, ui) {
    $('#amount-7').val(ui.value);
  },
});


// Write values to HTML
$('#amount-1').val(`${$('#slider-range-1').slider('values', 0)
} - ${$('#slider-range-1').slider('values', 1)}`);

$('#amount-2').val(`${$('#slider-range-2').slider('values', 0)
} - ${$('#slider-range-2').slider('values', 1)}`);

$('#amount-3').val(`${$('#slider-range-3').slider('values', 0)
} - ${$('#slider-range-3').slider('values', 1)}`);

$('#amount-4').val(`${$('#slider-range-4').slider('values', 0)
} - ${$('#slider-range-4').slider('values', 1)}`);

$('#amount-5').val(`${$('#slider-range-5').slider('values', 0)
} - ${$('#slider-range-5').slider('values', 1)}`);

$('#amount-6').val(`${$('#slider-range-6').slider('values', 0)
} - ${$('#slider-range-6').slider('values', 1)}`);

$('#amount-7').val($('#slider-range-7').slider('value'));


// Variable Get
function variableGet() {
  const starsSmallestArr = $('#slider-range-1').slider('option', 'values');
  starsSmallest = randomNumber(starsSmallestArr[0], starsSmallestArr[1]);

  const starsSmallArr = $('#slider-range-2').slider('option', 'values');
  starsSmall = randomNumber(starsSmallArr[0], starsSmallArr[1]);

  const starsMediumArr = $('#slider-range-3').slider('option', 'values');
  starsMedium = randomNumber(starsMediumArr[0], starsMediumArr[1]);

  const starsLargestArr = $('#slider-range-4').slider('option', 'values');
  starsLargest = randomNumber(starsLargestArr[0], starsLargestArr[1]);

  const nebulaNumbersArr = $('#slider-range-5').slider('option', 'values');
  nebulaNumbers = randomNumber(nebulaNumbersArr[0], nebulaNumbersArr[1]);

  const cometNumbersArr = $('#slider-range-6').slider('option', 'values');
  cometNumbers = randomNumber(cometNumbersArr[0], cometNumbersArr[1]);
}


// Clear app from all childrens
function clearApp() {
  return $('.fog-wrapper, .star-wrapper, .nebula-wrapper, .comet-wrapper').children().remove();
}


// Background random gradient
function backgroundGenerator() {
  $('.app-wrapper').css({
    background: `linear-gradient( 0.${
      randomNumber(0, 4)}turn,${
      gradientColors[randomNumber(0, gradientColors.length - 1)]
    } 0%, ${
      gradientColors[randomNumber(0, gradientColors.length - 1)]
    } 90%)`,
    opacity: 1, // Only 1
  });

  $('.wrapper-bg-2').css({
    background: `linear-gradient( 0.${
      randomNumber(0, 4)}turn,${
      gradientColors[randomNumber(0, gradientColors.length - 1)]
    } 0%, ${
      gradientColors[randomNumber(0, gradientColors.length - 1)]
    } 90%)`,
    opacity: `0.${randomNumber(4, 8)}`,
  });

  // $('.app-wrapper').css({
  //   background: `linear-gradient( 0.
  //     ${randomNumber(0, 4)}turn,
  //     ${gradientColors[randomNumber(0, gradientColors.length - 1)]} 0%,
  //     ${gradientColors[randomNumber(0, gradientColors.length - 1)]} 90%)`,
  //   opacity: '1', // Only 1
  // });

  // $('.wrapper-bg-2').css({
  //   background: `linear-gradient( 0.
  //     ${randomNumber(0, 4)}turn,
  //     ${gradientColors[randomNumber(0, gradientColors.length - 1)]} 0%,
  //     ${gradientColors[randomNumber(0, gradientColors.length - 1)]} 90%)`,
  //   opacity: `0.${randomNumber(4, 8)}`,
  // });
}


// Fog generator
function fogGenerator() {
  const cometImages = [
    'img/fog-1.png',
    'img/fog-2.png',
    'img/fog-4.png',
    'img/fog-5.png',
    'img/fog-6.png',
  ];

  $('<div>', {
    class: 'fog',
    css: {
      left: `${randomNumber(-10, 70)}%`,
      top: `${randomNumber(-10, 70)}%`,
      opacity: `0.${randomNumber(1, 8)}`,
      background: `url(${cometImages[randomNumber(0, cometImages.length - 1)]})`,
    },
  }).appendTo('.fog-wrapper');
}

// Nebula Generator
function nebulaGenerator() {
  const nebulaImages = [
    'img/nebula-1.png',
    'img/nebula-2.png',
    'img/nebula-3.png',
    'img/nebula-4.png',
    'img/nebula-5.png',
  ];

  const randomSize = randomNumber(150, 850);

  for (let i = 0; i < nebulaNumbers - 1; i += 1) {
    const nebulaImage = nebulaImages.splice(randomNumber(0, nebulaImages.length), 1);

    $('<div>', {
      class: 'nebula',
      css: {
        width: randomSize,
        height: randomSize,
        top: `${randomNumber(-50, 100)}%`,
        left: `${randomNumber(-50, 100)}%`,
        backgroundImage: `url(${nebulaImage})`,
        opacity: `0.${randomNumber(1, 2)}`,
        transform: `rotate(${randomNumber(0, 180)}deg)`,
      },
    }).appendTo('.nebula-wrapper');
  }
}

// Comet Generator
function cometGenerator(cometNumbersD) {
  const randomSize = randomNumber(50, 150);
  const cometImages = [
    'img/comet-1.png',
    'img/comet-2.png',
    'img/comet-4.png',
    'img/comet-5.png',
    'img/comet-6.png',
    'img/comet-7.png',
  ];

  for (let i = 0; i < cometNumbersD - 1; i += 1) {
    const cometImage = cometImages.splice(randomNumber(0, cometImages.length), 1);

    $('<div>', {
      class: 'comet',
      css: {
        width: randomSize,
        height: randomSize,
        top: `${randomNumber(-10, 110)}%`,
        left: `${randomNumber(-10, 110)}%`,
        backgroundImage: `url(${cometImage})`,
        opacity: `0.${randomNumber(2, 4)}`,
        transform: `rotate(${randomNumber(0, 360)}deg)`,
      },
    }).appendTo('.comet-wrapper');
  }
}


// Big star generator
function bigStarGenerator(starsNumbers) {
  function starColor() {
    const colors = ['#fff', '#f98282', '#82f9e7', '#f5f1c4', '#c4c8f5'];
    return colors[randomNumber(0, colors.length)];
  }


  function starOpacityAnimation() {
    if (randomNumber(0, 100) > 20) {
      return 'starOpacity';
    }
    return false;
  }

  for (let i = 0; i < starsNumbers; i += 1) {
    const randomSize = randomNumber(5, 7);

    $('<div>', {
      class: 'big-star',
      css: {
        width: randomSize,
        height: randomSize,
        top: `${randomNumber(0, 1000) / 10}%`,
        left: `${randomNumber(0, 1000) / 10}%`,
        backgroundColor: starColor(),
        animationName: starOpacityAnimation,
        animationDelay: `${randomNumber(0, 5)}s`,
        animationDuration: `${randomNumber(2, 8)}s`,
      },
    }).appendTo('.star-wrapper');
  }
}


// Star Generator
function starGenerator() {
  function starColor() {
    const colors = ['#fff', '#f98282', '#82f9e7', '#f5f1c4', '#c4c8f5'];
    return colors[randomNumber(0, colors.length)];
  }

  function starOpacityAnimation() {
    if (randomNumber(0, 100) > 20) {
      return 'starOpacity';
    }
    return false;
  }

  for (let y = 0; y < arguments.length; y += 1) {
    for (let i = 0; i < arguments[y]; i += 1) {
      const randomSize = randomNumber(1 + y, 2 + y);
      $('<div>', {
        class: `star ${starOpacityAnimation()}`,
        css: {
          width: randomSize,
          height: randomSize,
          top: `${randomNumber(0, 1000) / 10}%`,
          left: `${randomNumber(0, 1000) / 10}%`,
          backgroundColor: starColor(),
          animationName: starOpacityAnimation(),
          animationDelay: `${randomNumber(0, 5)}s`,
          animationDuration: `${randomNumber(2, 5)}s`,
        },
      }).appendTo('.star-wrapper');
    }
  }
}


// Remove all focus after click
document.addEventListener('click', () => { if (document.activeElement.toString() === '[object HTMLButtonElement]') { document.activeElement.blur(); } });


// Toggle ui
$(document).keypress((e) => {
  if (e.which === 85 || e.which === 117 || e.which === 1075 || e.which === 1043) {
    console.log('Toggle ui');
    $('#ui-hide-checkbox').click();
  }
});


// Toggle UI
$('.ui-button-toggle').click(() => {
  if ($('.ui-wrapper').hasClass('close_')) {
    $('.ui-wrapper').removeClass('close_');
    $('.ui-wrapper').addClass('open_');
    $('.ui-wrapper .ui-content').slideToggle();
  } else if ($('.ui-wrapper').hasClass('open_')) {
    $('.ui-wrapper').removeClass('open_');
    $('.ui-wrapper').addClass('close_');
    $('.ui-wrapper .ui-content').slideToggle();
  }
});

// Close authoe modal
$('.about-author, .about-author-modal .close').click(() => {
  $('.about-author-modal').toggleClass('on');
});


$('#ui-hide-checkbox').click(() => {
  console.log(`firs: ${hideUi}`);

  if (hideUi === false) {
    hideUi = true;
    $('.app-wrapper').addClass('hide-ui');
    console.log(hideUi);
  } else {
    hideUi = false;
    $('.app-wrapper').removeClass('hide-ui');
    console.log(hideUi);
  }
});


// All generators
function startMainGenerator() {
  starGenerator(starsSmallest, starsSmall, starsMedium);
  bigStarGenerator(starsLargest);
  nebulaGenerator(nebulaNumbers);
  cometGenerator(cometNumbers);
  fogGenerator();
  backgroundGenerator();
}

// Generate new galaxy
function nextGalaxy() {
  console.log('nextGalaxy()');

  $('.preloader').fadeIn({
    duration: 300,
  });

  setTimeout(() => {
    clearApp(); // Remove old values from HTML
    variableGet(); // Get values from UI sliders
    startMainGenerator(); // All units generators here
  }, 300);

  setTimeout(() => {
    $('.preloader').fadeOut({
      duration: 300,
    });
  }, 700);
}

// First app start
variableGet();
nextGalaxy();

// Start timer from button
$('.next-galaxy-button').click(() => {
  nextGalaxy();
});

// Start by enter
$(document).keypress((e) => {
  if (e.which === 13) {
    nextGalaxy();
  }
});
