import { useState } from "react";

import Checkbox from "expo-checkbox";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Trash from "../../../assets/trash.png";

import { styles } from "./styles";

type Props = {
    text: string;
    onDone: () => void;
    onRemove: () => void;
}

export function TaskCard({text, onDone, onRemove}: Props) {
    const [isChecked, setChecked] = useState(false);

    function hanldeCheckedTask(value: boolean) {
        onDone();
        setChecked(value);
    }

    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={hanldeCheckedTask}
                color={isChecked ? '#5E60CE' : undefined}
            />
            <Text style={isChecked ? styles.taskTextDone : styles.taskText}>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Image source={Trash} />
            </TouchableOpacity>
        </View>
    )
}