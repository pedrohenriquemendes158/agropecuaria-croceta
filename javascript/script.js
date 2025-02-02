

    let currentindex = 0;
    const carrosselContainer = document.querySelector('.carrossel-container');
    const totalitems = document.querySelectorAll('carrossel-item').length;

    document.querySelector('.prev').addEventListener('click',() =>{
        if (currentindex > 0) {
            currentindex--;
        } else {
                currentindex = totalitems - 1;
        }
        updateCarrossel();
    });

        document.querySelector('.next').addEventListener('click', () =>{
            if (currentindex < totalitems -1) {
                currentindex++;
            } else {
                currentindex = 0;
            }
        updateCarrossel();
    });
    function updateCarrossel() {
        const offset = -currentindex * 100;
        carrosselContainer.style.transform = `translateX(${offset}%)`;
    }   
