import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "./helpers/colors";
import { API_URL } from "@env";
import RootApp from "./navigation/RootApp";

export default function App() {
  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView style={styles.container}>
          <RootApp />
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
