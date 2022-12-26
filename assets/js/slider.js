// Elementos
const previousButton = document.querySelector(".previous-button")
const nextButton = document.querySelector(".next-button")
const images = document.querySelectorAll(".slide-image")
const navegationButton = document.querySelectorAll(".navegation-button button")

// Slide atual
let currentSlide = 0

// Total de slide
let totalSlide = 5

// Próximo slide
function nextSlide() {
    document.getElementById("slide" + (currentSlide + 1)).classList.remove("active")
    currentSlide = (totalSlide + currentSlide + 1) % totalSlide
    document.getElementById("slide" + (currentSlide + 1)).classList.add("active")  
    slideIndicator(currentSlide + 1)
}

// Slide anterior
function previousSlide() {
    document.getElementById("slide" + (currentSlide + 1)).classList.remove("active")
    currentSlide = (totalSlide + currentSlide - 1) % totalSlide
    document.getElementById("slide" + (currentSlide + 1)).classList.add("active")
    slideIndicator(currentSlide + 1)
}

// Indicador de slide
function slideIndicator(index) {
    navegationButton.forEach(button => {
        button.style.backgroundColor = "transparent"
    })
    document.querySelector(".navegation-button button:nth-child(" + index + ")").style.backgroundColor = "blue"
}

// Passar slide com botão de navegação
function navegationButtonSlide(index) {
    images.forEach(image => {
        image.classList.remove("active")
    })
    document.getElementById("slide" + index).classList.add("active")
    currentSlide = index - 1
    slideIndicator(index)
}

// Botão de navegação + atribuindo função
navegationButton.forEach(button => {
    button.addEventListener("click", function(event) {
        const target = event.target.classList.value

        if(target === "button1") {
            navegationButtonSlide(1)
        }
        else if(target === "button2") {
            navegationButtonSlide(2)
        }
        else if(target === "button3") {
            navegationButtonSlide(3)
        }
        else if(target === "button4") {
            navegationButtonSlide(4)
        }
        else {
            navegationButtonSlide(5)
        }
    })
})

// Slide automático
setInterval(nextSlide, 5000)

// Adicionar evento aos elementos
nextButton.addEventListener("click", nextSlide)
previousButton.addEventListener("click", previousSlide)