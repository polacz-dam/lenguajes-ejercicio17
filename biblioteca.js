function CargarDatosEnTabla() {
    // Carga el archivo XML
    var request = new XMLHttpRequest();
    request.open("GET", "libros.xml", false);
    request.send();
    // Comprueba que se encontró el archivo
    if (request.status === 200) {

        var xmlDoc = request.responseXML;
            // Se obtienen todos los libros (elementos con la etiqueta <libro>) del archivo XML
        var libros = xmlDoc.getElementsByTagName("libro"); // Array

        // Se obtiene el elemento HTML que representa el cuerpo de la tabla
        var tableBody = document.getElementById("libroBody");

        // Se vacía el contenido de la tabla
        tableBody.inner

        // Se itera cada libro y se construye un nuevo elemento HTML para la fila de la tabla
        for (var i = 0; i < libros.length; i++) {
            var libro = libros[i];

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
            cell2.textContent =
                libro.getElementsByTagName("autor")[0].textContent;
            cell3.textContent =
                libro.getElementsByTagName("anio")[0].textContent;
            cell4.textContent =
                libro.getElementsByTagName("precio")[0].textContent;
        }
    }
}

CargarDatosEnTabla();