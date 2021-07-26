////////Variables////////

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
let ashButton = document.getElementById('ash')
let ashDiv = document.getElementById('ashsurprise')
let enterButton = document.getElementById('enterbutton')
let dead = false
let Clicked = false

////////Ash Surprise Button////////

function playAsh(){
    const ashAudio = new Audio('ichooseyou.mp3')
    ashAudio.play()
}
function ashSurprise(){
    playAsh()
    ashButton.style.backgroundImage = 'url(ash.png)'
    ashButton.textContent =''
    ashButton.style.height = '200px'
    ashButton.style.width ='230px'
}
ashButton.addEventListener('click', ashSurprise)

////////Sounds////////

function playBulbasaur(){
    const bulbAudio = new Audio('bulbasaur-sound.mp3')
    bulbAudio.play()
}
function playCharmander(){
    const charAudio = new Audio('charmander-sound.mp3')
    charAudio.play()
}
function playSquirtle(){
    const squirtleAudio = new Audio('squirtle-sound.mp3')
    squirtleAudio.play()
}
function playFeed(){
    const foodAudio = new Audio('chomp.wav')
    foodAudio.play()
}

function playLaugh(){
    const laughAudio = new Audio('laugh.wav')
    laughAudio.play()
}

function playSleep(){
    const sleepAudio = new Audio('snore.wav')
    sleepAudio.play()
}

function playDead(){
    const deathAudio = new Audio('death.wav')
    deathAudio.play()
    dead = true
}

////////Functions////////

function namePet() {
    enterButton.style.display = 'block'
    nameInput.style.display = 'block'
    h2Id.textContent = 'Name your pet!'
    ashButton.style.display ='none'
}

function selectBulbasaur(){
    if(!Clicked){
        playBulbasaur()
        charmander.style.display = 'none'
        squirtle.style.display = 'none'
        namePet()
        bulbImage.classList.add('bigBoi')
        bulbImage.classList.remove('pokemonimage')
        bulbImage.style.cursor = 'default'
        Clicked = true
    }
}

function selectCharmander(){
    if(!Clicked){
        playCharmander()
        bulbasaur.style.display = 'none'
        squirtle.style.display= 'none'
        namePet()
        charImage.classList.add('bigBoi')
        charImage.classList.remove('pokemonimage')
        charImage.style.cursor = 'default'
        Clicked = true
    }
}

function selectSquirtle(){
    if(!Clicked){
        playSquirtle()
        bulbasaur.style.display = 'none'
        charmander.style.display = 'none'
        namePet()
        squirtleImage.classList.add('bigBoi')
        squirtleImage.classList.remove('pokemonimage')
        squirtleImage.style.cursor = 'default'
        Clicked = true
    }
}

bulbasaur.addEventListener('click', selectBulbasaur)
charmander.addEventListener('click', selectCharmander)
squirtle.addEventListener('click', selectSquirtle)

////////Pet Class////////

class Pet {
    constructor(hunger, boredom, sleepiness, age){
        this.hunger = hunger
        this.boredom = boredom
        this.sleepiness = sleepiness
        this.age = age
    } 
    hungerPet = () => {
        this.hunger++
        if(this.hunger === 11 && !dead){
            h2Id.textContent = ('Your Pokémon died.') 
            age.style.display = 'none'
            sleepiness.style.display = 'none'
            boredom.style.display = 'none'
            hunger.style.display = 'none'
            allButtons.style.display = 'none'
            allPets.style.transform = 'scaleY(-1)'
            playDead()
        }
    }
    feedPet = () => {
        console.log(this.hunger)
        this.hunger--
        console.log(this.hunger)
        console.log('fed')
        hungerEl.textContent = ('Hunger: ' + this.hunger)
        playFeed()
    }
    playWithPet = () => {
        this.boredom--
        playLaugh()
    }
    getBored = () => {
        this.boredom++
        if(this.boredom === 11 && !dead){
            h2Id.textContent = ('Your Pokémon died.') 
            age.style.display = 'none'
            sleepiness.style.display = 'none'
            boredom.style.display = 'none'
            hungerEl.style.display = 'none'
            allButtons.style.display = 'none'
            allPets.style.transform = 'scaleY(-1)'
            playDead()
        } 
    }
    napPet = () => {
        this.sleepiness--
        playSleep()
    }
    tirePet = () => {
        this.sleepiness++
        if(this.sleepiness === 11 && !dead){
            h2Id.textContent = ('Your Pokémon died.') 
            age.style.display = 'none'
            sleepiness.style.display = 'none'
            boredom.style.display = 'none'
            hungerEl.style.display = 'none'
            allButtons.style.display = 'none'
            allPets.style.transform = 'scaleY(-1)'
            playDead()
        }
    }
    growPet = () => {
        this.age++
        if(this.age === 11 && !dead){
            h2Id.textContent = ('Your Pokémon died.') 
            age.style.display = 'none'
            sleepiness.style.display = 'none'
            boredom.style.display = 'none'
            hungerEl.style.display = 'none'
            allButtons.style.display = 'none'
            allPets.style.transform = 'scaleY(-1)'
            playDead()
        }
    }   
}

let hungerInterval = null     
let sleepInterval = null
let boredInterval = null
let ageInterval = null

////////Instantiate Pet////////

let myPet = new Pet(0,0,0,0)


////////Start Game Function////////

function startGame(){
    allButtons.style.display='block'
    statusBars.style.display='block'
    
    hungerInterval = setInterval(function(){
        myPet.hungerPet()
        console.log(myPet)
        hungerEl.textContent = 'Hunger: ' + myPet.hunger
    }, 3000)
    
    sleepInterval = setInterval(function(){
        myPet.tirePet()
        sleepiness.textContent = 'Sleepiness: ' + myPet.sleepiness
    },3000)
    
    boredInterval = setInterval(function(){
        myPet.getBored()
        boredom.textContent = 'Boredom: ' + myPet.boredom
    },3000)
    
    ageInterval = setInterval(function(){
        myPet.growPet()
        age.textContent = 'Age: ' + myPet.age
    },8000)
}

////////Event Listeners////////

feedBtn.addEventListener('click', myPet.feedPet)
sleepBtn.addEventListener('click', myPet.napPet)
playBtn.addEventListener('click', myPet.playWithPet)

nameInput.addEventListener('keypress',function(event){
    if(event.code === 'Enter'){
        const inputName = nameInput.value
        h2Id.textContent = inputName
        nameInput.style.display ='none'
        enterButton.style.display = 'none'
        startGame()
    }
 })
enterButton.addEventListener('click',function(){
        const inputName = nameInput.value
        h2Id.textContent = inputName
        nameInput.style.display ='none'
        enterButton.style.display ='none'
        startGame()
 })






