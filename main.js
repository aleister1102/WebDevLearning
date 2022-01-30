fetch("https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })