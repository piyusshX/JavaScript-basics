const slider = document.querySelector("[data-lengthSlider");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]")
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider()

// handling and updating password length
function handleSlider () {
    slider.value = passwordLength
    lengthDisplay.innerHTML = passwordLength
    const min = slider.min;
    const max = slider.max;
    slider.style.backgroundSize =((passwordLength - min) * 100) / (max - min) + "% 100%";
}

// for linking password length and slider value
slider.addEventListener('input', function(e){
    passwordLength = e.target.value;
    handleSlider()
});


// set indicator color
function setIndicator (color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}   

// initail color of the indicator
setIndicator("#ccc")

// random integer
function getRandomInteger (min, max) {
    return Math.floor((Math.random() * (max - min)) + min); // random number between max and min
}

// Generate Random Number
function generateNumber () {
    return getRandomInteger(0,9);
}
// Generate Random Lowercase
function generateLowercase () {
    return String.fromCharCode(getRandomInteger(97,123));
}
// Generate Random Uppercase
function generateUppercase () {
    return String.fromCharCode(getRandomInteger(65,91));
}
// Generate Random Symbol
function generateSymbol () {
    let randomNumber = getRandomInteger(0,symbols.length)
    return symbols.charAt(randomNumber);
}

// Check Strength of Password
function calculateStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0"); // Green -> Strong
    } else if ( (hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0"); // Yellow -> Medium
    } else {    
        setIndicator("#f00"); // Red -> Weak
    }
}

// Copy to Clipboard
async function copyContent () {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerHTML = "Copied";
    } 
    catch (e) {
        copyMsg.innerHTML = "Failed";
    }

    // to make copyMsg visible for 2sec
    copyMsg.classList.add("active");
    setTimeout(function () {
        copyMsg.classList.remove("active");
    }, 2000)
}

copyBtn.addEventListener('click', function (e) {
    if (passwordDisplay.value) {
        copyContent()
    }
});

// Checkbox 
function handleCheckBox () {
    checkCount = 0
    allCheckBox.forEach( function (checkbox) {
        if (checkbox.checked) checkCount++;
    })

    // Special case when password length is smaller than checkCount
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( function (checkbox) {
    checkbox.addEventListener('change', handleCheckBox);
})

// Generate Password
generateBtn.addEventListener('click', function (e) {
    // if none of the checkboxes is checked
    if (checkCount === 0) return;

    // to generate password -> passwordlength >= checkCount 
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // remove old password
    password = ""

    // generating random password
    generatePassword();

    // Shuffle the password
    password = shufflePassword(Array.from(password));

    // Show password
    passwordDisplay.value = password;

    // Calulate Strength 
    calculateStrength();

});

function generatePassword () {
    let funArr = []; // function array

    if (uppercaseCheck.checked) funArr.push(generateUppercase);
    if (lowercaseCheck.checked) funArr.push(generateLowercase);
    if (numbersCheck.checked) funArr.push(generateNumber);
    if (symbolsCheck.checked) funArr.push(generateSymbol);

    // Characters which are compulsory to add in the password
    for (let i = 0; i < funArr.length; i++) {
        password += funArr[i]();
    }

    // Remaining Characters
    for (let i = 0; i < passwordLength - password.length; i++) {
        let randomIdx = getRandomInteger(0, funArr.length);
        password += funArr[randomIdx]();
    }
}

function shufflePassword (array) {
    // Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        // finding a random j
        const j = Math.floor(Math.random() * (i + 1));
        // swapping arr[i] and arr[j]
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((ele) => (str += ele));
    return str;
}