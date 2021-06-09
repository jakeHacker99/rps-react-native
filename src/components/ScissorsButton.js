import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";


function ScissorsButton({ onPress }) {

    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={styles.buttonStyle}>
                <Text
                    style={styles.textStyle}
                >Sax</Text>
            </TouchableOpacity>

        </View>
    );
}
export default ScissorsButton

const styles = StyleSheet.create({
    buttonStyle: {
        borderWidth: 1,
        borderColor: '#ff9900',
        borderRadius: 5,
        marginTop: 20,
        marginRight: 20,
        width: 70,
        height: 50,
        shadowColor:'#ff9900',
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    
    textStyle: {
        justifyContent: "center",
        textAlign: 'center',
        color: '#ff9900',
        fontSize: 18,
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 10
    },

});
