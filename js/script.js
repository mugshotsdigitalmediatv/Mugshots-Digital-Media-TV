$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('header').addClass('header-active');
      }else{
        $('header').removeClass('header-active');
      }
  
      $('section').each(function(){
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top - 200;
        var top = $(window).scrollTop();
        if(top >= offset && top < offset + height){
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find('[href="#' + id + '"]').addClass('active');
        }
      });
  
    });
    $('.accordion-header').click(function(){
      $('.accordion .accordion-body').slideUp();
      $(this).next('.accordion-body').slideDown();
      $('.accordion .accordion-header span').text('+');
      $(this).children('span').text('-');
    });
  });


  //Backend of Contact Form
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwOb7MEOT-EBA9q16GIwWBz_-yfJeOZgL02Vp8cMZwbK39k3PS7vfy7lne6GHgILyBV/exec'
    const form = document.forms['submit-to-google-sheet']

   
    form.addEventListener('submit', e => { 
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      swal({
        title: "Thank you!",
        text: "Message Successfully Sent!",
        icon: "success",
        button: "OK", 
      });
      document.getElementById('fullname').value = ' ';
      document.getElementById('emailA').value = ' ';
      document.getElementById('contactnumber').value = ' ';
      document.getElementById('messageform').value = ' ';
      window.location.reload();
      })

  