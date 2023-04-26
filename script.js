 let inputSlider = document.getElementById("inputSlider");
 let sliderValue = document.getElementById("sliderValue");
 let passBox = document.getElementById("passBox");
 let lowercase = document.getElementById("lowercase");
 let uppercase = document.getElementById("uppercase");
 let specialchar = document.getElementById("specialchar");
 let numbers = document.getElementById("numbers");
 let genBtn = document.getElementById("genBtn");


 sliderValue.textContent = inputSlider.value;
 inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
 });

 genBtn.addEventListener('click',()=>{
passBox.value=generatePassword();
 });

 let lowerChars = "abcdefghijklmnopqrstuvwxyz";
 let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let number = "0123456789";
 let specialChars = "~!@#$%^&*";


 function generatePassword(){
    let genpassword ="";
    let allChars="";

    allChars += lowercase.checked ? lowerChars :"";
    allChars += uppercase.checked ? upperChars :"";
    allChars += numbers.checked ? number :"";
    allChars += specialchar.checked ? specialChars :"";

    let i=1;
    while(i<=inputSlider.value){
        genpassword = allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genpassword;
 }