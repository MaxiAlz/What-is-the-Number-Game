// Swal.fire('Any fool can use a computer')
//crear numero aleatorio que el usuario debera adivinar
//al presionar el boton debe decir si el usuario adivino el numero 
// si no lo adivino debe decirle si el numero que ingreso es menor o mayor al numero creado
/**jgfjhgjhg */
let numeroRandom;
do {
    numeroRandom= Math.round(Math.random()*10);
} while (numeroRandom<1);
console.log(numeroRandom)

const guessNumber=()=>{
      let numeroIngresado=numeroInput.value;
      //validacion de que el dato ingresado es un numero
      if(isNaN(numeroIngresado)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...Something went wrong!',
            text: 'Just enter Numbers',
          })
        }else if(numeroIngresado<1 || numeroIngresado>10){
            // alert(`El numero ingresado no es valido, solo datos entre 1 y 10`);
            Swal.fire({
                icon: 'error',
                title: 'Oops...Something went wrong!',
                text: 'Just Number  From 1 to 10',
              })
        }
        //logica del juego
        else {
            if (numeroRandom==numeroIngresado) {
                Swal.fire('Good job!',`The Number Was: ${numeroIngresado}`,'success');
                Swal.fire({
                    title: `Good job! The Number Was: ${numeroIngresado}`,
                    icon: 'success',
                    html: 'Do you want to play Again?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Yes,Play Again',
                    denyButtonText: `No,I´m OK`,
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      location.reload();
                    } else if (result.isDenied) {
                      Swal.fire('Ok,Thanks for Play', '', 'info')
                    }
                  })
                  }

              else {
                  if(numeroRandom>numeroIngresado && !isNaN(numeroIngresado)){
                    Swal.fire(
                        'Did you Know?',
                        'Try with a Taller Number',
                        'question'
                      )
                  }else{
                    Swal.fire(
                        'Did you Know?',
                        'Try with a Smaller Number',
                        'question'
                      )
                  }
              }
        }


}

// guessNumber()