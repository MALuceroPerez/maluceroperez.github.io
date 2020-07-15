class Mole {

    isHungry = true;
    isFed = false;
    isSad = false;
    isLeaving = false;
    hasLeft = false;
    isGone = false;
    isRoyal = false;
    

    royalMolePointValue = 2;
    regularMolePointValue = 1;
    

    pointsToIssue = 1;
    chanceOfRoyalMole = .1;
    animationInterval = 1000;
    hungryInterval = 2000;
    fedInterval = 1000;
    sadInterval = 1000;
    leavingInterval = 800;

    hungryMoleImage;
    fedMoleImage;
    sadMoleImage;
    leavingMoleImage;
 

    constructor(imgElement) {
        this.image = imgElement;
    }

    hungry () {
        this.image.src = this.hungryMoleImage;
        this.image.classList.add('hungry');
        this.image.classList.remove('gone');
        this.animationInterval = this.hungryInterval;
    }

    fed () {
        this.image.src = this.fedMoleImage;
        this.image.classList.remove('hungry');
        this.animationInterval = this.fedInterval;
    }

    sad () {
        this.image.src = this.sadMoleImage;
        this.image.classList.remove('hungry');
        this.animationInterval = this.sadInterval;
    }

    leaving () {
        this.image.src = this.leavingMoleImage;
        this.animationInterval = this.leavingInterval;
    }

    left() {
        this.image.classList.add('gone')
        this.animationInterval = this.isGoneInterval();
        
        this.isRoyal = this.willBeRoyal();

        if(this.isRoyal){
            this.setRoyalMole();
            console.log("my King!");
        }
        else {
            this.setMole();
        }
    }

    isGoneInterval() {
        return Math.floor(Math.random() * 18000) + 2000
    }

    willBeRoyal() {
        let randomChance = Math.random();

        if( randomChance < this.chanceOfRoyalMole) {
            return true;
        }

        return false;
    }

    setRoyalMole(){
        this.hungryMoleImage = 'mole-game/king-mole-hungry.png';
        this.fedMoleImage = 'mole-game/king-mole-fed.png';
        this.sadMoleImage = 'mole-game/king-mole-sad.png';
        this.leavingMoleImage = 'mole-game/king-mole-leaving.png';
        this.pointsToIssue = this.royalMolePointValue;
        this.image.classList.add("royal");
    }

    setMole(){
        this.hungryMoleImage = 'mole-game/mole-hungry.png';
        this.fedMoleImage = 'mole-game/mole-fed.png';
        this.sadMoleImage = 'mole-game/mole-sad.png';
        this.leavingMoleImage = 'mole-game/mole-leaving.png';
        this.pointsToIssue = this.regularMolePointValue;
        this.image.classList.remove("royal");
    }
}


class GameInterface {


    constructor(molesArray){
        this.moles = molesArray;
    }

    animateAllMoles(){
        this.moles.forEach(mole => this.animateMole(mole))
    }

    animateMole(mole) {

        let runTime = Date.now();

        function moleAnimation() {
            if(Date.now() > runTime){

                if(mole.isHungry){
                    mole.hungry();
                    mole.isHungry = false;
                    mole.isSad = true;
                } 
                
                else if(mole.isSad) {
                    mole.sad();
                    mole.isSad = false;
                    mole.isLeaving = true;
                } 

                else if(mole.isFed){
                    mole.isFed = false;
                    mole.isLeaving = true;
                }

                else if (mole.isLeaving){
                    mole.leaving();
                    mole.isLeaving = false;
                    mole.hasleft = true;
                } 
                
                else {
                    mole.left()
                    mole.isHungry = true;
                }

                runTime = Date.now() + mole.animationInterval;
            }
                requestAnimationFrame(moleAnimation);
        }
        requestAnimationFrame(moleAnimation);
    }
}

function init() {
    let score = 0;
    const moleNodeList = document.querySelectorAll('.mole');
    const moleHoles = document.querySelector('.mole-holes');
    const wormContainer = document.querySelector('.worm-container');
    const win = document.querySelector('.win');
    const bg = document.querySelector('#bg');
    let moleArray = [];

    moleNodeList.forEach( (moleNode) => {
        let mole = new Mole(moleNode);
        mole.setMole();
        moleArray.push(mole);
    })

    moleHoles.addEventListener('click', event => {
        if(event.target.classList.contains('hungry')){

            const moleClicked = Number(event.target.getAttribute("data-mole"));
            const clickedMole = gi.moles[moleClicked]

            clickedMole.fed();
            clickedMole.isFed = true;
            clickedMole.isSad = false;
            score += clickedMole.pointsToIssue;
            wormContainer.style.width = `${(score/10)*100}%`
            if(score >= 10){
                wormContainer.style.display = 'none';
                moleHoles.style.display = 'none';
                win.style.display = 'block';
                bg.style.background = 'rgb(61, 30, 9)';
            
            }

        }
    })

    const gi = new GameInterface(moleArray);
    gi.animateAllMoles();
        
}

init();