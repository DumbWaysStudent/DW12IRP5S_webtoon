import React, { Component } from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon, Text, Item, Input, View, Button, Card, CardItem, Body } from 'native-base';

export default class Profile extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title : "Profile",
              headerStyle: {
                  backgroundColor : '#39c45e'
              }, 
              headerTintColor : '#101211',
              headerTitleStyles : {
                  fontWeight : 'bold',
              },
              headerRight :(
                  <Icon name="ios-create" style={{color:'white', marginRight: 15}} onPress= {() => navigation.navigate('EditProfile')}/>
              ),
        };
    };
    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'#dce0dd'}}>
                    <View style={{ alignItems: 'center', marginVertical: 30 }}>

                        <Image source={{ uri: 'https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/36828618_1991963964156435_2359163301616680960_n.jpg?_nc_cat=108&_nc_eui2=AeH5HI_DQv_jprY-I0CJ4SgJBIgk6C2usFR4j6ADAAfriNxfAOt2Tw8jMUuBDCAAVLF_hcRIFwfXIqw2aVR5mWM8uDtYVQ1_LkaVqKcSSi0mOQ&_nc_oc=AQnlsV4XWF5Z6R09ePLpQwkqDLwJpKJVTxYiHyJ7FHmhbeLdtZWb40WeTlyP0e36uS8&_nc_ht=scontent.fcgk8-1.fna&oh=3260aca4b9b03fe7c540412fa60f5fe1&oe=5E201CD9' }} style={styles.profImg} />

                        <Text style={styles.ProfText}> Rifqi Rizaldi Putra </Text>
                    </View>

                    <Card>
                        <CardItem header button onPress={() => this.props.navigation.navigate('MyWebtoon')} style={{backgroundColor:'#39c45e'}}>
                            <Text > My Webtoon Creation </Text>
                        </CardItem>
                        <CardItem footer button onPress={() => alert(" Thank You ")} style={{backgroundColor:'#39c45e'}}>
                            <Text> Log Out </Text>
                        </CardItem>
                    </Card>
                </Content>

                <Footer>
                    <FooterTab style={styles.footer}>
                        <Button onPress={() => this.props.navigation.navigate('ForYou')} >
                            <Icon name="apps" style={styles.icon} />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Favourite')}>
                            <Icon name="star" style={styles.icon} />
                        </Button>
                        <Button>
                            <Icon name="person" style={styles.icon} onPress={() => this.props.navigation.navigate('Profile')} />
                        </Button>
                    </FooterTab>
                </Footer>




            </Container>
        );
    }
}


const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#39c45e',
    },

    // icon: {
    //     color: 'white'
    // },

    profImg: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 4,
        borderColor: '#38D40A'
    },

    profText: {
        marginVertical: 15,
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 18
    }

})