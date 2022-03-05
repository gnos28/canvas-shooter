const _VERSION = "v0.2"

let container = document.querySelector(".shooter")
let scoresDiv = document.querySelector(".scores")

let canvasArr = {
    backgroundCanvas: document.createElement("canvas"),
    cloudCanvas: document.createElement("canvas"),
    playerCanvas: document.createElement("canvas"),
    powerUpCanvas: document.createElement("canvas"),
    asteroidsCanvas: document.createElement("canvas"),
    enemiesCanvas: document.createElement("canvas"),
    playerProjectilesCanvas: document.createElement("canvas"),
    enemiesProjectilesCanvas: document.createElement("canvas"),
    trailsCanvas: document.createElement("canvas"),
    explosionsCanvas: document.createElement("canvas"),
    hudCanvas: document.createElement("canvas")
}

let ctxArr = {}
let mainWidth = 800
let mainHeight = 800
let playerWidth = 36
let playerHeight = 33
let projectileWidth = 4
let projectileHeight = 15
let enemyWidth = 40
let enemyHeight = 42
let enemy2Width = 42
let enemy2Height = 54
let asteroidWidth = 60
let asteroidHeight = 50
let minAsteroidWidth = 30
let minAsteroidHeight = 50
let maxCloudHeight = 0
let bossDeathAnimationDuration = 300


let promiseList = []
let playerSprite = new Image()
let playerSpriteToLeft = new Image()
let playerSpriteToRight = new Image()
let asteroidSprite = new Image()
let asteroidLeftSprite = new Image()
let asteroidRightSprite = new Image()
let backgroundImage = new Image()
let heartSprite = new Image()
let heartEmptySprite = new Image()
let alien11Sprite = new Image()
let alien12Sprite = new Image()
let alien13Sprite = new Image()
let alien14Sprite = new Image()
let alien15Sprite = new Image()
let alien21Sprite = new Image()
let alien22Sprite = new Image()
let alien23Sprite = new Image()
let alien24Sprite = new Image()
let alien25Sprite = new Image()
let bossSprite = new Image()
let cloud1 = new Image()
let cloud2 = new Image()
let cloud3 = new Image()
let cloud4 = new Image()
let cloud5 = new Image()
let cloud6 = new Image()
let cloud7 = new Image()
let cloud8 = new Image()
let left1 = new Image()
let left2 = new Image()
let left3 = new Image()
let left4 = new Image()
let left5 = new Image()
let left6 = new Image()
let left7 = new Image()
let left8 = new Image()
let right1 = new Image()
let right2 = new Image()
let right3 = new Image()
let right4 = new Image()
let right5 = new Image()
let right6 = new Image()
let right7 = new Image()
let right8 = new Image()
let fireball1 = new Image()
let fireball2 = new Image()
let fireball3 = new Image()
let fireball4 = new Image()
let fireball_powerup = new Image()
let shield_powerup = new Image()
playerSprite.src = "img/spaceship.png"
playerSpriteToLeft.src = "img/spaceship_toLeft.png"
playerSpriteToRight.src = "img/spaceship_toRight.png"
asteroidSprite.src = "img/asteroid.png"
asteroidLeftSprite.src = "img/asteroid_left.png"
asteroidRightSprite.src = "img/asteroid_right.png"
backgroundImage.src = "img/background_new.jpg"
heartSprite.src = "img/heart.png"
heartEmptySprite.src = "img/heart_empty.png"
alien11Sprite.src = "img/alien_11.png"
alien12Sprite.src = "img/alien_12.png"
alien13Sprite.src = "img/alien_13.png"
alien14Sprite.src = "img/alien_14.png"
alien15Sprite.src = "img/alien_15.png"
alien21Sprite.src = "img/alien_21.png"
alien22Sprite.src = "img/alien_22.png"
alien23Sprite.src = "img/alien_23.png"
alien24Sprite.src = "img/alien_24.png"
alien25Sprite.src = "img/alien_25.png"
bossSprite.src = "img/boss.png"
cloud1.src = "img/cloud1.png"
cloud2.src = "img/cloud2.png"
cloud3.src = "img/cloud3.png"
cloud4.src = "img/cloud4.png"
cloud5.src = "img/cloud5.png"
cloud6.src = "img/cloud6.png"
cloud7.src = "img/cloud7.png"
cloud8.src = "img/cloud8.png"
left1.src = "img/left1.png"
left2.src = "img/left2.png"
left3.src = "img/left3.png"
left4.src = "img/left4.png"
left5.src = "img/left5.png"
left6.src = "img/left6.png"
left7.src = "img/left7.png"
left8.src = "img/left8.png"
right1.src = "img/right1.png"
right2.src = "img/right2.png"
right3.src = "img/right3.png"
right4.src = "img/right4.png"
right5.src = "img/right5.png"
right6.src = "img/right6.png"
right7.src = "img/right7.png"
right8.src = "img/right8.png"
fireball1.src = "img/fireball1.png"
fireball2.src = "img/fireball2.png"
fireball3.src = "img/fireball3.png"
fireball4.src = "img/fireball4.png"
fireball_powerup.src = "img/powerup_fireball.png"
shield_powerup.src = "img/powerup_shield.png"
promiseList.push(playerSprite.decode())
promiseList.push(playerSpriteToLeft.decode())
promiseList.push(playerSpriteToRight.decode())
promiseList.push(asteroidSprite.decode())
promiseList.push(asteroidLeftSprite.decode())
promiseList.push(asteroidRightSprite.decode())
promiseList.push(backgroundImage.decode())
promiseList.push(heartSprite.decode())
promiseList.push(heartEmptySprite.decode())
promiseList.push(alien11Sprite.decode())
promiseList.push(alien12Sprite.decode())
promiseList.push(alien13Sprite.decode())
promiseList.push(alien14Sprite.decode())
promiseList.push(alien15Sprite.decode())
promiseList.push(alien21Sprite.decode())
promiseList.push(alien22Sprite.decode())
promiseList.push(alien23Sprite.decode())
promiseList.push(alien24Sprite.decode())
promiseList.push(alien25Sprite.decode())
promiseList.push(bossSprite.decode())
promiseList.push(cloud1.decode())
promiseList.push(cloud2.decode())
promiseList.push(cloud3.decode())
promiseList.push(cloud4.decode())
promiseList.push(cloud5.decode())
promiseList.push(cloud6.decode())
promiseList.push(cloud7.decode())
promiseList.push(cloud8.decode())
promiseList.push(left1.decode())
promiseList.push(left2.decode())
promiseList.push(left3.decode())
promiseList.push(left4.decode())
promiseList.push(left5.decode())
promiseList.push(left6.decode())
promiseList.push(left7.decode())
promiseList.push(left8.decode())
promiseList.push(right1.decode())
promiseList.push(right2.decode())
promiseList.push(right3.decode())
promiseList.push(right4.decode())
promiseList.push(right5.decode())
promiseList.push(right6.decode())
promiseList.push(right7.decode())
promiseList.push(right8.decode())
promiseList.push(fireball1.decode())
promiseList.push(fireball2.decode())
promiseList.push(fireball3.decode())
promiseList.push(fireball4.decode())
promiseList.push(fireball_powerup.decode())
promiseList.push(shield_powerup.decode())

for (const id in canvasArr)
{
    canvasArr[id].setAttribute("width", mainWidth)
    canvasArr[id].setAttribute("height", mainHeight)
    canvasArr[id].setAttribute("id", id)
    container.appendChild(canvasArr[id])
    ctxArr[id] = canvasArr[id].getContext('2d')
}

let skillMatrix = [
    {
        projectileTick:40,
        IArate:20,
        allowRedAlert:false,
        redAlertSight:10,
        reactorPower:0.25,
        speed:2.5,
    },
    {
        projectileTick:35,
        IArate:20,
        allowRedAlert:true,
        redAlertSight:200,
        reactorPower:0.25,
        speed:3,
    },
    {
        projectileTick:25,
        IArate:10,
        allowRedAlert:true,
        redAlertSight:400,
        reactorPower:0.5,
        speed:3,
    },
    {
        projectileTick:25,
        IArate:5,
        allowRedAlert:true,
        redAlertSight:800,
        reactorPower:0.5,
        speed:3.5,
    },
    {
        projectileTick:25,
        IArate:5,
        allowRedAlert:true,
        redAlertSight:800,
        reactorPower:.75,
        speed:4,
    }
]

let difficultyMatrix = [
    [1,0,0,0,0], // 0
    [2,1,0,0,0],
    [1,1,0,0,0],
    [1,2,0,0,0],
    [1,3,0,0,0],
    [0,3,1,0,0], // 5
    [0,2,1,0,0],
    [0,1,1,0,0],
    [0,2,3,0,0],
    [0,1,3,0,0],
    [0,0,3,1,0], // 10
    [0,0,2,1,0],
    [0,0,1,2,0],
    [0,0,1,4,0],
    [0,0,0,4,1],
    [0,0,0,4,2], // 15
    [0,0,0,4,3],
    [0,0,0,1,1],
    [0,0,0,3,4],
    [0,0,0,2,4],
    [0,0,0,1,4], // 20
    [0,0,0,0,1],
]

function getEnemySkill()
{
    let sumRatio = 0
    
    for(let i=0;i<difficultyMatrix[difficultyIndex].length; i++)
        sumRatio += difficultyMatrix[difficultyIndex][i]
    
    let randomChoice = Math.random()*sumRatio
    let loopSum = 0
    let skillFind = false
    let skill

    for(let i=0;i<difficultyMatrix[difficultyIndex].length; i++)
    {
        loopSum += difficultyMatrix[difficultyIndex][i]
        if(loopSum >= randomChoice && !skillFind)
        {
            skillFind = true
            skill = i+1
        }
    }

    return skill
}

const bossHitBox = [
    { // devant
        x: 40,
        y: 466,
        w: 470,
        h: 100
    },
    { // milieu
        x: 113,
        y: 261,
        w: 325,
        h: 205
    },
    { // arriere
        x: 207,
        y: 121,
        w: 139,
        h: 140
    },
    { // queue
        x: 246,
        y: 49,
        w: 58,
        h: 72
    },
    { // bras gauche
        x: 137,
        y: 602,
        w: 20,
        h: 20
    },
    { // bras droit
        x: 389,
        y: 602,
        w: 20,
        h: 20
    },
]

const bossDamageHitBox = {
    x: 210,
    y: 566,
    w: 128,
    h: 50
}

// fonction pour override le temps avant répétition de touche
function DeltaTimer(render, interval)
{
    var timeout;
    var lastTime;

    this.start = start;
    this.stop = stop;

    function start()
    {
        timeout = setTimeout(loop, 0);
        lastTime = Date.now();
        return lastTime;
    }

    function stop()
    {
        clearTimeout(timeout);
        return lastTime;
    }

    function loop()
    {
        var thisTime = Date.now();
        var deltaTime = thisTime - lastTime;
        var delay = Math.max(interval - deltaTime, 0);
        timeout = setTimeout(loop, delay);
        lastTime = thisTime + delay;
        render(thisTime);
    }
}

(function (interval)
{
    var keyboard = {};

    window.addEventListener("keyup", keyup, false);
    window.addEventListener("keydown", keydown, false);

    function keyup(event)
    {
        keyboard[event.keyCode].pressed = false;
    }

    function keydown(event)
    {
        var keyCode = event.keyCode;
        var key = keyboard[keyCode];

        if (key)
        {
            if (!key.start)
                key.start = key.timer.start();
            key.pressed = true;
        } else
        {
            var timer = new DeltaTimer(function (time)
            {
                if (key.pressed)
                {

                    let event = new Event("keypressed", { "bubbles": true, "cancelable": true })
                    event.time = time - key.start;
                    event.keyCode = keyCode;
                    //console.log(keyCode)
                    window.dispatchEvent(event);
                } else
                {
                    key.start = 0;
                    timer.stop();
                }
            }, interval);

            key = keyboard[keyCode] = {
                pressed: true,
                timer: timer
            };

            key.start = timer.start();
        }
    }
})(20);

const insertRequest = async function (today, name, score_, version)
{
    let form = document.querySelector("#submit_score")
    let formDate = document.querySelector("#date")
    let formNickname = document.querySelector("#nickname")
    let formScore = document.querySelector("#score")
    let formVersion = document.querySelector("#version")

    formDate.value = today
    formNickname.value = name
    formScore.value = score_
    formVersion.value = version

    form.submit()
}

let scoresArray

const selectRequest = async function ()
{
    let scoresHTML = ""

    let query = fetch('https://pixelatwork.fr/vignos/select.php').then(response => response.json()).then((value) =>
    {
        scoresArray = value.scores
        //console.log(scoresArray)
        scoresArray.sort((a, b) =>
        {
            return b.score - a.score;
        });

        let nicknameList = []
        let position = 0

        scoresArray.forEach((element, index) =>
        {
            if (element.nickname !== "" && !nicknameList.includes(element.nickname) && element.versionn == _VERSION)
            {
                scoresHTML += (++position)
                scoresHTML += `. ${element.nickname} ${element.score} <br>`

                nicknameList.push(element.nickname)
            }

            //console.log(scoresHTML)
        });

        scoresDiv.innerHTML = scoresHTML

        return value
    });

    return query
}

selectRequest()

let timer

// initialisation du timer & lancement de la boucle
Promise.all(promiseList).then(() =>
{
    backgroundPosition = -backgroundImage.height + mainHeight + 1450
    cloudImgList.forEach(cloudImg =>
    {
        let cloudHeight = cloudImg.height
        if (cloudHeight > maxCloudHeight)
            maxCloudHeight = cloudHeight

        cloudList.push({
            img: cloudImg,
            height: cloudHeight,
            width: cloudImg.width
        })
    });

    timer = setInterval(canvasShooter, 20);
})

let cloudImgList = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8]
let cloudList = []

let score = 0
let tick = 0
let deathTick = ""
let keyAccumulator = {}
let lastKey = ""
let backgroundPosition = ""
let enemyCap = 0
let IArate = 10 // temps en tick entre lancement de l'IA
let alienReactorPower = 0.25 // pour les changements de direction
let nickname = ""
let lastTickType = ""
let lastCharType = ""
let bossMode = false
let bossHealth = 0
let bossUltimate = false
let bossDeath = false
let fireballMode = false
let shieldMode = false
let difficultyIndex = 0

// variables de base
let player = {
    x: mainWidth / 2 - 10,
    y: (7 / 8) * mainHeight,
    hasMoved: true,
    hasMovedLeft: false,
    hasMovedRight: false,
    life: 3,
    width: playerWidth,
    height: playerHeight,
    lateralMove: 0,
    verticalMove: 0
}

let playerProjectiles = []
let enemyProjectiles = []
let enemies = []
let asteroids = []
let explosions = []
let clouds = []
let trails = []
let powerUp = []
let renderTime = "";

function resetVariables()
{
    score = 0
    tick = 0
    deathTick = ""
    keyAccumulator = {}
    lastKey = ""
    backgroundPosition = -backgroundImage.height + mainHeight + 1450
    enemyCap = 0
    IArate = 10
    alienReactorPower = 0.25
    lastTickType = ""
    lastCharType = ""
    bossMode = false
    bossHealth = 0
    bossUltimate = false
    bossDeath = false
    fireballMode = false
    shieldMode = false
    difficultyIndex = 0

    // variables de base
    player = {
        x: mainWidth / 2 - 10,
        y: (7 / 8) * mainHeight,
        hasMoved: true,
        hasMovedLeft: false,
        hasMovedRight: false,
        life: 3,
        width: playerWidth,
        height: playerHeight,
        lateralMove: 0,
        verticalMove: 0
    }

    playerProjectiles = []
    enemyProjectiles = []
    enemies = []
    asteroids = []
    explosions = []
    clouds = []
    trails = []
    powerUp = []

    selectRequest()
}

let pseudoRandomizerIndex = -1
let pseudoRandomizerArray = []
for (let i = 0; i < 100; i++)
    pseudoRandomizerArray.push(Math.random())

let debugLaunch = false

function canvasShooter() // main fonction
{
    
    console.log(tick)
    if (player.life <= 0 && deathTick === "")
        deathTick = tick + fireExplosionFrameColor.length

    if (deathTick != "" && tick > deathTick) // game over
    {

        animateHud("death")
    }
    else
    {
        let start = performance.now()

        if (tick >= 250 && tick <= 260) // après 5 secondes
            enemyCap = 1
        if (tick >= 1500 && tick <= 1510) // après 30 secondes
            enemyCap = 2
        if (tick >= 6000 && tick <= 6010) // après 2 minutes
            enemyCap = 3
        if (tick >= 24000 && tick <= 24010) // après 8 minutes
            enemyCap = 4

        if (tick % 3000 === 0 && tick !== 0 && difficultyIndex<difficultyMatrix.length-1) // toutes les minutes
            difficultyIndex++

        animateBackground()
        if (tick % 250 === 0)
            addCloud()
        animateClouds()

        checkPlayerHit() // le joueur a t-il été touché par quelque chose ?

        if (player.hasMoved || shieldMode !== false)
            animatePlayer()

        animatePowerUp()

        checkAsteroidHit() // asteroide a t-il été touché par quelque chose ?

        if (tick % 100 === 0)
            addAsteroid()
        animateAsteroids()

        checkEnemyHit() // enemi a t-il été touché par quelque chose ?

        if (tick % 250 === 0) // 250
        {
            if (tick % 24000 === 0 && tick !== 0 && !bossMode) // 24000 défaut
            {
                addEnemy("boss")
                bossMode = true
                bossHealth = 100 // defaut = 100
            }

            if (tick < 6000) // 6000
                addEnemy(1, getEnemySkill());
            else // ajout de la 2eme variante après 2 minutes
            {
                let typeAlien = Math.floor(Math.random() * 2) + 1
                addEnemy(typeAlien, getEnemySkill());
                if (tick >= 12000) // 12000 après 4 minutes, 2 enemis poppent à la fois
                {
                    typeAlien = Math.floor(Math.random() * 2) + 1
                    addEnemy(typeAlien, getEnemySkill());
                }
            }
        }
        animateEnemies();

        if (tick % 15 === 0) // tick variable en fonction type projectile ??
            addPlayerProjectiles()

        addEnemyProjectiles()

        addTrails()
        animateTrails()

        animatePlayerProjectiles()
        animateEnemiesProjectiles()

        animateExplosions()

        animateHud()

        let end = performance.now()
        //renderTime = end - start
        //console.log("player.lateralMove",player.lateralMove,"player.verticalMove",player.verticalMove)

        if(fireballMode !== false)
            fireballMode--
        if(fireballMode < 0)
            fireballMode = false

        if(shieldMode !== false)
            shieldMode--
        if(shieldMode < 0)
            shieldMode = false

        backgroundPosition += .5;
        if (backgroundPosition > mainHeight)
            backgroundPosition = -backgroundImage.height + mainHeight
    }
    tick++;
}

// keyboard event listener
//document.addEventListener("keydown", downEvent)
window.addEventListener("keypressed", downEvent)
window.addEventListener("keyup", upEvent)

// Put the game in pause
document.body.onkeyup = function pause(event) {
    if (event.keyCode == 32) {
        alert("GAME IN PAUSE");
    }
}
// End pause function

function downEvent(event) // ajouter gestion 2 touches / tick
{
    if (deathTick != "" && tick > deathTick && event.keyCode !== 13)
    {
        if ((event.keyCode === lastCharType && tick > lastTickType + 10) || lastTickType === "" || (event.keyCode !== lastCharType && tick > lastTickType + 5))
        {
            //console.log("keyCode",event.keyCode,"nickname",nickname)
            if (event.keyCode === 8 && nickname.length > 0)
            {
                nickname = nickname.substring(0, nickname.length - 1)
                lastTickType = tick
                lastCharType = event.keyCode
            }
            else
            {
                if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90))
                    if (nickname.length < 8)
                        nickname += String.fromCharCode(event.keyCode)
                lastTickType = tick
                lastCharType = event.keyCode
            }
        }
        return;
    }

    if (deathTick != "" && tick > deathTick && event.keyCode === 13)
    {
        // submit score
        let today = new Date()
        let todayYear = today.getFullYear()
        let todayMonth = (today.getMonth() + 1).toString().padStart(2, '0')
        let todayDay = today.getDate().toString().padStart(2, '0')
        let todayString = todayYear + todayMonth + todayDay

        insertRequest(todayString, nickname, score, _VERSION)

        // reset variables
        resetVariables();
        return;
    }

    player.hasMovedRight = false
    player.hasMovedLeft = false

    let eKeyCode = event.keyCode.toString()

    if (!keyAccumulator.hasOwnProperty(eKeyCode))
    {
        keyAccumulator[eKeyCode] = {
            acc: 0,
            tick: tick,
            speed: 0,
        }
    }

    

    Object.keys(keyAccumulator).forEach(key =>
    {
        if (key == eKeyCode)
        {
            //console.log("tick ", tick, "keycode ", eKeyCode, "acc ", keyAccumulator[key].acc)
            
            if (keyAccumulator[key].tick + 1 === tick || keyAccumulator[key].tick + 2 === tick || keyAccumulator[key].tick === tick)
                keyAccumulator[key].acc++
            else
                keyAccumulator[key].acc = 0
            keyAccumulator[key].tick = tick
        }
        /*
        else
            if (keyAccumulator[key].tick + 1 !== tick && keyAccumulator[key].tick !== tick)
                keyAccumulator[key].acc = 0
        */
        keyAccumulator[key].speed = .1 + Math.floor(keyAccumulator[key].acc / 1.75)
    });

    /*
    if (eKeyCode === lastKey) // faire un tableau de 4 objets, 1 par direction de type {keyAccumulator / lastTickKey} et traquer l'appui sur les 4 touches en meme temps 
        keyAccumulator[eKeyCode].acc++
    else
    {
        keyAccumulator[eKeyCode].acc = 0;
        keyAccumulator[eKeyCode].tick = tick;
    }

    */

    //let speed = .1 + Math.floor(keyAccumulator / 1.75)

    switch (eKeyCode)
    {
        case "39": //39
            // flèche droite
            player.lateralMove = keyAccumulator[eKeyCode].speed
            player.x += player.lateralMove
            player.hasMoved = true
            player.hasMovedRight = true
            break;
        case "37":  //37
            // flèche gauche
            player.lateralMove = -keyAccumulator[eKeyCode].speed
            player.x += player.lateralMove
            player.hasMoved = true
            player.hasMovedLeft = true
            break;
        case "40": // 40
            // flèche bas
            player.verticalMove = keyAccumulator[eKeyCode].speed
            player.y += player.verticalMove
            player.hasMoved = true
            break;
        case "38": // 38
            // flèche haut
            player.verticalMove = -keyAccumulator[eKeyCode].speed
            player.y += player.verticalMove
            player.hasMoved = true
            break;
        default:
    }

    /*
    switch (event.keyCode)
    {
        case 39: //39
            // flèche droite
            player.x += speed
            player.hasMoved = true
            player.hasMovedRight = true
            break;
        case 37:  //37
            // flèche gauche
            player.x -= speed
            player.hasMoved = true
            player.hasMovedLeft = true
            break;
        case 40: // 40
            // flèche bas
            player.y += speed
            player.hasMoved = true
            break;
        case 38: // 38
            // flèche haut
            player.y -= speed
            player.hasMoved = true
            break;
        default:
    }*/

    if (player.x > mainWidth - playerWidth)
    {
        player.x = mainWidth - playerWidth
        player.lateralMove = 0
    }   
    if (player.y > mainHeight - playerHeight)
    {
        player.y = mainHeight - playerHeight
        player.verticalMove = 0
    }
    if (player.x < 0)
    {
        player.x = 0
        player.lateralMove = 0
    }   
    if (player.y < 0)
    {
        player.y = 0
        player.verticalMove = 0
    }

    //lastKey = event.keyCode
}

function upEvent(event)
{
    //console.log("upEvent", event.keyCode)
    
    if (keyAccumulator.hasOwnProperty(event.keyCode))
        keyAccumulator[event.keyCode].acc = 0

    let eKeyCode = event.keyCode.toString()

    if(eKeyCode === "39") // fleche droite
    {
        player.hasMovedRight = false
        player.lateralMove = 0
    }
    if(eKeyCode === "37") // fleche gauche
    {
        player.hasMovedLeft = false
        player.lateralMove = 0
    }
    if(eKeyCode === "40") // fleche bas
        player.verticalMove = 0
    if(eKeyCode === "38") // fleche haut
        player.verticalMove = 0
    
    player.hasMoved = true
}

function pseudoRandomizer()
{
    pseudoRandomizerIndex++
    if (pseudoRandomizerIndex >= pseudoRandomizerArray.length - 1)
        pseudoRandomizerIndex = 0
    return pseudoRandomizerArray[pseudoRandomizerIndex]
}

function addAsteroid(size = "big", xSpawn, y = 0, lateralMove, verticalMove, type)
{
    if (xSpawn === undefined)
        xSpawn = mainWidth * 0.1 + Math.random() * mainWidth * 0.8
    if (lateralMove === undefined)
        lateralMove = Math.floor(Math.random() * 8) - 4
    if (verticalMove === undefined)
        verticalMove = 1

    let newAsteroidWidth
    let newAsteroidHeight
    if (size === "big")
    {
        newAsteroidWidth = asteroidWidth
        newAsteroidHeight = asteroidHeight
    }
    if (size === "mid")
    {
        newAsteroidWidth = minAsteroidWidth
        newAsteroidHeight = minAsteroidHeight
    }

    let asteroid = {
        x: xSpawn,
        y: y - newAsteroidHeight,
        size: size,
        width: newAsteroidWidth,
        height: newAsteroidHeight,
        lateralMove: lateralMove,
        verticalMove: verticalMove,
        type: type
    }
    asteroids.push(asteroid)
}

function animateAsteroids()
{
    let ctx = ctxArr.asteroidsCanvas
    let canvas = canvasArr.asteroidsCanvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowOffsetX = 35
    ctx.shadowOffsetY = 35
    ctx.shadowColor = "rgba(0,0,0,0.4)"
    ctx.shadowBlur = 15

    asteroids.forEach(asteroid =>
    {
        asteroid.y += asteroid.verticalMove
        asteroid.x += asteroid.lateralMove
        if (asteroid.size === "big")
            ctx.drawImage(asteroidSprite, asteroid.x, asteroid.y, asteroid.width, asteroid.height)
        if (asteroid.size === "mid")
        {
            if (asteroid.type === "left")
                ctx.drawImage(asteroidLeftSprite, asteroid.x, asteroid.y, asteroid.width, asteroid.height)
            if (asteroid.type === "right")
                ctx.drawImage(asteroidRightSprite, asteroid.x, asteroid.y, asteroid.width, asteroid.height)
        }
    })



    for (let i = asteroids.length - 1; i >= 0; i--)
        if (asteroids[i].y > mainHeight || asteroids[i].x + asteroids[i].width < 0 || asteroids[i].x > mainWidth)
            asteroids.splice(i, 1)

    //console.log(asteroids.length)
}

function collisionCheck(hitbox1, hitbox2) // bug quand on shoote au milieu (x) de la hitbox ??
{
    let xHit = false
    let yHit = false

    if ((hitbox1.x + hitbox1.w) >= hitbox2.x && (hitbox1.x + hitbox1.w) <= (hitbox2.x + hitbox2.w))
        xHit = true

    if (!xHit)
        if (hitbox1.x >= hitbox2.x && hitbox1.x <= (hitbox2.x + hitbox2.w))
            xHit = true

    if (!xHit)
        if (hitbox1.x <= hitbox2.x && (hitbox1.x + hitbox1.w) >= (hitbox2.x + hitbox2.w))
            xHit = true

    if (xHit)
    {
        if ((hitbox1.y + hitbox1.h) >= hitbox2.y && (hitbox1.y + hitbox1.h) <= (hitbox2.y + hitbox2.h))
            yHit = true

        if (!yHit)
            if (hitbox1.y >= hitbox2.y && hitbox1.y <= (hitbox2.y + hitbox2.h))
                yHit = true

        if (!yHit)
            if (hitbox1.y <= hitbox2.y && (hitbox1.y + hitbox1.h) >= (hitbox2.y + hitbox2.h))
                yHit = true
    }
    if (xHit && yHit)
        return true
    else
        return false
}

function checkPlayerHit()
{
    let playerHitBox
    
    if(shieldMode !== false)
        playerHitBox = {
            x: player.x-14,
            y: player.y-14,
            w: 67,
            h: 58
        }
    else
        playerHitBox = {
            x: player.x,
            y: player.y,
            w: player.width,
            h: player.height
        }
    
    let asteroidToSplice = [] // player vs asteroid

    for (let i = 0; i < asteroids.length; i++)
    {
        let asteroid1 = {
            x: asteroids[i].x,
            y: asteroids[i].y,
            w: asteroids[i].width,
            h: asteroids[i].height
        }

        if (collisionCheck(playerHitBox, asteroid1))
        {
            asteroidToSplice.push(i)
            if(shieldMode === false)
                player.life--
        }
    }
    asteroidToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < asteroidToSplice.length; j++)
    {
        let i = asteroidToSplice[j]
        let explosionSize = 3
        if (asteroids[i].size === "big")
        {
            let verticalMove = Math.floor(Math.random() * 7) - 3
            if (!verticalMove) verticalMove++
            addAsteroid(size = "mid", asteroids[i].x - minAsteroidWidth, asteroids[i].y, -2, verticalMove, "left")
            addAsteroid(size = "mid", asteroids[i].x, asteroids[i].y, 2, verticalMove, "right")
            explosionSize = 5
        }

        if (player.life <= 0)
            explosionSize = 20

        addExplosion(asteroids[i].x, asteroids[i].y, explosionSize)
        if(shieldMode !== false)
            addExplosion(asteroids[i].x, asteroids[i].y, explosionSize, "shield")

        asteroids.splice(i, 1)
    }

    let enemyToSplice = [] // player vs enemy

    for (let i = 0; i < enemies.length; i++)
    {
        if (enemies[i].type === "boss")
        {
            let collisionBoss = false
            bossHitBox.forEach(hitbox =>
            {
                let box = {
                    x: enemies[i] + hitbox.x,
                    y: enemies[i] + hitbox.y,
                    w: hitbox.w,
                    h: hitbox.h
                }
                if (collisionCheck(playerHitBox, box))
                    collisionBoss = true;
            });

            if (collisionBoss)
            {
                if(shieldMode === false)
                    player.life--
                bossHealth--
            }
        }
        else
        {
            let enemy = {
                x: enemies[i].x,
                y: enemies[i].y,
                w: enemyWidth,
                h: enemyHeight
            }

            if (collisionCheck(playerHitBox, enemy))
            {
                enemyToSplice.push(i)
                if(shieldMode === false)
                    player.life--
            }
        }

    }
    enemyToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < enemyToSplice.length; j++)
    {
        let i = enemyToSplice[j]
        let explosionSize = 5
        if (player.life <= 0)
            explosionSize = 20
        addExplosion(enemies[i].x, enemies[i].y, explosionSize)
        if(shieldMode !== false)
            addExplosion(enemies[i].x, enemies[i].y, explosionSize, "shield")

        enemies.splice(i, 1)
    }

    // test hit vs enemyProjectile

    let enemyProjectilesToSplice = []

    for (let i = 0; i < enemyProjectiles.length; i++)
    {
        let enemyProjectile = {
            x: enemyProjectiles[i].x,
            y: enemyProjectiles[i].y,
            w: enemyProjectiles[i].width,
            h: enemyProjectiles[i].height
        }

        if (collisionCheck(enemyProjectile, playerHitBox))
        {
            enemyProjectilesToSplice.push(i)
            if(shieldMode === false)
                player.life--
        }

    }
    enemyProjectilesToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < enemyProjectilesToSplice.length; j++)
    {
        let i = enemyProjectilesToSplice[j]
        let explosionSize = 5

        if (player.life <= 0)
            explosionSize = 20
        
        if(shieldMode !== false)
            addExplosion(enemyProjectiles[i].x, enemyProjectiles[i].y, explosionSize, "shield")
        else
            addExplosion(enemyProjectiles[i].x, enemyProjectiles[i].y, explosionSize)

        enemyProjectiles.splice(i, 1)
    }

    // test hit vs laser du boss
    if (tick >= bossUltimate + 250 && tick < bossUltimate + 400 && bossUltimate !== false)
    {
        let laserHitBox = {
            x: 320,
            y: 0,
            w: 160,
            h: mainHeight
        }
        
        if (collisionCheck(laserHitBox, playerHitBox))
        {
            if(shieldMode === false)
                player.life -= 0.2
        }
    }

    let powerUpToSplice = [] // player vs powerUp

    for (let i = 0; i < powerUp.length; i++)
    {
        playerHitBox = {
            x: player.x,
            y: player.y,
            w: playerWidth,
            h: playerHeight
        }

        let power = {
            x: powerUp[i].x,
            y: powerUp[i].y,
            w: 22,
            h: 22
        }

        if (collisionCheck(playerHitBox, power))
        {
            powerUpToSplice.push(i)
            score += 100
            if(powerUp[i].type === "heart")
            {
                player.life++
                if (player.life > 3)
                    player.life = 3
            }
            
            if(powerUp[i].type === "fireball")
            {
                fireballMode = 1000
            }
            
            if(powerUp[i].type === "shield")
            {
                shieldMode = 1000
            }
        }

    }
    powerUpToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < powerUpToSplice.length; j++)
    {
        let i = powerUpToSplice[j]
        powerUp.splice(i, 1)
    }

}

function checkAsteroidHit()
{
    let asteroidToSplice = []
    let projectileToSplice = []

    for (let i = 0; i < asteroids.length; i++)  // collision entre asteroides
        for (let j = 0; j < asteroids.length; j++)
            if (i !== j)
            {
                let asteroid1 = {
                    x: asteroids[i].x,
                    y: asteroids[i].y,
                    w: asteroids[i].width,
                    h: asteroids[i].height
                }
                let asteroid2 = {
                    x: asteroids[j].x,
                    y: asteroids[j].y,
                    w: asteroids[j].width,
                    h: asteroids[j].height
                }

                if (collisionCheck(asteroid1, asteroid2))
                {
                    if (!asteroidToSplice.includes(i))
                        asteroidToSplice.push(i)
                    if (!asteroidToSplice.includes(j))
                        asteroidToSplice.push(j)

                    //console.log("hit")
                }
            }


    for (let i = 0; i < asteroids.length; i++) // collision asteroide vs playerprojectile
        for (let j = 0; j < playerProjectiles.length; j++)
        {
            let asteroid = {
                x: asteroids[i].x,
                y: asteroids[i].y,
                w: asteroids[i].width,
                h: asteroids[i].height
            }
            let projectile

            if(playerProjectiles[j].type === "fireball")
                projectile = {
                    x: playerProjectiles[j].x + 9,
                    y: playerProjectiles[j].y,
                    w: 52,
                    h: 52
                }
            else
                projectile = {
                    x: playerProjectiles[j].x,
                    y: playerProjectiles[j].y,
                    w: playerProjectiles[j].width,
                    h: playerProjectiles[j].height
                }

            if (collisionCheck(projectile, asteroid))
            {
                if (player.life > 0)
                {
                    if (asteroids[i].size == "big")
                        score += 10
                    else
                        score += 5
                }

                if (!asteroidToSplice.includes(i))
                    asteroidToSplice.push(i)
                if(playerProjectiles[j].type !== "fireball")
                    projectileToSplice.push(j)
                //console.log("hit")
            }

        }

    asteroidToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < asteroidToSplice.length; j++)
    {
        let i = asteroidToSplice[j]
        let explosionSize = 3
        if (asteroids[i].size === "big")
        {
            let verticalMove = Math.floor(Math.random() * 7) - 3
            if (!verticalMove) verticalMove++
            addAsteroid(size = "mid", asteroids[i].x - minAsteroidWidth, asteroids[i].y, -2, verticalMove, "left")
            addAsteroid(size = "mid", asteroids[i].x, asteroids[i].y, 2, verticalMove, "right")
            explosionSize = 5
        }

        addExplosion(asteroids[i].x, asteroids[i].y, explosionSize)

        asteroids.splice(i, 1)
    }

    for (let j = 0; j < projectileToSplice.length; j++)
        playerProjectiles.splice(projectileToSplice[j], 1)

    projectileToSplice = []

    for (let i = 0; i < asteroids.length; i++) // collision asteroide vs enemyprojectile
        for (let j = 0; j < enemyProjectiles.length; j++)
        {
            let asteroid = {
                x: asteroids[i].x,
                y: asteroids[i].y,
                w: asteroids[i].width,
                h: asteroids[i].height
            }

            let projectile = {
                x: enemyProjectiles[j].x,
                y: enemyProjectiles[j].y,
                w: enemyProjectiles[j].width,
                h: enemyProjectiles[j].height
            }

            if (collisionCheck(projectile, asteroid))
            {
                if (!asteroidToSplice.includes(i))
                    asteroidToSplice.push(i)
                projectileToSplice.push(j)
                //console.log("hit")
            }

        }

    if (bossMode)
    {
        let bossIndex = ""
        for (let i = 0; i < enemies.length; i++)
            if (enemies[i].type === "boss")
                bossIndex = i

        // collision asteroide vs boss
        for (let i = 0; i < asteroids.length; i++)
        {
            let asteroid = {
                x: asteroids[i].x,
                y: asteroids[i].y,
                w: asteroids[i].width,
                h: asteroids[i].height
            }
            let collisionBoss = false
            bossHitBox.forEach(hitbox =>
            {
                let box = {
                    x: enemies[bossIndex] + hitbox.x,
                    y: enemies[bossIndex] + hitbox.y,
                    w: hitbox.w,
                    h: hitbox.h
                }
                if (collisionCheck(asteroid, box))
                    collisionBoss = true;
            });

            if (collisionBoss)
            {
                if (!asteroidToSplice.includes(i))
                    asteroidToSplice.push(i)
            }
            // collision asteroide vs laser boss
            if (tick >= bossUltimate + 250 && tick < bossUltimate + 400 && bossUltimate !== false)
            {
                let laserHitBox = {
                    x: 320,
                    y: 0,
                    w: 160,
                    h: mainHeight
                }

                if (collisionCheck(asteroid, laserHitBox))
                {
                    if (!asteroidToSplice.includes(i))
                        asteroidToSplice.push(i)
                }
            }
        }
    }

    // slice

    asteroidToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < asteroidToSplice.length; j++)
    {
        let i = asteroidToSplice[j]
        if (i < asteroids.length)
        {
            let explosionSize = 3
            if (asteroids[i].size === "big")
            {
                let verticalMove = Math.floor(Math.random() * 7) - 3
                if (!verticalMove) verticalMove++
                addAsteroid(size = "mid", asteroids[i].x - minAsteroidWidth, asteroids[i].y, -2, verticalMove, "left")
                addAsteroid(size = "mid", asteroids[i].x, asteroids[i].y, 2, verticalMove, "right")
                explosionSize = 5
            }

            addExplosion(asteroids[i].x, asteroids[i].y, explosionSize)

            asteroids.splice(i, 1)
        }
    }

    for (let j = 0; j < projectileToSplice.length; j++)
        enemyProjectiles.splice(projectileToSplice[j], 1)

}

function checkEnemyHit()
{
    // enemy vs playerProjectile

    let enemyToSplice = []
    let projectileToSplice = []

    for (let i = 0; i < playerProjectiles.length; i++)
        for (let j = 0; j < enemies.length; j++)
        {
            let projectile

                if(playerProjectiles[i].type === "fireball")
                    projectile = {
                        x: playerProjectiles[i].x + 9,
                        y: playerProjectiles[i].y,
                        w: 52,
                        h: 52
                    }
                else
                    projectile = {
                        x: playerProjectiles[i].x,
                        y: playerProjectiles[i].y,
                        w: playerProjectiles[i].width,
                        h: playerProjectiles[i].height
                    }
                    
            if (enemies[j].type === "boss")
            {
                let collisionBoss = false

                let damageHitbox = {
                    x: enemies[j].x + bossDamageHitBox.x,
                    y: enemies[j].y + bossDamageHitBox.y,
                    w: bossDamageHitBox.w,
                    h: bossDamageHitBox.h
                }

                if (collisionCheck(projectile, damageHitbox))
                {
                    addExplosion(projectile.x + projectileWidth / 2, projectile.y + projectileHeight / 2, 5)

                    collisionBoss = true;
                    if (bossUltimate)
                    {
                        if(playerProjectiles[i].type === "fireball")
                            bossHealth -= 4.5
                        else
                            bossHealth -= 1.5
                    }
                    else
                    {
                        if(playerProjectiles[i].type === "fireball")
                            bossHealth -= .3
                        else
                            bossHealth -= .1
                    }
                }

                bossHitBox.forEach(hitbox =>
                {
                    let box = {
                        x: enemies[j].x + hitbox.x,
                        y: enemies[j].y + hitbox.y,
                        w: hitbox.w,
                        h: hitbox.h
                    }
                    if (collisionCheck(projectile, box))
                    {
                        addExplosion(projectile.x + projectileWidth / 2, projectile.y + projectileHeight / 2, 5, "shield")
                        collisionBoss = true;
                    }
                });

                if (collisionBoss)
                {
                    if (!projectileToSplice.includes(i))
                        projectileToSplice.push(i)
                }
            }
            else
            {
                let enemy = {
                    x: enemies[j].x,
                    y: enemies[j].y,
                    w: enemyWidth,
                    h: enemyHeight
                }

                if (collisionCheck(projectile, enemy))
                {
                    if (player.life > 0)
                    {
                        if (enemies[j].type === 1)
                            score += 100
                        if (enemies[j].type === 2)
                            score += 150
                    }
                    if(playerProjectiles[i].type !== "fireball")
                        projectileToSplice.push(i)
                    if (enemies[j].type !== "boss")
                        enemyToSplice.push(j)
                    //console.log("hit")
                }
            }
        }
            

    enemyToSplice.sort(function (a, b)
    {
        return b - a;
    })

    projectileToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < enemyToSplice.length; j++)
    {
        let i = enemyToSplice[j]
        if (i < enemies.length)
        {
            let explosionSize = 5
            addExplosion(enemies[i].x, enemies[i].y, explosionSize)

            let randPowerUp = Math.random()

            if (randPowerUp > 0.70) // default = 0.8
            {
                if(randPowerUp > 0.8)
                    addPowerUp("heart", enemies[i].x + enemies[i].width / 2, enemies[i].y + enemies[i].height)
                else if(randPowerUp > 0.75)
                    addPowerUp("shield", enemies[i].x + enemies[i].width / 2, enemies[i].y + enemies[i].height)
                else if(randPowerUp > 0.70)
                    addPowerUp("fireball", enemies[i].x + enemies[i].width / 2, enemies[i].y + enemies[i].height)
            }
                
            enemies.splice(i, 1)
        }
    }

    for (let j = 0; j < projectileToSplice.length; j++)
        playerProjectiles.splice(projectileToSplice[j], 1)

    // enemyProjectile vs enemy

    projectileToSplice = []
    enemyToSplice = []

    for (let i = 0; i < enemyProjectiles.length; i++)
        for (let j = 0; j < enemies.length; j++)
        {
            let asteroid = {
                x: enemyProjectiles[i].x,
                y: enemyProjectiles[i].y,
                w: enemyProjectiles[i].width,
                h: enemyProjectiles[i].height
            }
            let enemy = {
                x: enemies[j].x,
                y: enemies[j].y,
                w: enemyWidth,
                h: enemyHeight
            }

            if (collisionCheck(enemy, asteroid))
            {
                projectileToSplice.push(i)
                if (enemies[j].type !== "boss")
                    enemyToSplice.push(j)
            }
        }

    projectileToSplice.sort(function (a, b)
    {
        return b - a;
    })

    enemyToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < projectileToSplice.length; j++)
    {
        let i = projectileToSplice[j]
        enemyProjectiles.splice(i, 1)
    }

    for (let j = 0; j < enemyToSplice.length; j++)
    {
        let i = enemyToSplice[j]
        if (i < enemies.length)
        {
            let explosionSize = 5
            addExplosion(enemies[i].x, enemies[i].y, explosionSize)

            enemies.splice(i, 1)
        }
    }

    // asteroid vs enemy

    let asteroidToSplice = []
    enemyToSplice = []

    for (let i = 0; i < asteroids.length; i++)
        for (let j = 0; j < enemies.length; j++)
        {
            let asteroid = {
                x: asteroids[i].x,
                y: asteroids[i].y,
                w: asteroids[i].width,
                h: asteroids[i].height
            }
            let enemy = {
                x: enemies[j].x,
                y: enemies[j].y,
                w: enemyWidth,
                h: enemyHeight
            }

            if (collisionCheck(enemy, asteroid))
            {
                asteroidToSplice.push(i)
                if (enemies[j].type !== "boss")
                    enemyToSplice.push(j)
            }
        }

    asteroidToSplice.sort(function (a, b)
    {
        return b - a;
    })

    enemyToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < asteroidToSplice.length; j++)
    {
        let i = asteroidToSplice[j]
        let explosionSize = 3
        if (asteroids[i].size === "big")
        {
            let verticalMove = Math.floor(Math.random() * 7) - 3
            if (!verticalMove) verticalMove++
            addAsteroid(size = "mid", asteroids[i].x - minAsteroidWidth, asteroids[i].y, -2, verticalMove, "left")
            addAsteroid(size = "mid", asteroids[i].x, asteroids[i].y, 2, verticalMove, "right")
            explosionSize = 5
        }

        addExplosion(asteroids[i].x, asteroids[i].y, explosionSize)

        asteroids.splice(i, 1)
    }

    for (let j = 0; j < enemyToSplice.length; j++)
    {
        let i = enemyToSplice[j]
        if (i < enemies.length)
        {
            let explosionSize = 5
            addExplosion(enemies[i].x, enemies[i].y, explosionSize)

            enemies.splice(i, 1)
        }
    }

    // enemy vs enemy
    enemyToSplice = []
    for (let i = 0; i < enemies.length; i++)  // collision entre enemis
        for (let j = 0; j < enemies.length; j++)
            if (i !== j)
            {
                let enemy1 = {
                    x: enemies[i].x,
                    y: enemies[i].y,
                    w: enemyWidth,
                    h: enemyHeight
                }
                let enemy2 = {
                    x: enemies[j].x,
                    y: enemies[j].y,
                    w: enemyWidth,
                    h: enemyHeight
                }

                if (collisionCheck(enemy1, enemy2))
                {
                    if (!enemyToSplice.includes(i))
                        if (enemies[i].type !== "boss")
                            enemyToSplice.push(i)
                    if (!enemyToSplice.includes(j))
                        if (enemies[j].type !== "boss")
                            enemyToSplice.push(j)
                }
            }


    enemyToSplice.sort(function (a, b)
    {
        return b - a;
    })

    for (let j = 0; j < enemyToSplice.length; j++)
    {
        let i = enemyToSplice[j]
        let explosionSize = 5
        addExplosion(enemies[i].x, enemies[i].y, explosionSize)

        enemies.splice(i, 1)

    }

    //enemy vs boss
    if (bossMode)
    {
        enemyToSplice = []

        let bossIndex = ""
        for (let i = 0; i < enemies.length; i++)
            if (enemies[i].type === "boss")
                bossIndex = i

        // collision enemy vs boss
        for (let i = 0; i < enemies.length; i++)
            if (enemies[i].type !== "boss")
            {
                let enemy = {
                    x: enemies[i].x,
                    y: enemies[i].y,
                    w: enemies[i].width,
                    h: enemies[i].height
                }
                let collisionBoss = false
                bossHitBox.forEach(hitbox =>
                {
                    let box = {
                        x: enemies[bossIndex] + hitbox.x,
                        y: enemies[bossIndex] + hitbox.y,
                        w: hitbox.w,
                        h: hitbox.h
                    }
                    if (collisionCheck(enemy, box))
                        collisionBoss = true;
                });

                if (collisionBoss)
                {
                    if (!enemyToSplice.includes(i))
                        enemyToSplice.push(i)
                }
                // collision enemy vs laser boss
                if (tick >= bossUltimate + 250 && tick < bossUltimate + 400 && bossUltimate !== false)
                {
                    let laserHitBox = {
                        x: 320,
                        y: 0,
                        w: 160,
                        h: mainHeight
                    }

                    if (collisionCheck(enemy, laserHitBox))
                    {
                        if (!enemyToSplice.includes(i))
                            enemyToSplice.push(i)
                    }
                }
            }

        enemyToSplice.sort(function (a, b)
        {
            return b - a;
        })

        for (let j = 0; j < enemyToSplice.length; j++)
        {
            let i = enemyToSplice[j]
            let explosionSize = 5
            addExplosion(enemies[i].x, enemies[i].y, explosionSize)

            enemies.splice(i, 1)

        }
    }

    if (tick === bossDeath + bossDeathAnimationDuration - 50)
    {
        let bossIndex = ""
        for (let i = 0; i < enemies.length; i++)
            if (enemies[i].type === "boss")
                bossIndex = i

        enemies.splice(bossIndex, 1)
    }
}

function findXspawn()
{
    let xSpawn = false
    for (let i = 0; i < 5 && !xSpawn; i++)
    {
        let xTry = mainWidth * 0.1 + Math.random() * mainWidth * 0.8

        let hazardFree = true;
        playerProjectiles.forEach(element =>
        {
            if (element.y < 300 && xTry < element.x + 50 && xTry > element.x - 50)
                hazardFree = false
        })
        enemies.forEach(element =>
        {
            if (element.y < 200 && xTry < element.x + 50 && xTry > element.x - 50)
                hazardFree = false
        })
        asteroids.forEach(element =>
        {
            if (element.y < 200 && xTry < element.x + 50 && xTry > element.x - 50)
                hazardFree = false
        })

        if (hazardFree)
            xSpawn = xTry
    }
    return xSpawn
}

function addEnemy(type = false, skill = 1)
{
    let skillTable = {
        skill:skill, // 1-2-3-4-5
        projectileTick:skillMatrix[skill-1].projectileTick,
        IArate:skillMatrix[skill-1].IArate,
        allowRedAlert:skillMatrix[skill-1].allowRedAlert,
        redAlertSight:skillMatrix[skill-1].redAlertSight,
        reactorPower:skillMatrix[skill-1].reactorPower,
        speed:skillMatrix[skill-1].speed
    }
    
    if (enemies.length < enemyCap && type !== "boss")
    {
        let xSpawn = findXspawn()
        let lateralMove = Math.round(Math.random() * 4, 0) - 2
        let verticalMove = 4

        let projectileColorR = 64 + Math.floor(Math.random() * 191)
        let projectileColorG = 64 + Math.floor(Math.random() * 191)
        if (!type)
            type = 1

        let width
        let height
        if (type === 1)
        {
            width = enemyWidth
            height = enemyHeight
        }
        if (type === 2)
        {
            width = enemy2Width
            height = enemy2Height
        }

        let enemy = {
            x: xSpawn,
            y: -height,
            width: width,
            height: height,
            lateralMove: lateralMove,
            verticalMove: verticalMove,
            nextLateralMove: "",
            nextVerticalMove: "",
            birthTick: tick,
            projectileColorR: projectileColorR,
            projectileColorG: projectileColorG,
            type: type,
            skill: skillTable,
            kamikaze: false,
            kamikazeArray: [],
        }
        enemies.push(enemy)
    }


    if (type === "boss")
    {
        let xSpawn = 125
        let lateralMove = 0
        let verticalMove = 4

        let projectileColorR = 64 + Math.floor(Math.random() * 191)
        let projectileColorG = 64 + Math.floor(Math.random() * 191)

        let width = 550
        let height = 650

        let enemy = {
            x: xSpawn,
            y: -height,
            width: width,
            height: height,
            lateralMove: lateralMove,
            verticalMove: verticalMove,
            nextLateralMove: "",
            nextVerticalMove: "",
            birthTick: tick,
            projectileColorR: projectileColorR,
            projectileColorG: projectileColorG,
            type: type,
            skill: skillTable,
            kamikaze: false,
            kamikazeArray: [],
        }
        enemies.push(enemy)
    }
}

function addCloud()
{
    let nbClouds = cloudList.length
    let selectedCloud = Math.round(Math.random() * (nbClouds - 1), 0)
    //let rotation = Math.random()*Math.PI*2
    let xSpawn = Math.pow((Math.random() * 2) - 1, 2) * (mainWidth + cloudList[selectedCloud].width) - cloudList[selectedCloud].width

    let cloud = {
        x: xSpawn,
        y: -maxCloudHeight,
        //rotation: rotation,
        type: selectedCloud
    }
    clouds.push(cloud)
}

function animateClouds()
{
    let ctx = ctxArr.cloudCanvas
    let canvas = canvasArr.cloudCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.globalAlpha = 0.5
    ctx.shadowOffsetX = 25
    ctx.shadowOffsetY = 25
    ctx.shadowColor = "rgba(0,0,0,0.7)"
    ctx.shadowBlur = 30

    clouds.forEach(cloud =>
    {
        //ctx.save();
        //ctx.translate(canvas.width/2,canvas.height/2);
        //ctx.rotate(cloud.rotation);
        ctx.drawImage(cloudList[cloud.type].img, cloud.x, cloud.y, cloudList[cloud.type].width, cloudList[cloud.type].height)
        //ctx.restore()

        cloud.y++
    })

    for (let i = clouds.length - 1; i >= 0; i--)
        if (clouds[i].y > mainHeight)
            clouds.splice(i, 1)
}

function animateEnemies() 
{
    let ctx = ctxArr.enemiesCanvas
    let canvas = canvasArr.enemiesCanvas

    for (let i = 0; i < enemies.length; i++)
    {
        if ((tick - enemies[i].birthTick) % enemies[i].skill.IArate === 0 && tick !== enemies[i].birthTick && tick - enemies[i].birthTick > 15 && enemies[i].type !== "boss")
        {
            // appel à fonction IA ici
            let moves = findEnemyPath(i)
            enemies[i].nextVerticalMove = moves.y
            enemies[i].nextLateralMove = moves.x
        }

        if (enemies[i].type === "boss")
        {
            if (!bossDeath)
            {
                if (enemies[i].y > -390)
                {
                    enemies[i].nextVerticalMove = -1
                    enemies[i].nextLateralMove = 0
                }
                if (enemies[i].y < -395)
                {
                    enemies[i].nextVerticalMove = 2
                    enemies[i].nextLateralMove = 0
                }
            }
            else // bossDeath = true
            {
                if (enemies[i].y < 0)
                {
                    enemies[i].nextVerticalMove = 2
                    enemies[i].nextLateralMove = 0
                }
                if (enemies[i].y >= 0)
                {
                    enemies[i].nextVerticalMove = 0
                    enemies[i].nextLateralMove = 0
                }
            }
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    

    enemies.forEach(enemy =>
    {
        let deltaMove // smooth des changements de direction
        if (enemy.nextVerticalMove != enemy.verticalMove && enemy.nextVerticalMove !== "")
        {
            deltaMove = enemy.nextVerticalMove - enemy.verticalMove
            if (deltaMove < 0)
            {
                enemy.verticalMove -= enemy.skill.reactorPower
                if (enemy.verticalMove < enemy.nextVerticalMove)
                    enemy.verticalMove = enemy.nextVerticalMove
            }
            if (deltaMove > 0)
            {
                enemy.verticalMove += enemy.skill.reactorPower
                if (enemy.verticalMove > enemy.nextVerticalMove)
                    enemy.verticalMove = enemy.nextVerticalMove
            }
        }

        if (enemy.nextLateralMove != enemy.lateralMove && enemy.nextLateralMove !== "")
        {
            let deltaMove = enemy.nextLateralMove - enemy.lateralMove
            if (deltaMove < 0)
            {
                enemy.lateralMove -= enemy.skill.reactorPower
                if (enemy.lateralMove < enemy.nextLateralMove)
                    enemy.lateralMove = enemy.nextLateralMove
            }
            if (deltaMove > 0)
            {
                enemy.lateralMove += enemy.skill.reactorPower
                if (enemy.lateralMove > enemy.nextLateralMove)
                    enemy.lateralMove = enemy.nextLateralMove
            }
        }

        enemy.y += enemy.verticalMove
        enemy.x += enemy.lateralMove

        if (enemy.x < 0)
        {
            enemy.x = 0
            enemy.lateralMove = -enemy.lateralMove
        }

        if (enemy.x > mainWidth - enemy.width)
        {
            enemy.x = mainWidth - enemy.width
            enemy.lateralMove = -enemy.lateralMove
        }

        if (enemy.y < 0 && tick - enemy.birthTick > 30 && enemy.type !== "boss")
        {
            enemy.y = 0
            enemy.verticalMove = 3
        }

        if (enemy.y > mainHeight - enemy.height)
        {
            enemy.y = mainHeight - enemy.height
            enemy.verticalMove = -3
        }

        ctx.shadowOffsetX = 35
        ctx.shadowOffsetY = 35
        ctx.shadowColor = "rgba(0,0,0,0.4)"
        ctx.shadowBlur = 15

        if (enemy.type === 1)
        {
            if (enemy.skill.skill === 1)
                ctx.drawImage(alien11Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
            if (enemy.skill.skill === 2)
                ctx.drawImage(alien12Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
            if (enemy.skill.skill === 3)
                ctx.drawImage(alien13Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
            if (enemy.skill.skill === 4)
                ctx.drawImage(alien14Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
            if (enemy.skill.skill === 5)
                ctx.drawImage(alien15Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
        }
            
        if (enemy.type === 2)
        {
            if (enemy.skill.skill === 1)
                ctx.drawImage(alien21Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
            if (enemy.skill.skill === 2)
                ctx.drawImage(alien22Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
            if (enemy.skill.skill === 3)
                ctx.drawImage(alien23Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
            if (enemy.skill.skill === 4)
                ctx.drawImage(alien24Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
            if (enemy.skill.skill === 5)
                ctx.drawImage(alien25Sprite, enemy.x, enemy.y, enemy.width, enemy.height)
        }

        if (enemy.type === "boss")
        {
            let fillColor = Math.abs((tick % 255) - 127) * 2
            ctx.fillStyle = `rgb(${fillColor},255,0)`
            ctx.beginPath()
            ctx.moveTo(enemy.x + 270, enemy.y + 80)
            ctx.lineTo(enemy.x + 270 + 128, enemy.y + 80 + 360)
            ctx.lineTo(enemy.x + 270 + 128, enemy.y + 80 + +360 + 70)
            ctx.lineTo(enemy.x + 270 + 128 - 260, enemy.y + 80 + 360 + 70)
            ctx.lineTo(enemy.x + 270 + 128 - 260, enemy.y + 80 + 360)
            ctx.closePath();
            ctx.fill()
            ctx.drawImage(bossSprite, enemy.x, enemy.y, enemy.width, enemy.height)

            if (tick !== enemy.birthTick && (tick - enemy.birthTick) % 1000 === 0 && !bossUltimate) // déclenchement ultime toute les 20 sec
                bossUltimate = tick

            if (bossUltimate !== false)
            {
                if (tick < bossUltimate + 250) // preparation ultime 5 secondes
                {
                    ctx.shadowOffsetX = 0
                    ctx.shadowOffsetY = 0
                    ctx.shadowColor = "blue"
                    ctx.shadowBlur = 5
                    if (tick % 8 === 0)
                    {
                        ctx.drawImage(left1, enemy.x + 169, enemy.y + 638, 90, 25)
                        ctx.drawImage(right1, enemy.x + 288, enemy.y + 638, 90, 25)
                    }
                    if (tick % 8 === 1)
                    {
                        ctx.drawImage(left2, enemy.x + 169, enemy.y + 638, 90, 25)
                        ctx.drawImage(right2, enemy.x + 288, enemy.y + 638, 90, 25)
                    }
                    if (tick % 8 === 2)
                    {
                        ctx.drawImage(left3, enemy.x + 169, enemy.y + 638, 90, 25)
                        ctx.drawImage(right3, enemy.x + 288, enemy.y + 638, 90, 25)
                    }
                    if (tick % 8 === 3)
                    {
                        ctx.drawImage(left4, enemy.x + 169, enemy.y + 638, 90, 25)
                        ctx.drawImage(right4, enemy.x + 288, enemy.y + 638, 90, 25)
                    }
                    if (tick % 8 === 4)
                    {
                        ctx.drawImage(left5, enemy.x + 169, enemy.y + 638, 90, 25)
                        ctx.drawImage(right5, enemy.x + 288, enemy.y + 638, 90, 25)
                    }
                    if (tick % 8 === 5)
                    {
                        ctx.drawImage(left6, enemy.x + 169, enemy.y + 638, 90, 25)
                        ctx.drawImage(right6, enemy.x + 288, enemy.y + 638, 90, 25)
                    }
                    if (tick % 8 === 6)
                    {
                        ctx.drawImage(left7, enemy.x + 169, enemy.y + 638, 90, 25)
                        ctx.drawImage(right7, enemy.x + 288, enemy.y + 638, 90, 25)
                    }
                    if (tick % 8 === 7)
                    {
                        ctx.drawImage(left8, enemy.x + 169, enemy.y + 638, 90, 25)
                        ctx.drawImage(right8, enemy.x + 288, enemy.y + 638, 90, 25)
                    }

                    let color = tick - bossUltimate
                    let opacity = 0.5 + (tick - bossUltimate) / 500
                    let size = 2 + (tick - bossUltimate) / 20

                    ctx.shadowColor = "white"
                    ctx.shadowBlur = 20

                    ctx.beginPath()
                    ctx.fillStyle = `rgba(${color},${color},255,${opacity})`
                    
                    ctx.arc(enemy.x + 274, enemy.y + 644, size, 0, Math.PI * 2)
                    ctx.fill()
                    ctx.closePath()

                    if(tick > bossUltimate + 150)
                    {
                        let rayOpacity = 0.2+(tick - (bossUltimate + 150))/100*0.6
                        
                        ctx.shadowColor = "white"
                        ctx.shadowBlur = 20
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(60,243,255,${rayOpacity})`
                        ctx.moveTo(enemy.x + 274, enemy.y + 644 + mainHeight)
                        //ctx.lineTo(enemy.x + 275, enemy.y + 644 + mainHeight)
                        //ctx.lineTo(enemy.x + 275, enemy.y + 644)
                        ctx.lineTo(enemy.x + 274, enemy.y + 644)
                        ctx.closePath()
                        ctx.stroke()
                    }
                }
                if (tick >= bossUltimate + 250 && tick < bossUltimate + 400) // laser 3 secondes
                {
                    ctx.shadowOffsetX = 0
                    ctx.shadowOffsetY = 0
                    ctx.shadowColor = "white"
                    ctx.shadowBlur = 20
                    ctx.beginPath()
                    ctx.fillStyle = `rgba(60,243,255,0.8)`
                    ctx.arc(enemy.x + 274, enemy.y + 644, 80, Math.PI, Math.PI * 2)
                    ctx.moveTo(enemy.x + 194, enemy.y + 644 + mainHeight)
                    ctx.lineTo(enemy.x + 354, enemy.y + 644 + mainHeight)
                    ctx.lineTo(enemy.x + 354, enemy.y + 644)
                    ctx.lineTo(enemy.x + 194, enemy.y + 644)
                    ctx.closePath()
                    ctx.fill()

                    ctx.beginPath()
                    ctx.fillStyle = `rgba(255,255,255,0.8)`
                    ctx.arc(enemy.x + 274, enemy.y + 644, 40, Math.PI, Math.PI * 2)

                    ctx.moveTo(enemy.x + 234, enemy.y + 644 + mainHeight)
                    ctx.lineTo(enemy.x + 314, enemy.y + 644 + mainHeight)
                    ctx.lineTo(enemy.x + 314, enemy.y + 644)
                    ctx.lineTo(enemy.x + 234, enemy.y + 644)

                    //ctx.fillRect(enemy.x + 234, enemy.y + 644, 80, mainHeight)
                    ctx.closePath()
                    ctx.fill()
                }

                if (tick === bossUltimate + 400) // fin de l'ultime
                    bossUltimate = false;
            }

            if (bossHealth <= 0 && bossMode)
            {
                if (!bossDeath)
                {
                    bossDeath = tick;
                    score += 10000
                }

                if (bossUltimate)
                    bossUltimate = false

                if (tick <= bossDeath + bossDeathAnimationDuration && tick % 2 === 0)
                    bossHitBox.forEach(hitbox =>
                    {
                        let size = 10 + Math.floor(Math.random() * 5)

                        let posX = 30 + enemy.x + hitbox.x + (Math.random() * (hitbox.w - hitbox.x))
                        let posY = 20 + enemy.y + hitbox.y + (Math.random() * (hitbox.h - hitbox.y))

                        addExplosion(posX, posY, size)
                    });


            }
        }
    })

    if (tick > bossDeath + bossDeathAnimationDuration && bossDeath !== false)
    {
        bossMode = false
        bossHealth = 0
        bossDeath = false
        addPowerUp("heart", 350, 300)
        addPowerUp("heart", 400, 250)
        addPowerUp("heart", 450, 300)
    }

    for (let i = enemies.length - 1; i >= 0; i--)
        if (enemies[i].y > mainHeight || enemies[i].x + enemies[i].width < 0 || enemies[i].x > mainWidth)
            enemies.splice(i, 1)
}

function addExplosion(x, y, size, type = "fire") // explosionsCanvas
{
    let positionRatio = size * 5
    for (let i = 0; i < size; i++)
    {
        let explosion = {
            x: x + Math.floor(pseudoRandomizer() * positionRatio) - (positionRatio / 2),
            y: y + Math.floor(pseudoRandomizer() * positionRatio) - (positionRatio / 2),
            size: size * 4,
            frame: -i,
            type: type,
        }
        explosions.push(explosion)
    }
}

let fireExplosionFrameColor = [
    "rgba(255,213,51,0.9)",
    "rgba(255,213,51,0.9)",
    "rgba(255,213,51,0.9)",
    "rgba(213,35,35,0.8)",
    "rgba(213,35,35,0.8)",
    "rgba(213,35,35,0.8)",
    "rgba(90,90,90,0.7)",
    "rgba(90,90,90,0.7)",
    "rgba(135,135,135,0.7)",
    "rgba(135,135,135,0.4)",
    "rgba(135,135,135,0.4)",
    "rgba(135,135,135,0.4)"
]

let shieldExplosionFrameColor = [
    "rgba(0,232,255,0.9)",
    "rgba(0,232,255,0.9)",
    "rgba(0,232,255,0.9)",
    "rgba(0,170,255,0.8)",
    "rgba(0,170,255,0.8)",
    "rgba(0,170,255,0.8)",
    "rgba(0,70,255,0.7)",
    "rgba(0,70,255,0.7)",
    "rgba(89,135,255,0.7)",
    "rgba(133,166,255,0.4)",
    "rgba(188,206,255,0.4)",
    "rgba(255,255,255,0.4)"
]

function animateExplosions()
{
    let ctx = ctxArr.explosionsCanvas
    let canvas = canvasArr.explosionsCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    explosions.forEach(explosion =>
    {
        if (explosion.frame >= 0)
        {
            ctx.beginPath()
            if (explosion.type === "fire")
                ctx.fillStyle = fireExplosionFrameColor[explosion.frame]
            if (explosion.type === "shield")
                ctx.fillStyle = shieldExplosionFrameColor[explosion.frame]
            ctx.arc(explosion.x, explosion.y, explosion.size, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
            //console.log(explosion)
        }
        explosion.frame++
    })

    for (let i = explosions.length - 1; i >= 0; i--)
        if (explosions[i].frame > fireExplosionFrameColor.length)
            explosions.splice(i, 1)

}

function addPlayerProjectiles()
{
    let projectileType = "classic"

    let newProjectileWidth = projectileWidth
    let newProjectileHeight = projectileHeight

    let x = player.x + (playerWidth / 2 - (newProjectileWidth / 2))
    let y = player.y - playerHeight / 2
    let verticalMove = -6

    if(fireballMode !== false && fireballMode>0)
    {
        projectileType = "fireball"
        newProjectileWidth = 66
        newProjectileHeight = 102
        x = player.x + (playerWidth / 2 - (newProjectileWidth / 2)) - 3
        y = player.y - newProjectileHeight / 2
        verticalMove = -12
    }

    let projectile = {
        x: x,
        y: y,
        type:projectileType,
        x_origin:x,
        y_origin:y,
        lifespan: 100,
        width:newProjectileWidth,
        height:newProjectileHeight,
        lateralMove:0,
        verticalMove:verticalMove,
    }
    playerProjectiles.push(projectile)
}


function addEnemyProjectiles()
{
    enemies.forEach((enemy) =>
    {
        if (enemy.type === 1 && tick % enemy.skill.projectileTick === 0)
        {
            let projectile = {
                x: enemy.x + (enemy.width / 2 - (projectileWidth / 2)),
                y: enemy.y + enemy.height,
                owner: enemy.birthTick,
                colorR: enemy.projectileColorR,
                colorG: enemy.projectileColorG,
                type: 1,
                direction: "down",
                width:projectileWidth,
                height:projectileHeight,
                lateralMove:0,
                verticalMove:6,
            }
            enemyProjectiles.push(projectile)
        }
        if (enemy.type === 2 && (tick % (enemy.skill.projectileTick*4) === 0 || tick % (enemy.skill.projectileTick*4 + 2) === 0 || tick % (enemy.skill.projectileTick*4 + 4) === 0 || tick % (enemy.skill.projectileTick*4 + 6) === 0 || tick % (enemy.skill.projectileTick*4 + 8) === 0))
        {
            let projectileLeft = {
                x: enemy.x + (enemy.width / 2 - (projectileWidth / 2)) - 4,
                y: enemy.y + enemy.height,
                owner: enemy.birthTick,
                colorR: enemy.projectileColorR,
                colorG: enemy.projectileColorG,
                type: 2,
                direction: "left",
                width:16,
                height:16,
                lateralMove:-4,
                verticalMove:4,
            }
            enemyProjectiles.push(projectileLeft)
            let projectileRight = {
                x: enemy.x + (enemy.width / 2 - (projectileWidth / 2)) + 4,
                y: enemy.y + enemy.height,
                owner: enemy.birthTick,
                colorR: enemy.projectileColorR,
                colorG: enemy.projectileColorG,
                type: 2,
                direction: "right",
                width:16,
                height:16,
                lateralMove:4,
                verticalMove:4,
            }
            enemyProjectiles.push(projectileRight)
        }

        if (enemy.type === "boss" && tick > enemy.birthTick + 100 && tick % 100 <= 30 && !bossUltimate && !bossDeath)
            if (tick % 2 === 0)
            {
                let angle = Math.PI * (Math.abs((tick % 100 - 15)) / 15) + Math.random() / 2
                let speed = 3
                let Xdirection = Math.cos(angle) * speed
                let Ydirection = Math.sin(angle) * speed

                let projectileBoss = {
                    x: enemy.x + (enemy.width / 2 - (projectileWidth / 2)),
                    y: enemy.y + enemy.height - 50,
                    owner: enemy.birthTick,
                    colorR: 216,
                    colorG: 62,
                    type: "boss",
                    direction: angle,
                    width:16,
                    height:16,
                    lateralMove:Xdirection,
                    verticalMove:Ydirection,
                }
                enemyProjectiles.push(projectileBoss)
            }
    })
}

function animatePlayerProjectiles()
{
    let ctx = ctxArr.playerProjectilesCanvas
    let canvas = canvasArr.playerProjectilesCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowColor = "blue"
    ctx.shadowBlur = 5

    playerProjectiles.forEach(projectile =>
    {
        if(projectile.type === "classic")
        {
            projectile.y += projectile.verticalMove

            let lingrad = ctx.createLinearGradient(0, projectile.y, 0, projectile.y + projectileHeight);
            lingrad.addColorStop(0, '#17d0f9');
            lingrad.addColorStop(1, '#dbeff3');
            ctx.fillStyle = lingrad;

            ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height);
        }
        if(projectile.type === "fireball")
        {
            projectile.y += projectile.verticalMove

            let fireballAnimationFrame
            if(tick%20 >= 0)
                fireballAnimationFrame = fireball1
            if(tick%20 >= 5)
                fireballAnimationFrame = fireball2
            if(tick%20 >= 10)
                fireballAnimationFrame = fireball3
            if(tick%20 >= 15)
                fireballAnimationFrame = fireball4
            
            let opacity = .5+(projectile.lifespan/100)*.5

            //ctx.fillStyle = `rgba(105,201,255,${opacity})`;
            //console.log(`(0, ${projectile.y}, 0, ${projectile.y_origin-projectile.y});`, opacity)
            let lingrad = ctx.createLinearGradient(0, projectile.y, 0, projectile.y+(projectile.y_origin-projectile.y));
            lingrad.addColorStop(0, `rgba(105,201,255,${opacity})`);
            lingrad.addColorStop(1, `rgba(105,201,255,0)`);
            ctx.fillStyle = lingrad;

            ctx.fillRect(projectile.x+35, projectile.y+12, 2, projectile.y_origin-projectile.y+38);
            ctx.drawImage(fireballAnimationFrame, projectile.x, projectile.y, projectile.width, projectile.height)
            
            projectile.lifespan--
        }
        

    })

    for (let i = playerProjectiles.length - 1; i >= 0; i--)
        if (playerProjectiles[i].y < 0)
            playerProjectiles.splice(i, 1)
}

function animateEnemiesProjectiles()
{
    let ctx = ctxArr.enemiesProjectilesCanvas
    let canvas = canvasArr.enemiesProjectilesCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0


    enemyProjectiles.forEach(projectile =>
    {
        if (projectile.type === 1)
        {
            ctx.shadowColor = "yellow"
            ctx.shadowBlur = 5
            projectile.y += projectile.verticalMove

            let lingrad = ctx.createLinearGradient(0, projectile.y, 0, projectile.y + projectileHeight);

            lingrad.addColorStop(0, '#ffd800');
            lingrad.addColorStop(1, `rgb(${projectile.colorR},${projectile.colorG},0)`);
            ctx.fillStyle = lingrad;

            ctx.fillRect(projectile.x, projectile.y, projectileWidth, projectileHeight);

            ctx.beginPath()
            ctx.fillStyle = `rgb(${projectile.colorR},${projectile.colorG},0)`
            ctx.arc(projectile.x + projectileWidth / 2, projectile.y + projectileHeight, 4, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
        }
        if (projectile.type === 2)
        {
            ctx.shadowColor = "green"
            ctx.shadowBlur = 15
            projectile.y += projectile.verticalMove
            projectile.x += projectile.lateralMove

            ctx.beginPath()
            if (tick % 6 === 0)
            {
                let newRcolor = projectile.colorR + 64
                if (newRcolor > 255)
                    newRcolor = 255
                let newGcolor = projectile.colorG + 64
                if (newGcolor > 255)
                    newGcolor = 255

                ctx.fillStyle = `rgb(${newRcolor},${newGcolor},0)`
            }
            else
                ctx.fillStyle = `rgb(${projectile.colorR},${projectile.colorG},0)`

            ctx.arc(projectile.x, projectile.y, projectile.width/2, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
        }
        if (projectile.type === "boss")
        {
            ctx.shadowColor = "red"
            ctx.shadowBlur = 15

            projectile.y += projectile.verticalMove
            projectile.x += projectile.lateralMove

            ctx.beginPath()
            if (tick % 6 === 0)
            {
                let newRcolor = projectile.colorR + 64
                if (newRcolor > 255)
                    newRcolor = 255
                let newGcolor = projectile.colorG + 64
                if (newGcolor > 255)
                    newGcolor = 255

                ctx.fillStyle = `rgb(${newRcolor},${newGcolor},0)`
            }
            else
                ctx.fillStyle = `rgb(${projectile.colorR},${projectile.colorG},0)`

            ctx.arc(projectile.x, projectile.y, projectile.width/2, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
        }
    })

    for (let i = enemyProjectiles.length - 1; i >= 0; i--)
        if (enemyProjectiles[i].y > mainHeight)
            enemyProjectiles.splice(i, 1)
}

function animatePlayer()
{
    let ctx = ctxArr.playerCanvas
    let canvas = canvasArr.playerCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowOffsetX = 35
    ctx.shadowOffsetY = 35
    ctx.shadowColor = "rgba(0,0,0,0.4)"
    ctx.shadowBlur = 15

    if (player.hasMovedLeft)
        ctx.drawImage(playerSpriteToLeft, player.x, player.y, playerWidth, playerHeight)
    if (player.hasMovedRight)
        ctx.drawImage(playerSpriteToRight, player.x, player.y, playerWidth, playerHeight)
    if (!player.hasMovedLeft && !player.hasMovedRight)
        ctx.drawImage(playerSprite, player.x, player.y, playerWidth, playerHeight)

    if(shieldMode > 100 || shieldMode%10 > 5) // draw shield
    {
        ctx.beginPath() // bulle
        let gradient = ctx.createRadialGradient(player.x+17, player.y+14,1, player.x+17, player.y+14,40);
        gradient.addColorStop(0, `rgba(255,205,0,0)`);
        gradient.addColorStop(0.9, `rgba(255,205,0,.8)`);
        gradient.addColorStop(1, `rgba(255,205,0,1)`);
        ctx.fillStyle = gradient
        ctx.arc(player.x+17, player.y+14, 40, 0, 2*Math.PI)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath() // reflet de la bulle
        ctx.fillStyle = `rgba(255,255,255,.8)`
        let adj = Math.cos(Math.PI/3)*35
        let opp = -Math.sin(Math.PI/3)*35
        ctx.moveTo(player.x+17+adj, player.y+14+opp)
        ctx.arc(player.x+17, player.y+14, 35, Math.PI*5/3, Math.PI*11/6, false)
        adj = Math.cos(Math.PI/6)*25
        opp = -Math.sin(Math.PI/6)*25
        ctx.lineTo(player.x+17+adj, player.y+14+opp)
        ctx.arc(player.x+17, player.y+14, 25, Math.PI*11/6, Math.PI*5/3, true)
        ctx.fill()
        ctx.closePath()

        let bezierMax = -25
        let bezierMin = 83
        let bezierWidth = 15
        let bezier = bezierMax+((tick*2)%(bezierMin-bezierMax-bezierWidth))
        let bezierBottom = bezier-bezierWidth

        ctx.beginPath() // truc qui bouge sur la bulle
        
        gradient = ctx.createLinearGradient(0, player.y-32, 0, player.y+62);
        gradient.addColorStop(0, `rgba(0,170,255,1)`);
        gradient.addColorStop(0.2, `rgba(0,170,255,.3)`);
        gradient.addColorStop(0.5, `rgba(0,170,255,.1)`);
        gradient.addColorStop(0.8, `rgba(0,170,255,.3)`);
        gradient.addColorStop(1, `rgba(0,170,255,1)`);
        ctx.fillStyle = gradient
        ctx.moveTo(player.x-23, player.y+14)
        ctx.bezierCurveTo(player.x-23, player.y+bezier, player.x+57, player.y+bezier, player.x+57, player.y+14)
        ctx.bezierCurveTo(player.x+57, player.y+bezierBottom, player.x-23, player.y+bezierBottom, player.x-23, player.y+14)
        ctx.fill()
        ctx.closePath()
    }

    player.hasMoved = false;
}

function animateBackground()
{
    let ctx = ctxArr.backgroundCanvas
    let canvas = canvasArr.backgroundCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundImage, 0, backgroundPosition, mainWidth, backgroundImage.height)
    if (backgroundPosition > 0)
        ctx.drawImage(backgroundImage, 0, backgroundPosition - backgroundImage.height, mainWidth, backgroundImage.height)
}

function animateHud(param = "")
{
    let ctx = ctxArr.hudCanvas
    let canvas = canvasArr.hudCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (param != "death")
    {
        ctx.globalAlpha = 1
        ctx.font = "bold 20px Orbitron"
        ctx.fillStyle = "black";
        ctx.fillText(score.toString().padStart(6, '0'), 10, 25)

        for (let i = 0; i < 3; i++)
        {
            if (player.life > i)
                ctx.drawImage(heartSprite, 10 + 25 * i, 30, 22, 22)
            else
                ctx.drawImage(heartEmptySprite, 10 + 25 * i, 30, 22, 22)
        }

        if (renderTime !== "")
        {
            ctx.font = "bold 12px Orbitron"
            ctx.fillText(renderTime, 5, 794)
        }
        if (bossMode)
        {
            let HudBossHealth = bossHealth
            if (HudBossHealth < 0)
                HudBossHealth = 0

            ctx.fillStyle = `rgba(0,0,0,0.5)`
            ctx.fillRect(200, 10, 400, 10) // bossHealth
            ctx.fillStyle = `rgba(255,0,0,0.5)`
            ctx.fillRect(200, 10, 400 * HudBossHealth / 100, 10)
        }
    }
    else
    {
        ctx.globalAlpha = 0.8
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, mainWidth, mainHeight);
        ctx.font = "bold 80px Orbitron"
        ctx.fillStyle = "#DDD";
        let text = "GAME OVER"
        let textWidth = ctx.measureText(text)
        ctx.fillText(text, (mainWidth - textWidth.width) / 2, mainHeight * 0.4)

        // score
        text = score.toString().padStart(6, '0')
        textWidth = ctx.measureText(text)

        ctx.fillText(text, (mainWidth - textWidth.width) / 2, mainHeight * 0.6)

        //ctx.font = "bold 80px 'Share Tech Mono'"
        //ctx.font = "bold 80px 'Consolas'"

        // nickname
        textWidth = ctx.measureText(nickname)
        ctx.fillText(nickname, (mainWidth - textWidth.width) / 2, mainHeight * 0.7)

        let cursorX
        if (!nickname.length)
            cursorX = 395
        else
            cursorX = ((mainWidth - textWidth.width) / 2) + textWidth.width + 5

        if (tick % 50 >= 25)
            ctx.fillRect(cursorX, mainHeight * 0.7 - 67, 5, 80);

        ctx.font = "bold 40px Orbitron"
        ctx.fillText("Enter your name", 215, mainHeight * 0.85)
        ctx.fillText("and press enter to continue...", 95, mainHeight * 0.9)
    }

}

function addTrails()
{
    let trailLeft = {
        x: player.x + 11,
        y: player.y + 34,
        lifespan: 10,
        type: "player"
    }
    trails.push(trailLeft)
    let trailRight = {
        x: player.x + 24,
        y: player.y + 34,
        lifespan: 10,
        type: "player"
    }
    trails.push(trailRight)

    enemies.forEach(enemy =>
    {
        if (enemy.type === 1)
        {
            let trailLeft = {
                x: enemy.x + 4,
                y: enemy.y - 5,
                lifespan: 10,
                type: "enemy"
            }
            trails.push(trailLeft)
            let trailRight = {
                x: enemy.x + 35,
                y: enemy.y - 5,
                lifespan: 10,
                type: "enemy"
            }
            trails.push(trailRight)
        }
        if (enemy.type === 2)
        {
            let trailLeft = {
                x: enemy.x + 5,
                y: enemy.y - 3,
                lifespan: 10,
                type: "enemy"
            }
            trails.push(trailLeft)
            let trailRight = {
                x: enemy.x + 37,
                y: enemy.y - 3,
                lifespan: 10,
                type: "enemy"
            }
            trails.push(trailRight)
        }
    });
}

let oddTrailsColor = [
    "rgba(127,127,127,0.1)",
    "rgba(127,127,127,0.2)",
    "rgba(127,127,127,0.3)",
    "rgba(127,127,127,0.4)",
    "rgba(127,127,127,0.5)",
    "rgba(255,213,51,0.2)",
    "rgba(255,213,51,0.35)",
    "rgba(255,213,51,0.5)",
    "rgba(255,213,51,0.65)",
    "rgba(255,213,51,0.8)",
]
let evenTrailsColor = [
    "rgba(127,127,127,0.1)",
    "rgba(127,127,127,0.2)",
    "rgba(127,127,127,0.3)",
    "rgba(127,127,127,0.4)",
    "rgba(127,127,127,0.5)",
    "rgba(255,150,213,0.2)",
    "rgba(255,150,213,0.35)",
    "rgba(255,150,213,0.5)",
    "rgba(255,150,213,0.65)",
    "rgba(255,150,213,0.8)",
]

function animateTrails()
{
    let ctx = ctxArr.trailsCanvas
    let canvas = canvasArr.trailsCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    trails.forEach(trail =>
    {
        if (trail.lifespan >= 0)
        {
            ctx.beginPath()
            if (tick % 2 === 0)
                ctx.fillStyle = oddTrailsColor[trail.lifespan]
            else
                ctx.fillStyle = evenTrailsColor[trail.lifespan]
            ctx.arc(trail.x, trail.y, 3, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
            if (trail.type === "player")
                trail.y += 2
            else
                trail.y -= 2
            trail.lifespan--
        }
    });

    for (let i = trails.length - 1; i >= 0; i--)
        if (trails[i].lifespan < 0)
            trails.splice(i, 1)

}

function findEnemyPath(enemyIndex)
{
    let currentLateralMove = enemies[enemyIndex].lateralMove
    let currentVerticalMove = enemies[enemyIndex].verticalMove
    let allowRedAlert = enemies[enemyIndex].skill.allowRedAlert
    let redAlertSight = enemies[enemyIndex].skill.redAlertSight
    let speed = enemies[enemyIndex].skill.speed

    let positionX = enemies[enemyIndex].x
    let positionY = enemies[enemyIndex].y

    enemyId = enemies[enemyIndex].birthTick

    enemies[enemyIndex].kamikazeArray.push({
        x: player.x,
        y: player.y,
    })

    if (enemies[enemyIndex].kamikazeArray.length > 100)
        enemies[enemyIndex].kamikazeArray.splice(0, 1)

    if (enemies[enemyIndex].kamikazeArray.length === 100)
    {
        let minX = mainWidth
        let maxX = 0
        let minY = mainHeight
        let maxY = 0

        enemies[enemyIndex].kamikazeArray.forEach(pos =>
        {
            if (pos.x < minX)
                minX = pos.x
            if (pos.x > maxX)
                maxX = pos.x
            if (pos.y < minY)
                minY = pos.y
            if (pos.y > maxY)
                maxY = pos.y
        });

        if (maxX - minX < 300 && maxY - minY < 450)
            enemies[enemyIndex].kamikaze = true;
        else
            enemies[enemyIndex].kamikaze = false;
    }

    let newXdirection = ""
    let newYdirection = ""

    if (!enemies[enemyIndex].kamikaze)
    {
        let enemyX = enemies[enemyIndex].x + enemies[enemyIndex].width / 2
        let enemyY = enemies[enemyIndex].y + enemies[enemyIndex].height / 2
        let enemyYreverse = mainHeight - enemyY

        let yToTop = enemyY
        let yToBottom = mainHeight - enemyY
        let xToLeft = enemyX
        let xToRight = mainWidth - enemyX
        
        let rays = []

        asteroids.forEach(asteroid =>
        {
            rays.push(rayCalc(asteroid, enemyIndex, "asteroid"))
        })

        playerProjectiles.forEach(projectile =>
        {
            rays.push(rayCalc(projectile, enemyIndex, "projectile"))
        })

        enemyProjectiles.forEach(projectile =>
        {
            if (projectile.owner !== enemyId)
                rays.push(rayCalc(projectile, enemyIndex, "projectile"))
        })

        for (let i = 0; i < enemies.length; i++)
        {
            if (i != enemyIndex)
                rays.push(rayCalc(enemies[i], enemyIndex, "enemy"))
        }

        rays.push(rayCalc(player, enemyIndex, "player"))

        let wallArray = []
        wallArray.push({ x: enemyX, y: 0 })
        wallArray.push({ x: enemyX, y: mainHeight })
        wallArray.push({ x: 0, y: enemyY })
        wallArray.push({ x: mainWidth, y: enemyY })

        let wallAngle = Math.PI/4
        
        // possiblePaths[1]
        let hypOpp = yToTop / Math.sin(wallAngle)
        let hypAdj = xToRight / Math.cos(wallAngle)
        if(hypOpp < hypAdj)
            wallArray.push({ x: enemyX + yToTop/Math.tan(wallAngle), y: 0 })
        else
            wallArray.push({ x: mainWidth, y: enemyY - xToRight*Math.tan(wallAngle) })

        // possiblePaths[3]
        hypOpp = yToTop / Math.sin(wallAngle)
        hypAdj = xToLeft / Math.cos(wallAngle)
        if(hypOpp < hypAdj)
            wallArray.push({ x: enemyX - yToTop/Math.tan(wallAngle), y: 0 })
        else
            wallArray.push({ x: 0, y: enemyY - xToLeft*Math.tan(wallAngle) })

        // possiblePaths[5]
        hypOpp = yToBottom / Math.sin(wallAngle)
        hypAdj = xToLeft / Math.cos(wallAngle)
        if(hypOpp < hypAdj)
            wallArray.push({ x: enemyX - yToBottom/Math.tan(wallAngle), y: mainHeight })
        else
            wallArray.push({ x: 0, y: enemyY + xToLeft*Math.tan(wallAngle) })

        // possiblePaths[7]
        hypOpp = yToBottom / Math.sin(wallAngle)
        hypAdj = xToRight / Math.cos(wallAngle)
        if(hypOpp < hypAdj)
            wallArray.push({ x: enemyX + yToBottom/Math.tan(wallAngle), y: mainHeight })
        else
            wallArray.push({ x: mainWidth, y: enemyY + xToRight*Math.tan(wallAngle) })
        
            /*
        for (let i = 0; i <= mainWidth; i += 10)
        {
            wallArray.push({ x: i, y: 0 })
            wallArray.push({ x: i, y: mainHeight })
        }

        for (let j = 0; j <= mainHeight; j += 10)
        {
            wallArray.push({ x: 0, y: j })
            wallArray.push({ x: mainWidth, y: j })
        }
        */

        wallArray.forEach(wall =>
        {
            rays.push(rayCalc(wall, enemyIndex, "wall"))
        });

        let possibleDirections = []
        for (let i = 0; i < 2 * Math.PI; i += (Math.PI / 4))
        {
            let xDirection = Math.cos(i) * speed
            let yDirection = -Math.sin(i) * speed
            possibleDirections.push({
                x:xDirection,
                y:yDirection,
                angle:i,
            })
        }
        
        let immobileEnemy = {
            x:enemies[enemyIndex].x,
            y:enemies[enemyIndex].y,
            width:enemies[enemyIndex].width,
            height:enemies[enemyIndex].height,
        }
        let immobileCollisionRays = []

        rays.forEach(ray =>
            {
                //console.log("ray ", ray.type, ray.x, mainHeight - ray.y, ray.lateralMove, ray.verticalMove)
                if(ray.distance < 800 && ray.type !== "wall")
                    immobileCollisionRays.push(rayCollisionCalc(ray, immobileEnemy, {x:0,y:0,angle:false}))
            })

        let redAlert = false;
        immobileCollisionRays.forEach(ray => {
            if(ray.distance < 0)
                redAlert = true
        })

        let collisionRays = []
        if(redAlert)
        {
            //console.log("--------- RED ALERT ----------", enemyIndex)
            rays.forEach(ray =>
            {
                //console.log("ray ", ray.type, ray.x, mainHeight - ray.y, ray.lateralMove, ray.verticalMove)
                if(ray.distance < redAlertSight && ray.type !== "wall")
                    for (let i = 0; i < possibleDirections.length; i++)
                    {
                        //console.log("possibleDirections[i] ", i, possibleDirections[i])
                        collisionRays.push(rayCollisionCalc(ray, enemies[enemyIndex], possibleDirections[i]))
                        //console.log(collisionRays[collisionRays.length-1])
                    }
                //debugger
            });
        }

        let possiblePaths = []
        let firstLoop = true;

        //for (let i = -Math.PI - (Math.PI / 8); i < Math.PI - (Math.PI / 8); i += (Math.PI / 4))
        for (let i = -(Math.PI / 8); i < 2 * Math.PI - (Math.PI / 8); i += (Math.PI / 4))
        {
            let direction = i + (Math.PI / 8)
            let maxAngle = i + (Math.PI / 4)
            let selectedRays = []
            let selectedCollisionRays = []

            if (firstLoop)
            {
                rays.forEach(ray =>
                {
                    if (ray.angle >= 0 && ray.angle < (Math.PI / 8))
                        selectedRays.push(ray)
                });
                rays.forEach(ray =>
                {
                    if (ray.angle >= 1.75 * Math.PI && ray.angle <= 2 * Math.PI)
                        selectedRays.push(ray)
                });

                collisionRays.forEach(ray =>
                    {
                        if (ray.angle >= 0 && ray.angle < (Math.PI / 8))
                        selectedCollisionRays.push(ray)
                    });
                    collisionRays.forEach(ray =>
                    {
                        if (ray.angle >= 1.75 * Math.PI && ray.angle <= 2 * Math.PI)
                        selectedCollisionRays.push(ray)
                    });

                firstLoop = false;
            }
            else
            {
                rays.forEach(ray =>
                {
                    if (ray.angle >= i && ray.angle < maxAngle)
                        selectedRays.push(ray)
                });

                collisionRays.forEach(ray =>
                    {
                        if (ray.angle >= i && ray.angle < maxAngle)
                        selectedCollisionRays.push(ray)
                    });
            }
            let minDistance = mainWidth
            let minHazard = "none"
            selectedRays.forEach(ray =>
            {
                if (ray.distance < minDistance)
                {
                    minDistance = ray.distance
                    minHazard = ray.type
                }
            });

            possiblePaths.push({
                direction: direction,
                selectedRays: selectedRays,
                collisionRays: selectedCollisionRays,
                minDistance: minDistance,
                minHazard: minHazard,
                ratio: 1
            })
        }
        
        let sumRatio = 0
        let maxDistanceOfAllPaths = 0

        possiblePaths.forEach(path =>
        {
            if (path.minDistance > maxDistanceOfAllPaths)
                maxDistanceOfAllPaths = path.minDistance
        })

        // start debug routine
        let countWall = 0
        possiblePaths.forEach(path =>
            {
                let wallFound = false;
                path.selectedRays.forEach(ray => {
                    if(ray.type === "wall")
                        wallFound = true;
                });
                if(wallFound)
                    countWall++
            })

        if(countWall != 8)
        {
            console.log("missing wall !!!")
            debugger
        }
        // end debug routine

        possiblePaths.forEach((path, index) =>
        {
            if (path.minDistance < 250 && path.minHazard !== "wall")
            {
                path.ratio = 0.001
            }
            else
            {
                path.ratio = (path.minDistance) / mainWidth
                if (path.minDistance == maxDistanceOfAllPaths)
                    path.ratio *= 10
            }

            if (path.minDistance > 200)
                path.ratio *= 10

            if (path.minHazard === "wall" && path.minDistance < 100)
                path.ratio = 0.001

            if(redAlert && allowRedAlert) // RED ALERT MODE
            {
                let ratio = 1000
            
                path.collisionRays.forEach(ray => {
                    if(ray.distance < 0 && ray.frame < 50)
                        ratio /= ((256 - ray.frame))
    
                    if(ray.distance < 0 && ray.frame < 200)
                        ratio /= ((256 - ray.frame) / 2)
                })
    
                if (path.minHazard === "wall" && path.minDistance < 15)
                    ratio = 0.00001

                path.ratio = ratio
            }

            //console.log("path", index, path.ratio)
        })

        //console.log("-------------------")
        
        //debugger

        /*
        let redAlert = []
        possiblePaths.forEach((path, index) =>
        {
            if (path.minDistance < 250 && path.minHazard !== "wall")
            {
                redAlert.push(index)
                path.ratio = 0.001
            }
            else
            {
                path.ratio = (path.minDistance) / mainWidth
                if (path.minDistance == maxDistanceOfAllPaths)
                    path.ratio *= 100
            }

            if (path.minDistance > 400)
                path.ratio *= 10

            if (path.minHazard === "wall" && path.minDistance < 100)
                path.ratio = 0.001
        });

        redAlert.forEach(alert =>
        {
            let bestId = alert + 4
            if (bestId > 7)
                bestId = bestId - 7

            let hazard = possiblePaths[alert].minHazard

            possiblePaths.forEach((path, index) =>
            {
                let ecart
                if (index > bestId)
                    ecart = index - bestId
                else
                    ecart = bestId - index

                if (ecart === 0)
                    (hazard === "projectile") ? path.ratio *= 25 : path.ratio *= 200
                if (ecart === 1)
                    (hazard === "projectile") ? path.ratio *= 100 : path.ratio *= 100
                if (ecart === 2)
                    (hazard === "projectile") ? path.ratio *= 200 : path.ratio *= 25
                if (ecart === 3)
                    (hazard === "projectile") ? path.ratio *= 10 : path.ratio *= 10
            });
        })
        */

        possiblePaths.forEach(path =>
        {
            sumRatio += path.ratio
        })

        let choice = Math.random() * sumRatio
        let accRatio = 0
        let selectedChoice = ""
        let selectedAngle = ""
        for (let i = 0; i < possiblePaths.length + 1; i++)
        {
            if (i < possiblePaths.length)
                accRatio += possiblePaths[i].ratio

            if (accRatio > choice && selectedChoice === "")
            {
                selectedChoice = i
                selectedAngle = possiblePaths[i].direction
            }
        }

        newXdirection = Math.cos(selectedAngle) * speed
        newYdirection = -Math.sin(selectedAngle) * speed


        if (positionX < 50 && newXdirection < 0)
            newXdirection = 3

            
        if(redAlert)
        {
            //console.log("selectedChoice", selectedChoice)
            //debugger
        }
            
        /*
        let redAlertConsole = ""
        redAlert.forEach(alert =>
        { redAlertConsole += possiblePaths[alert].minHazard + " " + Math.round(possiblePaths[alert].minDistance) + " " })
            */
        //console.log("newXdirection", Math.round(newXdirection, 1), "newYdirection", Math.round(newYdirection, 1), "selectedChoice", selectedChoice, "selectedAngle", Math.round(selectedAngle, 2), "redAlert", redAlert.length, redAlertConsole)
    }
    else // mode kamikaze
    {
        let KamikazeRay = rayCalc(player, enemyIndex, "player_kamikaze")
        if (KamikazeRay.distance > 50)
            KamikazeRay = rayCalc({ x: player.x, y: player.y + 20, width: player.width, height: player.height, verticalMove: player.verticalMove, lateralMove: player.lateralMove }, enemyIndex, "player")

        let speed = 3
        newXdirection = Math.cos(KamikazeRay.angle) * speed
        newYdirection = -Math.sin(KamikazeRay.angle) * speed

        //console.log("kamikaze mode","newXdirection", Math.round(newXdirection, 1), "newYdirection", Math.round(newYdirection, 1))
    }
    

    //debugLaunch = true // debug
    return {
        x: newXdirection,
        y: newYdirection
    }
}

function recursiveCollisionCalc(item1, item2, debut, fin, limit, angle, sumRadius)
{
    limit--
    
    let frameDelta = fin.frame - debut.frame
    let frame1 = {
        frame:debut.frame + frameDelta * 1 / 4,
        distance:"",
        angle:angle,
    }
    let frame2 = {
        frame:debut.frame + frameDelta * 2 / 4,
        distance:"",
        angle:angle,
    }
    let frame3 = {
        frame:debut.frame + frameDelta * 3 / 4,
        distance:"",
        angle:angle,
    }
    
    if(limit === 0)
    {
        let xDeltaFrame2 = item2.x+(item2.xMove*frame2.frame)-item1.x+(item1.xMove*frame2.frame)
        let yDeltaFrame2 = item2.y+(item2.yMove*frame2.frame)-item1.y+(item1.yMove*frame2.frame)
        frame2.distance = Math.sqrt(Math.pow(xDeltaFrame2, 2) + Math.pow(yDeltaFrame2, 2)) - sumRadius

        return frame2
    }

    let xDeltaFrame1 = item2.x+(item2.xMove*frame1.frame)-item1.x+(item1.xMove*frame1.frame)
    let yDeltaFrame1 = item2.y+(item2.yMove*frame1.frame)-item1.y+(item1.yMove*frame1.frame)
    frame1.distance = Math.sqrt(Math.pow(xDeltaFrame1, 2) + Math.pow(yDeltaFrame1, 2)) - sumRadius

    let xDeltaFrame3 = item2.x+(item2.xMove*frame3.frame)-item1.x+(item1.xMove*frame3.frame)
    let yDeltaFrame3 = item2.y+(item2.yMove*frame3.frame)-item1.y+(item1.yMove*frame3.frame)
    frame3.distance = Math.sqrt(Math.pow(xDeltaFrame3, 2) + Math.pow(yDeltaFrame3, 2)) - sumRadius
    
    //console.log(limit, debut.frame, fin.frame, frame1.distance, frame3.distance)

    if(frame1.distance < frame3.distance)
        return recursiveCollisionCalc(item1, item2, debut, frame2, limit, angle, sumRadius)
    else
        return recursiveCollisionCalc(item1, item2, frame2, fin, limit, angle, sumRadius)
}

function rayCollisionCalc(ray, enemy, direction)
{
    let frameDebut = 0
    let frameFin = 256
    let limit = 10
    let angle = direction.angle + Math.PI // pas sur que ce soit OK de décaler l'angle de 180°...
    if(angle >= 2*Math.PI)
        angle = angle - 2*Math.PI

    let enemyWidth = enemy.width
    let enemyHeight = enemy.height

    let enemyX = enemy.x + enemyWidth / 2
    let enemyY = enemy.y + enemyHeight / 2
    
    let enemyRadius = (enemyWidth + enemyHeight) / 2
    let rayRadius = ray.radius
    let sumRadius = enemyRadius + rayRadius

    let item1 = {
        x:enemyX,
        y:enemyY,
        xMove:direction.x,
        yMove:direction.y,
    }

    let item2lateralMove = 0
    let item2verticalMove = 0

    if(ray.type !== "wall")
    {
        item2lateralMove = ray.lateralMove
        item2verticalMove = ray.verticalMove
    }

    let item2 = {
        x:ray.x,
        y:mainHeight - ray.y,
        xMove:item2lateralMove,
        yMove:item2verticalMove,
    }
    
    let xDelta = item2.x+(item2.xMove*frameFin)-item1.x+(item1.xMove*frameFin)
    let yDelta = item2.y+(item2.yMove*frameFin)-item1.y+(item1.yMove*frameFin)

    let distanceFin = Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2)) - sumRadius

    let debut = {
        frame:frameDebut,
        distance:ray.distance - sumRadius,
        angle:angle,
    }
    let fin = {
        frame:frameFin,
        distance:distanceFin,
        angle:angle,
    }

    let collision = recursiveCollisionCalc(item1, item2, debut, fin, limit, angle, sumRadius)

    let item1FinalPos = {
        x:item1.x+(item1.xMove*collision.frame),
        y:item1.y+(item1.yMove*collision.frame),
    }
    let item2FinalPos = {
        x:item2.x+(item2.xMove*collision.frame),
        y:item2.y+(item2.yMove*collision.frame),
    }

    let newHyp = Math.sqrt(Math.pow(item2FinalPos.x-item1FinalPos.x, 2) + Math.pow(item2FinalPos.y-item1FinalPos.y, 2))
    let finalAngle = Math.acos((item2FinalPos.x-item1FinalPos.x)/newHyp)
    if(item2FinalPos.y-item1FinalPos.y > 0)
        finalAngle = 2*Math.PI - finalAngle

    collision.angle = finalAngle

    return collision
}

function rayCalc(objet, enemyIndex, type)
{
    let enemyWidth = enemies[enemyIndex].width
    let enemyHeight = enemies[enemyIndex].height

    let enemyX = enemies[enemyIndex].x + enemyWidth / 2
    let enemyY = mainHeight - (enemies[enemyIndex].y + enemyHeight / 2)

    let objetX = objet.x
    let objetY = mainHeight - objet.y
    let objetSize = 0

    if(type !== "wall")
    {
        objetX += objet.width / 2
        objetY -= objet.height / 2
        objetSize = (objet.width + objet.height) / 2
    }
    
    let distanceX = objetX - enemyX
    let distanceY = objetY - enemyY
    let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))
    let angle = Math.acos(distanceX / distance)
    if (distanceY < 0)
        angle = 2 * Math.PI - angle

    let movingAngle
    let movingSpeed
    if(type !== "wall")
    {
        movingSpeed = Math.sqrt(Math.pow(objet.lateralMove, 2) + Math.pow(objet.verticalMove, 2))
        movingAngle = Math.acos(objet.lateralMove / movingSpeed)
        if(objet.verticalMove > 0)
            movingAngle = 2 * Math.PI - movingAngle
    }

    /*
    if(type === "player_kamikaze")
    {
        console.log("inside function rayCalc")
        debugger
    }*/

    return {
        type: type,
        distance: distance,
        angle: angle,
        movingAngle:movingAngle,
        movingSpeed:movingSpeed,
        x:objetX,
        y:objetY,
        lateralMove:objet.lateralMove,
        verticalMove:objet.verticalMove,
        radius:objetSize,
    }
}

function addPowerUp(type, x, y)
{
    let newPowerUp = {
        x: x,
        y: y,
        type: type,
    }

    powerUp.push(newPowerUp)
}

function animatePowerUp()
{
    let ctx = ctxArr.powerUpCanvas
    let canvas = canvasArr.powerUpCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 0.5
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 15

    powerUp.forEach(power =>
    {
        if (power.type === "heart")
        {
            ctx.shadowColor = "rgba(255,0,0,1)"
            ctx.drawImage(heartSprite, power.x, power.y, 22, 22)
        }
        if (power.type === "fireball")
        {
            ctx.shadowColor = "rgba(0,0,255,1)"
            ctx.drawImage(fireball_powerup, power.x, power.y, 22, 22)
        }
        if (power.type === "shield")
        {
            ctx.shadowColor = "rgba(255,255,0,1)"
            ctx.drawImage(shield_powerup, power.x, power.y, 22, 22)
        }

        power.y += 2
    });

    for (let i = powerUp.length - 1; i >= 0; i--)
        if (powerUp[i].y > mainHeight)
            powerUp.splice(i, 1)
}

// ANIMATION DES ONGLETS DEBUT

let hash = window.location.hash;

let tabs = document.querySelectorAll(".menu a")
let contenus = document.querySelectorAll(".contenu div")
let a = document.querySelector('a[href="' + hash + '"')

// ajout des EventListener sur les onglets
for (let i = 0; i < tabs.length; i++) 
{
    tabs[i].addEventListener("click", function () // lorsque on clique sur un onglet
    {
        changeOnglet(this);
    });
}

const fade = function (currentContenusActif, currentContenusNewActif) // attendre fin animation
{
    currentContenusActif.classList.remove("fade");
    currentContenusNewActif.classList.add("fade");
    currentContenusNewActif.offsetWidth; // attendre
    currentContenusNewActif.classList.add("in");
}

const changeOnglet = function (tabClicked, animation)
{
    if (animation === undefined)
        animation = true;

    let selection = tabClicked.hash;
    //let mainDiv = tabClicked.parentNode.parentNode.parentNode.parentNode;
    let currentTabs = document.querySelectorAll(".tabs li");
    let currentContenus = document.querySelectorAll(".contenu");
    let currentContenusActif = document.querySelector(".contenu.active");
    let currentContenusNewActif = document.querySelector(selection);

    if (!Array.from(currentContenusNewActif.classList).includes("active"))
    {
        // retirer class active de tous les onglets
        for (let j = 0; j < tabs.length; j++)
            tabs[j].classList.remove("active");

        // ajout class active sur onglet cliqué
        tabClicked.classList.add("active");

        // retirer class active du contenu actif
        currentContenusActif.classList.remove("active");

        // animation
        if (animation)
        {
            currentContenusActif.classList.add("fade");
            currentContenusActif.classList.remove("in");
            currentContenusActif.addEventListener("transitionend", fade(currentContenusActif, currentContenusNewActif));
            currentContenusActif.removeEventListener("transitionend", fade(currentContenusActif, currentContenusNewActif));

        }
        // ajout class active au nouveau contenu
        currentContenusNewActif.classList.add("active");

        if (Array.from(currentContenusNewActif.classList).includes("scores"))
        {
            selectRequest()
        }

        // nettoyage des classes buggées fade in sauf currentContenusActif
        for (let i = 0; i < currentContenus.length; i++)
            if (currentContenus[i].id != currentContenusNewActif.id)
            {
                currentContenus[i].classList.remove("fade");
                currentContenus[i].classList.remove("in");
            }
    }


}

// vérification du hash de l'url (chargement initial)
if (a != null && !a.classList.contains("active")) 
{
    changeOnglet(a, false)
}

// detection d'un hash change (bouton précedent / suivant)
window.addEventListener('hashchange', function ()
{
    changeOnglet(document.querySelector('a[href="' + window.location.hash + '"'), false);
}, false)

// ANIMATION DES ONGLETS FIN