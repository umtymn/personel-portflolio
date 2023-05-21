//call all the buttons which is in the first tab and add eventlistener
const firstOpenTabsButtons = document.querySelectorAll(".tablinks");
firstOpenTabsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let targetId = button.dataset.target;
    openTab(e, targetId);
  });
});

//call all the buttons which is in the skill tab and add eventlistener
const skillsOpenTabsButtons = document.querySelectorAll(".tablinks-skills");
skillsOpenTabsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let targetId = button.dataset.target;
    openTabSkills(e, targetId);
  });
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

const addPost = async (e) => {
e.preventDefault();
inputName.value = "";
inputEmail.value = "";
inputPhone.value = "";
inputMessage.value = "";

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