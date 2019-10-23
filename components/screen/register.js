import React, {Component,} from 'react';
import {Container, Content, View ,Form, Item, CardItem, Icon, Input,Button, Text } from 'native-base';
import {StyleSheet,Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {ip} from '../ip'

export default class register extends Component{

  constructor(){
      super();
      this.state = {
        icon: "eye-off",
        pass: true,
        allow :true,              // menangkap nilai yang statis
        isDisabled: true,
        username: "",
        name : "",
        token : "",
        password: "" ,
        tokening : "",
        userId : 0
      }
  }

    register = async () => {
      try{
        let tempUser = {
          email : this.state.username,
          password : this.state.password,
          name : this.state.name
        }
        await axios.post(`${ip}/register`,tempUser)
        .then((response) => {
          if (typeof response.data !== 'undefined'){
            alert('user registered')
            this.props.navigation.navigate('Login')
          }else{
            alert(' Registration Failed')
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
      this.register()
      }else{
      this.state.allow = false; 
      }
    }else{  
  }
  }

render(){ 
  return(
    <Container style={{backgroundColor:'#dce0dd',}}>
  
      <Content padder>
        <View style={styles.title}>
          <Text style={styles.login}>Register</Text>
          <Text>Create your account WebToon</Text>
        </View>
        
        <View style={styles.container}>
          <Form >
          <Text style={styles.label}>Your Name</Text>
              <Item rounded style={{backgroundColor:'white'}}>
                 <Icon active name='person' />
                  <Input placeholder="Your Name"  onChangeText={(name) => this.setState({name: name})}
                  keyboardType= "Email"/>
              </Item>
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
            <Text >Register Now</Text>
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
        fontFamily: 'Austin-Light',
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
