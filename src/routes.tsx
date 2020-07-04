import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Deliveries from "./pages/Deliveries";
import Home from './pages/Home';
import OrderList from './pages/OrderList';
import OrderDetail from './pages/OrderDetail';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Deliveries" component={Deliveries} />
        <AppStack.Screen name="OrderList" component={OrderList} />
        <AppStack.Screen name="OrderDetail" component={OrderDetail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

// const options = {
//   title: 'Suas entregas',
//   headerStyle: {
//     backgroundColor: '#431E93',
//     height: 150
//   },
//   headerTintColor: '#fff',
// };

export default Routes;
