import {createSelectorHook} from "react-redux";
import {RootActions} from "../actions/actionTypes";
import {RootState} from "../store";


const useSelector = createSelectorHook<RootState, RootActions>()
export default useSelector;