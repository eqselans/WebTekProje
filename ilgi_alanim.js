const apiKey = "K368EEAg84Fh9iB9vEwmxaBpnx08V0g1";

      document.addEventListener("DOMContentLoaded", function () {
        function getRandomArticle() {
          fetch(
            `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
          )
            .then((response) => response.json())
            .then((data) => {
              const articleTitle =
                data.results[Math.floor(Math.random() * data.results.length)]
                  .title;
              const articleAbstract =
                data.results[Math.floor(Math.random() * data.results.length)]
                  .abstract;
              document.getElementById("makaleBaslik").textContent =
                articleTitle;
              document.getElementById("makaleOzet").textContent =
                articleAbstract;
            })
            .catch((error) => console.log(error));
        }
        document
          .getElementById("makaleGetir")
          .addEventListener("click", getRandomArticle);
      });