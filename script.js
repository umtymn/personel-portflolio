
//tabcontent for the skills navigation
function openTab(evt, infoTabs) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(infoTabs).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


/* 

-location lucerne icin tiklama ekle. google location konum kullan
-download hover ekle ve diger renkelerle ayni olsun.
-navbardaki butonlara height yükselt, iconlar biraz daha büyük olsun.
-fixed iconu degistir ve padding ver
-contact button hoverini ddegistir/boyutunu da degisitr
-contact phone zorunluluktan cikar

*/

//tabcontent for the skills navigation

function openTabSkills(evt, infoTabs) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent-skills");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-skills");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(infoTabs).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("skillsDefaultOpen").click();


//dark mode
const handleDarkMode = () => {
  let body = document.body;
  body.classList.toggle("dark-mode");
};

//change icons
function ToggleTheme() {
  let themeToggleDark = document.querySelector(".theme-toggle-dark");
  let themeToggleLight = document.querySelector(".theme-toggle-light");
  if (themeToggleLight.style.display !== "none") {
    themeToggleLight.style.display = "none";
    themeToggleDark.style.display = "block";
  } else {
    themeToggleLight.style.display = "block";
    themeToggleDark.style.display = "none";
  }
}
ToggleTheme();
