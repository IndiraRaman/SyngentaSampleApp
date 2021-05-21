import * as React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import Welcome from "./containers/welcome/Welcome"
import DetailsScreen from "./containers/screen/DetailsScreen";
import FeedScreen from "./containers/screen/FeedScreen";

const App = ()=>{
    const LoginStack = createStackNavigator();
    return(

        
        <LoginStack.Navigator>
            <>
            <LoginStack.Screen 
            name="Welcome"
            component={Welcome}
            options={{
                headerShown: false,
              
           }}
            />
               <LoginStack.Screen 
            name="FeedScreen"
            component={FeedScreen}
            options={{
                headerTitleAlign:"center",
                headerShown: true,
                headerStyle:{
                    backgroundColor:"#EFEFEF00"
                },
                headerTintColor:"#231F20"

           }}
            />
               <LoginStack.Screen 
            name="DetailsScreen"
            component={DetailsScreen}
            options={{
                headerShown: false
           }}
            />
            </>
        </LoginStack.Navigator>
    )
}

export default App;