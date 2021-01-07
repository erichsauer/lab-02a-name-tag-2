// variables for name/pronouns //
const userName = document.getElementById('name')
const userPronouns = document.getElementById('pronouns')
const button = document.getElementById('button')
const tagName = document.getElementById('tag-name')
const tagPronouns = document.getElementById('tag-pronouns')

// variables for color change //
const tagColor = document.getElementById('tag-color')
const color1 = document.getElementById('color-1')
const color2 = document.getElementById('color-2')
const color3 = document.getElementById('color-3')

// variables for name change counter //
const counterText = document.getElementById('counter-text')
const clickCounter = document.getElementById('click-counter')


// generate nametag button //
button.addEventListener('click', () => {
    // cool zone //
    tagName.textContent = userName.value
    tagPronouns.textContent = userPronouns.value
});

// change color buttons //
color1.addEventListener('click', () => {
    // cool zone //
    tagColor.style.backgroundColor = 'blue'
});

color2.addEventListener('click', () => {
    // cool zone //
    tagColor.style.backgroundColor = 'black'
});

color3.addEventListener('click', () => {
    // cool zone //
    tagColor.style.backgroundColor = 'forestgreen'
});

// name change counter //
    let clicks = 0;
    function hello() {
        clicks += 1;
        clickCounter.textContent = 'You changed your name ' + clicks + ' times. Awesome!';
    };