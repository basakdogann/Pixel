import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { login } from "../util/auth"; // Assuming you have an auth.js file where you defined the functions
import { AuthContext } from "../store/auth-context";

export default function GirisEkrani({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to handle error messages
  const authCtx = useContext(AuthContext);
  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      authCtx.authenticate(token);
      console.log("Giriş başarılı");
      // Store token in AsyncStorage or a state management library for later use
      navigation.navigate("baslangic");
    } catch (error) {
      console.log("Kullanıcı adı veya şifre yanlış");
      setError("Kullanıcı adı veya şifre yanlış"); // Set error message
    }
  };

  const handleRegister = () => {
    navigation.navigate("register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>

      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Parola"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>
          Hesabınız Yok mu? Hemen Kayıt Olun
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    width: "80%",
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    width: "80%",
    paddingVertical: 14,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 20,
  },
});
