import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";


export function OurButton({ onPress, title }) {

    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={styles.buttonStyle}>
                <Text
                    style={styles.textStyle}
                >{title}</Text>
            </TouchableOpacity>

        </View>
    );
}
export default OurButton
const styles = StyleSheet.create({
    buttonStyle: {
        borderWidth: 1,
        borderColor: '#338dff',
        borderRadius: 5,
        marginTop: 20,
        marginRight: 20,
        width: 70,
        height: 50,
    },

    textStyle: {
        justifyContent: "center",
        textAlign: 'center',
        color: '#338dff',
        fontSize: 18,
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 10
    },

});
