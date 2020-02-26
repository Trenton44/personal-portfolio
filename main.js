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
  Window.document.getElementById("ResumePic").style.display = "block";
  Window.document.getElementById("Timer").style.display = "none";

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
function delayTime(){
	setTimeout("displayTime()", 1000);
}
function displayTime(){
	var date = new Date();
	var timeDisplayed = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	document.getElementById("Timer").innerHTML = timeDisplayed;
	delayTime();
}
