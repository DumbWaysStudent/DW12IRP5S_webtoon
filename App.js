
// import Login from './components/screen/Login';
// import ForYou from './components/screen/ForYou';
// import Detail from './components/screen/Detail';
// import Favourite from './components/screen/Favourite';

// export default Favourite;
import React, {Component} from 'react';
import {Icon} from 'native-base';
import {Share} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator,  } from 'react-navigation-stack';

import Login from './components/screen/Login'
import ForYou from './components/screen/ForYou'
import Detail from './components/screen/Detail'
import DetailEpisode from './components/screen/DetailEpisode'
import Favourite from './components/screen/Favourite'
import Profile from './components/screen/Profile'

const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

const SignedOut = createStackNavigator(
    {
      Login: {
        screen: Login,
        title: 'Login',
        navigationOptions: {header: null},
      }
    },
    {
      initialRouteName: 'Login',
    }
  );

const SignedIn = createStackNavigator(
    {
        ForYou: {
            screen: ForYou,
            title: 'ForYou',
            navigationOptions: {header: null}
          },
        DetailEpisode : {
            screen : DetailEpisode,
            title : 'DetailEpisode',
            navigationOptions : () => ({
              title : "Comics",
              headerStyle: {
                  backgroundColor : '#39c45e'
              }, 
              headerTintColor : '#101211',
              headerTitleStyles : {
                  fontWeight : 'bold',
              },
              headerRight :(
                  <Icon name="share-alt" style={{color:'white', marginRight: 15}} onPress={() => onShare()}/>
              ),
  
          })

          },
          Detail: {
              screen: Detail,
              title: 'Detail',
              navigationOptions : () => ({
                title : "Detail Comics",
                headerStyle: {
                    backgroundColor : '#39c45e'
                }, 
                headerTintColor : '#101211',
                headerTitleStyles : {
                    fontWeight : 'bold',
                },
                headerRight :(
                    <Icon name="share-alt" style={{color:'white', marginRight: 15}} onPress={() => onShare()}/>
                ),
    
            })
          },
          Favourite: {
              screen: Favourite,
              title : Favourite,
              navigationOptions: {header: null}

          },
          Profile: {
            screen: Profile,
            title: Profile,
            navigationOptions: {header: null},
            navigationOptions : () => ({
              title : "Profile",
              headerStyle: {
                  backgroundColor : '#39c45e'
              }, 
              headerTintColor : '#101211',
              headerTitleStyles : {
                  fontWeight : 'bold',
              },
              headerRight :(
                  <Icon name="ios-create" style={{color:'white', marginRight: 15}} />
              ),
  
          })

          }
    },
    {
        initialRouteName: 'ForYou',
    });

    const Switch = createSwitchNavigator({
        SignedIn: SignedIn, 
        SignedOut: SignedOut
        },
        {
        initialRouteName: "SignedOut",
        });


    export default createAppContainer(Switch);