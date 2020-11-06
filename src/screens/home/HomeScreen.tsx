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
import {
  header,
  group,
  lupa,
  house,
  block,
  keys,
  bearing,
  bucatarielol,
  location,
  profil,
  star1,
  star2,
  bath,
  path,
  lul,
  heart,
  arrow,
  bell,
  bearings,
  profilepic
} from '../../core/themes/images';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.view}>
        <View>
          <View style={styles.headerelements}>
            <Image source={profilepic} style={styles.profilepic}/>
            <View style={styles.angeles}>
            <Image source={location} style={styles.locicon}/>
            <Text style={styles.CA}>Los Angeles, CA</Text>
            <Image source={arrow} style={styles.arrow}/>
            </View>
            <View style={styles.settings}>
            <Image source={bell} style={styles.bell}/>
            <Image source={bearings} style={styles.bearings}/>
            </View>
          </View>
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
                    <Image source={group} />
                  </TouchableOpacity>
                }
                leftIcon={
                  <TouchableOpacity>
                    <Image style={styles.inputiconsl} source={lupa} />
                  </TouchableOpacity>
                }
              />
            </View>
          </View>

          <View style={styles.cardsview}>
            <TouchableOpacity style={styles.card1}>
              <Image source={house} />
              <Text style={styles.card1text}>{strings.home}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card2}>
              <Image source={block} />
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.card3}>
                <Image source={keys} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.card4}>
                <Image source={bearing} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.imagecontainer}>
            <ImageBackground source={bucatarielol} style={styles.image}>
              <View style={styles.interior1}>
                <Image source={location} style={styles.location} />
                <Text>{strings.location}</Text>
              </View>
              <View style={styles.interior2}>
                <Text style={styles.texttitle}>{strings.specialhousemix}</Text>
                <View style={styles.profil}>
                  <Image source={profil} style={styles.profilephoto} />
                  <Text style={styles.name}>{strings.name}</Text>
                  <View style={styles.priceview}>
                    <Text style={styles.price}>{strings.price}</Text>
                  </View>
                </View>
                <View style={styles.review}>
                  <TouchableOpacity style={styles.firststar}>
                    <Image source={star1} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star1}>
                    <Image source={star1} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star1}>
                    <Image source={star1} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star2}>
                    <Image source={star2} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star2}>
                    <Image source={star2} />
                  </TouchableOpacity>
                  <Text style={styles.opiniontext}>{strings.opinions}</Text>
                  <View style={styles.view3}>
                    <Image source={bath} />
                    <Text style={styles.numbers}>{strings.number2}</Text>
                    <Image source={path} style={styles.reviewicons} />
                    <Text style={styles.numbers}>{strings.number1}</Text>
                    <Image source={lul} style={styles.reviewicons} />
                    <Text style={styles.numbers}>{strings.number1}</Text>
                  </View>
                </View>
                <View style={styles.heartview}>
                  <Image source={heart} />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.imagecontainer}>
            <ImageBackground source={bucatarielol} style={styles.image}>
              <View style={styles.interior1}>
                <Image source={location} style={styles.location} />
                <Text> {strings.location}</Text>
              </View>
              <View style={styles.interior2}>
                <Text style={styles.texttitle}>{strings.specialhousemix}</Text>
                <View style={styles.profil}>
                  <Image source={profil} style={styles.profilephoto} />
                  <Text style={styles.name}>{strings.name}</Text>
                  <View style={styles.priceview}>
                    <Text style={styles.price}>{strings.price}</Text>
                  </View>
                </View>
                <View style={styles.review}>
                  <TouchableOpacity style={styles.firststar}>
                    <Image source={star1} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star1}>
                    <Image source={star1} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star1}>
                    <Image source={star1} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star2}>
                    <Image source={star2} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star2}>
                    <Image source={star2} />
                  </TouchableOpacity>
                  <Text style={styles.opiniontext}>{strings.opinions}</Text>
                  <View style={styles.view3}>
                    <Image source={bath} />
                    <Text style={styles.numbers}>2</Text>
                    <Image source={path} style={styles.reviewicons} />
                    <Text style={styles.numbers}>1</Text>
                    <Image source={lul} style={styles.reviewicons} />
                    <Text style={styles.numbers}>1</Text>
                  </View>
                </View>
                <View style={styles.heartview}>
                  <Image source={heart} />
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
