// /*Função de mudar o celular*/
// function imgSlider(e) {
//   document.querySelector("#phone").src = e;
// }
// /*Função de mudar a cor do circulo*/
// function circleChange(color) {
//   const circle = document.querySelector(".circle");
//   circle.style.background = color;
// }


function changeProduct(imageSrc, circleColor, newPrice, newLink) {
    // Altera a imagem e a cor do círculo conforme necessário
    imgSlider(imageSrc);
    circleChange(circleColor);

    // Altera dinamicamente o preço e o link da tag <a>
    document.getElementById('price').innerText = newPrice;
    document.getElementById('amazon-link').href = newLink;
  }

  /*Função de mudar o celular*/
  function imgSlider(e) {
    document.querySelector("#phone").src = e;
  }

  /*Função de mudar a cor do circulo*/
  function circleChange(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;
  }