/*global document, window */
(function () {
    function elementExists(url){
        var http = new XMLHttpRequest();

        http.open('HEAD', url, false);
        http.send();

        return http.status != 404;
    }

    'use strict';
    var st = window.location.href;
    st = st.substr(0, st.lastIndexOf("."))

    var input = document.createElement("button");
    input.setAttribute("style", "position: fixed; bottom: 50%; left: 1%;");
    input.setAttribute("type", "button");
    input.setAttribute("class", "btn btn-default btn-warning");

    if(elementExists(st+".pdf"))
    {
        var nodo = document.createTextNode("Source: pdf");
        input.appendChild(nodo);
        input.onclick = function () {
            window.open(st+".pdf");
        };
        document.body.insertBefore(input, document.body.firstChild);
    }
    else{
        var nodo = document.createTextNode("Source");
        input.appendChild(nodo);
        input.onclick = function () {
            window.open("view-source:" + window.location.href);
        };
        document.body.insertBefore(input, document.body.firstChild);
    }
}());