import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

interface MontraInputProps {
  inputType: 'text' | 'password' | 'phno';
  label: string;
  placeholder: string;
  customColors?: {
    outlineColor?: string;
    activeOutlineColor?: string;
    textColor?: string;
    placeholderTextColor?: string;
  };
  customStyles?: {
    contentStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<ViewStyle>;
    underlineStyle?: StyleProp<ViewStyle>;
  };
  onChange: (text: string) => void;
}

const MontraTextInput: React.FC<MontraInputProps> = ({
  inputType,
  label,
  placeholder,
  customColors,
  customStyles,
  onChange,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [text, setText] = useState('');

  const handleChangeText = (currentText: string): void => {
    onChange(currentText);
    setText(currentText);
  };

  const passwordProps = {
    secureTextEntry: secureTextEntry,
    right: text.length > 0 && (
      <TextInput.Icon
        icon={secureTextEntry ? 'eye' : 'eye-off'}
        onPress={() => {
          setSecureTextEntry(prev => !prev);
          return false;
        }}
      />
    ),
  };
  return (
    <TextInput
      label={<Text style={styles.labelStyle}>{label || ''}</Text>}
      placeholder={placeholder || ''}
      underlineStyle={customStyles?.underlineStyle || styles.underlineStyle}
      mode="outlined"
      outlineColor={customColors?.outlineColor || '#F1F1FA'}
      activeOutlineColor={customColors?.activeOutlineColor || '#EEE5FF'}
      textColor={customColors?.textColor || '#91919F'}
      placeholderTextColor={customColors?.placeholderTextColor || '#A3A4A5'}
      contentStyle={customStyles?.contentStyle || styles.inputs}
      /* for password */
      {...(inputType === 'password' ? passwordProps : {})}
      /*end of for password */
      value={text}
      onChangeText={handleChangeText}
    />
  );
};

export default MontraTextInput;

const styles = StyleSheet.create({
  labelStyle: {
    color: '#A3A4A5',
  },

  underlineStyle: {
    opacity: 0,
  },

  inputs: {
    marginTop: 6,
    marginBottom: 0,
  },
});
