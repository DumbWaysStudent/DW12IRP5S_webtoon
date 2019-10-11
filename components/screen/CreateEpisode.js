import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { View, Text, Content, Container, Row, Item, Input, Button } from 'native-base';

export default class CreateEpisode extends Component{
    constructor(){
        super();
        this.state = {
                banners : [{
                    id : '1',
                    title: '1.png',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png'
                }, {
                    id : '1',
                    title: '2.png',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg'
                }]
    }
}

render() {
    return (
        <Container>

            <Content>
                <View style={{ marginHorizontal: 20, marginTop: 20 }} >
                    <Item regular >
                        <Input placeholder='Name' />
                    </Item>
                </View>

                <View style={styles.headcon}>
                    <Text style={styles.headtxt}> Add Image </Text>
                </View>

                <FlatList
                    data={this.state.banners}
                    renderItem={({ item }) => (
                        <View style={styles.conView}>
                            <Row style={{ marginTop: 10 }}>
                                <Image style={styles.conImg} source={{ uri: item.image }} />
                                <View style={styles.conval}>
                                    <Text style={styles.epstxt}> {item.title} </Text>
                                    <Button small danger style={{ marginTop: 10 }} onPress={() => alert('Are you sure')} ><Text> Delete  </Text></Button>
                                </View>

                            </Row>
                        </View>
                    )}
                />

                <Button block rounded success style={{ marginTop: 30, width: 300, marginHorizontal: 60 }} onPress={() => this.props.navigation.navigate('EditComics')}>
                    <Text> + Image </Text>
                </Button>

            </Content>

        </Container>
    )
}
}

const styles = StyleSheet.create({

headcon: {
    marginHorizontal: 15,
    marginTop: 5,
},

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

conView: {
    marginHorizontal: 25,
    marginBottom : 10
},

conImg: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'black'
},

conval: {
    margin: 15,
},

epstxt: {
    fontSize: 20,
    fontWeight: 'bold'
},
})
