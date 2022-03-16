function scroll(image, direction) 
{

    const container = document.querySelector(image);


    if(direction == "right") 
    { 

        container.scrollright += 280

    } 

    else if(direction == "left")
    {

        container.scrollLeft -= 280

    }
    
}