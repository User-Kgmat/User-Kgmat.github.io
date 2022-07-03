//as builds are completed, replace gifs with full background images and videos of builds.

function highlight(identification)
{
    idd = document.getElementById(identification);
    idd.style.color = "darkgrey";
    if (idd.id == 'prebutton')
    {
        idd.style.color = "black";
        idd.style.backgroundColor = "white";
    }
    else if (idd.id == 'budgetbutton')
    {
        idd.style.color = "black";
        idd.style.backgroundColor = "white";
    }
    
}
function mouseleave(identification)
{
    ident = document.getElementById(identification);
    ident.style.color = "black";
    if (ident.id == "prebutton")
    {
        ident.style.color = "white";
        ident.style.backgroundColor = "black";
    }
    else  if (ident.id == "budgetbutton")
    {
        ident.style.color = "white";
        ident.style.backgroundColor = "black";
    }
}
function onclick()
{

}
