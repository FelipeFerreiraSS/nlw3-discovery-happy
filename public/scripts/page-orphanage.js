// use const no lugar de var para indicar que ela não vai mudar no decorrer do projeto (constante)
const options = {
    dragging: false,
    touchZoom: false,       /* desliga função mapa*/
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//create map
const map = L.map('mapid', options).setView([-27.2078318,-49.6233502], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); 

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// create and add marker
L
.marker([-27.2078318,-49.6233502], { icon }) 
.addTo(map)

/* image gally*/
function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    // remover todas as classe active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a imagem clicada 
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    //adicionar a classe .active para este botao
    button.classList.add('active')
}