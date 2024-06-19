import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import QuizImage from "./QuizImage.jpg"
import Finish from "./Finish.jpg"
const ResultPage = ({ navigation, route }) => {
    const { correct } = route.params;
    return (

        <View style={styles.bannerContainer}>
            <Text style={styles.end}>

               {"  "} Looks Like You have {"\n"}
                <Text>{"      "}Reached the End{"\n"}</Text>
                <Text style={styles.total}>
                {"       "}  Your Scored {" "}
                </Text>
                <Text style={styles.correct}>
                 {correct}/10
                </Text>
            </Text>
            <Image
                source={Finish}
                style={styles.banner}
            />
            <View>
                <TouchableOpacity style={styles.returnHome} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.endHome}>Return Home</Text>
                </TouchableOpacity>
            </View>
        </View>



    )
}

export default ResultPage

const styles = StyleSheet.create({
    //     banner:{
    //         height:300,
    //         width:300
    //     },
    //     bannerContainer:{
    // justifyContent:"center",
    // alignItems:"center"
    //     },

    banner: {
        // marginTop:120,
        height: "60%",
        width: "100%",
        // borderWidth: 1,
        // borderTopWidth: 0,
        // borderColor: "black",
        // borderStyle: "solid",
        borderRadius: 100,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    bannerContainer: {
        // justifyContent: "space-between",
        // flexDirection: "column",
        width: "100%",
        height: "100%",
        marginTop:20,
        // justifyContent: "center",
        alignItems: "center",
        // flex: 1
    },
    end: {
        // borderWidth: 1,
        // borderTopWidth: 0,
        // borderColor: "black",
        // borderStyle: "solid",
        color: "black",
        fontSize: 26,
        top: "0%",
        fontWeight: "900",
        paddingVertical: 30,
        paddingHorizontal:60,
        
        borderRadius: 100,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // height:"30%",
        fontWeight: "500",
        backgroundColor: "#34A0A4",
        width: "100%",
    },
    endHome: {
        color: "black",
        fontSize: 18,
        top: "0%",
        fontWeight: "500",
    },
    returnHome: {
        // borderWidth: 1,
        // borderTopWidth: 0,
        // borderColor: "black",
        // borderStyle: "solid",

        padding: 30,
        paddingHorizontal: 60,
        borderRadius: 100,
        marginTop: 20,
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 0,
        // height:"30%",
        fontWeight: "500",
        backgroundColor: "#34A0A4",
        width: "100%"
    },
    total:{
color:"darkblue",
fontSize:20,
justifyContent:"center",
        alignContent:"center",
    },
    correct:{
color:"green",
justifyContent:"center",
        alignContent:"center",
    }

})