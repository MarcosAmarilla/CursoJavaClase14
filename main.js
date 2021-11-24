$(document).ready( () => { 

    const urlGet = "http://hp-api.herokuapp.com/api/characters";

    $("body").append('<h1>Personajes Harry Potter</h1>');

    $("body").append('<button id ="boton">Obtener Datos</button>');

    $("#boton").click(()=>{
            $.get(urlGet,function(respuesta,estado){
                    if (estado=== "success"){
                        let personajes = respuesta;
                        for (const personaje of personajes){
                            $("body").append(`<div>
                                            <h3>${personaje.name} ${personaje.gender} ${personaje.house}</h3>   
                                            </div>`);
                        }
                    }
                }
            )
        }
    )


})