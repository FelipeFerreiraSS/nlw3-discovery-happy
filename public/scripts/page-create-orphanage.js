// use const no lugar de var para indicar que ela não vai mudar no decorrer do projeto (constante)
//create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); 

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
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

//selecionar do sim e não

function toggleSelect(event) {
    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    // colocar a class . active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input com o valor selecionado
    const input = document.querySelectorAll('[name="open_on_weekends"]')
    
    input.value = button.dataset.value

}

function validate(event) {
    //validar se lat e ing estão preenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng) { 
        event.preventDefault()
        alert('Prencha todo o formulario') 
    }
}