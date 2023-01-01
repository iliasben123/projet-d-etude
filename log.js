document.getElementById("tutu").addEventListener("click",verification);
function verification(){
    let username =document.forms["form"]["c1"].value;
    let email =document.forms["form"]["c2"].value;
    let password =document.forms["form"]["c3"].value;
    let passwordconf =document.forms["form"]["c4"].value;
    let emailpat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    let passwordpat = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (username.length<3 || username.length>25 )
    {alert("the user name not valid");}
    else if(!emailpat.test(email)){
        alert("enter a valid email adress");}
    else if(password.length<8 || !passwordpat.test(password)){
        alert("enter a valid password ");}
    else if(password!=passwordconf){
        alert("the two passwords need to match"); }
    else{
        window.open("homepage.html",'_self'); }
       
    
}