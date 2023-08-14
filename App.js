import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Crypto from 'react-native-quick-crypto'

export default function App() {
  const hashed = Crypto.createHash('sha256')
  .update('Damn, Margelo writes hella good software!')
  .digest('hex');

  console.log(hashed);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
