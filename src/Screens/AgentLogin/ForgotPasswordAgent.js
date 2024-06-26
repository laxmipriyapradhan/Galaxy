import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, windowWidth } from '../../Constraints/Generic';
import CustomButton from '../../Common/CustomButton';
import CustomTextInput from '../../Common/CustomTextInput';


const ForgotPasswordAgent = ({ route, navigation }) => {
    const { agentno } = route.params;
    console.log("a ra h",agentno)

    const onBtnPress = () => {
        navigation.navigate('OtpValidationAgent', {agentno: agentno });

    }
    const onChangePress = () => {
        navigation.navigate('LoginAgent', agentno);
    }
    // const onForgotbtnPress = () => {
    //     navigation.navigate('ForgotPassword');


    // }

    return (
        <>
            <View style={styles.container}>
                <Image style={{ resizeMode: "contain" }} source={require('../../assets/banner.png')} />
                <Text style={styles.text}>Forgot Password</Text>
                <Text style={styles.forgotText}>Enter the email address or mobile phone number associated with your galaxy account.</Text>
                <View style={styles.linksContainer}>

                </View>
                <Text style={styles.textplaceholder1}>Email address or Mobile Number</Text>

                <CustomTextInput value={agentno} placeholderTextColor1= {COLORS.textColor1}></CustomTextInput>
                <CustomButton text={"Reset password"} onBtnPress={onBtnPress} widthDecrement={60} />

                <Text style={{ fontSize: SIZES.h2, color: COLORS.btnPrimary, fontWeight: "bold", marginLeft: 170, margin: 20, width: windowWidth }}>Need Help</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,

    },
    textMobile: {
        color: '#303030',
        fontSize: 16,
        marginLeft: 12,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstying,


    },
    text: {
        color: '#303030',
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstying,
    },
    forgotText: {
        color: COLORS.textColor1,
        fontSize: SIZES.h3,
        margin: 27,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstying,
    },


    textplaceholder: {
        color: COLORS.placeholderTextColor,
    },
    textplaceholder1:
    {
        marginBottom: 5,
        fontSize: SIZES.h2,
        marginLeft: 30,
        fontWeight: 'bold',
        color: COLORS.placeholderTextColor1,

    },
    linksContainer: {
        top: 20,

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth,
        paddingHorizontal: 20,
    },
    linkText: {
        color: COLORS.textColor1,
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    
    textOr: {
        textAlign: "center",

    },
    line: {
        flex: 0.5,
        height: 1,
        top: 2.5,
        backgroundColor: COLORS.placeholderTextColor1,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth - 60,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        marginBottom: 15


    }
});

export default ForgotPasswordAgent;

