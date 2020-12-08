x1__input = document.querySelector('.main__item-input-solve-x1');
x2__input = document.querySelector('.main__item-input-solve-x2');
main__inputa = document.querySelector('.main__input-a');
main__inputb = document.querySelector('.main__input-b');
main__inputc = document.querySelector('.main__input-c');

setInterval(function(){
    CheckInput();
    SolveQuadratic();
}, 200)

function CheckInput(){
    if(main__inputa.value != '')
        main__inputa.classList.add("is-valid");
    else
        main__inputa.classList.remove('is-valid');

    if(main__inputb.value != '')
        main__inputb.classList.add("is-valid");
    else
        main__inputb.classList.remove('is-valid');

    if(main__inputc.value != '')
        main__inputc.classList.add("is-valid");
    else
        main__inputc.classList.remove('is-valid');
}

function SolveQuadratic(){
    document.querySelector('.main__button-solve').onclick = function(){
        if(main__inputa.value != '' || main__inputb.value != '' || main__inputc.value != ''){
            let discriminant = Math.pow(parseInt(main__inputb.value), 2) - 4 * parseInt(main__inputa.value) * parseInt(main__inputc.value);
            if(discriminant < 0){
                x1__input.classList.add('is-invalid');
                x1__input.value = "Корней нет";
                x2__input.style = "display: none";
            } else if(discriminant == 0){
                x1__input.value = (-parseInt(main__inputb.value) + Math.sqrt(discriminant)) / 
                (2 * parseInt(main__inputa.value));
                x2__input.style = "display: none";      
            } else {
                x1__input.classList.remove('is-invalid');
                x2__input.style = "display: block";

                x1__input.value = (-parseInt(main__inputb.value) + Math.sqrt(discriminant)) / 
                (2 * parseInt(main__inputa.value));
                x2__input.value = (-parseInt(main__inputb.value) - Math.sqrt(discriminant)) / 
                (2 * parseInt(main__inputa.value));
            }
        }
    }
}