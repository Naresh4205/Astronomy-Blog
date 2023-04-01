var password = "4205";
var email = "nani@gmail.com";
function access_to_page()
{
    var usergivenid = document.getElementById("userid").value
    var usergivenpass = document.getElementById("passwordp").value
     
    if(usergivenid==email && usergivenpass==password)
    {
        var fom =document.forms
        fom[0].action="./Html/AstroSpace.html"
        fom[0].elements[2].type="submit"
    }
    else if(usergivenid!=email && usergivenpass==password)
    {
        document.getElementById("userid").style.borderColor="red"
        document.getElementById("passwordp").style.borderColor="purple"
        document.getElementById("color_container1").style.backgroundImage=" linear-gradient(to right ,blue,red )"
    }
    else if(usergivenid==email && usergivenpass!=password)
    {
        document.getElementById("userid").style.borderColor="purple"
        document.getElementById("passwordp").style.borderColor="red"
        document.getElementById("color_container1").style.backgroundImage=" linear-gradient(to right ,blue,red )"
        
    }
    else
    {
        document.getElementById("userid").style.borderColor="red"
        document.getElementById("passwordp").style.borderColor="red"
        document.getElementById("color_container1").style.backgroundImage=" linear-gradient(to right ,red,red )"
    }
}
function visiblePass()
{
    var fom = document.forms
    fom[0].elements[1].type="text"
    document.getElementById("closeeyes").style.transform="rotateY(360deg)"
    document.getElementById("closeeyes").style.transition="transform 0.2s"
    var img = document.images
    img[0].src="Assets/Logos/openEyes.png"
}
function invisiblePass()
{
    var fom = document.forms
    fom[0].elements[1].type="password"
    document.getElementById("closeeyes").style.transform="rotateY(-360deg)"
    document.getElementById("closeeyes").style.transition="transform 0.2s"
    var img = document.images
    img[0].src="./Assets/Logos/closeEyes.png"
}