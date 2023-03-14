import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 17
    },
    quantityContainer: {
        width: 25,
        height: 19,
        backgroundColor: "#333333",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginLeft: 10
    },
    quantity: {
        color: "#D9D9D9",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 15
    }
});