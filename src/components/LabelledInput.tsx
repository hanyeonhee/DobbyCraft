import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

interface BoxInputProps {
  label: string;
  placeholder: string;
  onInput: (text: string) => void;
  value: string;
  secure?: boolean;
}

const LabelledInput: React.FC<BoxInputProps> = ({
  label,
  placeholder,
  onInput,
  value,
  secure = false,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onInput}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 17,
    paddingVertical: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapper: {
    marginVertical: 10,
  },
});

export default LabelledInput;
