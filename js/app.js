const listaTweets = document.querySelector('lista-tweest');


addEventListeners()

function addEventListeners(){
document.querySelector('#formulario').addEventListener('submit', agregarTweets);

}


awfer
//funciones

function agregarTweets(e){
e.preventDefault();
    
    console.log(e)
}