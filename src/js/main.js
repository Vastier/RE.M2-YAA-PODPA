// Initializing Controller.
const controller = new ApodController()

// Load today's APOD when page is loaded.
$( document ).ready(function() {
    controller.getInitialApod()
    

// Define what clicking the 'ver esse dia' (see this day) button does.
$('#datebtn').click((e)=>{
    e.preventDefault()
    controller.getApodDay()
    
})

// Define what clicking the 'ver dia aleatório' (see random day) button does.
$('#randombtn').click((e)=>{
    e.preventDefault()
    controller.getApodRndDay()
})

});

