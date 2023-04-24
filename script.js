    function loading(){

    var msg = window.document.getElementById('msg')
    var picture = window.document.getElementById('picture')
    var date = new Date()
    var hours = date.getHours() 
    var min = date.getMinutes ()
    
    msg.innerHTML = `It’s ${hours}:${min}   o’clock!`
    
    if (hours >= 0 && hours < 12 ){
        // Good Morning!
        picture.src='images/morning.png'
        document.body.style.backgroundColor=
        '#BFAE7A'
    }

    else if ( hours >= 12 && hours <= 18) {
        // Good afternoon 
         picture.src='images/day.png'
         document.body.style.backgroundColor= '#F2D1A8'
    
    }
    else {
        // Good night!
        picture.src='images/night.png'
        document.body.style.backgroundColor= '#2C2A2B'
        
        
       
    }

    }



