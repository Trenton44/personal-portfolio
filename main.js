var Window;
function saveWindow(input){
  Window = input;
}
function loadHome(){
  Window.document.getElementById("HomeContent").style.display = "block";
  Window.document.getElementById("WelcomeSign").style.display = "block";
  Window.document.getElementById("AboutContent").style.display = "none";
  Window.document.getElementById("ProjectContent").style.display = "none";
  Window.document.getElementById("Guide").style.display = "none";
  console.log("Homepage loaded.");
}
function loadAbout(){
  Window.document.getElementById("HomeContent").style.display = "none";
  Window.document.getElementById("AboutContent").style.display = "block";
  Window.document.getElementById("ProjectContent").style.display = "none";
  Window.document.getElementById("Guide").style.display = "none";
  console.log("About loaded.");
}
function loadProjects(){
  Window.document.getElementById("HomeContent").style.display = "none";
  Window.document.getElementById("AboutContent").style.display = "none";
  Window.document.getElementById("ProjectContent").style.display = "block";
  Window.document.getElementById("Guide").style.display = "none";
  console.log("Projects loaded.");
}
function loadSiteGuide(){
  Window.document.getElementById("WelcomeSign").style.display = "none";
  Window.document.getElementById("Guide").style.display = "block";
}
