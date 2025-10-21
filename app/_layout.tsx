import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { FavoritesProvider } from "@/context/FavoritesContext";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <StatusBar hidden = {true} />
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="(tabs) " />
        <Stack.Screen name="movie" />
      </Stack>
    </FavoritesProvider>
  );
}
