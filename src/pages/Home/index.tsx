import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Home() {
  const [hidePassword, setHidePassword] = useState<Boolean>(true);
  const navigation = useNavigation();

  function HandleNavigateToDeliveries() {
    navigation.navigate("Deliveries");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/home/logo.png")} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Faça seu login</Text>
        <Image source={require("../../assets/home/image-login.png")} />

        <Text style={styles.emailLabel}>E-mail</Text>
        <TextInput style={styles.email} autoCapitalize="characters" autoCorrect={false} />
        <Text style={styles.passwordLabel}>Senha</Text>
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.password}
            autoCapitalize="characters"
            autoCorrect={false}
            secureTextEntry={Boolean(hidePassword)}
          />

          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={styles.hide}>
            {hidePassword ? (
              <Image source={require(`../../assets/home/eye.png`)} />
            ) : (
              <Image source={require(`../../assets/home/eye-open.png`)} />
            )}
          </TouchableOpacity>
        </View>
        <RectButton style={styles.button} onPress={HandleNavigateToDeliveries}>
          <Text style={styles.buttonText}>Login</Text>
        </RectButton>

        <Text style={styles.signUp}>Quero ser um agente do Mercado Aqui</Text>
      </View>
    </View>
  );
}
