

  $(document).ready(function() {
    
  
    $('#login').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) 
      var recipient = button.data('whatever') 
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })
    

    $.ajax({
      method: "POST",
      url: "https://reqres.in/api/users/",
      data: {
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
      }
    }).done(function(resultado1){
      $("#id_persona_1").text(resultado1.first_name + " " + resultado1.last_name);
      $("#id_persona_1_foto").attr("src", resultado1.avatar);
    });

    $.ajax({
      method: "POST",
      url: "https://reqres.in/api/users/",
      data: {
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }
    }).done(function(resultado2){
      $("#id_persona_2").text(resultado2.first_name + " " + resultado2.last_name);
      $("#id_persona_2_foto").attr("src", resultado2.avatar);
    });

    $.ajax({
      method: "POST",
      url: "https://reqres.in/api/users/",
      data: {
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
      }
    }).done(function(resultado3){
      $("#id_persona_3").text(resultado3.first_name + " " + resultado3.last_name);
      $("#id_persona_3_foto").attr("src", resultado3.avatar);
    });

  });

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }else{
            alert("Formulario guardado");
          }
          
          form.classList.add('was-validated');
          
        },
        
        false);
      });
      
    }, false);
  })();