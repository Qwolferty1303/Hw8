document.addEventListener('DOMContentLoaded', function() {
    var myWindow;

    document.getElementById('closen').addEventListener('click', function() {
        myWindow = window.open("", "", "width=400, height=400");
        var button = myWindow.document.createElement('button');
        button.innerHTML = 'And again';
        myWindow.document.body.appendChild(button);

        button.addEventListener('click', function() {
            var newWindow = window.open("", "_blank", "width=400, height=400");
            var button = newWindow.document.createElement('button');
            button.innerHTML = 'And again';
            Window.document.body.appendChild(button);
        });
    });
});
