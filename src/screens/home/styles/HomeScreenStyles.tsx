import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes/';

export default StyleSheet.create({
  scrollview: {
    backgroundColor: colors.whitegrey,
  },

  view: {
    
  },


  headerelements:{
    marginTop: 15,
    width:'100%',
    height:70,
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center'

  },
  profilepic:{
    borderRadius:50,
    marginLeft:28,
  },

  angeles:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5
  },

  locicon:{
   marginRight:10,
   height: 14.5,
   width: 11
  },

  CA: {
    fontSize: 12,
    color: colors.darkerblue
  },

  arrow:{
   marginLeft: 7,
  },

  settings:{
   flexDirection:'row',
   marginRight: 28,
  },

  bell:{
   marginRight: 28,
  },

  searchcontainer: {
    marginTop: 20,
    marginLeft: 28,
    marginRight: 28,
  },

  text: {
    opacity: 0.3,
    fontSize: 20,
  },

  text2: {
    fontSize: 20,
    color: colors.darkerblue,
  },
  searchbarview: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 2,
  },

  searchbar: {
    borderBottomWidth: 0,
    alignSelf: 'center',
    flex: 1,
  },
  containerstyle: {
    marginTop: 30,
    justifyContent: 'center',
    width: '100%',
    height: 30,
  },

  inputiconsl: {
    marginLeft: 15,
  },

  cardsview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },

  card1: {
    backgroundColor: colors.turqoise,
    borderRadius: 10,
    width: 75,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1.5,
  },
  card1text: {
    fontWeight: 'bold',
    marginTop: 15,
    color: colors.white,
  },

  card2: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 75,
    height: 70,
    elevation: 1.5,
  },

  card3: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 75,
    height: 70,
    elevation: 1.5,
  },

  card4: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 75,
    height: 70,
    elevation: 1.5,
  },

  imagecontainer: {
    marginHorizontal: 29.5,
    marginTop: 20,
    width: '86%',
    height: 260,
    marginBottom:30,
  },

  image: {
    borderRadius: 10,
    flex: 1,
    overflow: 'hidden',
    elevation: 0.5,
  },

  interior1: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 25,
    backgroundColor: colors.whitegrey,
    borderRadius: 50,
    alignItems: 'center',
    maxWidth: '44%',
    height: 35,
  },
  location: {
    marginRight: 5,
    marginLeft: 15,
    height: 18,
    width: 14,
  },
  locationtext: {
    fontSize: 11,
    fontWeight: '300',
  },

  

  interior2: {
    marginTop: 98,
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    height: 100,
    
  },
  texttitle: {
    fontSize: 20,
    color: colors.darkerblue,
    fontStyle: 'normal',
    paddingLeft: 20,
    paddingVertical: 5,
    lineHeight: 24,
    marginTop: 10,
  },
  profil: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  profilephoto: {
    borderRadius: 100,
    marginLeft: 20,
  },

  name: {
    marginLeft: 10,
    fontSize: 11,
    justifyContent: 'center',
    lineHeight: 13,
  },
  priceview: {
    marginBottom: 10,
    marginLeft: 50,
  },

  price: {
    fontWeight: 'bold',
    color: colors.darkerblue,
    fontSize: 20,
    marginLeft: 55,
    justifyContent: 'center',
  },

  review: {
    backgroundColor: colors.white,
    flexDirection: 'row',
  },

  firststar: {
    marginLeft: 20,
    width: '1%',
  },

  star1: {
    marginLeft: 10,
    width: '1%',
  },

  star2: {
    marginLeft: 10,
    width: '1%',
    opacity: 3,
  },

  opiniontext: {
    marginLeft: 10,
    fontSize: 10,
    opacity: 0.2,
  },

  view3: {
    flexDirection: 'row',
    marginLeft: 83,
    alignItems: 'center',
    marginBottom: 10,
  },

  numbers: {
    color: colors.fadedgrey,
    marginLeft: 5,
  },

  reviewicons: {
    marginLeft: 10,
  },

  heartview: {
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    width: '10%',
    height: '35%',
    alignItems: 'center',
    bottom: '125%',
    marginLeft: '80%',
    elevation: 2,
  },
});
