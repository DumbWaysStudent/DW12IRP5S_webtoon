import React, {Component} from 'react';
import {StyleSheet, Image, FlatList} from 'react-native';
import {Container, Content, View} from 'native-base';

export default class DetailEpisode extends Component {
    constructor(){
        super();
        this.state = {
                banners : [{
                    image: 'https://i.pinimg.com/originals/b1/ec/ce/b1ecce8b8b84345d2113b62660ac30d5.jpg',
                }, {
                    image: 'https://data.whicdn.com/images/293083936/large.jpg',
                }, {
                    image: 'https://pm1.narvii.com/7088/7d606783f72f67dfa049c3fd0dd234a39794e48ar1-750-852v2_hq.jpg'
                }]
            }
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
      marginRight:20},
    AllContent: {
      paddingVertical: 20},
    AllCon: {
      margin: 15, 
      marginTop: 0},
    AllImg: { 
      width: 380, 
      height: 500, 
      }
  })
