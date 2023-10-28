let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span class="typewriter"> Pasante de ingeniería en Comunicaciones y estudiante de Turismo Alternativo.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
