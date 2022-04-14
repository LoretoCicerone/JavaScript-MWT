import { setStyle } from "../utils/setStyle";
function MemoryGameManager(){

    setStyle(document.body, {
        height: '100vh',
        display: 'flex',
        background: '#060AB2',
    });

    const game = new Memory();
}


export default MemoryGameManager;