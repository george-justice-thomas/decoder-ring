// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift === 0 || shift < -25 || shift > 25){return false};
const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let result = "";
    //for in loop of the string
const inputArray = input.toLowerCase().split('');
console.log(inputArray);
    if(!encode){ 
    shift = -shift}//if not encode
    inputArray.forEach((input) => {
      
 if(alphabet.includes(input)){//if alphabet includes the singular input item,continue the function 
        const index = alphabet.indexOf(input)
  shift > 0 ? 
          result += alphabet[(index + shift) % alphabet.length] : 
          result += alphabet[(index % alphabet.length + alphabet.length + shift) % alphabet.length] 
       
       }else{ 
       result += input
       }
     })
     return result 
  }//caesar end block
    return {
    caesar,
  };
})();
   

module.exports = { caesar: caesarModule.caesar };
