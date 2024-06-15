/*About in Blue box toggles onclick*/
function aboutButton(){
  var box = document.getElementById("aboutbox");
    if (box.style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
}

/*Skills in vertical tab toggles onlick*/
function skillsTabButton(){
  var skillstab = document.getElementById("skillsSection");
  
    if(skillstab.style.display === "none") {
      skillstab.style.display = "block";
document.getElementsByClassName("skillsTabContent").style.display = "none";
    } else {
      skillstab.style.display = "none";
    }
}



/*Tab Fucntion openskill
function opemSkill(evt, skillName){
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("skillsTabContent");
  for (i=0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }
  
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(skillName).style.display = "block";
  evt.currentTarget.className += " active";
}

*/


function openSkill(skillName){
  var i, tabcontents, tablinks;
  
  tabcontents = document.getElementsByClassName("skillsTabContent");
  for (i=0; i < tabcontents.length; i++){
    tabcontents[i].style.display = "none";
    //document.write(tabcontents[i]);
  }
  
  if(skillName === "languages") {
    document.getElementById('languages').style.display = "block";
    document.getElementById('languagebutton').style.background = "#1F51FF";
    document.getElementById('languagebutton').style.color = "#ffffff";
  }else {
    document.getElementById('languages').style.display = "none";
    document.getElementById('languagebutton').style.background = "none";
    document.getElementById('languagebutton').style.color = "#000000";
  }
  
  if(skillName === "websites") {
    document.getElementById('websites').style.display = "block";
    document.getElementById('websitesbutton').style.background = "#1F51FF";
    document.getElementById('websitesbutton').style.color = "#ffffff";
  }else {
    document.getElementById('websites').style.display = "none";
    document.getElementById('websitesbutton').style.background = "none";
    document.getElementById('websitesbutton').style.color = "#000000";
  }
  
  if(skillName === "platforms") {
    document.getElementById('platforms').style.display = "block";
    document.getElementById('platformsbutton').style.background = "#1F51FF";       document.getElementById('platformsbutton').style.color = "#ffffff";
  }else {
    document.getElementById('platforms').style.display = "none";
    document.getElementById('platformsbutton').style.background = "none";
    document.getElementById('platformsbutton').style.color = "#000000";
  }
  
  if(skillName === "mobileApps") {
   document.getElementById('mobileApps').style.display = "block";
   document.getElementById('mobileappsbutton').style.background = "#1F51FF";
   document.getElementById('mobileappsbutton').style.color = "#ffffff";
  }else {
   document.getElementById('mobileApps').style.display = "none";
   document.getElementById('mobileappsbutton').style.background = "none";
   document.getElementById('mobileappsbutton').style.color = "#000000";
  }
  
  if(skillName === "advanced") {
    document.getElementById('advanced').style.display = "block";
    document.getElementById('advancedbutton').style.background = "#1F51FF";
    document.getElementById('advancedbutton').style.color = "#ffffff";
  }else {
    document.getElementById('advanced').style.display = "none";
    document.getElementById('advancedbutton').style.background = "none";
    document.getElementById('advancedbutton').style.color = "#000000";
  }
  
}


/*Close Tab Button*/
function closeTabContainer(container) {
    // Hide the entire tab container
  if(container === 'closeabout') {
    document.getElementById("aboutbox").style.display = "none";
  }
  else if(container === 'closeskills') {
    document.getElementById("skillsSection").style.display = "none";
  }
}