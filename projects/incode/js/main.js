// Encode function start
function encode(inputLetter) {
  var numericInput; 
  switch (inputLetter.toLowerCase()) {
    case 'a':
    numericInput = 1;
    break;
    case 'b':
    numericInput = 2;
    break;    
    case 'c':
    numericInput = 3;
    break;
    case 'd':
    numericInput = 4;
    break;    
    case 'e':
    numericInput = 5;
    break;
    case 'f':
    numericInput = 6;
    break;
    case 'g':
    numericInput = 7;
    break;        
    case 'h':
    numericInput = 8;
    break;
    case 'i':
    numericInput = 9;
    break;
    case 'j':
    numericInput = 10;
    break;
    case 'k':
    numericInput = 11;
    break;
    case 'l':
    numericInput = 12;
    break;
    case 'm':
    numericInput = 13;
    break;
    case 'n':
    numericInput = 14;
    break;    
    case 'o':
    numericInput = 15;
    break;
    case 'p':
    numericInput = 16;
    break;    
    case 'q':
    numericInput = 17;
    break;
    case 'r':
    numericInput = 18;
    break;
    case 's':
    numericInput = 19;
    break;        
    case 't':
    numericInput = 20;
    break;
    case 'u':
    numericInput = 21;
    break;
    case 'v':
    numericInput = 22;
    break;
    case 'w':
    numericInput = 23;
    break;
    case 'x':
    numericInput = 24;
    break; 
    case 'y':
    numericInput = 25;
    break;
    case 'z':
    numericInput = 26;
    break;
    default:
    return inputLetter;  // if not a letter such as # " ' etc., return same value
    ;    
  };
  var key = document.getElementById('key').value;  // get key from user input

var keyedInput = numericInput + (key % 26);  // trimming that number so it will always be within 1-26

var trimmedInput;

if (keyedInput > 26) {
  trimmedInput = keyedInput - 26;
}
else {
  trimmedInput = keyedInput;
}

// taking that number and reversing it back to a letter using the same scheme
var encodedOutput;
switch (trimmedInput) { 
  case 1:
  encodedOutput = 'a';
  break;
  case 2:
  encodedOutput = 'b';
  break;    
  case 3:
  encodedOutput = 'c';
  break;
  case 4:
  encodedOutput = 'd';
  break;    
  case 5:
  encodedOutput = 'e';
  break;
  case 6:
  encodedOutput = 'f';
  break;
  case 7:
  encodedOutput = 'g';
  break;        
  case 8:
  encodedOutput = 'h';
  break;
  case 9:
  encodedOutput = 'i';
  break;
  case 10:
  encodedOutput = 'j';
  break;
  case 11:
  encodedOutput = 'k';
  break;
  case 12:
  encodedOutput = 'l';
  break;
  case 13:
  encodedOutput = 'm';
  break;
  case 14:
  encodedOutput = 'n';
  break;    
  case 15:
  encodedOutput = 'o';
  break;
  case 16:
  encodedOutput = 'p';
  break;    
  case 17:
  encodedOutput = 'q';
  break;
  case 18:
  encodedOutput = 'r';
  break;
  case 19:
  encodedOutput = 's';
  break;        
  case 20:
  encodedOutput = 't';
  break;
  case 21:
  encodedOutput = 'u';
  break;
  case 22:
  encodedOutput = 'v';
  break;
  case 23:
  encodedOutput = 'w';
  break;
  case 24:
  encodedOutput = 'x';
  break; 
  case 25:
  encodedOutput = 'y';
  break;
  case 26:
  encodedOutput = 'z';
  break;
  default:
  inputLetter = encodedOutput;    
}
// conditional statement checking if input letter was upper/lower case so it can return to correct case
if (inputLetter == inputLetter.toUpperCase()) {
  return encodedOutput.toUpperCase();
}
else {
  return encodedOutput;
}  
}
// function that runs on click of user to pull input text 
function encodeThis () {
  var practiceText = document.getElementById('readable').value; 
  var inputText = practiceText.split(''); // converts input string to array 
  var encodedText = '';
  var i;
  // for loop that runs each value of that array through my encoding function
  for ( i = 0; i < inputText.length; i++) { 
    encodedText += encode(inputText[i]);
  }
  document.getElementById('encoded').value = encodedText;
}

// DECODE SCRIPT

function decode(inputLetter2) {
var numericInput2; // assigning letters to numbers in order to apply a mathematical function
switch (inputLetter2.toLowerCase()) {
  case 'a':
  numericInput2 = 1;
  break;
  case 'b':
  numericInput2 = 2;
  break;    
  case 'c':
  numericInput2 = 3;
  break;
  case 'd':
  numericInput2 = 4;
  break;    
  case 'e':
  numericInput2 = 5;
  break;
  case 'f':
  numericInput2 = 6;
  break;
  case 'g':
  numericInput2 = 7;
  break;        
  case 'h':
  numericInput2 = 8;
  break;
  case 'i':
  numericInput2 = 9;
  break;
  case 'j':
  numericInput2 = 10;
  break;
  case 'k':
  numericInput2 = 11;
  break;
  case 'l':
  numericInput2 = 12;
  break;
  case 'm':
  numericInput2 = 13;
  break;
  case 'n':
  numericInput2 = 14;
  break;    
  case 'o':
  numericInput2 = 15;
  break;
  case 'p':
  numericInput2 = 16;
  break;    
  case 'q':
  numericInput2 = 17;
  break;
  case 'r':
  numericInput2 = 18;
  break;
  case 's':
  numericInput2 = 19;
  break;        
  case 't':
  numericInput2 = 20;
  break;
  case 'u':
  numericInput2 = 21;
  break;
  case 'v':
  numericInput2 = 22;
  break;
  case 'w':
  numericInput2 = 23;
  break;
  case 'x':
  numericInput2 = 24;
  break; 
  case 'y':
  numericInput2 = 25;
  break;
  case 'z':
  numericInput2 = 26;
  break;
  default:
  return inputLetter2;
    ;    // if not a letter such as # " ' etc., return same value
  };
  var key2 = document.getElementById('key').value;
  var keyedInput2 = numericInput2 - (key2 % 26);
// trimming that number so it will always be within 1-26
var trimmedInput2;

if (keyedInput2 < 1) {
  trimmedInput2 = keyedInput2 + 26;
}
else {
  trimmedInput2 = keyedInput2;
}

// taking that number and reversing it back to a letter using the same scheme
var decodedOutput;
switch (trimmedInput2) { 
  case 1:
  decodedOutput = 'a';
  break;
  case 2:
  decodedOutput = 'b';
  break;    
  case 3:
  decodedOutput = 'c';
  break;
  case 4:
  decodedOutput = 'd';
  break;    
  case 5:
  decodedOutput = 'e';
  break;
  case 6:
  decodedOutput = 'f';
  break;
  case 7:
  decodedOutput = 'g';
  break;        
  case 8:
  decodedOutput = 'h';
  break;
  case 9:
  decodedOutput = 'i';
  break;
  case 10:
  decodedOutput = 'j';
  break;
  case 11:
  decodedOutput = 'k';
  break;
  case 12:
  decodedOutput = 'l';
  break;
  case 13:
  decodedOutput = 'm';
  break;
  case 14:
  decodedOutput = 'n';
  break;    
  case 15:
  decodedOutput = 'o';
  break;
  case 16:
  decodedOutput = 'p';
  break;    
  case 17:
  decodedOutput = 'q';
  break;
  case 18:
  decodedOutput = 'r';
  break;
  case 19:
  decodedOutput = 's';
  break;        
  case 20:
  decodedOutput = 't';
  break;
  case 21:
  decodedOutput = 'u';
  break;
  case 22:
  decodedOutput = 'v';
  break;
  case 23:
  decodedOutput = 'w';
  break;
  case 24:
  decodedOutput = 'x';
  break; 
  case 25:
  decodedOutput = 'y';
  break;
  case 26:
  decodedOutput = 'z';
  break;
  default:
  inputLetter2 = decodedOutput;    
}
if (inputLetter2 == inputLetter2.toUpperCase()) {
  return decodedOutput.toUpperCase();
}
else {
  return decodedOutput;
}
}

function decodeThis () {
  var decodedText = document.getElementById('encoded').value; 
  var decodedArr = decodedText.split('');
  var decodedTextOutput = '';
  var i;
  for ( i = 0; i < decodedArr.length; i++) {
    decodedTextOutput += decode(decodedArr[i]);
  }
  document.getElementById('readable').value = decodedTextOutput;
}