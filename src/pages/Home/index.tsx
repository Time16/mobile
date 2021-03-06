import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import api from "../../services/api";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  async function HandleLogin() {
    // const response = await api.post("users/login", {
    //   email,
    //   password,
    // });

    // await AsyncStorage.setItem("token", response.headers["set-cookie"][0]);

    navigation.navigate("Deliveries");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/home/logo.png")} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Faça seu login</Text>

        <Text style={styles.emailLabel}>E-mail</Text>
        <TextInput
          style={styles.email}
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          autoCorrect={false}
        />
        <Text style={styles.passwordLabel}>Senha</Text>
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.password}
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCorrect={false}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={styles.hide}>
            {hidePassword ? (
              <Image source={require(`../../assets/home/eye.png`)} />
            ) : (
              <Image source={require(`../../assets/home/eye-open.png`)} />
            )}
          </TouchableOpacity>
        </View>
        <RectButton style={styles.button} onPress={HandleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </RectButton>
        <Image source={require("../../assets/home/image-login.png")} />

        <Text style={styles.signUp}>Quero ser um agente do Mercado Aqui</Text>
      </View>
    </View>
  );
}
