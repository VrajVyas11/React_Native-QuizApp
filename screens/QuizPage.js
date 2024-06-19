import { StyleSheet, Modal, Text, TouchableOpacity, Alert, View, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../store/GetQuestions';

const QuizPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const questionData = useSelector((state) => state.getquestions);
    const [questions, setQuestions] = useState([]);
    const [ques, setQues] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [loading, setLoading] = useState(true);
    const whatisAnsewer = ({index,answer}) => {
        // console.log("you selected ",data,"real answer is ",questions[ques]?.correct_answer)
        if (questions[ques]?.correct_answer == answer) {
            Alert.alert(`Well Done.......\n${index} ${answer} is Correct Answer`);
            setQues((prev) => prev + 1)
            setCorrect((prev) => prev + 1)
        }
        else {
            Alert.alert(`Oh Wrong Answer.... Correct Answer is ${questions[ques]?.correct_answer}`);
            setQues((prev) => prev + 1)
        }
    }
    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);
    console.log("this is the data", questionData)
    if (ques == 10) {
        navigation.navigate("Result", { correct })
        setQues(0);
        setQuestions([])
        setLoading(true)
    }
    useEffect(() => {
        if (questionData?.status === 'succeeded') {
            setQuestions(questionData.data);
            setTimeout(()=>{
                setLoading(false)
            },1500)
            
        }
    }, [questionData,loading,dispatch]);
const abcd=["A)","B)","C)","D)"]
    return (
        <>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={loading}
                    onRequestClose={() => { }}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                        <View style={{
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            height: 100,
                            width: 100,
                            borderRadius: 10,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ActivityIndicator size="large" color="#00ff00" />
                        </View>
                    </View>
                </Modal>

            </View>

            <View style={styles.container}>
                {questionData && questions.length > 0 && (
                    <View style={styles.parent}>
                        <View style={styles.top}>
                            <Text style={styles.question}>
                                Q.{ques + 1} {questions[ques]?.question
                                    .replace(/&#039;/g, "'")
                                    .replace(/(?<=\W)&quot;|&quot;(?=\W)/g, "'")
                                    .replace(/(?<=\W)&ldquo;|&ldquo;(?=\W)/g, "`")
                                    .replace(/(?<=\W)&rdquo;|&rdquo;(?=\W)/g, "`")

                                }
                            </Text>
                        </View>
                        <View style={styles.options}>
                            {/* {questions[ques]?.incorrect_answers.concat(questions[ques]?.correct_answer).map((answer, index) => (
                            <TouchableOpacity key={index} style={styles.optionButton}
                                onPress={() => whatisAnsewer(answer)}>
                                <Text style={styles.option}>{answer}</Text>
                            </TouchableOpacity>
                        ))} */}
                            {ques < 10 && [...questions[ques]?.incorrect_answers, questions[ques]?.correct_answer]
                                .sort(() => Math.random() - 0.5)
                                .map((answer, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.optionButton}
                                        onPress={() => whatisAnsewer({index:abcd[index],answer})}
                                    >
                                        <Text style={styles.option}>{abcd[index]}{"   "}{answer                                    .replace(/&#039;/g, "'")
                                    .replace(/(?<=\W)&quot;|&quot;(?=\W)/g, "'")
                                    .replace(/(?<=\W)&ldquo;|&ldquo;(?=\W)/g, "`")
                                    .replace(/(?<=\W)&rdquo;|&rdquo;(?=\W)/g, "`")
                                    .replace(/(?<=\W)&lt;|&lt;(?=\W)/g, "`")}</Text>
                                    </TouchableOpacity>
                                ))}

                        </View>
                        <View style={styles.bottom}>
                            {/* <TouchableOpacity style={styles.button} onPress={() => setQues((prev) => prev + 1)}>
                            <Text style={styles.buttonText}>
                                SKIP
                            </Text>
                        </TouchableOpacity> */}
                           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Result", { correct })}>
                                <Text style={styles.buttonText}>
                                    END
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => setQues((prev) => prev + 1)}>
                                <Text style={styles.buttonText}>
                                    NEXT
                                </Text>
                            </TouchableOpacity >
                         
                        </View>
                    </View>
                )}

            </View>

        </>
    );
};

export default QuizPage;

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingHorizontal: 15,
        height: "100%"
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1
    },
    bottom: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal:15
    },
    button: {
        backgroundColor: "#1A759F",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white'
    },
    question: {
        color: "black",
        fontSize: 26,
        fontWeight: "500"
    },
    option: {
        fontSize: 18,
        color: "white",
        fontWeight: "400"
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "#34A0A4",
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: "100%"
    },


});
