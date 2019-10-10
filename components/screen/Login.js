import React, {Component,} from 'react';
import {Container, Content, View ,Form, Item, CardItem, Icon, Input, Button, Text} from 'native-base';
import {StyleSheet,Image,} from 'react-native';

export default class Login extends Component{

  constructor(){
      super();
      this.state = {
        icon: "eye-off",
        pass: true,
        isDisabled: true,
        username: "",
        password: null, // menangkap nilai yang statis
      }
  }
      ChangeIcon = () => {
      this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off':'eye', // fungsi mengubah icon password menjadi visible and not
      pass: !prevState.pass
      }))
  }
      ValidationUs = (username) => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (reg.test(username) == true && this.state.password != null){
        this.setState({
          username, 
          isDisabled: false,
        })
      } else {
        this.setState({
          username,
          isDisabled: true // fungsi ini untuk validasi username mengikuti regex dan dikondisikan jika usernamme memenuhi kualifikasi benar dan pass tidak sama null maka >
      })}
      this.setState({
        username,
        })
  }
    ValidationPass = (password) => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (password != null && reg.test(this.state.username) == true){
          this.setState({
          password,
          isDisabled: false,
        })
      } else {
        this.setState({
          password,
          isDisabled: true
      })}
      this.setState({
        password
        })
  }

render(){ 
  return(
    <Container style={{backgroundColor:'#dce0dd'}}>
      <CardItem cardBody>
              <Image source={{uri: 'https://i1.wp.com/www.comicsbeat.com/wp-content/uploads/2019/06/webtoon-min-1.png?fit=1200%2C450&ssl=1'}} style={{height: 270, width: null, flex: 2}}/>
      </CardItem>
      <Content padder >
        <View style={styles.title}>
       
          <Text style={styles.login}>Log In</Text>
          <Text>Login with your account WebToon</Text>
        </View>
        
        <View style={styles.container}>
          <Form >
            <Text style={styles.label}>Username</Text>
              <Item rounded style={{backgroundColor:'white'}}>
                 <Icon active name='home' />
                  <Input placeholder="Username" onChangeText={username => this.ValidationUs(username)}
                  keyboardType= "Email"/>
              </Item>
            <Text style={styles.label}>Password</Text>
                <Item rounded style={{backgroundColor:'white'}}>
                    <Icon active name='lock' />
                    <Input placeholder="Password" secureTextEntry= {this.state.pass} onChangeText={password => this.ValidationPass(password)}/>
                    <Icon name={this.state.icon} onPress={()=> this.ChangeIcon()}/>
                </Item>
          </Form>
          <Button succes rounded block style={styles.button}
              success disabled = {this.state.isDisabled} rounded block style={styles.button} 
              onPress={() => this.props.navigation.navigate('ForYou')}
              >
            <Text >Log In</Text>
          </Button>
        </View>

    </Content>
  </Container>
 
  );
}
}
const styles = StyleSheet.create({
  title:{
  alignItems: "center", 
  marginTop:30, 
  marginBottom:30, 
  fontFamily: 'Austin-Light'
  },
  login: {
  fontSize: 30, 
  marginBottom:3, 
  },
  container: {
  paddingHorizontal: 30,
 
  },
  label: {
  padding: 5
  },
  button:{
  marginTop: 25,
  justifyContent : 'center'
  }
  })
