var images = document.getElementsByClassName("a")
for(i=1;i<=images.length;i++)
{
    images[i-1].setAttribute("src","../Assets/images/BlackHoles/"+i+".jpg")
    images[i-1].style.width="220px"
    images[i-1].style.height="220px"
}
console.log(images)
//this is for header
var indval=0;
var imagesarr=["1.jpg","2.jpg","3.jpg"]
function inc()
{
    indval++;
    if(indval>=imagesarr.length)
    {
        indval=0;
        document.getElementById("header").style.backgroundImage="url(../Assets/images/BlackHoles/"+imagesarr[indval]+")"
    }
    else
    {
        document.getElementById("header").style.backgroundImage="url(../Assets/images/BlackHoles/"+imagesarr[indval]+")"
    }
}
function dec()
{
    indval--;
    if(indval<0)
    {
        indval=2;
        document.getElementById("header").style.backgroundImage="url(../Assets/images/BlackHoles/"+imagesarr[indval]+")"
    }
    else
    {
        document.getElementById("header").style.backgroundImage="url(../Assets/images/BlackHoles/"+imagesarr[indval]+")"
    }
}
function openImg(pic,name,info)
{
    document.getElementById("subWindow").removeAttribute("style")
    document.getElementById("subWindowImg").src='../Assets/images/BlackHoles/'+pic+".jpg"
    document.getElementById("imageHeading").innerHTML=name;
    document.getElementById("imgpara").innerHTML=info;
}
function closeImg()
{
    document.getElementById("subWindow").setAttribute("style","display:none")
} 