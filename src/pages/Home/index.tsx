import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
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
    // const response = await api.post("", {
    //   email,
    //   password,
    // });

    await AsyncStorage.setItem("user", email);

    navigation.navigate("Deliveries");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../../assets/home/logo.png")} />
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Faça seu login</Text>
          <Image source={require("../../assets/home/image-login.png")} />

          <Text style={styles.emailLabel}>E-mail</Text>
          <TextInput
            style={styles.email}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="characters"
            autoCorrect={false}
          />
          <Text style={styles.passwordLabel}>Senha</Text>
          <View style={styles.passwordBox}>
            <TextInput
              style={styles.password}
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="characters"
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

          <Text style={styles.signUp}>Quero ser um agente do Mercado Aqui</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
