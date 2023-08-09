$(document).ready(function(){
/*/smooth scrool
  // Add smooth scrolling to all links
  $("a.scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && this.hash !== hash) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: ($(hash).offset().top - 139)
      }, 1000);
    } // End if
  });
});

*/
const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', ()=>{
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop){
      current = section.getAttribute('id');
    }
  })
  navli.forEach(li =>{
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
})

});
