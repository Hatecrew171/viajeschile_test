const myCarouselElement = document.querySelector('#carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true,
  pause: "hover"
})

$("#label__text--name").attr('title', 'Nombre Completo');

$("#label__text--email").attr('title', 'Correo electronico');

$("#label__text--emailbody").attr('title', 'Mensaje a Enviar');

$("#btn_enviar").click(function(){
  if($("#name").val() == "" ){
    alert("favor completar el nombre");
  }else if($("#email").val() == "" ){
    alert("favor completar el email");
  }else if($("#emailbody").val() == "" ){
    alert("favor escribir un mensaje");
  }else if($("#checkbox_tyc").prop('checked') == false){
    alert("debe aceptar los terminos y condiciones");
  }else{
    alert("mensaje enviado correctamente!");
  }
})

