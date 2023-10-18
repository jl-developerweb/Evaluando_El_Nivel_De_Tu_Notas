let contenedor = document.getElementById("contenedor");

contenedor.addEventListener("click", (e)=>{

    let valor = e.target.id;

    if (valor==="btn"){       
      
        do{
        otro = parseInt(prompt("Ingrese su calificación"));
        
        if(otro>=0 && otro<4 ) {
            let resu = document.getElementById("res");
            resu.innerHTML='Muy deficiente';
            otro="";
        }else{
            if (otro>=4 && otro<8) {
                let resu = document.getElementById("res");
                resu.innerHTML='Buena nota';
                otro="";
            } else {

                if (otro>7 && otro<=10) {
                    let resu = document.getElementById("res");
                    resu.innerHTML='Excelente Calificación';
                    otro="";
                } else {

                    let resu = document.getElementById("res");
                    resu.innerHTML='Debe eingresar un valor entre el 0 y el 10';
                    otro="";
                    
                }
                
            }


        }

        }while(otro!="")

    }else{

        let resu = document.getElementById("res");
        resu.innerHTML='Debe eingresar un valor entre el 0 y el 10';
        otro="";
    }





})