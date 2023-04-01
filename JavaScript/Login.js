var password = "4205";
var email = "nani@gmail.com";
function access_to_page()
{
    var usergivenid = document.getElementById("userid").value
    var usergivenpass = document.getElementById("userpass").value

    if(usergivenid==email && usergivenpass==password)
    {
        var fom =document.forms
        fom[0].action="../index.html"
        fom[0].elements[2].type="submit"
    }
    else if(usergivenid!=email && usergivenpass==password)
    {
        document.getElementById("status").innerHTML="Email Id Wrong"
        document.getElementById("wrong").innerHTML=" "
        document.getElementById("emaildiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="purple"
        document.body.style.backgroundImage="linear-gradient(to left ,blue,red )"
    }
    else if(usergivenid==email && usergivenpass!=password)
    {
        document.getElementById("wrong").innerHTML="Password is Wrong"
        document.getElementById("status").innerHTML=" "
        document.getElementById("emaildiv").style.borderColor="purple"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(to right ,blue,red )"
        
    }
    else
    {
        document.getElementById("status").innerHTML="Email Id Wrong"
        document.getElementById("wrong").innerHTML="Password is Wrong"
        document.getElementById("emaildiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage=" linear-gradient(to right ,red,red )"
    }
}
function visiblePass()
{
    var fom = document.forms
    fom[0].elements[1].type="text"
    document.getElementById("closeeyes").style.transform="rotateY(360deg)"
    document.getElementById("closeeyes").style.transition="transform 0.2s"
    var img = document.images
    img[0].src="../Assets/Logos/openEyes.png"
}
function invisiblePass()
{
    var fom = document.forms
    fom[0].elements[1].type="password"
    document.getElementById("closeeyes").style.transform="rotateY(-360deg)"
    document.getElementById("closeeyes").style.transition="transform 0.2s"
    var img = document.images
    img[0].src="../Assets/Logos/closeEyes.png"
}