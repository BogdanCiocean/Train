import React,{useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';
import {Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {LOGIN_SAGA} from './redux';
import {strings} from '../../core/constants';
import {LoginScreenStyles as styles} from './styles';

const validateEmail=(email)=>{

  return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

}

const LoginScreen = ({navigation}) => {
  const [showPass,setShowPass] = useState(false);
  const [valid,setValid] = useState(false);

  return (
    <ScrollView style={styles.view}>
      <ImageBackground
        source={require('../../../assets/background.png')}
        style={styles.background}>
        <Image
          style={styles.logo}
          source={require('../../../assets/search.png')}
        />

        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{strings.welcome}</Text>
            <Text style={styles.subtitle}>{strings.findhome}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.emailText}>{strings.email}</Text>
            <Input
              inputContainerStyle={styles.inputEmail}
              autoCapitalize="none"
              placeholder="user@email.com"
              rightIcon={
                valid
                ?<Image
                style={styles.inputIcons}
                source={require('../../../assets/check.png')}
              />
                :null
              }
                onChangeText={(text)=>
                  validateEmail(text)?setValid(true):setValid(false)
              }
                
              
            />
            <Text style={styles.passwordText}>{strings.password}</Text>
            <Input
              inputContainerStyle={styles.inputPassword}
              placeholder="password"
              secureTextEntry={showPass}
              autoCapitalize="none"
              rightIcon={<TouchableOpacity
                    onPress={()=>{
                        showPass ? setShowPass(false) : setShowPass(true);
                    }}
                >
                <Image
                  style={styles.inputIcons}
                  source={require('../../../assets/eye.png')}
                />
                </TouchableOpacity>
              }
            />
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')} >
              <Text style={styles.buttonText}>{strings.LOGIN}</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>{strings.forgpass}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.registerText}>{strings.createnew}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const {message, isFetchingToken} = state.login.loginReducer;
  return {message, isFetchingToken};
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({type: LOGIN_SAGA}),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
