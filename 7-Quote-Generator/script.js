const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.getElementById("quote").innerHTML = data.content;
  document.getElementById("author").innerHTML = data.author;
}

getQuote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      document.getElementById("quote").innerHTML +
      " - " +
      document.getElementById("author").innerHTML
  );
}
