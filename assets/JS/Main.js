

        
            function rightScroll(carousel, rightArrow) 
            {

                const scroll = document.querySelector(carousel);

                const right = document.querySelector(rightArrow);
                
                right.addEventListener("click", () => 
                {
                    scroll.scrollLeft += scroll.offsetWidth;
                })

            }

            function leftScroll(carousel, leftArrow) 
            {

                const scroll = document.querySelector(carousel);

                const left = document.querySelector(leftArrow);

                left.addEventListener("click", () => 
                {
                    scroll.scrollLeft -= scroll.offsetWidth;
                })

            }
            
            
     