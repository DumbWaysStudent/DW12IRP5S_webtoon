import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { View, Text, Content, Container, Row, Item, Input, Button, Icon, Label } from 'native-base';

export default class EditWebToo extends Component{
    constructor(){
        super();
        this.state = {
                active : false,
                banners : [{
                    title: 'The Secret of Angel',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png',
                    Text: '5 Episode'
                }, {
                    title: 'Pasutri Gaje',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg',
                    Text:  '10 Episode'
                }, {
                    title: 'Young Mom',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/05/my-anti-fan-cover-1-8c08a8bc18c2eb167c7d63c3d9cc33f1_600x400.jpg',
                    Text:  '12 Episode'
                },{
                    title: 'Crazy Sister',
                    image: 'https://66.media.tumblr.com/7973d478696a54d5220025dd8058040d/tumblr_peo7iir2Ra1rkxh0o_540.png',
                    Text:  '12 Episode'
                }]
             }
}
render() {
    return (
        <Container>

            <Content>
                <View style={{ marginHorizontal: 20, marginTop: 20 }} >
                    <Item regular >
                        <Label style={{ fontWeight: 'bold', fontSize: 20 }}> {this.props.navigation.getParam('eps')} </Label>
                        <Input />
                    </Item>
                </View>

                <View style={styles.headcon}>
                    <Text style={styles.headtxt}> Add Images </Text>
                </View>

                <FlatList
                    data={this.state.banners}
                    renderItem={({ item }) => (

                        <View style={styles.conView}>
                            <Row style={{ marginTop: 10 }}>

                                <Image style={styles.conImg} source={{ uri: item.image }} />


                                <View style={styles.conval}>
                                    <Text style={styles.epstxt}> {item.Text} </Text>
                                </View>

                            </Row>
                        </View>

                    )}
                    keyExtractor={item => item.id}
                />

                <Button block rounded success style={{ marginTop: 20, width: 300, marginHorizontal: 60 }}>
                    <Text> + Image </Text>
                </Button>
                <Button block rounded warning style={{ marginTop: 10, width: 300, marginHorizontal: 60 }}
                    onPress={() => alert('On Process')} >
                    <Text> - Delete Episode </Text>
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
    marginHorizontal: 25
},

conImg: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'black'
},

conval: {
    margin: 20,

},

epstxt: {
    fontSize: 20,
    fontWeight: 'bold'
},
})