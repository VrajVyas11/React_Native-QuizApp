import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const Title = () => {
  return (
    <LinearGradient colors={['transparent', 'rgba(0, 100, 200, 0.5)', 'transparent']} style={styles.container}>
      <Text style={styles.title}>QuizApp</Text>
    </LinearGradient>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontSize:36,
    fontWeight:'600',
    color:"black"
  },
  container:{
    paddingVertical:16,
    justifyContent:"center",
    alignItems:"center",
    marginTop:50,
    borderRadius:999,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderStyle:"solid",
    borderColor:"#1A759F",
    // background: 'linear-gradient(to right, transparent, rgba(0, 0, 255, 0.5), transparent)'
    
    
  }
})