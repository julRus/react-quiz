import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";

export default class HomeActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      GridListItems: [
        {
          key: "Music/Gigs",
          img: require("./sourceImgs/live-music-gigs.jpg")
        },
        { key: "Art", img: require("./sourceImgs/art.jpg") },
        { key: "Theatre", img: require("./sourceImgs/theatre.jpg") },
        { key: "Sport", img: require("./sourceImgs/sport.jpg") },
        { key: "Alcohol", img: require("./sourceImgs/alcohol.jpg") },
        { key: "Food", img: require("./sourceImgs/food.jpg") },
        { key: "Tech", img: require("./sourceImgs/Tech.jpg") },
        { key: "Harry Potter", img: require("./sourceImgs/hp.jpg") },
        { key: "Quizes", img: require("./sourceImgs/quiz.jpg") },
        { key: "Outdoor", img: require("./sourceImgs/outdoor.jpg") },
        { key: "Comedy", img: require("./sourceImgs/comedy.jpg") },
        { key: "Games", img: require("./sourceImgs/games.jpg") }
      ]
    };
  }

  GetGridViewItem(item) {
    Alert.alert("HI");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What are your interests? (choose 4)</Text>
        <FlatList
          data={this.state.GridListItems}
          renderItem={({ item }) => (
            <View style={styles.GridViewContainer}>
              <ImageBackground
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute"
                }}
                source={item.img}
              >
                <TouchableOpacity underlayColor="#fff">
                  <Text
                    style={styles.GridViewTextLayout}
                    onPress={this.GetGridViewItem}
                  >
                    {item.key}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black"
  },
  title: {
    marginTop: 40,
    marginBottom: 10,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    borderBottomColor: "black",
    color: "white"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 210,
    margin: 5
  },
  overlay: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.6
  },
  GridViewTextLayout: {
    fontSize: 20,
    margin: 20,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff"
  }
});
