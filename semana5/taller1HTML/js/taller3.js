const main =() =>{
    const btncambiarestilo =document.querySelector("#btncambiarEstilo");
    const body = document.querySelector("#body");
    const estilo = document.querySelector("#estilo");

    btncambiarEstilo.addEventListener("click",(event) =>{

        const opc= estilo.value;
        console.log(opc);

        switch(Number(opc)){

            case 1:
                body.classList.remove('tema1-body');
                body.classList.remove('tema2-body');
                body.classList.add('tema-body');
                break
                
            case 2:
                body.classList.remove('tema-body');
                body.classList.remove('tema2-body');
                body.classList.add('tema1-body');
                break
                
            case 3:
                body.classList.remove('tema-body');
                body.classList.remove('tema1-body');
                body.classList.add('tema2-body');
        }


      //  if(body.classList.contains('tema-body')){
      //      body.classList.remove('tema-body');
     //       body.classList.add('tema1-body');
     //   }else{
      //      body.classList.remove('tema1-body');
      //      body.classList.add('tema1-body');
      //  }
//body.classList.toggle('tema-body');
//body.classList.toggle('tema1-body')

    })

}

//const mostrar=(id) =>{
 //   document.getElementById(".ocultar").style.display=`block`;
//    document.getElementsByClassName("ocultar");4
//    document.querySelector(".ocultar").classList.add("mostrar");
//}
