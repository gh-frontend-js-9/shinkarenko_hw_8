//I had same problems with classes, so that I didn't do my homework completely, I'll do it for the next time.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//stopwatch
window.onload = function () {
    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    Interval = setInterval(startTimer, 10);
    window.onload = Interval
    function startTimer() {
        tens++;
        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}

class Tamagotchi {
    constructor(name, happiness, fullness, cleanness) {
        this.name = name
        this.happiness = happiness;
        this.fullness = fullness;
        this.cleanness = cleanness;
    }
    eat() {
        if (this.fullness >= 100) {
            this.fullness = 100
            this.cleanness -= 20
        } else {
            this.fullness += 30
            this.cleanness -= 20
        }
    }

    play() {
        if (this.happiness >= 100) {
            this.happiness = 100
            this.cleanness -= 20
        } else {
            this.happiness += 15
            this.fullness -= 10
        }
    }

    clean() {
        if (this.cleanness >= 100) {
            this.cleanness = 100
            this.happiness  -= 20
        } else {
            this.cleanness += 40
            this.happiness -= 20
        }

    }
    tick() {
        this.happiness -= 5;
        this.fullness -= 5;
        this.cleanness -= 5;
    }
}

let nameTamagochi = document.getElementById("name");
let img = document.getElementById("img");
let text = document.getElementById("text")
let happiness = document.getElementById("happiness");
let fullness = document.getElementById("fullness");
let cleanness = document.getElementById("cleanness")

//create Fluffy kitty
let fluffyKitty = new Tamagotchi(
    "Fluffy kitty",
    getRandomInt(50, 101),
    getRandomInt(50, 101),
    getRandomInt(50, 101)
);
fluffyKitty.tick = function () {
    fluffyKitty.happiness -= 3
    fluffyKitty.fullness -= 3
    fluffyKitty.cleanness -= 3
}

// create Lazy pug
let lazyPug = new Tamagotchi(
    "Lazy pug",
    getRandomInt(50, 71),
    getRandomInt(50, 71),
    getRandomInt(50, 71)
);
lazyPug.tick = function () {
    lazyPug.happiness -= 5
    lazyPug.fullness -= 5
    lazyPug.cleanness -= 5
}

nameTamagochi.innerHTML = fluffyKitty.name;


setInterval(updateStatFluffy, 500);
function updateStatFluffy() {
    text.innerHTML = "You can play with your pet"

    happiness.style.width = fluffyKitty.happiness + 'px';
    happiness.innerHTML = fluffyKitty.happiness + "%";

    fullness.style.width = fluffyKitty.fullness + 'px';
    fullness.innerHTML = fluffyKitty.fullness + "%";

    cleanness.style.width = fluffyKitty.cleanness + 'px';
    cleanness.innerHTML = fluffyKitty.cleanness + "%";

    if (fluffyKitty.happiness < 0 || fluffyKitty.fullness < 0 || fluffyKitty.cleanness < 0) {
        img.src = "img/fluffy_kitty-2.jpg"
        text.innerHTML = "You lost (сlick on restart to start the game again)"
        happiness.innerHTML = 0 + "%";
        fullness.innerHTML = 0 + "%";
        cleanness.innerHTML = 0 + "%";
        happiness.style.width = 20 + 'px'
        fullness.style.width = 20 + 'px'
        cleanness.style.width = 20 + 'px'
        document.getElementById("btnRestart").style.display = "block";
        clearInterval(Interval);
    }
}

setInterval(updateTickFluffy, 5000);
function updateTickFluffy() {
    fluffyKitty.tick();
}

document.getElementById("btnPet").addEventListener("click", function () {
    fluffyKitty.play();
});

document.getElementById("btnFeed").addEventListener("click", function () {
    fluffyKitty.eat();
});
document.getElementById("btnClean").addEventListener("click", function () {
    fluffyKitty.clean();
});
document.getElementById("btnRestart").addEventListener("click", function () {
    location.reload();
});
