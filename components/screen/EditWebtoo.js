import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { View, Text, Content, Container, Row, Item, Input, Button, Icon, Label } from 'native-base';

export default class EditWebToo extends Component{
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
                <FlatList
                    data={this.state.banners}
                    renderItem={({ item }) => (
                        <View style={styles.comiccon}>
                            <Image style={styles.comicImage} source={{ uri: item.image }} />
                        </View>
                    )}
                />

            </Content>
        </Container>
    )
}
}
const styles = StyleSheet.create({

comiccon: {
    margin: 5,
    alignItems: 'center'
},
comicImage: {
    width: 400,
    height: 600,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 2
}
});
