import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { View, Text, Content, Container, Row, Item, Input, ListItem, Button } from 'native-base';
import axios from 'axios';
import {ip} from '../ip';
import AsyncStorage from '@react-native-community/async-storage';

export default class CreateWebtoon extends Component{

    constructor(){
        super();
        this.state = {
                banners : [],
                id : 0,
                newtitle : '',
                newGenre : '',
                newImage : '',
                update : false,
                toonid : 0
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

postwebtoon= async() =>{
    await axios.post(`${ip}/user/${this.state.id}/webtoon`,{
      title : this.state.newtitle,
      genre : this.state.newGenre,
      image : this.state.newImage
    },{
      headers : {
        'Authorization': ' Bearer '+ this.state.token
      }
    })
    .then(res => {
      alert(res)
      this.setState({modal : false})
    })
  }

  deletewebtoon=async(id)=>{
    await axios.delete(`${ip}/user/${this.state.id}/webtoon/${id}`,{
      headers : {
        'Authorization': ' Bearer '+ this.state.token
      }
    }).then(res=>{
      alert('deleted')
      this.setState()
    })
  }

  edit=async()=>{
    await axios.put(`${ip}/user/${this.state.id}/webtoon/${this.state.toonid}`,{
      title : this.state.newtitle,
      genre : this.state.newGenre,
      image : this.state.newImage
  },
  {
      headers : {
        'Authorization': ' Bearer '+ this.state.token
      }
    }).then(res=>{
      alert('updated', this.state.toonid)
      this.setState({update:false,modal:false})
    })
  }
//   allPage(image) {
//     return (
//         <ListItem style={styles.listItemContainer}>
//         <TouchableOpacity onPress={()=>this.props.navigation.navigate("CreateEpisode", {title :image})} style={{width: 66, height: 58}}>
//         <Image source={{uri : image.image}} style={{width: 66, height: 58}}></Image>
//         </TouchableOpacity>
//         <Body>
//         <Text style={{fontSize:20}}>{image.tittle}</Text>
//         <Text style={{fontSize:10}}>{image.createdAt}</Text>
//         </Body>
//         <Right> 
//         <TouchableOpacity onPress={()=> this.setState({modal:true,update:true,toonid: image.id})}>
//         <Icon size={25} style={{marginRight : 30}} name="pencil"  />
//         </TouchableOpacity>
//         <Icon size={25} style={{marginRight : 30,color : 'red',marginTop: 20}} name="trash" onPress={()=>this.deletewebtoon(image.id)} />
//         </Right>
//       </ListItem>
//     );
//   }
    render(){
        return(
            <Container>
                <Content>
                <View style={{ marginHorizontal: 20, marginTop: 20 }} >
                        <Item regular >
                            <Input placeholder='Add Title' />
                        </Item>
                    </View>
                    <View style={styles.headcon}>
                        <Text style={styles.headtxt}> Episode </Text>
                    </View>
                    <FlatList
                        data={this.state.banners}
                        renderItem={({ item }) => (

                            <View style={styles.conView}>
                                <Row style={{ marginTop: 10 }}>
                                        <Image style={styles.conImg} source={{ uri: item.image }} />
                                    <View style={styles.conval}>
                                        <Text style={styles.epstxt}> {item.title} </Text>
                                        <Text style={{ marginTop: 10, fontSize:13 }}> {item.date} </Text>
                                    </View>

                                </Row>
                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />

                    <Button block rounded success style={{ marginTop: 30, width: 300, marginHorizontal: 60 }} onPress={() => this.props.navigation.navigate('CreateEpisode')}>
                        <Text> + Add Episode </Text>
                    </Button>
                </Content>
            </Container>
        );

    }
}
const styles = StyleSheet.create({

    headImg: {
        width: 360,
        height: 220,
        borderWidth: 3,
        borderColor: 'black'
    },
    headtxt: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8
    },
    conImg: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'black'
    },
    listItemContainer:{
        width: Dimensions.get('window').width,
        marginTop: 5,
        backgroundColor: 'white',
      },
    epstxt: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    conval: {
        margin: 15,
    },
    headcon: {
        marginHorizontal: 15,
        marginTop: 5,
    },
    conView: {
        marginHorizontal: 25
    }

})


