import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { View, Text, Content, Container, Row, Item, Input, Button } from 'native-base';

export default class CreateWebtoon extends Component{

    constructor(){
        super();
        this.state = {
                banners : [{
                    id: '1',
                    Eps : 'Episode 1',
                    title: 'The Secret of Angel',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png',
                    date : '1 Januari 2019'
                }, {
                    id: '2',
                    Eps : 'Episode 2',
                    title: 'Pasutri Gaje',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg',
                    date : '2 Januari 2019'
                }, {
                    id: '3',
                    Eps : 'Episode 3',
                    title: 'Young Mom',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/05/my-anti-fan-cover-1-8c08a8bc18c2eb167c7d63c3d9cc33f1_600x400.jpg',
                    date : '3 Januari 2019'
                },{
                    id: '4',
                    Eps : 'Episode 4',
                    title: 'Crazy Sister',
                    image: 'https://66.media.tumblr.com/7973d478696a54d5220025dd8058040d/tumblr_peo7iir2Ra1rkxh0o_540.png',
                    date : '4 Januari 2019'
                }]
            }
}
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
                                        <Text style={styles.epstxt}> {item.Eps} </Text>
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


