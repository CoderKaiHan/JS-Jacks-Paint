function configureListeners() {
    let images = document.querySelectorAll('img')// select img elements  


     for(let i = 0; i < images.length; i++) {        
        images[i].addEventListener('mouseover',addOpacity
        );
        // iterate over images and add mouseover event listeners 
        images[i].addEventListener('mouseout',removeOpacity);
        images[i].addEventListener('mouseover', function () {
            // Handle the click event to show color name and price
            getProductInfo(images[i].id);   
    }); 
}

function addOpacity(event) {
    // add appropriate CSS class
    if(!this.classList.contains('dim')){
        this.classList.add('dim')
    }   
}

function removeOpacity(event) {
     //remove appropriate CSS class
    if(this.classList.contains('dim')){
        this.classList.remove('dim')
    } 
}

function getProductInfo(paintColor) {
    let price;
    let colorName;
    
    switch (paintColor) {
        case 'pn1':           
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)      
        // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = '$11.14'
            colorName = 'Medium Brown' 
            updatePrice(colorName, price)    
        // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = '$22.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, price)     
        // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '$13.42'
            colorName = 'Solid Red'            
            updatePrice(colorName, price)
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            price = '$21.98'
            colorName = 'Solid White' 
            updatePrice(colorName, price)
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            price = '$4.99'
            colorName = 'Solid Black'   
            updatePrice(colorName, price)
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$8.22'
            colorName = 'Solid Cyan'       
            updatePrice(colorName, price) 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price = '$11.99'
            colorName = 'Solid Purple'      
            updatePrice(colorName, price)
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99'
            colorName = 'Solid Yellow'                       
            updatePrice(colorName, price)
            break;   
          default:              
    }

    function updatePrice(colorName, price){       
        let colorPrice = document.getElementById('color-price');// select element with corresponding id
        // display price
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');// select element with corresponding id
        //display color name
        color.textContent = colorName;
    }
    
}}