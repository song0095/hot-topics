var $container = document.querySelector(".container .main-content");
var $links = document.querySelectorAll("nav ul li a");

var contents = {};

fetch("partials/home.html")
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        $container.innerHTML = data;
    })

var storeContents = function (urlVal) {

    if (!contents[urlVal]) {

        fetch(urlVal)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                contents[urlVal] = data;
                $container.innerHTML = contents[urlVal];
            });
    } else {
        $container.innerHTML = contents[urlVal];
    }
};


const handleClick = function (ev) {

    ev.preventDefault();

    let key = ev.target.href;

    storeContents(key);

};

for (let i = 0; i < $links.length; i++) {

    $links[i].addEventListener("click", handleClick);

}
