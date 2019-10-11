import React, { Component } from 'react';
import { StyleSheet, Image, PixelRatio,TouchableOpacity, FlatList } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon, Text, Item, Input, View, Button, Card, CardItem, Body } from 'native-base';
import ImagePicker from 'react-native-image-picker';

export default class EditProfile extends Component {
    state = {
        avatarSource: null,
        videoSource: null,
      };
    
      constructor(props) {
        super(props);
    
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
        this.selectVideoTapped = this.selectVideoTapped.bind(this);
      }

      selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
          },
        };
    
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = {uri: response.uri};
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              avatarSource: source,
            });
          }
        });
      }
    
      selectVideoTapped() {
        const options = {
          title: 'Video Picker',
          takePhotoButtonTitle: 'Take Video...',
          mediaType: 'video',
          videoQuality: 'medium',
        };
    
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled video picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            this.setState({
              videoSource: response.uri,
            });
          }
        });
      }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ alignItems: 'center', marginVertical: 25 }}>
                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <View
                    style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                    {this.state.avatarSource === null ? (
                    <Text>Select a Photo</Text>
                    ) : (
                    <Image style={styles.avatar} source={this.state.avatarSource} />
                    )}
                </View>
                    </TouchableOpacity>
                        {/* <TouchableOpacity>
                        <Image source={{ uri: 'https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/36828618_1991963964156435_2359163301616680960_n.jpg?_nc_cat=108&_nc_eui2=AeH5HI_DQv_jprY-I0CJ4SgJBIgk6C2usFR4j6ADAAfriNxfAOt2Tw8jMUuBDCAAVLF_hcRIFwfXIqw2aVR5mWM8uDtYVQ1_LkaVqKcSSi0mOQ&_nc_oc=AQnlsV4XWF5Z6R09ePLpQwkqDLwJpKJVTxYiHyJ7FHmhbeLdtZWb40WeTlyP0e36uS8&_nc_ht=scontent.fcgk8-1.fna&oh=3260aca4b9b03fe7c540412fa60f5fe1&oe=5E201CD9' }} style={styles.profImg} />
                        </TouchableOpacity> */}
                    </View>
                    <View style={{marginHorizontal:30}}>
                    <Item rounded>
                        <Input placeholder='Your Name'/>
                     </Item> 
                    </View>
                    
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

    profImg: {
        width: 200,
        height: 200,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#38D40A'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        borderRadius: 75,
        width: 200,
        height: 200,
      },
    footer: {
        backgroundColor: '#39c45e',
    }
 })