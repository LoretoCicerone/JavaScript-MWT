import { setStyle } from "../utils/setStyle";
import Bunch from "./Bunch";
import ErrorsCounter from "./ErrorsCounter";
import MemoryGameManager from "./MemoryGameManager";

export function MemoryRules(){
    const memory_game = document.createElement('section');
    setStyle(memory_game, styles.MWT_SECTION_GAME);
    memory_game.setAttribute('id', "memory_game");
    document.body.appendChild(memory_game);

    const errors = new ErrorsCounter();


    let isCardDiscover = false;
    let isCardBlocked = false;
    let firstCard, secondCard;
    let error = 0;

    const bunch = new Bunch();
    const getAllCards = document.getElementsByClassName('mwt-card');
    Object.entries(getAllCards).map((singleCard)=>{
        singleCard[1].addEventListener('click', turnCard, false);
        singleCard[1].myParam = singleCard[1].id;
    })

    function turnCard(id){
        if(isCardBlocked) return;
        if(this === firstCard) return;

        var div = document.getElementById(id.currentTarget.myParam);
        bunch.discover(div);

        if(!isCardDiscover){

            isCardDiscover = true;
            firstCard = this;
            return;
        }

        //flip second card
        secondCard = this;

        areCardsEqual();
    }

    function areCardsEqual(){
        firstCard.dataset.framework === secondCard.dataset.framework ? rightCards(): wrongCards()&updateErrors();
    }

    function rightCards(){
        firstCard.removeEventListener('click', turnCard);
        secondCard.removeEventListener('click', turnCard);

        resetCards();
    }

    function resetCards(){
        [isCardDiscover, isCardBlocked] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function  wrongCards(){
        isCardBlocked = true;

        setTimeout(()=>{

            bunch.cover(firstCard);
            bunch.cover(secondCard);

            resetCards();
        }, 800);
    }

    (function mischia() {
        Object.entries(getAllCards).map((object) => {
            let randomPos = Math.floor(Math.random() * 12);
            object[1].style.order = randomPos;
        });
    })();

    function gameOver(){
        Object.entries(getAllCards).map((object)=> {
            let randomPos = Math.floor(Math.random()*12);
            object[1].style.order = randomPos;
           
        });
    }

    let errorsCounter = errors.posizione_errore.querySelector('.counter_errori');
    function updateErrors() {
        error++;
        if(error == 0){
            errors.posizione_errore.setAttribute("hidden", true);
        } else{
            errorsCounter.textContent = "Errori: " + error;
        }
        if(error == 5){
            errorsCounter.textContent = "Game Over!";
          //  gameOver(); //???
            error = 0;
            return;
            
            
        }
    };  

    this.memory_game = memory_game;
}

const styles = {
    MWT_SECTION_GAME: {
        width: '640px',
        height: '640px',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        perspective: '1000px',
    }
};