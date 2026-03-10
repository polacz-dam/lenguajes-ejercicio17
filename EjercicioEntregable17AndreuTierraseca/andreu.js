function CargarDatosEnTabla() {
    // Carga el archivo XML
    var request = new XMLHttpRequest();
    request.open("GET", "../libros.xml", false);
    request.send();
    // Comprueba que se encontró el archivo
    if (request.status === 200) {
        var xmlDoc = request.responseXML;
        // Se obtienen todos los productos (elementos con la etiqueta<producto>) del archivo XML
        var libros = xmlDoc.getElementsByTagName("libro"); //Array
            //cambiar                              //cambiar                              
        // Se obtiene el elemento HTML que representa el cuerpo de la tabla
        var tableBody = document.getElementById("tablaLibros");
        // Se vacía el contenido de la tabla     //cambiar

        tableBody.innerHTML = "";

        // Se itera cada producto y se construye un nuevo elemento HTML para la fila de la tabla
        for (var i = 0; i < libros.length; i++) {
            var libro = libros[i];
              //cambiar   //cambiar

            if (document.getElementById("barraBusqueda").value==libro.getElementsByTagName("anio")[0].textContent|| document.getElementById("barraBusqueda").value=="") {
                // Se crea una nueva fila en el HTML
                var row = tableBody.insertRow();
                // Se insertan celdas en la fila (HTML)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);

                // Se cambia el contenido de cada celda con los datos del producto
                cell1.textContent =
                    libro.getElementsByTagName("titulo")[0].textContent;
                    //cambiar                   //cambiar
                cell2.textContent =
                    libro.getElementsByTagName("autor")[0].textContent;
                    //cambiar                   //cambiar
                cell3.textContent =
                    libro.getElementsByTagName("anio")[0].textContent;
                    //cambiar                   //cambiar
                cell4.textContent =
                    libro.getElementsByTagName("precio")[0].textContent;
                    //cambiar                   //cambiar

            }

        }
    }
}
CargarDatosEnTabla();