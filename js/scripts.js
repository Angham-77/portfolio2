
document.addEventListener("DOMContentLoaded", function(){
  const sidemenu = document.getElementById("sidemenu");
  const openMenuIcon = document.querySelector(".fa-bars");
  const closemenuIcon = document.querySelector(".fa-xmark");
  

  function openmenu(){
    sidemenu.style.right= "0";
  }
  function closemenu(){
    closemenu.style.right="-200px"
  }

  openMenuIcon.addEventListener("click", openmenu);
  closemenuIcon.addEventListener("clikc",closemenu );
});

document.addEventListener("DOMContentLoaded", function() {
  const tablinks = document.querySelectorAll(".tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");

  tablinks.forEach(function(tab) {
      tab.addEventListener("click", function() {
          opentab(tab.getAttribute("data-tab")); 
      });
  });



  function opentab(tabname) {
      for (let tablink of tablinks) {
          tablink.classList.remove("active-link");
      }
      for (let tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
      }
      document.querySelector("[data-tab='" + tabname + "']").classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
  }
});




document.addEventListener("DOMContentLoaded", function() {
  const sidemenu = document.getElementById("sidemenu");
  const openMenuIcon = document.querySelector(".fa-bars");
  const closeMenuIcon = document.querySelector(".fa-xmark");

  function openmenu() {
      sidemenu.style.right = "0";
  }

  function closemenu() {
      sidemenu.style.right = "-200px";
  }

  openMenuIcon.addEventListener("click", openmenu);
  closeMenuIcon.addEventListener("click", closemenu); 
});

