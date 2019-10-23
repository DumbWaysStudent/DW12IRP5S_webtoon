import React, {Component} from 'react';
import {StyleSheet, Image, View, Dimensions, TouchableOpacity ,ScrollView} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import {Container, Header, Content, Footer, Button, FooterTab, Input, Item, Row, CardItem, Card,Text, Icon } from 'native-base';
import axios from 'axios';
import {ip} from '../ip'
import AsyncStorage from '@react-native-community/async-storage';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

export default class ForYou extends Component{

    constructor(){
        super();
        this.state = {
                banners : [], 
                token : '',
                search : ''
    }
}
   async componentDidMount(){
        axios.get( `${ip}/webtoons`)
        .then(res => {
            const banners = res.data
            console.log(banners)
            this.setState({banners})
        })
    }

    async search(text){
        console.log(text)
        await axios.get(`${ip}/webtoons?title=${text}`)
        .then(res => {
          const banners = res.data
          this.setState({banners})
          console.log(banners)
        })
      }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight, borderWidth: 2}} source={{ uri: image }} />
            </View>
        );
    }
    render() {
        return(
            <Container>
                <Header searchBar style={{backgroundColor:'#39c45e'}}>
                <Item rounded>
                    <Input placeholder="Search" onChangeText={(text)=>{this.setState({search:text})}} />
                    <Icon name="ios-search" onPress={()=> this.search(this.state.search)}/>
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
                   < Card>
                   <CardItem cardBody style={{backgroundColor:"#fcfcfc"}}>
                        <Text style={styles.textStyle}>Favorites</Text>
                    </CardItem>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <CardItem cardBody style={{backgroundColor:"#fcfcfc"}}>
                        {this.state.banners.map((image) => (
                            <View style={styles.Horizontal} key={image.image}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {pictures:image.image, title:image.title, detail:image.id})}> 
                                    <Image source={{ uri : image.image}} style={styles.Scrolimg}/>
                                    <Text style={styles.Scroltxt}> { image.title} </Text>
                                </TouchableOpacity>   
                            </View> // {pictures:image.image, title:image.title})} pictures penampung nilai 
                        ))} 
                         
                         </CardItem> 
                    </ScrollView>
                    </Card>
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
        margin : 5
    },
    Scroll: {
        margin: 5,
        marginBottom : 10,
        marginTop : 20
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
        height: 160,
        marginEnd:10,
        marginTop: 5
    }, 
    Scroltxt: {
        padding: 1,
        alignItems : 'center',

    },
    icon : {
        color : 'white'
    },
    Radius:{
        marginBottom : 5,
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
        marginLeft : 5
        
    },
    rowtxt: {
        marginTop: 3,
        padding: 15,
        fontWeight: 'bold'
    }


})