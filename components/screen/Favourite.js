import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {Container, Content, Item, Header, Button,Footer, FooterTab, Input, Row, Icon} from 'native-base';

export default class Favourite extends Component{

    constructor(){
        super();
        this.state = {
                banners : [{
                    title: 'The Secret of Angel',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png',
                    Text: '100 Favourite'
                }, {
                    title: 'Pasutri Gaje',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg',
                    Text:  '90 Favourite'
                }, {
                    title: 'Young Mom',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/05/my-anti-fan-cover-1-8c08a8bc18c2eb167c7d63c3d9cc33f1_600x400.jpg',
                    Text:  '70 Favourite'
                },{
                    title: 'Crazy Sister',
                    image: 'https://66.media.tumblr.com/7973d478696a54d5220025dd8058040d/tumblr_peo7iir2Ra1rkxh0o_540.png',
                    Text:  '50 Favourite'
                }]
             }
        }

    render(){
        return(
            <Container>
                 <Header searchBar style={{backgroundColor:'#39c45e'}}>
                 <Item rounded>
                    <Input placeholder="Search" />
                    <Icon name="ios-search"/>
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                </Header>
            <Content>
            <FlatList
                    data={this.state.banners}
                    renderItem={({ item }) => (
                        <View style={styles.conView}>
                            <Row style={{marginTop:10}}>
                                <Image style={styles.conImg} source ={{uri : item.image}}/>
                                <View style={styles.conval}>
                                    <Text style={styles.epstxt}>{item.title}</Text>
                                    <Text style={{marginTop : 10}}>{item.Text}</Text>
                                </View>
                            </Row>
                        </View>
                    )}

                   />
            </Content>
            <Footer>
                    <FooterTab style={{backgroundColor:'#39c45e'}}>
                        <Button onPress={() => this.props.navigation.navigate('ForYou')}>
                            <Icon name ='apps' style={styles.icon}/>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Favourite')}>
                            <Icon name = 'star' style={styles.icon}/>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name = 'person'style={styles.icon}/>
                        </Button>
                    </FooterTab>
                </Footer>
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
        borderWidth: 5,
        borderColor: 'black'
    },

    icon : {
        color : 'white'
    },

    conval: {
        margin : 15,
    },

    epstxt : {
        fontSize: 20,
        fontWeight: 'bold'
    }
})