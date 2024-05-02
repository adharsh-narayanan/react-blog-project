import { configureStore } from "@reduxjs/toolkit";
import editslice from "../slices/editslice";

const store = configureStore({
    reducer:{
        editreducer:editslice

    }
})

export default store