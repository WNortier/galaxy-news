//@ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
  const predator = document.querySelector('.predator');
  const loaderText = document.querySelector('.loader-text');
  const video = document.querySelector('#stars');
  const overlay = document.querySelector('.overlay');
  const radio = document.querySelector('#radio');
  const mainLoader = document.querySelector('.loader-primary');

  var imageOffset = 0;
  setInterval(() => {
    imageOffset += 20;
    predator.style.left = imageOffset + 'px';
  }, 200);

  setInterval(() => {
    imageOffset = 0;
    predator.style.left = 0;
  }, 30000);

  (function loadingHandler() {
    setInterval(() => {
      let currentText = loaderText.innerHTML;
      switch (currentText) {
        case 'Loading...':
          {
            loaderText.innerHTML = `Resolving Deltas...`;
          }
          break;
        case 'Resolving Deltas...':
          {
            loaderText.innerHTML = `Parsing the Spaghetti...`;
          }
          break;
        case 'Parsing the Spaghetti...':
          {
            loaderText.innerHTML = `Loading...`;
          }
          break;
      }
    }, 1500);
  })();

  video.oncanplay = () => {
    setTimeout(() => {
      mainLoader.style.display = 'none';
      loaderText.style.display = 'none';
      overlay.classList.add('hidden');

      setTimeout(() => {
        overlay.style.display = 'none';
        radio.play();
      }, 2300);
      document.body.setAttribute('style', 'overflow-y: visible');
    }, 3000);
  };
});

const vanish = () => {
  let predator = document.querySelector('.predator');
  predator.style.display = 'none';
};

const lottery = () => {
  let link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', './css/waiting.css');
  link.setAttribute('id', 'waiting');
  let head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
  let waiting = document.querySelector('#waiting');
  setTimeout(() => {
    waiting.parentNode.removeChild(waiting);
    let chance = Math.ceil(Math.random() * 100) > 60 ? true : false;
    switch (chance) {
      case true: {
        return prompt('You have won! Enter email to claim your prize:');
      }
      case false: {
        return malware();
      }
    }
  }, 1000);
};

const malware = () => {
  confirm(
    `CONGRATULATIONS!!! 🎉 You are todays lucky visitor for: \n${String(
      new Date()
    )}\nPlease complete this short survey to say "Thank you" and you will stand a chance to get a Samsung Galaxy S10!`
  );
  alert('Your computer has been infected by dangerous malware!');
  if (confirm('***Chrome User***\nYou Are Our Winner Today!!!')) {
    alert(`;)`);
  } else {
    alert(`;)`);
  }
};
