//scrollspy
$(window).on("scroll", function () {
  var sections = $("section"),
    nav = $("nav"),
    nav_height = nav.outerHeight(),
    cur_pos = $(this).scrollTop();
  sections.each(function () {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("a").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document with a smooth transition
function topFunction() {
  // Check if the browser supports smooth scrolling
  if (document.documentElement.style.scrollBehavior !== undefined) {
    // Use native smooth scrolling
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    // For browsers that do not support smooth scrolling, use a polyfill or a library
    $("html, body").animate({ scrollTop: 0 }, 1000);
  }
}

// Script.js contact thing
function validate() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  let errors = [];

  //if (name.length < 5) {  errors.push("Please Enter a valid Name");  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    errors.push("Please Enter a valid Email");
  }
  if (message.length <= 20) {
    errors.push("Please Enter More Than 20 Characters");
  }

  if (errors.length > 0) {
    error_message.innerHTML = errors.join("<br>");
    return false;
  } else {
    alert("Form Submitted Successfully!");
    return true;
  }
}
