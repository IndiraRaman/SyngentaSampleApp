import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from "./store"


export default function Root() {
    return (
        /*  Wrapping our App with provider and passing store 
    so that what ever change occur our store gets called */

        <Provider store={store}>
            {/* Wrapping it with navigationContainer and PersistGate */}
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>

                    <App />

                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}