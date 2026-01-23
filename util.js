let TITLE_INDEX = 0;
let AUTOR_INDEX = 1;
let YEAR_INDEX = 2;
let PRICE_INDEX = 3;

// Source - https://stackoverflow.com/a
// Posted by Etienne Martin, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-23, License - CC BY-SA 4.0
const delay = ms => new Promise(res => setTimeout(res, ms));



function getXmlData(fn, func)
{
    var req = new XMLHttpRequest();
    req.open("GET", fn, false);
    req.send();

    if(req.status === 200)
    {
        var xDoc = req.responseXML;
        func(xDoc);
    }
}

function clearData()
{
    let tab = document.querySelector("table.container");

    while(tab.children.length > 1)
    {
        if(!tab.lastChild.classList.contains("immutable"))
        {
            tab.removeChild(tab.lastChild);
        }
    }
}

function getData()
{
    getXmlData("libros.xml", async (_xDoc) =>
    {
        /**
         * @type Document
         */
        var xDoc = _xDoc;
        const libros = xDoc.getElementsByTagName("libros")[0].children;

        var filterYear = document.querySelector("#filter").value;
        const isFilterEmpty = filterYear === "";

        clearData();
        let tab = document.querySelector("table.container");

        for(let i = 0; i < libros.length; i++)
        {
            const libro = libros[i];
            const title = libro.children[TITLE_INDEX].textContent;
            const autor = libro.children[AUTOR_INDEX].textContent;
            const year = libro.children[YEAR_INDEX].textContent;
            const price = libro.children[PRICE_INDEX].textContent;

            if(!isFilterEmpty &&
                year !== filterYear
            )
            {
                continue;
            }

            var entry = document.createElement("tr");

            var tData = document.createElement("td");
            tData.textContent = title;
            entry.appendChild(tData);

            var aData = document.createElement("td");
            aData.textContent = autor;
            entry.appendChild(aData);

            var yData = document.createElement("td");
            yData.textContent = year;
            entry.appendChild(yData);

            var pData = document.createElement("td");
            pData.textContent = price;
            entry.appendChild(pData);

            tab.appendChild(entry);

            // await delay(200 * i);
        }

    });
}

window.addEventListener("load", () =>
{
    getData();
});

