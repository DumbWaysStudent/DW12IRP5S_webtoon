import React, {Component} from 'react';
import {StyleSheet, Image, FlatList} from 'react-native';
import {Container, Content, View} from 'native-base';
import axios from 'axios'
import {ip} from '../ip'

export default class DetailEpisode extends Component {
    constructor(props){
        super();
        this.state = {
                banners : [],
                id : props.navigation.getParam(`toon`),
                idToon : props.navigation.getParam(`epsid`)
            }
        }

        componentDidMount(){
            axios.get(`${ip}/webtoon/${this.state.idToon}/episode/${this.state.id}`)
            .then(res => {
                const banners = res.data
                console.log(banners)
                this.setState({banners})
            })
        }
        
    render(){
        return(
            <Container>
            <Content style={styles.AllContent}>
                <View style={styles.AllCon}> 
                    <FlatList
                    data = {this.state.banners}
                    renderItem = {({item}) => 
                    <View key={item.image}>
                        <Image style={styles.AllImg} source={{ uri: item.image }} />
                    </View>
                    }/>                          
                </View>
            </Content>   
        </Container>
        )
        }
    }

  const styles = StyleSheet.create({
    Share: {
      marginRight:20
    },
    AllContent: {
      paddingVertical: 10
    },
    AllCon: {
      margin:5, 
      marginTop: 0},
    AllImg: { 
      width: 400, 
      height: 500, 
      }
  })
