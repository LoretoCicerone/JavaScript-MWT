import { setStyle } from "../utils/setStyle";
import CreateButton from "./ButtonsManager";

export function MemoryRules(){
    const memory_game = document.createElement('section');
    setStyle(memory_game, styles.MWT_SECTION_GAME);
    memory_game.setAttribute('id', memory_game);
    document.body.appendChild(memory_game);

    const refresh = new CreateButton();
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