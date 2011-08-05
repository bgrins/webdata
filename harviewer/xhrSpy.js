(function(){
    var body = document.getElementsByTagName("body")[0];
    var baseUrl = "http://legoas/har/viewer/webapp/";

    var app = document.createElement("iframe");
    app.setAttribute("style",
        "position: absolute;" +
        "bottom: 5px;" +
        "right: 5px;" +
        "width: 500px;" +
        "height: 160px;" +
        "background-color: white;" +
        "border: 3px solid #D7D7D7;" +
        "-moz-border-radius: 3px 4px;" + 
        "-moz-box-shadow: gray 2px 2px 3px;" +
        "z-index: 99999999;");

    app.src = baseUrl + "scripts/xhr-spy/spy.php";
    body.appendChild(app);
})();
