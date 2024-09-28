let usernameb = document.querySelector("#username")
let usernameerror = document.querySelector(".usernaming")  
let nameb = document.querySelector("#name");
let nameerror = document.querySelector(".naming");
let button = document.querySelector("button");
let passwordb = document.querySelector("#password")
let passworderror = document.querySelector(".passwording")
let emailb = document.querySelector("#email")
let emailerror = document.querySelector(".emailing")
let phoneb = document.querySelector("#phone")
let phoneerror =  document.querySelector(".phoning")
let experienceerror = document.querySelector(".experiencing")
let experienceb = document.querySelector("#experience")
let one = document.querySelector(".one")
let two  = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six =  document.querySelector(".six")
let seven =  document.querySelector(".seven")
let photocorrect = document.querySelector(".photocorrect")

button.addEventListener("click", function(e) {
    e.preventDefault(); 
let extraname = document.querySelector(".extraname")
let passwordextra = document.querySelector(".passwordextra")
let usernameextra = document.querySelector(".usenameextra")
let emailextra = document.querySelector(".emailextra")
let phonextra = document.querySelector(".phoneextra")
let experienceextra = document.querySelector(".experienceextra")
    let experiences = experienceb.value;
    let phones = phoneb.value;
   
    let emails = emailb.value;
    let passwords = passwordb.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const minlength = 8;
    const hasUpperCase = /[A-Z]/.test(passwords);
    const hasLowerCase = /[a-z]/.test(passwords);
    const hasNumbers = /[0-9]/.test(passwords);
    const hasSpecialChar = /[!@#$%^&*]/.test(passwords); 
    let users = usernameb.value;
    let names = nameb.value;
    
    let fileInput = document.querySelector("#file");
    const imageDisplay = document.querySelector('#imageone');
    let conti = document.querySelector(".conti")
    if (experiences === "" || phones === "" || emails === "" || passwords === "" || users === "" || names === "" || fileInput.value === "") {
      alert("Please !fill input")

    } else {
        conti.style.opacity= "1"

        if(names.length>3){
            one.innerHTML = `${names}`;


        }
       else if (names.length !== 3) {
       extraname.innerHTML="name length at leat 3 character"
        }
        else{
            conti.style.opacity= "0"
        
        }
        if(users.length>=4){
            two.innerHTML = `${users}`;

        }
        else{
            usernameextra.innerHTML = "username length at leat 4 character"
            conti.style.opacity= "0"

            
        }
        if(passwords.length<minlength || !hasLowerCase || !hasUpperCase || !hasNumbers || !hasSpecialChar){
            passwordextra.innerHTML = "please correct password"
            conti.style.opacity= "0"


        }
        else{
            three.innerHTML = `${passwords}`;

          
        }
        if(emailPattern.test(emails)){
            four.innerHTML = `${emails}`;
            

        }
     
        else{
       emailextra.innerHTML = "please correct email"
            conti.style.opacity= "0"
          
        }
        if(!isNaN(phones)|| phones.length>=11){
            five.innerHTML = `${phones}`;
        }
        else{
            conti.style.opacity= "0"
            phonextra.innerHTML= "please correct Number" 
        }
        if(experiences.length>5){
            six.innerHTML = `${experiences}`;
        }
  else{
    conti.style.opacity= "0"
   experienceextra.innerHTML ="please correct experience"
  }
    
       
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageDisplay.src = e.target.result; 
              ; imageDisplay.style.display = "block";
            };
            reader.readAsDataURL(file); 
        }
    
        seven.appendChild(imageDisplay);
    }
if(users === ""){
    usernameerror.innerHTML = "Please! correct your username"
}
else{
    usernameerror.innerHTML = "";
}

if(passwords === ""){
    passworderror.innerHTML = "Please! correct your password"
}
else{
passworderror.innerHTML = "";
}
    if (names === "") {
        nameerror.innerHTML = "Please! correct your name";
    } else {
     
        nameerror.innerHTML = "";  
    }
    if (emails === "") {
        emailerror.innerHTML = "Please! correct your email";
    } else {
        emailerror.innerHTML = ""; 
    }
    if (phones === "") {
        phoneerror.innerHTML = "Please! correct your phone";
    } else {
        phoneerror.innerHTML = "";
    }
    if (experiences === "") {
        experienceerror.innerHTML = "Please! correct your experience";
    } else {
        experienceerror.innerHTML = ""; 
    }
    nameb.addEventListener("input",function(e){
       
      nameerror.innerHTML =""
     
      
      })
     if(fileInput.value === ""){
        photocorrect.innerHTML ="please correct"
     }
     else{
        photocorrect.innerHTML = ""
     }
      usernameb.addEventListener("input",function(){
      usernameerror.innerHTML = ""
      })
      passwordb.addEventListener("input",function(){
        passworderror.innerHTML = ""
      })
      emailb.addEventListener("input",function(){
    
      emailerror.innerHTML =""
      
      })
      phoneb.addEventListener("input",function(){
       
      phoneerror.innerHTML =""
      
      })
      experienceb.addEventListener("input",function(){
       
        experienceerror.innerHTML =""
        
        })
        nameb.addEventListener("input",function(e){
       
         extraname.innerHTML =""
           
            
            })
           
            usernameb.addEventListener("input",function(){
            usernameextra.innerHTML = ""
            })
            passwordb.addEventListener("input",function(){
              passwordextra.innerHTML = ""
            })
            emailb.addEventListener("input",function(){
          
          emailextra.innerHTML =""
            
            })
            phoneb.addEventListener("input",function(){
   phonextra.innerHTML =""
            
            })
            experienceb.addEventListener("input",function(){
             
              experienceextra.innerHTML =""
              
              })
            fileInput.addEventListener("click",function(){
                photocorrect.innerHTML = ""
              })
 
});