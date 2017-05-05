import React, { Component } from 'react';
import {
    Text, 
    View,
    Image,
    ScrollView
} from 'react-native';

import styles from './style.js';

let imgURL = 'https://d13yacurqjgara.cloudfront.net/users/662589/screenshots/2361228/succulents_teaser.png';

export default class Category extends Component {
    render() {
        return (
            <View style={styles.categoryWrap}>
                <View style={styles.category}>
                    <Image style={styles.category_img} source={{uri: imgURL}} />
                    <Text style={styles.category_name}>艾伦</Text>
                </View>
                <View style={styles.category}>
                    <Image style={styles.category_img} source={{uri: imgURL}} />
                    <Text style={styles.category_name}>春之奇迹</Text>
                </View>
                <View style={styles.category}>
                    <Image style={styles.category_img} source={{uri: imgURL}} />
                    <Text style={styles.category_name}>静夜</Text>
                </View>
            </View>
        )
    }
}