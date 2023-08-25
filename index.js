const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genBtn = document.getElementById("gen-btn")
let randomPassOne = document.getElementById("pass-1")
let randomPassTwo = document.getElementById("pass-2")
let copyBtn = document.getElementById("copy-pass-btn")
let passSafe1 = document.getElementById("pass-opt-1")
let passSafe2 = document.getElementById("pass-opt-2")
let pass1Hidden = document.getElementById("pass1-hidden")
let pass2Hidden = document.getElementById("pass2-hidden")

function displayName(){
    document.getElementById("name-hidden").textContent = "Ruben Bliz Barradas"
}
function displayNone(){
    document.getElementById("name-hidden").textContent = "************"

}



genBtn.addEventListener("click", function(){
    removeAsterisk()
   createPasswords()
})

function removeAsterisk(){
    randomPassTwo.innerHTML = ""
    randomPassOne.innerHTML = ""
}
function createPasswords(){
     for(let i = 0; i < 16; i++){
        let index1 = Math.floor(Math.random()*characters.length)
        let index2 = Math.floor(Math.random()*characters.length)
        randomPassOne.innerHTML += characters[index1]
        randomPassTwo.innerHTML += characters[index2]
    }
      var newPassword1 = randomPassOne.innerHTML
       var newPassword2 = randomPassTwo.innerHTML
}


     function showPassOne(){

     var newPassword1 = randomPassOne.innerHTML
 
    passSafe1.innerHTML = newPassword1
     pass1Hidden.innerHTML = ""


     }
        function showPassTwo(){
     var newPassword2 = randomPassTwo.innerHTML
    passSafe2.innerHTML = newPassword2
    pass2Hidden.innerHTML = ""

                            }


function hidePassOne(){
     var newPassword1 = randomPassOne.innerHTML
    
     passSafe1.innerHTML = "🔒"
     pass1Hidden.innerHTML = ""
}
function hidePassTwo(){
     var newPassword2 = randomPassTwo.innerHTML
    
     passSafe2.innerHTML = "🔒"
     pass2Hidden.innerHTML = ""
}

const pass = document.querySelector("#pass-1");

pass.onclick = function() {
  document.execCommand("copy");
}

pass.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pass.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

const pass2 = document.querySelector("#pass-2");

pass2.onclick = function() {
  document.execCommand("copy");
}

pass2.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pass2.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

