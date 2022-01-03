class ApodModel{

    
    /**
     * 
     * Makes a GET HTTP request and gives handles to process the data received.
     * 
     * @param {url} url A string with the url to make the request.
     * @param {Function} passbeckSuccess A callback to handle the data when it succeeds(required). (data) is the response.
     * @param {Function} passbeckError A callback to handle the data when request fails. (data) is the error.
     */
    getAPODData(url, passbeckSuccess, passbeckError) {

    const settings = {
    url: url,
    success: (data) => passbeckSuccess(data),
    }

    if (passbeckError)
    settings['error'] = (data) => passbeckError(data);

    $.get(settings);

    }


    /**
     * 
     * @param {Boolean} random If true then the URL created will ask for a Random APOD.
     * @param {string} date A string in the format 'yyyy-mm-dd' to ask for that day's APOD.
     * @returns {string} A string to make the AJAX request to APOD acording to the parameters passed.
     */
    // generates an URL for random or dated days
    solveURL(random=false, date='') {
        const url = new URL('https://api.nasa.gov/planetary/apod');

        url.searchParams.set('api_key', 'mWKlKUyUWholtSxMbpJp6tUAU122qwmElShoscPs');

        if (random)
            url.searchParams.set('count', 1);
        else if (date)
            url.searchParams.set('date', date);

        return url.toString()
    }


}
