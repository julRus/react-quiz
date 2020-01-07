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
  state = {
    GridListItems: [
      {
        key: "Music/Gigs",
        img: require("./sourceImgs/live-music-gigs.jpg"),
        opacity: 1
      },
      {
        key: "Art",
        img: require("./sourceImgs/art.jpg"),
        opacity: 1
      },
      {
        key: "Theatre",
        img: require("./sourceImgs/theatre.jpg"),
        opacity: 1
      },
      {
        key: "Sport",
        img: require("./sourceImgs/sport.jpg"),
        opacity: 1
      },
      {
        key: "Alcohol",
        img: require("./sourceImgs/alcohol.jpg"),
        opacity: 1
      },
      {
        key: "Food",
        img: require("./sourceImgs/food.jpg"),
        opacity: 1
      },
      { key: "Tech", img: require("./sourceImgs/Tech.jpg"), opacity: 1 },
      {
        key: "Harry Potter",
        img: require("./sourceImgs/hp.jpg"),
        opacity: 1
      },
      { key: "Quizes", img: require("./sourceImgs/quiz.jpg"), opacity: 1 },
      {
        key: "Outdoor",
        img: require("./sourceImgs/outdoor.jpg"),
        opacity: 1
      },
      {
        key: "Comedy",
        img: require("./sourceImgs/comedy.jpg"),
        opacity: 1
      },
      { key: "Games", img: require("./sourceImgs/games.jpg"), opacity: 1 }
    ],
    count: 0
  };

  overlay = {
    disable: null
  };

  GetGridViewItem = item => {
    this.setState({ count: count + 1 });
    this.setState(currentState => {
      const newState = currentState.GridListItems.map(interest => {
        if (interest.key === item) {
          return (interest.opacity = 0.2);
        }
      });
      return newState;
    });
    Alert.alert(this.state.count);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What are your interests? (choose 4)</Text>
        <FlatList
          data={this.state.GridListItems}
          renderItem={({ item }) => (
            <View
              style={{
                opacity: item.opacity,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 210,
                margin: 5
              }}
            >
              <ImageBackground
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute"
                }}
                source={item.img}
              >
                <TouchableOpacity
                  style={{
                    height: 230,
                    width: 200,
                    alignItems: "center",
                    marginTop: 10,
                    backgroundColor: "black",
                    opacity: 0.5,
                    top: -10
                  }}
                  onPress={this.GetGridViewItem.bind(this, item.key)}
                >
                  <Text style={styles.GridViewTextLayout}>{item.key}</Text>
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
    display: "flex",
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
    paddingRight: 30,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff"
  },
  button: {
    opacity: 0.6,
    width: "100%",
    maxWidth: "100%"
  }
});
