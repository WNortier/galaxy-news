//@ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
  let templateSource = document.querySelector('#handlebars-template').innerHTML;
  let template = Handlebars.compile(templateSource);
  let results = document.querySelector('.results');

  const apiKey = 'e1e491e99464458eaf0035bca5b520d8';
  const requestUrl = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-06&sortBy=publishedAt&apiKey=${apiKey}`;

  let news = [];

  const getNews = async () => {
    results.innerHTML = '';
    await axios.get(requestUrl).then((response) => {
      for (var z = 0; z < response.data.articles.length; z++) {
        news.push(response.data.articles[z]);
      }
      var html = template(news.splice(0, 10));
      results.innerHTML = html;
    });
  };

  getNews();
});
