

        
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


            window.onscroll = function() {

                if (document.documentElement.scrollTop > 80) 
                {

                document.getElementById("navbar").style.background = "black";

                document.getElementById("navbar").style.padding = "12px 10px";

                } 
                else 
                {

                document.getElementById("navbar").style.background = "none";

                document.getElementById("navbar").style.padding = "0px 0px";

                }

            }



            
     