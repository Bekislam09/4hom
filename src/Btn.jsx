import { incrementNum, decrementNum, reset } from "./redux/reducer";
import { useDispatch } from "react-redux";

const Btn = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() =>{
                dispatch(incrementNum())
            }} >+5</button>
            <button onClick={()=>{
                dispatch(decrementNum())
            }} >-5</button>
            <button onClick={() =>{
                dispatch(reset())
            }} >reset</button>
        </div>
    );
}

export default Btn;
