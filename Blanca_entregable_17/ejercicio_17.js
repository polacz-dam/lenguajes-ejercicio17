function CargarLibrosEnTabla() {

    var request = new XMLHttpRequest();
    request.open("GET", "../libros.xml", false);
    request.send();

    if (request.status === 200) {
        var xmlDoc = request.responseXML;

        var buscador = document.getElementById("buscador");

        var libros = xmlDoc.getElementsByTagName("libro");

        var tableBody = document.getElementById("libr");

        tableBody.innerHTML = "";

        for (var i = 0; i < libros.length; i++) {
            var libro = libros[i];

        if (buscador.value === "" || buscador.value == libro.getElementsByTagName("anio")[0].textContent) {


                var row = tableBody.insertRow();

                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell();

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
}
CargarLibrosEnTabla()
