import { PLAYERS } from "../utils/const";
import { setStyle } from "../utils/setStyle";

function Bunch() {
    const playersList = PLAYERS;
    console.log(playersList);
    var section = document.getElementById('memory_game');

    for (let i = 0; i < playersList.length; i++) {
        const mwtCard = document.createElement('div');
        setStyle(mwtCard, styles.MWT_CARD);
        mwtCard.setAttribute('class', "mwt-card");
        mwtCard.setAttribute('id', i);
        mwtCard.setAttribute("data-framework", playersList[i].name);

        const frontCard = document.createElement('img');
        setStyle(frontCard, styles.FRONTE_CARTA);
        frontCard.setAttribute("class", "fronte-carta");
        frontCard.setAttribute("src", playersList[i].img);
        frontCard.setAttribute("alt", playersList[i].name);
        mwtCard.appendChild(frontCard);


        const backCard = document.createElement('img');
        setStyle(backCard, styles.RETRO_CARTA);
        backCard.setAttribute("class", "retro-carta");
        backCard.setAttribute("src", './src/assets/mwt.png');
        backCard.setAttribute("alt", 'MWT Logo');
        mwtCard.appendChild(backCard);
        section.appendChild(mwtCard);


    }

    function discover(div) {
        setStyle(div, {
            transform: 'rotateY(180deg)',
        })
    }

    function cover(div) {
        setStyle(div, {
            transform: 'rotateY(0)',
        })
    }

    this.discover = discover;
    this.cover = cover;


}


export default Bunch;



const styles = {
    MWT_CARD: {
        width: 'calc(25% - 10px)',
        height: 'calc(33.333% - 10px)',
        margin: '5px',
        position: 'relative',
        transform: 'scale(1)',
        transformStyle: 'preserve-3d',
        transition: 'transform .5s',
        boxShadow: '1px 1px 1px rgba(0,0,0,.3)',
        padding: '0',
        boxSizing: 'border-box',
    },
    FRONTE_CARTA: {
        width: '100%',
        height: '100%',
        padding: '20px',
        position: 'absolute',
        borderRadius: '5px',
        background: '#1C7CCC',
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        margin: '0',
        boxSizing: 'border-box',
    },
    RETRO_CARTA: {
        width: '100%',
        height: '100%',
        padding: '20px',
        position: 'absolute',
        borderRadius: '5px',
        background: '#000000',
        backfaceVisibility: 'hidden',
        margin: '0',
        boxSizing: 'border-box',
    }
};