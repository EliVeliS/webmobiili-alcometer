import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        top: 30,
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
      },
      title: {
        textAlign: 'center',
        width: '100%',
        height: 100,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#6495ed',
      },
      slogan : {
        textAlign: 'center',
        marginTop: -58,
        marginBottom: 50,
        fontStyle: 'italic'
      },
      secondTitle: {
        fontStyle: 'Times New Roman',
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
      },
      secondTitle2: {
        textAlign: 'left',
        marginTop: -15,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
      },
      textInput: {
        width: '100%',
        borderRadius: 10,
        textAlign: 'left',
        fontSize: 25,
        marginLeft: 8,
        backgroundColor: 'lightGrey',
      },
      spacing: {
        width: 200,
        margin: 5
      },
      radioContainer: {
        margin: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      radioButton: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        justifyContent: 'center',
        borderColor: '#3740ff',
        alignItems: 'center',
      },
      selectedRadioButton: {  
          width: 20,
          height: 20,
          borderRadius: 50,
          backgroundColor: '#3740ff',   
      },
      dropDownContainer: {
        height: 290,
        flexWrap: 'wrap', 
        
      },
      dropDownItems: {
       border: 1,
       padding: 10,
       fontWeight: 'bold',
       borderWidth: 1,
       borderRadius: 10,
      },
      dropDownTitles : {
       borderColor: '#3740ff',
       width: 147,
       borderWidth: 1,
       borderRadius: 10,
       textAlign: 'left',
       fontSize: 25,
       marginLeft: 10,
       color: 'lightGrey',
      },    
      resultContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 30,
        marginBottom: 20,
      },
      black : {
        fontWeight: 'bold',
        fontSize: 30,
        color: "black",
      },
      black2 : {
        marginStart: -20,
        fontSize: 30,
        color: "black",
        marginTop: -20
      },
      black3 : {
        marginStart: -20,
        fontSize: 26,
        color: "black",
        marginTop: -20
      },
      green : {
        fontWeight: 'bold',
        fontSize: 50,
        color: "green",
      },
      yellow : {
        fontWeight: 'bold',
        fontSize: 50,
        color: "yellow",
      },
      red : {
        fontWeight: 'bold',
        fontSize: 50,
        color: "red",
      },
      calculateButton : {
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#1E6738',
        
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
      }
})