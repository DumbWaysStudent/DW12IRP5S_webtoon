import React, {Component,} from 'react';
import {Container, Content, View ,Form, Item, CardItem, Icon, Input,Button, Text ,Toast} from 'native-base';
import {StyleSheet,Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {ip} from '../ip'

export default class Login extends Component{

  constructor(){
      super();
      this.state = {
        icon: "eye-off",
        pass: true,
        allow :true,              // menangkap nilai yang statis
        isDisabled: true,
        username: "",
        token : "",
        password: "" ,
        tokening : "",
        userId : 0
      }
  }

    async setitem(){
      AsyncStorage.setItem('userToken', this.state.token);
      AsyncStorage.setItem('userId', JSON.stringify(this.state.userId)) // json.stringfy pengubah jadi string
    }
    login = async () => {
      try{
        let tempUser = {
          email : this.state.username,
          password : this.state.password
        }
        await axios.post(`${ip}/login`,tempUser)
        .then((response) => {
          if (typeof response.data.token !== 'undefined'){
            this.setState({token: response.data.token})
            this.setState({userId : response.data.user.id})
            this.setitem()
            this.props.navigation.navigate('ForYou')
          }else{
            alert('Failed')
          }
        })
        .catch((error)=>{
          alert(error)
        });
      }
      catch (e){
        console.log(e)
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
      if (reg.test(username) == true && this.state.password){
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
  validate = () => {
    if ((this.state.username !== '') && (this.state.password!== '')){  
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.username)) {
      this.state.allow = true;
      this.login()
      }else{
      this.state.allow = false; 
      }
    }else{  
  }
  }

render(){ 
  return(
    <Container style={{backgroundColor:'#dce0dd', borderRadius:20}}>
      <CardItem cardBody>
              <Image source={{uri: 'https://i1.wp.com/www.comicsbeat.com/wp-content/uploads/2019/06/webtoon-min-1.png?fit=1200%2C450&ssl=1'}} style={{height: 270, width: null, flex: 2}}/>
      </CardItem>
      <Content padder>
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
              onPress={() => this.validate()}
          >
            <Text >Log In</Text>
          </Button>
          <View style={styles.titlees}>
              <Text style={styles.signupText}>Dont have an account yet?</Text>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate("register")}>
              <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
          </View>
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
  titlees:{
    flexGrow: 1,
    alignItems:'flex-end',    
    justifyContent :'center',
    paddingVertical:10,
    flexDirection:'row'
  },
  signupButton: {
    color:'#39c45e',
    fontSize:16, 
    fontWeight:'500'
    },
    
  login: {
    fontSize: 30, 
    marginBottom:3, 
    },
  container: {
    paddingHorizontal: 30
  
  },
  label: {
    padding: 5
  },
  button:{
    marginTop: 25,
    justifyContent : 'center'
  }
  })
