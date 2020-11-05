import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Input} from 'react-native-elements';
import {HomeScreenStyles as styles} from './styles';
import {strings} from '../../core/constants';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.view}>
        <View style={styles.headercontainer}>
          <Image
            source={require('../../../assets/header.png')}
            style={styles.headerImg}
          />

          <View style={styles.searchcontainer}>
            <Text style={styles.text}>{strings.helloeddie}</Text>
            <Text style={styles.text2}>{strings.startlookn}</Text>
            <View style={styles.searchbarview}>
              <Input
                inputContainerStyle={styles.searchbar}
                containerStyle={styles.containerstyle}
                placeholder="What are you looking for?"
                rightIcon={
                  <TouchableOpacity>
                    <Image source={require('../../../assets/Group.png')} />
                  </TouchableOpacity>
                }
                leftIcon={
                  <TouchableOpacity>
                    <Image
                      style={styles.inputiconsl}
                      source={require('../../../assets/lupa.png')}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          </View>

          <View style={styles.cardsview}>
            <TouchableOpacity style={styles.card1}>
              <Image source={require('../../../assets/house.png')} />
              <Text style={styles.card1text}>{strings.home}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card2}>
              <Image source={require('../../../assets/block.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.card3}>
                <Image source={require('../../../assets/keys.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.card4}>
                <Image source={require('../../../assets/bearing.png')} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.imagecontainer}>
            <ImageBackground
              source={require('../../../assets/bucatarielol.png')}
              style={styles.image}>
              <View style={styles.interior1}>
                <Image
                  source={require('../../../assets/location.png')}
                  style={styles.location}
                />
                <Text>{strings.location}</Text>
              </View>
              <View style={styles.interior2}>
                <Text style={styles.texttitle}>{strings.specialhousemix}</Text>
                <View style={styles.profil}>
                  <Image
                    source={require('../../../assets/profil.png')}
                    style={styles.profilephoto}
                  />
                  <Text style={styles.name}>{strings.name}</Text>
                  <View style={styles.priceview}>
                    <Text style={styles.price}>{strings.price}</Text>
                  </View>
                </View>
                <View style={styles.review}>
                  <TouchableOpacity style={styles.firststar}>
                    <Image source={require('../../../assets/star1.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star1}>
                    <Image source={require('../../../assets/star1.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star1}>
                    <Image source={require('../../../assets/star1.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star2}>
                    <Image source={require('../../../assets/star2.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star2}>
                    <Image source={require('../../../assets/star2.png')} />
                  </TouchableOpacity>
                  <Text style={styles.opiniontext}>{strings.opinions}</Text>
                  <View style={styles.view3}>
                    <Image source={require('../../../assets/bath.png')} />
                    <Text style={styles.numbers}>{strings.number2}</Text>
                    <Image
                      source={require('../../../assets/path.png')}
                      style={styles.reviewicons}
                    />
                    <Text style={styles.numbers}>{strings.number1}</Text>
                    <Image
                      source={require('../../../assets/lul.png')}
                      style={styles.reviewicons}
                    />
                    <Text style={styles.numbers}>{strings.number1}</Text>
                  </View>
                </View>
                <View style={styles.heartview}>
                  <Image source={require('../../../assets/heart.png')} />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.imagecontainer}>
            <ImageBackground
              source={require('../../../assets/bucatarielol.png')}
              style={styles.image}>
              <View style={styles.interior1}>
                <Image
                  source={require('../../../assets/location.png')}
                  style={styles.location}
                />
                <Text> {strings.location}</Text>
              </View>
              <View style={styles.interior2}>
                <Text style={styles.texttitle}>{strings.specialhousemix}</Text>
                <View style={styles.profil}>
                  <Image
                    source={require('../../../assets/profil.png')}
                    style={styles.profilephoto}
                  />
                  <Text style={styles.name}>{strings.name}</Text>
                  <View style={styles.priceview}>
                    <Text style={styles.price}>{strings.price}</Text>
                  </View>
                </View>
                <View style={styles.review}>
                  <TouchableOpacity style={styles.firststar}>
                    <Image source={require('../../../assets/star1.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star1}>
                    <Image source={require('../../../assets/star1.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star1}>
                    <Image source={require('../../../assets/star1.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star2}>
                    <Image source={require('../../../assets/star2.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star2}>
                    <Image source={require('../../../assets/star2.png')} />
                  </TouchableOpacity>
                  <Text style={styles.opiniontext}>{strings.opinions}</Text>
                  <View style={styles.view3}>
                    <Image source={require('../../../assets/bath.png')} />
                    <Text style={styles.numbers}>2</Text>
                    <Image
                      source={require('../../../assets/path.png')}
                      style={styles.reviewicons}
                    />
                    <Text style={styles.numbers}>1</Text>
                    <Image
                      source={require('../../../assets/lul.png')}
                      style={styles.reviewicons}
                    />
                    <Text style={styles.numbers}>1</Text>
                  </View>
                </View>
                <View style={styles.heartview}>
                  <Image source={require('../../../assets/heart.png')} />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
