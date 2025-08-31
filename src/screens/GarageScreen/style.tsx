import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({ container: {
    flex: 1,
    width: '100%',
    backgroundColor:'aqua',
    alignItems:'center',
    justifyContent:'center'

},
cameraBox:{
    position:'relative',
    width: 350,
    height:'90%',
    overflow:'hidden',
    borderWidth: 2,
    borderColor:'brown',
    borderRadius: 10
},
triangleCorner:{
   position:'absolute',
   width: 0,
   height: 0,
   borderStyle:'solid',
   borderTopWidth:20,
   borderTopColor:'purple',
   borderRightWidth:20,
   borderRightColor:'transparent',
},
topRight:{
   top:0, 
   right:0,
   transform:[{rotate:'90deg'}],
   
},
bottomLeft:{
   bottom:0, 
   left:0,
   transform:[{rotate:'-90deg'}],
},
bottomRight:{
   bottom:0, 
   right:0,
   transform:[{rotate:'180deg'}],
}

})