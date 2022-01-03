class ApodView{
   

    showData(data) {
        // if you asked for a random APOD then it comes in an array, this corrects it.
        if (Array.isArray(data))
        data = data[0];

        if (data.media_type === "image") {
            $('.other').hide();
            $('.video').hide();
            $('#picture').attr({ src: data.url});
            $('.picture').show();
            $('#title').text(luxon.DateTime.fromISO(data.date).toLocaleString() +': '+ data.title);
            $('#desc').text(data.explanation);
        } else if (data.media_type === "video") {
            $('.other').hide();
            $('.picture').hide();
            $('#video').attr({ src: data.url});
            $('.video').show();
            $('#title').text(luxon.DateTime.fromISO(data.date).toLocaleString() +': '+ data.title);
            $('#desc').text(data.explanation);
        } else if (data.media_type === 'other') {
            $('.video').hide();
            $('.picture').hide();
            let tempApodURL = 'https://apod.nasa.gov/apod/apyymmdd.html'
            const apodDay = luxon.DateTime.fromISO(data.date).toFormat('yyMMdd')
            let apodUrl = tempApodURL.replace('yymmdd', apodDay)
            $('#other').text('Esse conteúdo é melhor visto no site original do APOD:');
            $('#otherLink').attr({ href: apodUrl });
            $('#otherLink').text( apodUrl.toString() );
            $('.other').show();
            
        }


    }


 
}