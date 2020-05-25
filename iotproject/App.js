/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import { StyleSheet,
 View,
 Text,
 StatusBar,
 Image,
 Dimensions,
 TextInput
 } from 'react-native';
 import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import Feather from "react-native-vector-icons/Feather";
import firebase from "firebase";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props) => (
  <Icon {...props} name='heart'/>
);

export default class App extends React.Component {
constructor(props){
super(props);
this.state ={
entries: [
{
thumbnail:''
},
{
thumbnail:''
}
]
}
}
_renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                {index == 0?
                <View style={styles.absolute}>
                <View style={styles.box}>
                 <Text style={styles.title}>Login</Text>
                 <View style={styles.action}>
                 <TextInput
                    placeholder ="Username..."
                    style={styles.textInput} />
                 </View>
                  <View style={styles.action}>
                                  <TextInput
                                     secureTextEntry
                                     placeholder ="Password..."
                                     style={styles.textInput} />
                                  </View>
                  <View style={styles.button_container}>
                  <View style={styles.button}>
                  <Feather
                  name="arrow-right"
                  color="white"
                  size={25} />
                  </View>
                  </View>
                </View>
                </View>
                :
 <View style={styles.absolute}>
                <View style={styles.box}>
                 <Text style={styles.title}>Register</Text>
                 <View style={styles.action}>
                 <TextInput
                    placeholder ="Username..."
                    style={styles.textInput} />
                 </View>
                  <View style={styles.action}>
                                  <TextInput
                                     secureTextEntry
                                     placeholder ="Password..."
                                     style={styles.textInput} />
                                  </View>
                  <View style={styles.action}>
                                    <TextInput
                                       secureTextEntry
                                       placeholder ="Confirm your password..."
                                       style={styles.textInput} />
                                    </View>

                  <View style={styles.button_container}>
                  <View style={styles.button}>
                  <Feather
                  name="arrow-right"
                  color="white"
                  size={25} />
                  </View>
                  </View>
                </View>
                </View>
                }
            </View>
        );
    }

render(){
 return(
  <View style = {styles.container}>
  <StatusBar hidden={true} />
  <View style = {styles.header}>
  <Image
    source={require("./src/loginlogo.png")}
    style ={styles.image}
    resizeMode="stretch"
/>
<Text style= {[styles.text,{
 fontSize:20,
 marginTop:5
 }]}> IOT SYSTEM</Text>

 <Text style= {[styles.text,{
 fontSize:12,
 marginTop:5
 }]}> Manage entire school with just a tap</Text>
  </View>
   <View style = {styles.footer}>
   <Carousel
                   sliderWidth={screenWidth}
                   sliderHeight={screenWidth}
                   itemWidth={screenWidth - 60}
                   data={this.state.entries}
                   renderItem={this._renderItem}
                   hasParallaxImages={true}
               />
    </View>
  </View>
 )
}
}

const screenWidth = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4399AD'
  },
   header: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    footer: {
          flex: 1,
          justifyContent:'center',
          alignItems:'center'
        },
    image:{
    width:screenWidth/2,
    height: screenWidth/2,
    },
    text:{
    fontWeight: 'bold',
    color: 'white',
    },
      item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
      },
      imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
      },
      absolute:{
      position: 'absolute',
      width:'100%',
      height:'100%',
      },
      box: {
      flex:1,
      justifyContent:'center',
      padding:20,
      },
      title:{
      color:"#4399AD",
      fontSize:30,
      fontWeight:'bold'
      },
      action:{
      marginTop:10
      },
      textInput: {
      color:'gray',
      backgroundColor:'#f2f2f2',
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:5

      },
       button_container:{
       alignItems:'flex-end',
       },

       button:{
       width:100,
       backgroundColor:'#4399AD',
       marginTop:15,
       borderRadius:50,
       justifyContent: 'center',
       alignItems:'center',
       paddingVertical:10
       }
});

