import { StyleSheet, Text, View } from "react-native";
import HeaderScreen from "../component/Header";
import { Colors } from "../helpers/colors";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderScreen />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background,
  },
});
