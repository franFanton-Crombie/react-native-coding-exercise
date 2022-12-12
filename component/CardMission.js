import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ArrowRightCircle } from "../assets/Icons";
import { Colors } from "../helpers/colors";
import { WIDTH_SCREEN } from "../helpers/constants";

const CardMission = ({ item, functionSelect, idSelected, filterSelected }) => {
  const [textItem, setTextItem] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (filterSelected === "rocket_name") setTextItem(item.rocket.rocket_name);
    else if (filterSelected === "rocket_type")
      setTextItem(item.rocket.rocket_type);
    else if (filterSelected === "launch_year") setTextItem(item.launch_year);
    else setTextItem(item.mission_name);
  }, [filterSelected]);
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
          {textItem}
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
