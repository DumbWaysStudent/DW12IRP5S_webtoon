import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Footer, FooterTab, Icon, Text, View, Button, Card, CardItem } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import {ip} from '../ip'

export default class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {
            token : '',
            banners : []
        }
    }

    async SessionToken (){
        try {
            const tokening = await AsyncStorage.getItem('userToken');
            if (tokening !== null){
                this.setState({token : tokening})
            }else{
                alert('must login first')
                this.props.navigation.navigate('Login')
            }
        }catch (p){
            console.log(error)
        }
    }

    async componentDidMount(){
        this.SessionToken()
        const id = await AsyncStorage.getItem('userId')
        const tokening = await AsyncStorage.getItem ('userToken')
        let new_id = JSON.parse(id)
        console.log('id',new_id)
        await axios.get(`${ip}/user/${new_id}`, {
            headers : {
                'Authorization': 'Bearer '+ tokening
            }
        })
        .then (res => {
            const banners = res.data
            this.setState({banners})
            console.log(banners)
        })
    }

    async logout() {
        try {
          await AsyncStorage.removeItem('userToken');
          this.componentDidMount()
        }
        catch(exception) {
          return false;
        }
      }

    static navigationOptions = ({navigation}) => {
        return {
            title : "Profile",
              headerStyle: {
                  backgroundColor : '#39c45e'
              }, 
              headerTintColor : 'white',
              headerTitleStyles : {
                  fontWeight : 'bold',
              },
              headerRight :(
                  <Icon name="ios-create" style={{color:'white', marginRight: 15}} onPress= {() => navigation.navigate('EditProfile')}/>
              ),
        };
    };
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ alignItems: 'center', marginVertical: 50 }}>
                        <Image source={{ uri: 'https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/36828618_1991963964156435_2359163301616680960_n.jpg?_nc_cat=108&_nc_eui2=AeH5HI_DQv_jprY-I0CJ4SgJBIgk6C2usFR4j6ADAAfriNxfAOt2Tw8jMUuBDCAAVLF_hcRIFwfXIqw2aVR5mWM8uDtYVQ1_LkaVqKcSSi0mOQ&_nc_oc=AQnlsV4XWF5Z6R09ePLpQwkqDLwJpKJVTxYiHyJ7FHmhbeLdtZWb40WeTlyP0e36uS8&_nc_ht=scontent.fcgk8-1.fna&oh=3260aca4b9b03fe7c540412fa60f5fe1&oe=5E201CD9' }} 
                        style={styles.profImg} />
                        <Text style={styles.ProfText} style={{fontSize:20}}> Rifqi Rizaldi Putra </Text>
                    </View>

                    <Card>
                        <CardItem header button onPress={() => this.props.navigation.navigate('MyWebtoon')} style={{backgroundColor:'#39c45e'}}>
                            <Text style={{color: 'white'}} > My Webtoon Creation </Text>
                        </CardItem>
                        <CardItem footer button onPress={() => this.props.navigation.navigate('Login')} style={{backgroundColor:'#39c45e'}}>
                            <Text style={{color: 'white'}}> Log Out </Text>
                        </CardItem>
                    </Card>
                </Content>

                <Footer>
                    <FooterTab style={styles.footer}>
                        <Button onPress={() => this.props.navigation.navigate('ForYou')} >
                            <Icon name="apps" style={styles.icon} />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Favourite')}>
                            <Icon name="star" style={styles.icon} />
                        </Button>
                        <Button>
                            <Icon name="person" style={styles.icon} onPress={() => this.props.navigation.navigate('Profile')} />
                        </Button>
                    </FooterTab>
                </Footer>




            </Container>
        );
    }
}


const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#39c45e',
    },

    icon: {
        color: 'white'
    },

    profImg: {
        width: 150,
        height: 150,
        borderRadius: 70,
        borderWidth: 2,
        borderColor: '#38D40A'
    },

    profText: {
        marginVertical: 20,
        marginTop : 20,
        fontWeight: 'bold',
        letterSpacing: 2,
      
    }

})