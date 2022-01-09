
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

const TypeBox: React.FC<{}> = () => {

  const [textContent, setTextContent] = useState<string>('')
  const [borderColor, setBorderColor] = useState('black');

  const boxStyle = {
    height: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: borderColor
  }
  const charCount = textContent.length
  const countRemainingWords = (text: string) => {
    setTextContent(text)
    if (charCount > 280) {
      setBorderColor('red')
    } else {
      setBorderColor('black')
    }
  }

  return (
    <>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={countRemainingWords}
        style={boxStyle}
        value={textContent}
      />
      <Text style={styles.paragraph}>
        {280 - charCount} characters left.
      </Text>
      <Button
        title="Tweet"
      />
    </>
  );
}

// Props or State'
const App: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <TypeBox
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderColor: 'purple',
    borderWidth: 2
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;