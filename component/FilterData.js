import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { ArrowDown, ArrowUp, Filter } from "../assets/Icons";
import { Colors } from "../helpers/colors";
import { WIDTH_SCREEN } from "../helpers/constants";

const FilterData = ({ close, functionClose }) => {
  const [order, setOrder] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.viewFilter}>
        <TouchableOpacity onPress={() => functionClose(!close)}>
          <Filter />
        </TouchableOpacity>
        <Text style={styles.textMission}>MISSION NAME</Text>
        <View style={styles.viewArrowDown}>
          <TouchableOpacity onPress={() => setOrder(!order)}>
            {order ? <ArrowDown /> : <ArrowUp />}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewLine} />
      <View style={close ? styles.collapsible : styles.collapsibleViewHide}>
        <Collapsible collapsed={!close}>
          <View style={styles.viewCollapsable}>
            <TouchableOpacity style={styles.viewItemFilter}>
              <Text style={styles.textItemFilter}>ROCKET NAME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewItemFilter}>
              <Text style={styles.textItemFilter}>ROCKET TYPE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewItemFilter}>
              <Text style={styles.textItemFilter}>LAUNCH YEAR</Text>
            </TouchableOpacity>
          </View>
        </Collapsible>
      </View>
    </View>
  );
};

export default FilterData;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background,
    width: WIDTH_SCREEN,
    zIndex: 100,
  },
  viewFilter: {
    flexDirection: "row",
    marginTop: 15.9,
    paddingLeft: 31.5,
    paddingRight: 97.3,
  },
  textMission: {
    fontSize: 15,
    color: Colors.BlueDark,
    fontWeight: "bold",
    marginLeft: 83.6,
    marginRight: 21.9,
  },
  viewArrowDown: {
    alignSelf: "center",
  },
  viewLine: {
    height: 6,
    backgroundColor: Colors.BlueDark,
    marginLeft: 17.4,
    marginTop: 7.7,
    marginRight: 18.1,
    borderRadius: 6,
  },

  viewCollapsable: {
    backgroundColor: Colors.BlueDark,
    width: 250,
    marginLeft: 16,
    paddingLeft: 22,
    paddingRight: 33,
    borderRadius: 6,
  },
  textItemFilter: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.BlueDark,
    alignSelf: "center",
  },
  viewItemFilter: {
    backgroundColor: Colors.BrownLight,
    borderRadius: 14,
    paddingVertical: 16.5,
    marginVertical: 22,
  },
  collapsible: {
    position: "absolute",
    marginTop: 42,
    marginLeft: 1,
  },
  collapsibleViewHide: {
    display: "none",
  },
});
