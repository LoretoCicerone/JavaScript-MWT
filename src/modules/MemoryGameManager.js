import { setStyle } from "../utils/setStyle";
import {MemoryRules} from "./MemoryRules";

function MemoryGameManager(){
  
    setStyle(document.body, {
        height: '100vh',
        display: 'flex',
        background: '#060AB2',
    });

    const game = new MemoryRules();
}


export default MemoryGameManager