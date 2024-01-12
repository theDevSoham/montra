import React from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation, useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

interface MontraHeaderProps {
  title: string;
  onBackPress?: () => void;
}

const MontraHeader: React.FC<MontraHeaderProps> = ({title, onBackPress}) => {
  const navigation = useNavigation();
  const theme = useTheme();

  const styles = StyleSheet.create({
    headerTitleStyle: {
      color: theme.colors.text,
      fontFamily: 'Inter',
      fontSize: 18,
    },
  });

  return (
    <>
      <Appbar.Header dark>
        <Appbar.BackAction
          onPress={() => {
            onBackPress ? onBackPress() : navigation.goBack();
          }}
          color={theme.colors.text}
        />
        <Appbar.Content title={title} titleStyle={styles.headerTitleStyle} />
      </Appbar.Header>
    </>
  );
};

export default MontraHeader;
