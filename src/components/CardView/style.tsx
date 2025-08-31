import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imageContainer: {
        flex:1,
        width:'100%',
        height:'100%',
        overflow:'hidden',
        borderRadius: 10,
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:200,
        resizeMode:'contain'
    },
    imageLogo:{
        flex: 1,
        width:"65%",
        resizeMode:'contain'
    },
    carBrand:{
        color: 'magenta',
        fontWeight: 400,
        fontSize: 20,
        fontStyle:'italic'
    },
    carName:{
        color:'green',
        fontSize: 25,
        fontWeight:'bold',
        textAlign:'center'
    },
    image:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        width:'100%',
        height:'100%'

    },
    priceLabelContainer:{
        flexDirection: 'row',
        justifyContent:'space-around',
        paddingBottom: 10,
        alignItems:'center',
        marginTop: 10
    },
    priceLabel:{
        color:'brown',
        fontSize: 20,
        fontWeight:'bold'
    }
})