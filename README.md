Ejercicio P2P Obligatorio

Explicaci�n de la tarea

Crear un repositorio en Github donde subir el proyecto que se les pide desarrollar en los siguientes apartados de esta pr�ctica.

El proyecto debe rehacer  el servidor Quiz desde cero, repitiendo los mismos pasos descritos en las transparencias de clase. No se permite clonar el repositorio oficial de la asignatura que aloja el servidor Quiz. Debe repetirse el desarrollo desde cero.

Adem�s se deben a�adir los siguientes cambios a Quiz:

1) Modificar el servidor Quiz para a�adir un enlace en el p�e de p�gina <footer> del marco de las p�ginas renderizadas que apunte a la p�gina de su proyecto en GitHub.

2) Modificar el servidor Quiz para que sirva una nueva p�gina con los datos de los autores de la pr�ctica. Este desarrollo se realizar� en una rama llamada cr�ditos. Cree la rama creditos y c�mbiese a ella para hacer el desarrollo pedido en este apartado.

    Crear un nuevo enlace en la barra de navegaci�n que apunte a la p�gina de cr�ditos. La ruta de acceso a esta p�gina debe ser /author.
    Modifique el router (routers/index.js) para que atienda las peticiones "GET /author" y sirva una nueva vista views/author.ejs con los datos de los autores o autor de la p�gina, mostrando el nombre de los autores, su fotograf�a y un peque�o video (opcional) de 30 seg.

Cuando se haya terminado este desarrollo, integrelo en la rama master, y s�balo a GitHub.

Una vez realizados y probados estos cambios, debe crearse una cuenta en heroku para desplegar all� el servidor desarrollado en esta pr�ctica.

Se deben seguir los mismos pasos explicados en las transparencias para realizar el despliegue.

Actualice GitHub con los cambios realizados en este apartado.

El proyecto desarrollado en esta practica, junto con todas las modificaciones a�adidas, debe subirse al repositorio creado en Github por los alumnos.

Entregar en el texto de la entrega a MiriadaX

1) El URL al despliegue en Heroku como un enlace clicable.

2) El URL al proyecto en GITHUB como un enlace clicable.
El evaluador debe comprobar que en Heroku se ha desplegado la aplicaci�n con los cambios solicitados y que en GITHUB se ha subido el proyecto y que los cambios solicitados se han introducido en el �ltimo commit.
