import React, {Component} from 'react';
import {StyleSheet, View, Text, Image,TouchableOpacity, FlatList} from 'react-native';
import {Container, Content, Row, Fab, Icon} from 'native-base';

export default class MyWebtoon extends Component{

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
        width: 80,
        height: 80,
        borderWidth: 3,
        borderColor: 'black'
    },

    conval: {
        margin : 15,
    },

    epstxt : {
        fontSize: 20,
        fontWeight: 'bold'
    }
})