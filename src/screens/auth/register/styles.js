import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../utils';

const {width: WIDTH} = Dimensions.get('window');

export const styles = StyleSheet.create({
  text: {
    color: colors.WHITE,
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    color: colors.DANGER,
    fontSize: 16,
    marginTop: -7,
    textAlign: 'center',
  },
  register: {
    color: colors.SECONDARY,
    fontSize: 16,
  },
  backgroundContainer: {
    alignItems: 'center',
    flex: 1,
    height: null,
    justifyContent: 'center',
    width: null,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    height: 120,
    resizeMode: 'contain',
    width: 120,
  },
  logoTitle: {
    color: colors.BORDER_LIGHT_GREYCOLOR,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    backgroundColor: colors.SEMI_TRANSPARENT,
    borderRadius: 25,
    color: colors.WHITE,
    fontSize: 16,
    height: 45,
    marginBottom: 15,
    marginHorizontal: 45,
    paddingLeft: 47,
    width: WIDTH - 55,
  },
  inputIcon: {
    color: colors.WHITE,
    position: 'absolute',
    top: 10,
    left: 57,
  },
  inputEye: {
    position: 'absolute',
    top: 10,
    right: 57,
  },
  submitButton: {
    backgroundColor: colors.SECONDARY,
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: WIDTH - 55,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
