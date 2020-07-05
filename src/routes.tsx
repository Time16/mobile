import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import History from "./pages/History";
import Deliveries from "./pages/Deliveries";
import Search from "./pages/Search";
import DeliveryFlow from "./pages/DeliveryFlow";
import PickupConfirmation from "./pages/PickupConfirmation";
import DeliveryConfirmation from "./pages/DeliveryConfirmation";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="History" component={History} />
        <AppStack.Screen name="Deliveries" component={Deliveries} />
        <AppStack.Screen name="Search" component={Search} />
        <AppStack.Screen name="DeliveryFlow" component={DeliveryFlow} />
        <AppStack.Screen name="PickupConfirmation" component={PickupConfirmation} />
        <AppStack.Screen name="DeliveryConfirmation" component={DeliveryConfirmation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
