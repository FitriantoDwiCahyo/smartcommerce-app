import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'
import AppText from '../texts/AppText'
import { AppFonts } from '../../styles/fonts'
import { ShoppingCart } from 'lucide-react-native'

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const gap = s(20);

const availableSpace = screenWidth - (numColumns - 1) * gap;
const itemSize = availableSpace / numColumns;

interface ProductCardProps {
  title: string;
  price: number;
  imageURL: string;
}


const ProductCard = ({ title, price, imageURL }: ProductCardProps) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.cartButton}>
            <ShoppingCart size={s(14)} color={AppColors.white}/>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
            <Image source={{uri:imageURL}} style={styles.productImage}/>
        </View>
        <View style={styles.infoContainer}>
            <AppText numberOfLines={1} style={styles.titleText}>{title}</AppText>
            <AppText style={styles.priceText}>${price.toFixed(2)}</AppText>
        </View> 
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{  
        width: itemSize,
        backgroundColor:AppColors.white,
        borderRadius:s(10),
        shadowOffset:{height:vs(2),width:0},
        shadowRadius:vs(4),
        shadowColor:"black",
        shadowOpacity:0.25,
        elevation:5,
    },
    imageContainer:{
        marginTop:vs(5),
        overflow:"hidden",
        borderTopLeftRadius:s(10),
        borderTopRightRadius:s(10),
        height:vs(120),
        width:"100%",
    },
    productImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain",
    },
    infoContainer:{
        flex:1,
        padding:s(7),
    }, 
    titleText:{
        fontFamily:AppFonts.bold,
        fontSize:s(14),
        color:AppColors.primary,
        marginTop:vs(5),
    },
    priceText:{
        marginTop:vs(5),
        fontFamily:AppFonts.medium,
        fontSize:vs(14),
        color:AppColors.primary,
    },
    cartButton:{
        padding:s(5),
        borderRadius:s(15),
        backgroundColor:AppColors.button,
        position:"absolute",
        top:vs(5),
        left:s(5),
        zIndex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})