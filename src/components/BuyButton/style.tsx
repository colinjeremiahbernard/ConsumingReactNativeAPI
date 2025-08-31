import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
       backgroundColor:'yellow',
       padding:10,
       width:'80%',
       alignItems:'center',
       justifyContent:'center',
       alignSelf:'center',
       borderRadius:10
    },
    button: {
      flexDirection:'row',
    },
    icon:{
      marginRight: 10,
    },
    buttonText:{
      color:'brown',
      fontSize:20,
      fontWeight:'bold',
      fontStyle:'italic'
    }
});