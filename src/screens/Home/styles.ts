import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: "#0D0D0D",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 173,
        position: "relative"
    },
    container: {
        marginTop: 40
    },
    blackContainer: {
        flex: 1,
        backgroundColor: "black"
    },
    logo: {
        width: 110,
        height: 32,
    },
    form: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 145,
        right: 10,
        left: 10
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: "#1E6F9F",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5
    },
    input: {
        backgroundColor: "#262626",
        color: "#FFF",
        width: 271,
        height: 54,
        borderRadius: 5,
        alignItems: "center",
        fontSize: 16,
        padding: 16
    },
    inputFocus: {
        borderColor: "#5E60CE",
        borderWidth: 1,
        borderStyle: "solid"
    },
    taksContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 30,
        marginRight: 30,
        borderBottomColor: "#333333",
        borderBottomWidth: 1,
        height: 60
    },
    todoListContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: "center"
    },
    taskImage: {
        width: 56,
        height: 56,
        marginBottom: 15
    },
    emptyListContainer: {
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyText: {
        color: "#808080",
        fontSize: 14,
        textAlign: "center"
    },
    textBold: {
        fontWeight: "bold"
    }
});