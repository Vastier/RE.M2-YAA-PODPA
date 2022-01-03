class ApodController{

    getInitialApod(){

        // Instantiates the model and view objects.
        const view = new ApodView();
        const model = new ApodModel();
        
        // Makes a url to get a random APOD.
        const randomURL = model.solveURL(true)

        // Get the data from APOD servers and show to user.
        model.getAPODData(randomURL, (data) => {
            view.showData(data)
        });

        //Inserir data de hoje no input?
        //limitar input-max pra hoje e apod start?
    }
    
    getApodDay(){
            
        // Gets the value of the date input with Jquery
        const usrdate = $('#usrdate')[0]
        // Instantiates the model and view objects.
        const view = new ApodView();
        const model = new ApodModel();
        
        // Makes a url for the day the user chose.
        const url = model.solveURL(false, usrdate.value)
        
        // Get the data from APOD servers and show to user.
        model.getAPODData(url, (data) => {
            view.showData(data)
        });


    }
   

    getApodRndDay(){

        // Instantiates the model and view objects.
        const view = new ApodView();
        const model = new ApodModel();
        
        // Makes a url to get a random APOD.
        const randomURL = model.solveURL(true)

        // Get the data from APOD servers and show to user.
        model.getAPODData(randomURL, (data) => {
            view.showData(data)
        });


    }



}