
// RANGE SLIDER

var skipSlider = document.getElementById('skipstep');

noUiSlider.create(skipSlider, {
    step: 100000,
    start: [200000],
    range: {
        'min': [200000],
        'max': [1000000]
    },
    format: wNumb({
        decimals: 0,
        suffix: ' ₽'
    }),

});

// var skipSlider = document.getElementById('skipstep');

// noUiSlider.create(skipSlider, {
// 	step: 1000,
//     range: {
//         'min': 0,
//         'max': 100000
//     },
//     start: [0, 100000],
// 	format: wNumb({
// 	    decimals: 0,
// 	})
// });

var skipValues = [
    document.getElementById('skip-value-lower'),
    document.getElementById('skip-value-upper')
];

skipSlider.noUiSlider.on('update', function (values, handle) {
    skipValues[handle].innerHTML = values[handle];
});