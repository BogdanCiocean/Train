import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  view: {
    marginLeft: -2,

    width: '101%',
    backgroundColor: '#F8FBFF',
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
    color: '#13497B',
  },
  passwordText: {
    margin: 5,
    paddingLeft: 19,
    marginTop: -10,
    color: '#13497B',
  },
  inputEmail: {
    borderRadius: 10,
    minWidth: '95%',
    alignSelf: 'center',
    padding: 3,
    elevation: 2,
    paddingLeft: 30,
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  inputPassword: {
    borderRadius: 10,
    minWidth: '95%',
    alignSelf: 'center',
    padding: 3,
    elevation: 2,
    paddingLeft: 30,
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  registerContainer: {
    paddingHorizontal: '3%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  registerText: {
    fontSize: 14,
    padding: 10,
    fontWeight: 'bold',
    color: '#13497B',
  },
  forgotText: {
    fontSize: 14,
    padding: 10,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    color: '#13497B',
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontWeight: '300',
    fontSize: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#13497B',
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
