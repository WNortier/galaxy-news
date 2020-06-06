//@ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
  let mainloader = document.querySelector('.main-loader');
  let container = document.querySelector('.container');
  let gridItems = document.querySelectorAll('.grid-item');
  let predator = document.querySelector('.predator');
  // var x = document.getElementById('myAudio');

  // x.play();
  // x.style.visibility = 'hidden';

  container.classList.remove('fade-out');

  // setTimeout(function () {
  //   mainloader.style.display = 'none';
  // }, 3000);

  // setTimeout(function () {
  //   gridItems.forEach((item) => {
  //     item.style.visibility = 'visible';
  //   });
  // }, 3000);

  var imageOffset = 0;
  setInterval(function () {
    imageOffset += 20;
    predator.style.left = imageOffset + 'px';
  }, 200);

  setInterval(function () {
    imageOffset = 0;
    predator.style.left = 0;
  }, 30000);

  var api_key = '047baed03e5e45b9ac8d8cb187249886';
  let getLatestNews = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var today = yyyy + '-' + mm + '-' + dd;
    return today;
  };

  let newsApi = () => {
    // results.innerHTML = '';
    // results.setAttribute('style', 'margin-top: 200px;color:white');
    // results.classList.add('lds-dual-ring');
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=' +
          api_key
      )
      .then(function (results) {
        let response = results.data;
        console.log(response);
        // newsInstance.processData(response.articles);
      });
    newsApi();
    // setTimeout(function () {
    //   results.setAttribute('style', 'margin-top: 0px');
    //   results.classList.remove('lds-dual-ring'), renderNews();
    // }, 2000);
  };
});

function vanish() {
  let predator = document.querySelector('.predator');
  predator.style.display = 'none';
}
