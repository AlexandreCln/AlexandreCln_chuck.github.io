// This function loads data from the API
function fetchChuckNorrisFactJSON() {

    const url = 'https://api.chucknorris.io/jokes/random';
    axios.get(url)
        .then(function (response) {
            return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
        })
        .then(function (fact) {
            console.log('data decoded from JSON:', fact);

            const factHtml = `<img src="${fact.icon_url}" />
            <h2 id="demo"><strong >${fact.value}</strong></h2> `;

            document.querySelector('#chuck-norris').innerHTML = factHtml;
        });

    document.getElementById("myBtn").addEventListener("click", function () {
        document.getElementById("demo").innerHTML = fetchChuckNorrisFactJSON();
    });
}


fetchChuckNorrisFactJSON();
