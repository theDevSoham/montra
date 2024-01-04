import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface WelcomeCardProps {
  icon: any;
  heading: string;
  subHeading: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({
  icon,
  heading,
  subHeading,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{icon}</View>

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>{heading}</Text>

        <Text style={styles.subHeading}>{subHeading}</Text>
      </View>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 31,
    paddingVertical: 32,
  },

  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 41,
    gap: 20,
  },

  heading: {
    color: '#212325',
    textAlign: 'center',

    /* Title / Title 1 */
    fontFamily: 'Inter',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
  },

  subHeading: {
    color: '#91919F',
    textAlign: 'center',

    /* Body/Body 1 */
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
