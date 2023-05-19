// get all the button for the add event listener
const defaultOpenButton = document.getElementById("defaultOpen");
defaultOpenButton.addEventListener("click", (e)=> {
  openTab(e, 'home-page');
});

const educationButton = document.getElementsByClassName("tablinks")[1];
educationButton.addEventListener("click", (e)=> {
  openTab(e, 'education');
});

const skillsButton = document.getElementsByClassName("tablinks")[2];
skillsButton.addEventListener("click", (e) =>{
  openTab(e, 'skills');
});

const certificatesButton = document.getElementsByClassName("tablinks")[3];
certificatesButton.addEventListener("click", (e)=> {
  openTab(e, 'certificates');
});

const contactButton = document.getElementsByClassName("tablinks")[4];
contactButton.addEventListener("click", (e)=> {
  openTab(e, 'contact');
});

const skillsDefaultOpenButton = document.getElementById("skillsDefaultOpen");
skillsDefaultOpenButton.addEventListener("click", (e)=> {
  openTabSkills(e, 'tablinks-tecnical-skills');
});

const softSkillsButton=document.getElementsByClassName("tablinks-skills")[1];
softSkillsButton.addEventListener("click", (e)=>{
  openTabSkills(e, 'tablinks-soft-skills')
});

//opanTab function for the first contain
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

//opanTab function for the skills tab

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
const darkBtn=document.getElementById("dark-mode-btn");

darkBtn.addEventListener("click",() => {
  let body = document.body;
  body.classList.toggle("dark-mode");

  let logo = document.getElementById("logo");
  let logoSrc ="./images/logo-black.png" ;

  if (body.classList.contains("dark-mode")) {
    logoSrc = "./images/logo-white.png";
  }
  logo.src = logoSrc;
});

//change icons via dark mode

let themeToggleDark = document.querySelector(".theme-toggle-dark");
let themeToggleLight = document.querySelector(".theme-toggle-light");

themeToggleDark.addEventListener("click",ToggleTheme);
themeToggleLight.addEventListener("click", ToggleTheme)

function ToggleTheme() {
  if (themeToggleLight.style.display !== "none") {
    themeToggleLight.style.display = "none";
    themeToggleDark.style.display = "block";
  } else {
    themeToggleLight.style.display = "block";
    themeToggleDark.style.display = "none";
  }
};
ToggleTheme();

// post form to backend 
const myForm = document.getElementById("myForm");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputMessage= document.getElementById("text-aria");

const BASE_URL = "http://localhost:8090/messages";
const addPost = async (event) => {
  if (event) {
    event.preventDefault();
  }

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputName.value,
      email: inputEmail.value,
      number: inputPhone.value,
      message: inputMessage.value,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    inputName.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
    inputMessage.value = "";
  } else {
    console.error("Error sending message!!!!");
  }
};

if (myForm) {
  myForm.addEventListener("submit", addPost);
}

// toastify
myForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  Toastify({
    text: "Your message was sent successfully!",
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "right",
  }).showToast();

});