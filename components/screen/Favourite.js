import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,FlatList} from 'react-native';
import {Container, Content, Item, Header, Button,Footer, FooterTab, Input, Row, Icon} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'
import {ip} from '../ip';

export default class Favourite extends Component{

    constructor(){
        super();
        this.state = {
                banners : [],
                token : '',
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
    
    render(){
        return(
            <Container>
                 <Header searchBar style={{backgroundColor:'#39c45e'}}>
                 <Item rounded>
                    <Input placeholder="Search" />
                    <Icon name="ios-search"/>
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                </Header>
            <Content>
            <FlatList
                    data={this.state.banners}
                    renderItem={({ item }) => (
                        <View style={styles.conView}>
                            <Row style={{marginTop:10}}>
                                <Image style={styles.conImg} source ={{uri : item.image}}/>
                                <View style={styles.conval}>
                                    <Text style={styles.epstxt}>{item.title}</Text>
                                    <Text style={{marginTop : 5, color:'white'}}>{item.Text}</Text>
                                </View>
                            </Row>
                        </View>
                    )}

                   />
            </Content>
            <Footer>
                    <FooterTab style={{backgroundColor:'#39c45e'}}>
                        <Button onPress={() => this.props.navigation.navigate('ForYou')}>
                            <Icon name ='apps' style={styles.icon}/>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Favourite')}>
                            <Icon name = 'star' style={styles.icon}/>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name = 'person' style={styles.icon}/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    conView : {
        marginHorizontal:10,
        padding : 5,
        borderRadius : 5,
        backgroundColor : '#1bbf48',
        marginTop : 10
    },

    conImg: {
        width: 80,
        height: 80,
        marginBottom :10 ,
        marginLeft : 10,
        borderWidth: 2,
        borderColor: 'white'
    },

    conval: {
        margin : 10,
    },

    icon : {
        color : 'white'
    },
    epstxt : {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        alignItems : 'center'
    }
})