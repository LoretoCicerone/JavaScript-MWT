import { setStyle } from "../utils/setStyle";

function CreateButton(){


    const newButton = document.createElement('div');
    setStyle(newButton, styles.POSIZIONE_BOTTONE);
    document.body.appendChild(newButton);


    const reload = document.createElement('button');
    setStyle(reload, styles.RICARICA);
    posizione_bottone.appendChild(reload);

    reload.addEventListener('click', ricaricaPagina)
    reload.addEventListener('mouseover', mouseOver);
    reload.addEventListener('mouseout', mouseOut);
    reload.innerHTML = 'Ricomincia';

    function mouseOver(){
        setStyle(reload, {
            backgroundColor: '#2c6b2e'
        })
    }

    function mouseOut(){
        setStyle(reload,{
            backgroundColor: '#4CAF50'
        })
    }

    function ricaricaPagina(){
        window.location.reload();
    }

    this.posizione_bottone = posizione_bottone;
    this.reload = reload;
}

export default CreateButton;

const styles = {
    RICARICA: {
        backgroundColor: '#4CAF50',
        borderRadius: '30px',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        fontSize: '16px',
        position: 'relative',
    },
    POSIZIONE_BOTTONE: {
        width: '100%',
        position: 'absolute',
        bottom: '3%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};
