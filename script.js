//makes sure page loads at the top
window.onload = function() {
    window.scrollTo(0, 0);
  };

function navMenu()
{
    document.getElementById("x1").classList.toggle("x"); 
    document.getElementById("x2").classList.toggle("x"); 

    document.querySelector(".nav-menu").classList.toggle("active"); 
    document.querySelector(".blur-overlay").classList.toggle("active"); 
}

function profilePop()
{
    document.querySelector(".profile-pop-up").classList.add("active"); 
}

function profileHide()
{
    document.querySelector(".profile-pop-up").classList.remove("active"); 
}

function addEventPop()
{
    document.querySelector(".add-event-pop").classList.add("active"); 
}

function addEventHide()
{
    document.querySelector(".add-event-pop").classList.remove("active"); 
}