function CargarDatosEnTabla() {
    const busqueda = document.getElementById("busqueda");
    
    // Carga el archivo XML
    var request = new XMLHttpRequest();
    request.open("GET", "../libros.xml", false);
    request.send();
    // Comprueba que se encontró el archivo
    if (request.status === 200) {
        var xmlDoc = request.responseXML;
        // Se obtienen todos los productos (elementos con la etiqueta <producto>) del archivo XML
        var productos = xmlDoc.getElementsByTagName("libro"); //Array

        // Se obtiene el elemento HTML que representa el cuerpo de la tabla
        var tableBody = document.getElementById("librosBody"); //id del contenido tabla en el html
        // Se vacía el contenido de la tabla
        tableBody.innerHTML = "";
        // Se itera cada producto y se construye un nuevo elemento HTML para la fila de la tabla
        for (var i = 0; i < productos.length; i++) {
            var producto = productos[i];
            
            // Se obtiene el año del libro actual
            var anio = producto.getElementsByTagName("anio")[0].textContent;
            
            if (busqueda.value === "" || anio == busqueda.value) {
                // Se crea una nueva fila en el HTML
                var row = tableBody.insertRow();
                // Se insertan celdas en la fila (HTML)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                // Se cambia el contenido de cada celda con los datos del producto
                cell1.textContent = producto.getElementsByTagName("titulo")[0].textContent;
                cell2.textContent = producto.getElementsByTagName("autor")[0].textContent;
                cell3.textContent = producto.getElementsByTagName("anio")[0].textContent;
                cell4.textContent = producto.getElementsByTagName("precio")[0].textContent;
            }
        }
    }
}

CargarDatosEnTabla();