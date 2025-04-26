// import {glyphToAddr} from "./commonNms.js"


// Get references to the buttons, text input, and dropdown
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");
const buttonE = document.getElementById("buttonE");
const buttonF = document.getElementById("buttonF");
const textInput = document.getElementById("textInput");
const clearButton = document.getElementById("clearButton");
const clearLastCharButton = document.getElementById("clearLastCharButton");
const hubtag = document.getElementById("hubtag");
const darkModeToggle = document.getElementById("darkModeToggle");
const errorContainer = document.getElementById("error");

const galaxy = document.getElementById("dropdown");

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    // Save dark mode preference to local storage
    const isDarkModeEnabled = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
}

// Check if dark mode preference is saved in local storage
const isDarkModeSaved = localStorage.getItem("darkModeEnabled");
if (isDarkModeSaved === "true") {
    // Enable dark mode if it was saved as enabled
    document.body.classList.add("dark-mode");
}

// Function to handle adding characters to the text input
function addToTextInput(value) {
    const currentValue = textInput.value;
    if (currentValue.length + value.length <= 12) {
        textInput.value = currentValue + value;
        clearError(); // Clear error message when characters are added
    } else {
        // Display an error message
        displayError("Maximum character limit reached (12 characters).");
    }
}

// Function to validate the input
function validateInput() {
    const inputValue = textInput.value;
    const isValid = /^[0-9a-fA-F]*$/.test(inputValue);

    if (!isValid) {
        displayError("Only numbers 0-9 and letters A-F are allowed.");
        // Remove invalid characters from the input
        textInput.value = inputValue.replace(/[^0-9a-fA-F]/g, "");
    } else {
        clearError();
    }
}

// Function to perform an action when the input field reaches 12 characters
function handleTextInputLength() {

    const inputLength = textInput.value.length;

    if (inputLength <= 11) {
        // Do something when the input has 11 or fewer characters
        document.getElementById("id-addr").innerHTML = "";
        document.getElementById("id-glyph").innerHTML = "";
    }

    else if (inputLength === 12) {
        // Do something when the input reaches 12 characters
        addr = glyphToAddr(textInput.value)
        document.getElementById("id-addr").innerHTML = addr;
        document.getElementById("id-glyph").innerHTML = textInput.value;
    }
}

// Add an input event listener to validate the input as you type
textInput.addEventListener("input", validateInput);

// Add an input event listener to the text input field
textInput.addEventListener("input", handleTextInputLength);

// Add a paste event listener to validate pasted content
textInput.addEventListener("paste", function (e) {
    setTimeout(validateInput, 0); // Delay validation after the paste operation
});

// Function to display an error message
function displayError(message) {
    errorContainer.textContent = message;
    textInput.style.borderColor = "red"; // Change border color to red
    textInput.style.backgroundColor = "#FFD3D3"; // Change background color to red

    // Automatically clear the error message after 5 seconds
    setTimeout(clearError, 5000); // 5000 milliseconds (5 seconds)
}

// Function to clear the error message and reset the border and background color
function clearError() {
    errorContainer.textContent = "";
    textInput.style.borderColor = "#ccc"; // Reset border color
    textInput.style.backgroundColor = "#fff"; // Reset background color
}

// Add click event listeners to the buttons
button0.addEventListener("click", function() {
    addToTextInput("0");
    handleTextInputLength();
});

button1.addEventListener("click", function() {
    addToTextInput("1");
    handleTextInputLength();
});

button2.addEventListener("click", function() {
    addToTextInput("2");
    handleTextInputLength();
});

button3.addEventListener("click", function() {
    addToTextInput("3");
    handleTextInputLength();
});

button4.addEventListener("click", function() {
    addToTextInput("4");
    handleTextInputLength();
});

button5.addEventListener("click", function() {
    addToTextInput("5");
    handleTextInputLength();
});

button6.addEventListener("click", function() {
    addToTextInput("6");
    handleTextInputLength();
});

button7.addEventListener("click", function() {
    addToTextInput("7");
    handleTextInputLength();
});

button8.addEventListener("click", function() {
    addToTextInput("8");
    handleTextInputLength();
});

button9.addEventListener("click", function() {
    addToTextInput("9");
    handleTextInputLength();
});

buttonA.addEventListener("click", function() {
    addToTextInput("A");
    handleTextInputLength();
});

buttonB.addEventListener("click", function() {
    addToTextInput("B");
    handleTextInputLength();
});

buttonC.addEventListener("click", function() {
    addToTextInput("C");
    handleTextInputLength();
});

buttonD.addEventListener("click", function() {
    addToTextInput("D");
    handleTextInputLength();
});

buttonE.addEventListener("click", function() {
    addToTextInput("E");
    handleTextInputLength();
});

buttonF.addEventListener("click", function() {
    addToTextInput("F");
    handleTextInputLength();
});

// Add click event listener to the Hub Tag button
hubtag.addEventListener("click", function() {
    const hubtag = checkRegionGlyphs(galaxy.value, textInput.value)
    const msg = 'Please select a galaxy.'

    if (galaxy.value != "NoGalaxy") {
        document.getElementById("id-hubtag").innerHTML = hubtag;
    }
    else {
        document.getElementById("id-hubtag").innerHTML = msg;
    }
});

// Add click event listener to the Clear button
clearButton.addEventListener("click", function() {
    textInput.value = ""; // Clear the text input field
    clearError(); // Clear error message when the text is cleared
    handleTextInputLength();
});

// Add click event listener to the Clear Last Character button
clearLastCharButton.addEventListener("click", function() {
    const currentValue = textInput.value;
    textInput.value = currentValue.slice(0, -1); // Remove the last character
    clearError(); // Clear error message when a character is removed
    handleTextInputLength();
});

// Add click event listener to the Dark Mode Toggle button
darkModeToggle.addEventListener("click", toggleDarkMode);

// Functions below help determine Hub Tag
function hubRegions(galaxy) {

    const ghubRegions = [
        "CF589C1E",
        "CF588C1E",
        "CF588C1F",
        "CF589C1F",
		"CF58AC1F",
        "CF58AC1E",
        "CF58AC1D",
        "CF589C1D",
        "CF588C1D",
        "D0589C1E",
        "D0588C1E",
        "D0588C1F",
        "D0589C1F",
        "D058AC1F",
        "D058AC1E",
        "D058AC1D",
        "D0589C1D",
        "D0588C1D",
        "CE589C1E",
        "CE588C1E",
        "CE588C1F",
        "CE589C1F",
        "CE58AC1F",
        "CE58AC1E",
        "CE58AC1D",
        "CE589C1D",
        "CE588C1D",
    ];

    const EisHubRegions = [
        '09556D30',
		'09555D30',
		'09555D31',
		'09556D31',
		'09557D31',
		'09557D30',
		'09557D2F',
		'09556D2F',
		'09555D2F',
		'0A556D30',
		'0A555D30',
		'0A555D31',
		'0A556D31',
		'0A557D31',
		'0A557D30',
		'0A557D2F',
		'0A556D2F',
		'0A555D2F',
		'08556D30',
		'08555D30',
		'08555D31',
		'08556D31',
		'08557D31',
		'08557D30',
		'08557D2F',
		'08556D2F',
		'08555D2F',
    ];

    const CalHubRegions = [
        'F9556C30',
		'F9555C30',
		'F9555C31',
		'F9556C31',
		'F9557C31',
		'F9557C30',
		'F9557C2F',
		'F9556C2F',
		'F9555C2F',
		'FA556C30',
    	'F8556C30',
		'F9554C2F',
		'F9554C30',
		'F9554C31',
		'F9554C32',
		'F9555C32',
		'F9556C32',
		'F9557C32',
		'F9558C32',
		'F9558C31',
		'F9558C30',
		'F9558C2F',
		'F9558C2E',
		'F9557C2E',
		'F9556C2E',
		'F9555C2E',
		'F9554C2E',
		'FA555C30',
		'FA555C31',
		'FA556C31',
		'FA557C31',
		'FA557C30',
		'FA557C2F',
		'FA556C2F',
		'FA555C2F',
		'F8555C30',
		'F8555C31',
		'F8556C31',
		'F8557C31',
		'F8557C30',
		'F8557C2F',
		'F8556C2F',
		'F8555C2F',
		'FB556C30',
		'F7556C30',
    ];

    if (galaxy == 'Eissentam') {
		return EisHubRegions;
	} 
	else if (galaxy == 'Calypso') {
		return CalHubRegions;
	}
	
    return ghubRegions;
}	

// get region glyphs
function getRegionGlyphs(glyphs) {

    const regionGlyphs = glyphs.substring(4);
    return regionGlyphs;
}

// get SIV glyphs
function getSystemGlyphs(glyphs) {

    const systemGlyphs = glyphs.substring(1,4);
    return systemGlyphs;
}

// check if region glyphs are valid for selected galaxy
function checkRegionGlyphs(galaxy, glyphs) {

    const region = getRegionGlyphs(glyphs);
    const system = getSystemGlyphs(glyphs);
    var regions = [];

    if (galaxy == "Euclid") {
        var regions = hubRegions(galaxy);
    } 
    else if (galaxy == "Calypso") {
        var regions = hubRegions(galaxy);
    } 
    else if (galaxy == "Eissentam") {
        var regions = hubRegions(galaxy);
    } 

    if (regions.includes(region) == true) {
        // get region #
        const hubNum = regions.indexOf(region);

        // drop leading zeros from system
        siv = system.replace(/^0+/, '');

        // create HUB Tag
        var hubTag = `[HUB${hubNum+1}-${siv}]`;
    }

    else {
        var hubTag = 'Not a valid Hub system';
    }

    return hubTag;
}

// Below written by Stephen Piper
// Source = ./src/commonNMS.js
function glyphToAddr(glyph) {

    let xyz = {}
    xyz.p = parseInt(glyph.slice(0, 1), 16)
    xyz.s = parseInt(glyph.slice(1, 4), 16)
    xyz.y = (parseInt(glyph.slice(4, 6), 16) - 0x81) & 0xff
    xyz.z = (parseInt(glyph.slice(6, 9), 16) - 0x801) & 0xfff
    xyz.x = (parseInt(glyph.slice(9, 12), 16) - 0x801) & 0xfff

    return xyzToAddress(xyz)
}

function xyzToAddress(xyz) {
    let x = "000" + xyz.x.toString(16).toUpperCase()
    let z = "000" + xyz.z.toString(16).toUpperCase()
    let y = "000" + xyz.y.toString(16).toUpperCase()
    let s = "000" + xyz.s.toString(16).toUpperCase()

    x = x.slice(x.length - 4)
    z = z.slice(z.length - 4)
    y = y.slice(y.length - 4)
    s = s.slice(s.length - 4)

    let addr = x + ":" + y + ":" + z + ":" + s
    return addr
}
