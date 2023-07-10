document.addEventListener("DOMContentLoaded", function() {

    var localIpElement=document.getElementById("local-ip");
    var publicIpElement=document.getElementById("public-ip");

    //ottenere l'indirizzo ip locale
    getLocalIp(function(localIp) {
        localIpElement.textContent=localIp;
    });

    //ottenere l'indirizzo ip publico
    getPublicIp(function(publicIp) {
        publicIpElement.textContent=publicIp;
    });




    function getLocalIp(callback) {
        //chiamata AJAX PER OTTENERE IP LOCAL
        //TESTO PER ENDPOINT DI IP PUBLIC

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    var publicIp = response.ip;
                    callback(publicIp);

                } else {
                console.error("ERRORE AJAX DURANTE AL RICHIESTA DELL IP' PUBLIC")
                }

            }
        };
        xhr.open("GET", "https://localhost:8080/get-public_ip", true);
        xhr.send();
    }


});