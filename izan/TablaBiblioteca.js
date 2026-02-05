function setData(tableBody, libros, i)
{

            var libro = libros[i];
            var row = tableBody.insertRow(); 

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.textContent =
                libro.getElementsByTagName("titulo")[0].textContent;

            cell2.textContent =
                libro.getElementsByTagName("autor")[0].textContent;

            cell3.textContent =
                libro.getElementsByTagName("anio")[0].textContent;

            cell4.textContent =
                libro.getElementsByTagName("precio")[0].textContent;

}

function clearData()
{

    let tab = document.querySelector("#tableBody");
    while(tab.children.length > 0)
    {

        tab.removeChild(tab.children[0]);

    }

}

function TablaBiblioteca()
{

    var request = new XMLHttpRequest();

    request.open("GET", "../libros.xml", false);
    request.send();



    if (request.status === 200)
    {

        var xml = request.responseXML; 
        var libros = xml.getElementsByTagName("libro");
        var tableBody = document.getElementById("tableBody");
        var filtro = document.getElementById("filtro");

        tableBody.innerHTML = "";
        clearData();

        for (var i = 0; i < libros.length; i++)
        {

            if (filtro.value !== "")
            {

                var filtroAnio = parseInt(filtro.value);
                var anoLibro = parseInt( libros[i].getElementsByTagName("anio")[0].textContent);

                if (anoLibro == filtroAnio)
                {

                    setData( tableBody, libros, i); 

                }
            } else
            {

                setData( tableBody, libros, i);

            }

        }

    }

}

window.addEventListener("load", TablaBiblioteca);
