import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../helpers/colors";

const CardMission = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textMissionName}>{item.mission_name}</Text>
    </View>
  );
};

export default CardMission;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BrownLight,
    borderRadius: 14,
    marginVertical: 10,
    marginHorizontal: 65,
    paddingVertical: 25,
    paddingHorizontal: 61,
  },
  textMissionName: {
    color: Colors.GrayLight,
    fontSize: 15,
    alignSelf: "center",
  },
});
