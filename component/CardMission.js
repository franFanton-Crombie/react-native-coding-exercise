import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ArrowRightCircle } from "../assets/Icons";
import { Colors } from "../helpers/colors";
import { WIDTH_SCREEN } from "../helpers/constants";

const CardMission = ({ item, functionSelect, idSelected }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          item.id === idSelected
            ? {
                backgroundColor: Colors.RedLight,
              }
            : { backgroundColor: Colors.BrownLight },
        ]}
        onPress={() => functionSelect(item.id)}
      >
        <Text
          style={[
            styles.textMissionName,
            item.id === idSelected
              ? {
                  color: Colors.White,
                }
              : { color: Colors.GrayLight },
          ]}
        >
          {item.mission_name}
        </Text>
      </TouchableOpacity>
      {item.id === idSelected && (
        <View style={styles.viewArrow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TicketScreen", { data: item });
            }}
          >
            <ArrowRightCircle />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardMission;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginLeft: 65,
    marginRight: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 14,
    paddingVertical: 25,
    width: WIDTH_SCREEN * 0.65,
  },
  textMissionName: {
    fontSize: 15,
    alignSelf: "center",
  },
  viewArrow: { justifyContent: "center" },
});
