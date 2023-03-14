
import { StatusBar, View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "#191919"}}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </View>
  );
}
