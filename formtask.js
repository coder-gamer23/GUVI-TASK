let jsname=document.getElementById("validationCustom01");
let jage=document.getElementById("validationCustom05");
let jemail=document.getElementById("validationCustomUsername");
let jpassw=document.getElementById("validationCustom03");
let jsubmit=document.getElementById("button");
let jsform=document.getElementById("form");
function validname(name)
{
    let regName = /^[a-zA-Z\s]+$/;
    if(regName.test(name))
    {
    return 1;
    }
    else
    {
    return 0;
    }
}
function validage(age)
{
    if((age>=1)&&(age<=99))
    return 1;
    else
    return 0;
}
function validmail(mail)
    {
        let regName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regName.test(mail))
        {
        return 1;
        }
        else
        {
        return 0;
        }
    }
    function validpas(pas)
    {
        let regName = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(regName.test(pas))
        {
        return 1;
        }
        else
        {
        return 0;
        }
    }
    function userpassword(passwrd){
        errors = [];
        if (passwrd.length < 8) {
            errors.push("Your password must be at least 8 characters");
        }
        if (passwrd.length > 15) {
            errors.push("Your password must be 15 characters length");
        }
        if (passwrd.search(/[a-z]/i) < 0) {
            errors.push("Your password must contain at least one letter."); 
        }
        if (passwrd.search(/[A-Z]/i) < 0) {
            errors.push("Your password must contain at least one capital letter."); 
        }
        if (passwrd.search(/[0-9]/) < 0) {
            errors.push("Your password must contain at least one digit.");
        }
        if (passwrd.search(/[@#!$%^&*]/) < 0) {
            errors.push("Your password must contain at least one special character.");
        }
        if (errors.length > 0) {
            return 0;
        }
        return 1;
    }
jsubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    var a=jsname.value;
    let b=jage.value;
    let c=jemail.value;
    let d=jpassw.value;
    var k=validname(a);
    var u=validage(b);
    var z=validmail(c);
    var l=userpassword(d);
    console.log(b);
     if(k===0||u===0||z===0||l===0)
    {
        if(k===0)
        {
             alert("Invalid name");
        }
         if(u===0)
        {
            alert("Invalid age");
        }
        if(z===0)
        {
            alert("Invalid mailid");
        }
        if(l===0)
        {
            alert(errors.join("\n"));
        }
    }
    else
    {
        var diname=document.createElement('div');
        diname.className="text-center mt-1";
        jsform.appendChild(diname);
        var pa=document.createElement("p");
        pa.className="fs-3 fw-bold";
        pa.innerHTML="REGISTERED SUCCESSFULLY";
        diname.appendChild(pa);
        if(k===1)
         {
            var divname=document.createElement('div');
            divname.className="col-md-4 mt-1";
            jsform.appendChild(divname);
            var para = document.createElement("label");
            para.className="form-label";
            para.innerHTML = "Name:<br>";
            divname.appendChild(para);
            var nametext=document.createElement("input");
            nametext.setAttribute("type","text");
            nametext.className="form-control mt-1";
            nametext.id="nametext1";
            divname.appendChild(nametext);
            document.getElementById("nametext1").value=a;
              
        }
        if(u===1)
        {
            var divname2=document.createElement('div');
            divname2.className ="col-md-1 mt-1";
            jsform.appendChild(divname2);
            var htage = document.createElement("label")
            htage.className ="form-label";
            htage.innerHTML = "Age:";
            divname2.appendChild(htage);
            var agetext=document.createElement("input");
            agetext.setAttribute("type","text");
            agetext.className ="form-control mt-1";
            agetext.id="agetext1";
            divname2.appendChild(agetext);
            document.getElementById("agetext1").value=b;
        }
         if(z===1)
        {
            var divname3=document.createElement('div');
            divname3.className ="col-md-4 mt-1"
            jsform.appendChild(divname3);
            var htemail = document.createElement("label")
            htemail.className ="form-label";
            htemail.innerHTML = "Email:";
            divname3.appendChild(htemail);
            var mailtext=document.createElement("input");
            mailtext.setAttribute("type","text");
            mailtext.className ="form-control mt-1";
            mailtext.id="mailtext1";
            divname3.appendChild(mailtext);
            document.getElementById("mailtext1").value=c;
        }
    }
 })
