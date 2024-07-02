import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import Register from "./screens/RegisterScreen";
import Anasayfa from "./screens/Anasayfa";
import GirisEkrani from "./screens/GirisEkrani";
import BaslangicScreen from "./screens/BaslangicScreen";
import Ayarlar from "./screens/Ayarlar";
import SifreDegistir from "./screens/SifreDegistir";
import KullaniciAdiDegistir from "./screens/KullaniciAdiDegis";
import ProfilFotoDegis from "./screens/ProfilFotoDegis";
import Hakkinda from "./screens/Hakkinda";

import AuthContextProvider from "./store/auth-context";
import { AuthContext } from "./store/auth-context";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="girisEkrani" component={GirisEkrani} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="baslangic" component={BaslangicScreen} />
      <Stack.Screen name="anasayfa" component={Anasayfa} />
      <Stack.Screen name="ayarlar" component={Ayarlar} />
      <Stack.Screen name="profilfotodegis" component={ProfilFotoDegis} />
      <Stack.Screen name="sifredegistir" component={SifreDegistir} />
      <Stack.Screen name="kullaniciadidegistir" component={KullaniciAdiDegistir} />
      <Stack.Screen name="hakkinda" component={Hakkinda} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
