import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";

const FamilyFriendly = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Would you like to attend family friendly events?
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Yes" color="hotpink" onPress={props.resetInterests} />
        </View>
        <View style={styles.button}>
          <Button title="No" color="grey" onPress={props.confirm} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    margin: 20,
    top: 70,
    shadowColor: "black",
    elevation: 20,
    backgroundColor: "black",
    paddingVertical: 180,
    paddingHorizontal: 50,
    borderRadius: 6,
    opacity: 0.8
  },

  title: {
    fontSize: 20,
    margin: 0,
    padding: 0,
    color: "white",
    textAlign: "center"
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 20
  },
  button: {
    width: 120,
    textAlign: "center",
    marginHorizontal: 30
  }
});

export default FamilyFriendly;
