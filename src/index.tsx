import {NavigationContainer} from "@react-navigation/native";
import React from 'react';
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";

export default function Root(){
    return(
        <Provider store={store}>
        <NavigationContainer>
            <App />
        </NavigationContainer>
        </Provider>
    )
}