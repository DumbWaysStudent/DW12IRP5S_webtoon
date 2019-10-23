import React, {Component} from 'react';
import {StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {Container, Content, View, Row, Text} from 'native-base';
import axios from 'axios';
import {ip} from '../ip'

export default class Detail extends Component{

constructor(props){
    super();
    this.state = {
            banners : [],
            id : props.navigation.getParam(`detail`)
        }
    }

    componentDidMount(){
        axios.get(`${ip}/webtoon/${this.state.id}/episodes`)
        // `${ip}/webtoon/${this.state.epid}/episode/${this.state.id}
        .then(res => {
            const banners = res.data
            console.log(banners)
            this.setState({banners})
        })
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
                            <Row style={styles.Rows}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode',{toon:item.id, epsid:item.titleId})}>
                                <Image style={styles.conImg} source ={{uri : item.image}}/>
                                </TouchableOpacity>
                                <View style={styles.conval}>
                                    <Text style={styles.epstxt}>{item.episode}</Text>
                                    <Text style={{marginTop : 10, fontSize:13}}>{item.date}</Text>
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
        marginHorizontal : 10,
        marginTop : 10,
        alignSelf: 'center',
    },

    headImg: {
        width: 400,
        height: 220,
        borderWidth: 2,
        borderColor: 'black'
    },

    Rows : {
        borderColor : 'white',
    },
    headtxt : {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom :10
    },

    conView : {
        marginHorizontal:10,
        marginBottom : 10,
    },

    conImg: {
        width: 100,
        height: 100,
        marginTop : 3,
        borderWidth: 2,
        borderRadius : 20,
        borderColor: 'black'
    },

    conval: {
        margin : 10,
    },

    epstxt : {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop : 20,
        
    
    }

})