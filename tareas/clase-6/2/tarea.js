const $contenedorElementos = document.querySelector(".contenedor-elementos");
const $boton = document.querySelector(".calcular-promedio");
const $crear = document.querySelector(".Crear");
const $recargarPagina = document.querySelector(".regar");
const $promedio = document.querySelector(".promedio");
const $cantidadFamilia = document.querySelector("#cantidad-Familia");

$crear.addEventListener("click", function (e) {
  e.preventDefault();
  for (let index = 0; index < $cantidadFamilia.value; index++) {
    $contenedorElementos.innerHTML += `    <input type="number" class="personaFamilia">
  .`;
  }
});

$boton.addEventListener("click", function () {
  let total = 0;
  const ColeccionInput = document.querySelectorAll(".personaFamilia");
  for (let index = 0; index < ColeccionInput.length; index++) {
    console.log((total += Number(ColeccionInput[index].value)));
  }

  console.log(total);
  $promedio.innerHTML =
    "el promedio salarial es" + " " + total / $cantidadFamilia.value;
});

$recargarPagina.addEventListener("click", function (e) {
  $cantidadFamilia.value = "";

  e.preventDefault();
  window.location.reload();
});
