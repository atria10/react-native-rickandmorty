import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { store } from "./redux/slices/store";
import CharacterScreen from "./screens/CharacterScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { primaryColor } from "./costants";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Navbar />
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: primaryColor },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen name="Characters" component={HomeScreen} />
          <Stack.Screen
            options={({ route }) => ({ title: (route?.params as any).name })}
            name="Character"
            component={CharacterScreen}
          />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </Provider>
  );
}
