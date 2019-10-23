import React, {Component} from 'react';
import {StyleSheet, View, Text, Image,TouchableOpacity, FlatList} from 'react-native';
import {Container, Content, Row, Fab, Icon} from 'native-base';
import axios from 'axios';
import {ip} from '../ip'
import AsyncStorage from '@react-native-community/async-storage';

export default class MyWebtoon extends Component{

    constructor(){
        super();
        this.state = {
                active : false,
                banners : [],
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
        console.log(this.state.token)
        this.SessionToken()
        const id = await AsyncStorage.getItem('userId')
        let new_id = JSON.parse(id)
        await axios.get(`${ip}/user/${new_id}/webtoons`,{
            headers: {
              'Authorization': ' Bearer '+ this.state.token
            }
          })
          .then(res => {
              const banners = res.data
              this.setState({banners})
              console.log(banners)
          })
    }
   
    render(){
        return(
            <Container>
            <Content>
            <FlatList
                    data={this.state.banners}
                    renderItem={({ item }) => (
                        <View style={styles.conView}>
                            <Row style={{marginTop:10}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('EditComics')}>
                                <Image style={styles.conImg} source ={{uri : item.image}}/>
                                </TouchableOpacity>
                                <View style={styles.conval}>
                                    <Text style={styles.epstxt}>{item.title}</Text>
                                    <Text style={{marginTop : 10}}>{item.Text}</Text>
                                </View>
                            </Row>
                        </View>
                    )}
                   />
            </Content>
            <View >
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#39c45e' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('CreateWebtoon')}>
                    <Icon name="ios-create" />
            </Fab>
            </View>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    conView : {
        marginHorizontal:30,
     
        marginTop : 10
    },

    conImg: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'black'
    },

    conval: {
        margin : 15,
    },

    epstxt : {
        fontSize: 15,
        marginTop : 20,
        fontWeight: 'bold'
    }
})