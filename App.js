import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "./helpers/colors";
import MainScreen from "./screens/MainScreen";

export default function App() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <MainScreen />
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BlueDark,
  },
});
