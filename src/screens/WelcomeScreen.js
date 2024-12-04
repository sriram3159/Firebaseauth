import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import images from '../utils/images';
import {SF, SH, SW, widthPersent} from '../utils/dimensions';
import RouteName from '../routes/RouteName';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={colors.primaryColor} />
      <Text style={Styles.header}>Let's Get Started!</Text>
      <Image source={images.welcome} style={Styles.image} />
      <View>
        <TouchableOpacity
          style={Styles.signupButtonContainer}
          onPress={() => navigation.navigate(RouteName.SIGNUP_SCREEN)}>
          <Text style={Styles.signupButton}>Sign Up</Text>
        </TouchableOpacity>
        <View style={Styles.existAccount}>
          <Text style={Styles.existAccountText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
            <Text style={Styles.loginButton}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    height: SH(300),
    width: SW(300),
  },
  header: {
    fontSize: SF(28),
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  signupButtonContainer: {
    padding: SH(16),
    backgroundColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SH(10),
    width: widthPersent(90),
  },
  signupButton: {
    fontSize: SF(16),
    fontWeight: '600',
  },
  existAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SH(16),
  },
  existAccountText: {
    color: 'white',
    fontWeight: '400',
  },
  loginButton: {
    color: colors.secondaryColor,
    fontWeight: '400',
    paddingLeft: SW(4),
  },
});
