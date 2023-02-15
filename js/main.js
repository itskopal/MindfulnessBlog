// filter Js
$(document).ready(function(){
    $(".filter-item").click(function(){
       const value = $(this).attr('data-filter')
       if (value == 'all') {
        $('.post-box').show('1000')
       }
       else{
        $('.post-box')
          .not('.' + value)
          .hide('1000')
        $('.post-box')
          .filter('.' + value)
          .show('1000')
       }
    });
    // Add active to btn
    $(".filter-item").click(function() {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Header background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
});

// login
const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click",() => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password"); 

    pwFields.forEach(password => {
      if(password.type === "password"){
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    })
  })
})

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  })
})

// login2
function showModal(){
  document.querySelector('.overlay').classList.add('showoverlay')
  document.querySelector('.loginform').classList.add('showloginform')
}
function closeModal(){
  document.querySelector('.overlay').classList.remove('showoverlay')
  document.querySelector('.loginform').classList.remove('showloginform')
}

var btnlogin = document.querySelector(".login");//button
btnlogin.addEventListener("click", showModal) //button click

var c = document.querySelector(".close");
c.addEventListener("click",closeModal)