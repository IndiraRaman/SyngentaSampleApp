import {NavigationContainer} from "@react-navigation/native";
import React from 'react';
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";

export default function Root(){
    return(
        /*  Wrapping our App with provider and passing store 
    so that what ever change occur our store gets called */
    
        <Provider store={store}>

            {/* Wrapping it with navigationContainer */}
        <NavigationContainer>
            <App />
        </NavigationContainer>
        </Provider>
    )
}