import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export const SW=dimension=>{
    return wp((dimension/SCREEN_WIDTH)*100 + '%')
}

export const SH = dimension=>{
    return hp((dimension/SCREEN_HEIGHT)*100 + '%')
}

export const SF =dimension =>{
    return hp((dimension/SCREEN_HEIGHT)*100 + '%')
}

export const heightPercent =percent=>{
    return hp(percent)
}

export const widthPersent=percent=>{
    return wp(percent)
}

export const fontPersent=percent=>{
    return hp(percent)
}
