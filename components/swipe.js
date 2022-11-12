import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from "react-native";
import { Surface, Appbar, Divider } from "react-native-paper";
import { Feather } from '@expo/vector-icons';
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
// import Icon from 'react-native-vector-icons/Ionicons'
const Users = [
  { id: "1", uri: require("../assets/heroine.jpg") },
  { id: "2", uri: require("../assets/2.jpg") },
  { id: "3", uri: require("../assets/3.jpg") },
  { id: "4", uri: require("../assets/4.jpg") },
  { id: "5", uri: require("../assets/5.jpg") },
];

export default class Swipe extends React.Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-30deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
  }
  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: false,
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: false,
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: false,
          }).start();
        }
      },
    });
  }

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 230,
                width: SCREEN_WIDTH - 23,
                padding: 10,
                position: "absolute",
                left: 11,
                // alignItems: "center",
                justifyContent: "center"
              },
            ]}
          >
            <Animated.View
              style={{
                opacity: this.likeOpacity,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 40,
                zIndex: 1000,
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  color: "green",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}
              >
                LIKE
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: this.dislikeOpacity,
                transform: [{ rotate: "30deg" }],
                position: "absolute",
                top: 50,
                right: 40,
                zIndex: 1000,
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  color: "red",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}
              >
                NOPE
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: SCREEN_HEIGHT / 2,
                width: null,
                resizeMode: "cover",
                borderRadius: 20,
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 230,
                width: SCREEN_WIDTH - 23,
                padding: 11,
                position: "absolute",
                left: 10,
              },
            ]}
          >
            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 40,
                zIndex: 1000,
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  color: "green",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}
              >
                LIKE
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: "30deg" }],
                position: "absolute",
                top: 50,
                right: 40,
                zIndex: 1000,
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  color: "red",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}
              >
                NOPE
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: SCREEN_HEIGHT / 2,
                width: null,
                borderRadius: 20, 
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <Appbar.Header style={{ backgroundColor:"ivory", elevation: 6 }}>
          {/* <Avatar source={require("../assets/old.png")} /> */}
          {/* <Appbar.Action icon="plus-box" onPress={() => {}} /> */}
          <View style={{flex: 1, flexDirection:"column"}}>
          
          <Appbar.Content
            title="Hi, Jaya!"
            color="#004e58" 
            titleStyle={{ fontWeight:'bold' }}
           style={{ marginLeft: 20, marginTop:10}}
          />

<Appbar.Content
            title="Good Evening Jaya!"
            color="#004e58" 
            titleStyle={{ fontWeight:'', fontSize:15}}
           style={{ marginLeft: 20, marginTop:0}}
          />
          
          </View>
          {/* <Appbar.Action icon="android-messages" onPress={() => {}} /> */}
          <Feather name="message-circle" size={30} color="black" />
        </Appbar.Header>
        <View style={{ height: 20 }}></View>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
      </View>
    );
  }
}