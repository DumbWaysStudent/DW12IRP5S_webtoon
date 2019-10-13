import React, {Component} from 'react';
import {StyleSheet, Image, View, Dimensions, TouchableOpacity ,StatusBar,ScrollView} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import {Container, Header, Content, Footer, Button, FooterTab, Input, Item, Row, Text, Icon } from 'native-base';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 250;

export default class ForYou extends Component{

    constructor(){
        super();
        this.state = {
                banners : [{
                    title: 'The Secret Angel',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png'
                }, {
                    title: 'Pasutri Gaje',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg'
                }, {
                    title: 'Young Mom',
                    image: 'https://cdn.idntimes.com/content-images/community/2019/05/my-anti-fan-cover-1-8c08a8bc18c2eb167c7d63c3d9cc33f1_600x400.jpg'
                },{
                    title: 'Crazy Sister',
                    image: 'https://66.media.tumblr.com/7973d478696a54d5220025dd8058040d/tumblr_peo7iir2Ra1rkxh0o_540.png'
                }]
    }
}
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight, borderWidth: 2 }} source={{ uri: image }} />
            </View>
        );
    }
    render() {
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
                    <View style={styles.container}>
                        <Carousel
                            autoplay
                            autoplayTimeout={5000}
                            loop
                            index={0}
                            pageSize={BannerWidth}
                        >
                        {this.state.banners.map((image, index) => this.renderPage(image.image, index))}
                        </Carousel>
                    </View> 
                    <View style={styles.Scroll}>
                        <Text style={styles.textStyle}>Favorites</Text>
                    <ScrollView horizontal={true}>
                        {this.state.banners.map((image) => (
                            <View style={styles.Horizontal} key={image.image}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {pictures:image.image, title:image.title})}> 
                                    <Image source={{ uri : image.image}} style={styles.Scrolimg}/>
                                    <Text style={styles.Scroltxt}> { image.title} </Text>
                                </TouchableOpacity>
                            </View> // {pictures:image.image, title:image.title})} pictures penampung nilai
                        ))} 
                    </ScrollView>
                    </View>

                    <View style={styles.Radius} >
                        <Text style={styles.textAll}>All Comics </Text>
                        {this.state.banners.map((image) =>(
                            <View key={image.image} style={styles.Images}>
                                <Row>
                                    <Image source={{ uri : image.image}} style={styles.rowimg}/>
                                    <View style={styles.titleall}>
                                        <Text style={styles.rowtxt}>{image.title}</Text>
                                        <Button rounded small success onPress={() => this.props.navigation.navigate('Favourite')}><Text> + Add To Favorite </Text></Button>
                                    </View> 
                                </Row>
                            </View>
                        ))}
                    </View>
                    </Content>
            
                <Footer>
                    <FooterTab style={{backgroundColor:'#39c45e'}}>
                        <Button>
                            <Icon name ='apps' style={styles.icon}/>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Favourite')}>
                            <Icon name = 'star' style={styles.icon}/>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name = 'person' style={styles.icon}/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding : 1
    },
    textStyle: {
        fontWeight : 'bold',
        fontSize : 23,
        margin : 8
    },
    Scroll: {
        margin: 10,
        marginBottom : 10,
        marginTop : 10
    },
    textStyle: {
        fontSize :22,
        fontFamily : 'Georgia',
        fontWeight : 'bold'
    },
    Horizontal: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop : 5
    },
    Scrolimg: {
        width: 150,
        height: 150,
        marginRight: 25,
        marginTop: 5
    }, 
    Scroltxt: {
        padding: 2,
        alignItems : 'center'

    },
    icon : {
        color : 'white'
    },
    Radius:{
        borderRadius: 50
    },
    textAll: {
        fontSize: 23,
        fontFamily :'Georgia',
        fontWeight :'bold',
        marginLeft : 10,
        marginTop: 5,
        marginBottom : 5
    },
    rowimg: {
        width: 110,
        height: 110,
        marginTop: 5,
        borderRadius : 20,
        borderWidth: 2,
        marginHorizontal : 10,
        marginVertical: 10

    },
    titleall:{
        alignItems: 'center',
        marginLeft : 0,
        marginBottom: 40
    },
    rowtxt: {
        marginTop: 10,
        padding: 15,
        fontWeight: 'bold'
    }


})