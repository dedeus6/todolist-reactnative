import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 64,
        backgroundColor: "#262626",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 8,
        padding: 24,
        marginTop: 7
    },
    checkbox: {
        borderRadius: 100,
        borderColor: "#4EA8DE",
        fontSize: 50
    },
    button: {
        width: 32,
        height: 32
    },
    taskText: {
        color: "#F2F2F2",
        fontSize: 14
    },
    taskTextDone: {
        color: "#808080",
        fontSize: 14,
        textDecorationLine: "line-through",
        textDecorationStyle: "solid"
    }
});