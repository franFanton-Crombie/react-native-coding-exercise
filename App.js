import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "./helpers/colors";
import MainScreen from "./screens/MainScreen";
import { API_URL } from "@env";

export default function App() {
  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView style={styles.container}>
          <MainScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BlueDark,
  },
});
