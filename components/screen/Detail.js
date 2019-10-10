import React, {Component} from 'react';
import {StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {Container, Content, View, Row, Text} from 'native-base';

export default class Detail extends Component{

constructor(){
    super();
    this.state = {
            banners : [{
                id: '1',
                Eps : 'Eps 1',
                title: 'The Secret of Angel',
                image: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png',
                date : '1 Januari 2019'
            }, {
                id: '2',
                Eps : 'Eps 2',
                title: 'Pasutri Gaje',
                image: 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg',
                date : '2 Januari 2019'
            }, {
                id: '3',
                Eps : 'Eps 3',
                title: 'Young Mom',
                image: 'https://cdn.idntimes.com/content-images/community/2019/05/my-anti-fan-cover-1-8c08a8bc18c2eb167c7d63c3d9cc33f1_600x400.jpg',
                date : '3 Januari 2019'
            },{
                id: '4',
                Eps : 'Eps 4',
                title: 'Crazy Sister',
                image: 'https://66.media.tumblr.com/7973d478696a54d5220025dd8058040d/tumblr_peo7iir2Ra1rkxh0o_540.png',
                date : '4 Januari 2019'
            }]
        }
    }
    
    render(){
        return(
            <Container style={{backgroundColor:'#dce0dd'}}>
                <Content > 
                    <View style={styles.headcon}>
                        <Image style={styles.headImg} source={{ uri : this.props.navigation.getParam('pictures') }} />
                        <Text style={styles.headtxt}> {this.props.navigation.getParam('title')} </Text>
                    </View>
                   <FlatList
                    data={this.state.banners}
                    renderItem={({ item }) => (
                        <View style={styles.conView}>
                            <Row>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode')}>
                                <Image style={styles.conImg} source ={{uri : item.image}}/>
                                </TouchableOpacity>
                                <View style={styles.conval}>
                                    <Text style={styles.epstxt}>{item.Eps}</Text>
                                    <Text style={{marginTop : 10}}>{item.date}</Text>
                                </View>
                            </Row>
                        </View>
                    )}

                   />
                </Content>
            </Container>

        );
    }
}
const styles = StyleSheet.create({

    headcon: {
        marginHorizontal : 15,
        marginTop : 15,
        alignSelf: 'center'
    },

    headImg: {
        width: 360,
        height: 220,
        borderWidth: 3,
        borderColor: 'black'
    },

    headtxt : {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom :20
    },

    conView : {
        marginHorizontal:30,
        marginBottom : 10
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
        fontSize: 20,
        fontWeight: 'bold'
    }

})