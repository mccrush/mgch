window.onload = function() {
  // var btnShowContactsTop = document.querySelector("#btnShowContactsTop");
  // var contactsTop = document.querySelector("#contactsTop");
  // btnShowContactsTop.addEventListener("click", function(e) {
  //   contactsTop.classList.toggle("show-contacts");
  // });

  var totop = document.querySelector("#totop");

  window.addEventListener("scroll", function(e) {
    //console.log(window.scrollY);
    if (window.scrollY > 352) {
      totop.classList.remove("d-none");
    } else {
      totop.classList.add("d-none");
    }
  });
};
