import { StyleSheet, Text, View } from "react-native";
import { Logo, Planent, Rocket } from "../assets/Icons";
import { Colors } from "../helpers/colors";
import { WIDTH_SCREEN } from "../helpers/constants";

const HeaderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewPlanet}>
        <Planent />
      </View>
      <View style={styles.viewLogo}>
        <Logo />
      </View>
      <View style={styles.viewRocket}>
        <Rocket />
      </View>
    </View>
  );
};

export default HeaderScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BackgroundHeader,
    flexDirection: "row",
    paddingLeft: 29,
    width: WIDTH_SCREEN,
    height: 141,
  },
  viewPlanet: {
    paddingTop: 9.2,
  },
  viewLogo: {
    marginLeft: 31.1,
    paddingTop: 23.5,
  },
  viewRocket: {
    paddingTop: 9.2,
    alignItems: "flex-end",
    flex: 1,
  },
});
