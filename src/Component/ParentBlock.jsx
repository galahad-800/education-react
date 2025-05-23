import {Small} from "./Small";
import {Large} from "./Large";

export const ParentBlock = () =>{
const item = 60
    return(
        <div>
            {
                item < 50? <Small/> : <Large/>
            }

        </div>

    );
}
