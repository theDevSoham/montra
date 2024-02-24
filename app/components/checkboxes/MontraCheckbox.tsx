/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Checkbox} from 'react-native-paper';

interface MontraCheckboxProps {
  status: 'checked' | 'unchecked';
  onCheckPress: (checkStatus: boolean) => void;
}

const MontraCheckbox: React.FC<MontraCheckboxProps> = ({
  status,
  onCheckPress,
}) => {
  const [checkStatus, setCheckStatus] = useState<boolean>(false);

  useEffect(() => {
    onCheckPress(checkStatus);
  }, [checkStatus]);

  return (
    <Checkbox
      status={status}
      onPress={() => {
        setCheckStatus(prev => !prev);
      }}
      color="#7F3DFF"
      uncheckedColor="#7F3DFF"
    />
  );
};

export default MontraCheckbox;

// const styles = StyleSheet.create({});
