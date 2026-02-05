function CargarDatosEnTabla() {
    // Carga el archivo XML
    var request = new XMLHttpRequest();
    request.open("GET", "../libros.xml", false);
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



function filtrarLibro() {

    // Carga el archivo XML
    var request = new XMLHttpRequest();
    request.open("GET", "libros.xml", false);
    request.send();

    // Comprueba que se encontró el archivo
    if (request.status === 200) {

        var xmlDoc = request.responseXML;

        // Se obtienen todos los libros del XML
        var libros = xmlDoc.getElementsByTagName("libro");

        // Se obtiene el cuerpo de la tabla
        var tableBody = document.getElementById("libroBody");

        // Se vacía el contenido de la tabla
        tableBody.innerHTML = "";

        // Se obtiene el valor del filtro
        var filtro = document.getElementById("filtro");
        var valorFiltro = filtro.value;

        // Se recorren los libros
        for (var i = 0; i < libros.length; i++) {

            var libro = libros[i];

            // Se obtiene el año del libro (ERROR CORREGIDO)
            var valorAnio = libro.getElementsByTagName("anio")[0].textContent;

            // Comparación del filtro con el año
            if (valorFiltro == valorAnio || valorFiltro == "") {

                // Se crea una nueva fila
                var row = tableBody.insertRow();

                // Se insertan celdas
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);

                // Se asignan los valores
                cell1.textContent =
                    libro.getElementsByTagName("titulo")[0].textContent;
                cell2.textContent =
                    libro.getElementsByTagName("autor")[0].textContent;
                cell3.textContent =
                    valorAnio;
                cell4.textContent =
                    libro.getElementsByTagName("precio")[0].textContent;
            }
        }
    }
}

CargarDatosEnTabla();

