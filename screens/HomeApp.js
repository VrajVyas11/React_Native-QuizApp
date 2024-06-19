import { Image, StyleSheet, Text, TouchableOpacity, View,ImageBackground } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import QuizImage from "./QuizImage.jpg"
// import QuizImage1 from "./QuizImage1.png"
import QuizImage1 from "./screen.png"
const HomeApp = ({ navigation }) => {
  return (
    <ImageBackground source={QuizImage1} style={styles.container}>
    {/* <View style={styles.container}> */}
      <Title />
      {/* <View style={styles.bannerContainer}>
        <Image
          source={QuizImage1}
          style={styles.banner}
        />
      </View> */}
      <TouchableOpacity
        onPress={() => navigation?.navigate('Quiz')}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    {/* </View> */}
    </ImageBackground>
  )
}

export default HomeApp

const styles = StyleSheet.create({
  banner: {
    height: "100%",
    width: "100%",
  },
  bannerContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  container: {
    paddingHorizontal: 15,
    justifyContent:"space-between",
    height:"100%"
  },
  startButton: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  startButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  }
})