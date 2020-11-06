import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes/';
export default StyleSheet.create({
  view: {
    width: '101%',
    backgroundColor: colors.whitegrey,
    marginLeft:-2,
  },
  background: {
    flex: 1,
  },

  logo: {
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '20%',
  },
  inputIcons: {
    alignSelf: 'flex-end',
    marginRight: 19,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  emailText: {
    margin: 5,
    paddingLeft: 19,
    color: colors.darkblue,
  },
  passwordText: {
    margin: 5,
    paddingLeft: 19,
    marginTop: -10,
    color: colors.darkblue,
  },
  inputEmail: {
    borderRadius: 10,
    minWidth: '95%',
    alignSelf: 'center',
    padding: 3,
    elevation: 2,
    paddingLeft: 30,
    backgroundColor: colors.white,
    borderBottomWidth: 0,
  },
  inputPassword: {
    borderRadius: 10,
    minWidth: '95%',
    alignSelf: 'center',
    padding: 3,
    elevation: 2,
    paddingLeft: 30,
    backgroundColor: colors.white,
    borderBottomWidth: 0,
  },
  registerContainer: {
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 13,
    marginRight: 13,
  },
  registerText: {
    fontSize: 14,
    padding: 10,
    fontWeight: 'bold',
    color: colors.darkblue,
  },
  forgotText: {
    fontSize: 14,
    padding: 10,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    color: colors.darkblue,
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
  },
  subtitle: {
    color: colors.subgrey,
    fontWeight: '300',
    fontSize: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.darkblue,
    borderRadius: 10,
    minWidth: '90%',
    alignSelf: 'center',
    padding: 20,
    marginTop: -20,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
