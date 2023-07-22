//@ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
  let templateSource = document.querySelector('#handlebars-template').innerHTML;

  let template = Handlebars.compile(templateSource);
  let results = document.querySelector('.results');
  const requestUrl = `https://galaxy-news-server.onrender.com/get-news`;

  const news = [];

  const getNews = async () => {
    results.innerHTML = '';
    await axios
      .get(requestUrl)
      .then((response) => {
        for (var z = 0; z < response.data.data.articles.length; z++) {
          news.push(response.data.data.articles[z]);
        }
        var html = template(news.splice(0, 10));
        results.innerHTML = html;
        let newsCards = document.querySelectorAll('.grid-item-news');
        newsCards.forEach((el) => {
          el.style.visibility = 'hidden';
        });
        let myLoader = document.createElement('div');
        myLoader.setAttribute('class', 'loader');
        newsCards.forEach((el) => {
          el.appendChild(myLoader);
        });
        let loader = document.querySelectorAll('.loader');
        loader.forEach((l) => {
          l.style.visibility = 'visible';
        });
        setTimeout(function () {
          loader.forEach((l) => {
            l.parentNode.removeChild(l);
          });
          newsCards.forEach((el) => {
            el.style.visibility = 'visible';
          });
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getHeadline = async () => {
    await axios.get(requestUrl).then((response) => {
      const headlines = response.data.data.articles.map((head) => {
        return head.description;
      });

      let headlineMarquee = document.querySelector('.headline');
      headlineMarquee.innerHTML = headlines[0];
      let index = 1;
      setInterval(() => {
        if (index == headlines.length) {
          index = 0;
        } else {
          index++;
        }
        headlineMarquee.innerHTML = headlines[index];
      }, 60000);
    });
  };

  getHeadline();
  getNews();
});
