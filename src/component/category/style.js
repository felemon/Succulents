import {
    StyleSheet
} from 'react-native';
import {REM} from '../../config/';

export default  StyleSheet.create({
    categoryWrap: {
        marginBottom: 15*REM,
        backgroundColor: '#fff',
        padding: 20*REM,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    category: {
        marginRight: 20*REM,
        alignItems: 'center',
    },
    category_img: {
        width: 200*REM,
        height: 200*REM,
        borderRadius: 15*REM,
    },
    category_name: {
        marginTop: 5
    },
});
