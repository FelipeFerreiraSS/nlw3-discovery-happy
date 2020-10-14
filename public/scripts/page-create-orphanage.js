// use const no lugar de var para indicar que ela não vai mudar no decorrer do projeto (constante)
//create map
const map = L.map('mapid').setView([-27.2078318,-49.6233502], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); 

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    
})

let marker;

// cerate and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map) 
})

//upload of photos
function addPhotoField() {
    //pegar o conteiner de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adiciona
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) 
    //verificar se o campo esta vazio, se sim , nao adicionar ao conteiner de imagens
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return
    }
    //limpar o campo antes de add ao container de imagens
    input.value = ""
    //adicionar o clone ao container da #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1) {
        // limpar o valor do campo 
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();
}
