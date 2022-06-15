const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];
//hacemos la funcion y le enviamos los parametros 
   const findPostByid=(id, callback)=>{
  //buscamos con find la busqueda del objeto en el array de objetos 
      const post=posts.find((item)=>item.id ===id)
    /*creamos la condicion si es verdadero en el parametro de id se envia que es nulo 
    y que el elparametro de id  no existe el error y el segundo parametro es el objeto que esta en el post*/
      if(post){
      
           callback(null,post);
        /*creamos el mensaje de error si el id ingresado no esta en el array */
      }else{
        callback("no se encontro el post del id"+id);
      }

   }
   /*llamamos la funcion y le pasamos los parametros con el valor del id y en segunda
   opcion la funcion la cual verifica si el error existe retorna el error creado en el callback 
   si no hay error imprime el contenido del objeto */
   findPostByid(5,(err,post)=>{
      if(err){
        return console.log(err);
      }
      console.log(post);
   });