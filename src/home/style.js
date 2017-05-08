import {
	StyleSheet
} from 'react-native';
import {rem} from '../config/';

export default  StyleSheet.create({
	head: {
		flex: 1,
        alignItems: 'center',
        paddingBottom: 30*rem,  
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
	},
    headBg: {
        height: 350*rem,
        resizeMode: 'cover',
    },
    headIcon: {
        marginTop: -75*rem,
        width: 150*rem,
        height: 150*rem,
        borderRadius: 75*rem,
        borderColor: '#fff',
        borderWidth: 4*rem,
    },
    headName: {
        marginTop: 10*rem,
        color: '#666'
    },
    headDesc: {
        color: '#999'
    },
    blockTitle: {
        marginVertical: 20*rem,
        fontSize: 40*rem,
    },
    categoryWrap: {
        paddingTop: 20*rem,
        paddingLeft: 20*rem,
        // paddingRight: 10*rem,
    },
    category: {
        paddingRight: 10*rem, 
        paddingBottom: 20*rem,
        alignItems: 'center',
    },
    categoryImg: {
        width: 150*rem,
        height: 150*rem,
        borderRadius: 10*rem,
    },
    categoryName: {
        marginTop: 10*rem,
        color: '#333',
    },
    listWrap: {
        padding: 20*rem,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 40*rem,
    },
    listTime: {
        flexDirection: 'row',
        backgroundColor: '#efefef',
        justifyContent: 'center',
        alignItems: 'center',
        width: 110*rem,
        height: 110*rem,
    },
    listMonth: {
        marginTop: 10*rem,
        fontSize: 22*rem,
        color: '#999',
    },
    listDay: {
        fontSize: 60*rem,
        fontFamily: 'Oswald-Regular',
    },
    listCon: {
        flex: 1,
        marginLeft: 20*rem,
        justifyContent: 'center',
    },
    listDesc: {
        color: '#333',
        lineHeight: 32*rem,
        marginBottom: 20*rem,
    },
    listImgWrap: {
        flexDirection: 'row',
        marginRight: -20*rem,
    },
    listImg: {
        width: 245*rem,
        height:190*rem,
        marginRight: 10*rem,
        borderRadius: 4*rem,
    },
    addBtn: {
        position: 'absolute',
        right: 10*rem,
        bottom: 10*rem,
        width: 100*rem,
        height: 100*rem,
        backgroundColor: 'red',
    }
});
