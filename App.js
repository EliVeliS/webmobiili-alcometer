import { StatusBar } from 'expo-status-bar';
import {  Text, View, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import  Styles from './Styles';
import Radiobutton from './components/Radiobutton';
import Dropdown from './components/Dropdown';
import React,{ useState } from 'react';

export default function App() {

  const [checked, setChecked] = useState(-1); 
  const [weight, setWeight] = useState(-1);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [result, setResult] = useState(0);
  
  const calculate = () => {
    const forbidden = /[+\-=\[\]{};'A-Z`!@#:"\\|,.<>\/?~a-z$%^&*()_]/; 
    if(weight.length == 0 || forbidden.test(weight) || weight.length < 1) { 
      alert('Weight has not been set correctly!')
    } else if (checked == -1) {  
        alert('You must select a gender before the calculation can complete!')
    } else {
        let type = checked == 0 ? type = 0.7  : type = 0.6 
          let result = ((bottles*0.33)*8*4.5 - (hours*(weight / 10)))/(weight*type); 
        if(result > 0) {
          setResult(result.toFixed(2)); 
        } else { 
          setResult(0.00); 
        }
    }
  };

  return (
    <View style={Styles.container}>
      <ScrollView>
        <Text style={Styles.title}>ALCOMETER</Text>
        <Text style={Styles.slogan}>App to test how drunk you are</Text>
          <Text style={Styles.secondTitle2}>Weight :</Text>
           <TextInput style={Styles.textInput} placeholder={" Set weight..."} keyboardType="numeric" value = {weight} onChangeText={ setWeight }/>
              <Dropdown bottles = {bottles} setBottles = { setBottles } hours = { hours } setHours = { setHours }/>
              <Text style={Styles.secondTitle}>Gender :</Text>
                <Radiobutton  checked = {checked} setChecked = {setChecked}/>  
                <Text style={Styles.secondTitle2}>________________________________</Text>
                <View style = {Styles.spacing}/>   
                <Button title = {'Calculate'}  onPress = {() => calculate()}/>
                <View style = {Styles.spacing}/> 
                  <View style = {Styles.resultContainer}>
                      <Text style={Styles.black}>Result :</Text>
                      <Text style = { [result <= 0.5 ? Styles.green : result >= 0.5 && result <= 1.2 ? Styles.yellow : Styles.red ]}>{result}</Text>
                      <Text style={Styles.black}>per mil</Text>
                  </View>                               
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

