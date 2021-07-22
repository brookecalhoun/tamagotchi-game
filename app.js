let bulbasaur = document.getElementById('bulbasaur')
let squirtle = document.getElementById('squirtle')
let charmander = document.getElementById('charmander')
let feedBtn = document.getElementById('feed')
let sleepBtn = document.getElementById('sleep')
let playBtn = document.getElementById('play')
let boredom = document.getElementById('boredom')
let sleepiness = document.getElementById('sleepiness')
let hungerEl = document.getElementById('hunger')
let allButtons = document.getElementById('buttons')
let statusBars = document.getElementById('status-bar')
let nameInput = document.getElementById('pokename')
let allPets = document.getElementById('pets')
let h2Id = document.getElementById('greeting')
let selectedPokemon = null
let age = document.getElementById('age')
let bulbImage = document.getElementById('bulbid')
let charImage = document.getElementById('charmid')
let squirtleImage = document.getElementById('squirtleid')


function namePet() {
    nameInput.style.display = 'block'
    h2Id.textContent = 'Name your pet!'
}

function selectBulbasaur(){
    charmander.style.display = 'none'
    squirtle.style.display = 'none'
    namePet()
    bulbImage.classList.add('bigBoi')
    bulbImage.classList.remove('pokemonimage')
    bulbImage.style.marginLeft = '150px'
}
function selectCharmander(){
    bulbasaur.style.display = 'none'
    squirtle.style.display= 'none'
    namePet()
    charImage.classList.add('bigBoi')
    charImage.classList.remove('pokemonimage')
    charImage.style.marginLeft = '150px'
}
function selectSquirtle(){
    bulbasaur.style.display = 'none'
    charmander.style.display = 'none'
    namePet()
    squirtleImage.classList.add('bigBoi')
    squirtleImage.classList.remove('pokemonimage')
    squirtleImage.style.marginLeft = '150px'
}

bulbasaur.addEventListener('click', selectBulbasaur)
charmander.addEventListener('click', selectCharmander)
squirtle.addEventListener('click', selectSquirtle)


class Pet {
    constructor(hunger, boredom, sleepiness, age){
        this.hunger = hunger
        this.boredom = boredom
        this.sleepiness = sleepiness
        this.age = age
    } 
    hungerPet = () => {
        this.hunger++
        if(this.hunger === 11){
            h2Id.textContent = ('Your Pokémon died.') 
            age.style.display = 'none'
            sleepiness.style.display = 'none'
            boredom.style.display = 'none'
            hunger.style.display = 'none'
            allButtons.style.display = 'none'
            allPets.style.display = 'none'
        }
    }
    feedPet = () => {
        console.log(this.hunger)
        this.hunger--
        console.log(this.hunger)
        console.log('fed')
        hungerEl.textContent = ('Hunger: ' + this.hunger)
    }
    playWithPet = () => {
        this.boredom--
    }
    getBored = () => {
        this.boredom++
        if(this.boredom === 11){
            h2Id.textContent = ('Your Pokémon died.') 
            age.style.display = 'none'
            sleepiness.style.display = 'none'
            boredom.style.display = 'none'
            hungerEl.style.display = 'none'
            allButtons.style.display = 'none'
            allPets.style.display = 'none'
        }
    }
    napPet = () => {
        this.sleepiness--
    }
    tirePet = () => {
        this.sleepiness++
        if(this.sleepiness === 11){
            h2Id.textContent = ('Your Pokémon died.') 
            age.style.display = 'none'
            sleepiness.style.display = 'none'
            boredom.style.display = 'none'
            hungerEl.style.display = 'none'
            allButtons.style.display = 'none'
            allPets.style.display = 'none'
        }
    }
    growPet = () => {
        this.age++
        if(this.age === 11){
            h2Id.textContent = ('Your Pokémon died.') 
            age.style.display = 'none'
            sleepiness.style.display = 'none'
            boredom.style.display = 'none'
            hungerEl.style.display = 'none'
            allButtons.style.display = 'none'
            allPets.style.display = 'none'
        } 
    }   
}



let hungerInterval = null     
let sleepInterval = null
let boredInterval = null
let ageInterval = null

let myPet = new Pet(0,0,0,0)

function startGame(){
    allButtons.style.display='block'
    statusBars.style.display='block'
    
    hungerInterval = setInterval(function(){
        myPet.hungerPet()
        console.log(myPet)
        hungerEl.textContent = 'Hunger: ' + myPet.hunger
    }, 5000)
    
    sleepInterval = setInterval(function(){
        myPet.tirePet()
        sleepiness.textContent = 'Sleepiness: ' + myPet.sleepiness
    },5000)
    
    
    boredInterval = setInterval(function(){
        myPet.getBored()
        boredom.textContent = 'Boredom: ' + myPet.boredom
    },5000)
    
    
    ageInterval = setInterval(function(){
        myPet.growPet()
        age.textContent = 'Age: ' + myPet.age
    },10000)
    
}

feedBtn.addEventListener('click', myPet.feedPet)
sleepBtn.addEventListener('click', myPet.napPet)
playBtn.addEventListener('click', myPet.playWithPet)

nameInput.addEventListener('keypress',function(event){
    if(event.code === 'Enter'){
            const inputName = nameInput.value
            h2Id.textContent = inputName
            nameInput.style.display='none'
            startGame()
        }
    })






