import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    text: string;
    textColor: string;
    quantity: number;
}

export function Counter({ text, textColor, quantity }: Props) {
    return (
        <View style={styles.container}>
            <Text style={[{ color: textColor }, styles.text]}>{text}</Text>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>{quantity}</Text>
            </View>
        </View>
    )
}