import {configureStore} from "@reduxjs/toolkit";
import store from './modal';


const Store = configureStore({
    reducer: {modal : store}
})

export default Store