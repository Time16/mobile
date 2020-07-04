import React from "react";
// import { AppLoading } from "expo";
import { StatusBar } from "react-native";
// import {
//   SourceSansPro_400Regular,
//   SourceSansPro_600SemiBold,
//   SourceSansPro_700Bold,
//   useFonts,
// } from "@expo-google-fonts/source-sans-pro";

import Routes from "./src/routes";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   SourceSansPro_400Regular,
  //   SourceSansPro_600SemiBold,
  //   SourceSansPro_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
