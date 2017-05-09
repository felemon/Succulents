import React, { Component } from 'react';
import {
    Text, 
    View,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import styles from './style.js';

export default class Home extends Component {
	render() {
		return (
            <View style={this.props.style}>
                <ScrollView>
                    <View style={styles.head}>
                        <Image style={styles.headBg} blurRadius={1} source={require('./img/icon2.png')} />
                        <Image style={styles.headIcon} source={require('./img/icon2.png')} />
                        <Text style={styles.headName}>小柠多肉馆</Text>
                        <Text style={styles.headDesc}>A succulover @duorouji.com</Text>
                    </View>
                    <View style={[styles.categoryWrap]}>
                        <Text style={styles.blockTitle}>萌肉记忆</Text>
                        <ScrollView horizontal>
                                <View style={styles.category}>
                                    <Image style={styles.categoryImg} source={require('./img/cat2.jpg')} />
                                    <Text style={styles.categoryName}>艾伦</Text>
                                </View>
                                <View style={styles.category}>
                                    <Image style={styles.categoryImg} source={require('./img/cat3.jpg')} />
                                    <Text style={styles.categoryName}>春之奇迹</Text>
                                </View>
                                <View style={styles.category}>
                                    <Image style={styles.categoryImg} source={require('./img/cat4.jpg')} />
                                    <Text style={styles.categoryName}>静夜</Text>
                                </View>
                                <View style={styles.category}>
                                    <Image style={styles.categoryImg} source={require('./img/cat5.jpg')} />
                                    <Text style={styles.categoryName}>初恋</Text>
                                </View>
                                <View style={styles.category}>
                                    <Image style={styles.categoryImg} source={require('./img/cat1.jpg')} />
                                    <Text style={styles.categoryName}>桃蛋</Text>
                                </View>             
                        </ScrollView>
                    </View>
                    <View style={styles.listWrap}>
                        <Text style={styles.blockTitle}>最近动态</Text>
                        <View style={styles.listItem}>
                            <View style={styles.listTime}>
                                <Text style={styles.listMonth}>4月</Text>
                                <Text style={styles.listDay}>1</Text>
                            </View>
                            <View style={styles.listCon}>
                                <Text style={styles.listDesc}>多肉种子发芽啦</Text>
                                <View style={styles.listImgWrap}>
                                    <ScrollView horizontal>
                                        <Image style={styles.listImg} source={require('./img/con1.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con2.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con3.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con4.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con5.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con6.jpg')} />
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.listTime}>
                                <Text style={styles.listMonth}>3月</Text>
                                <Text style={styles.listDay}>17</Text>
                            </View>
                            <View style={styles.listCon}>
                                <Text style={styles.listDesc}>大老桩来爆照</Text>
                                <View style={styles.listImgWrap}>
                                    <ScrollView horizontal>
                                        <Image style={styles.listImg} source={require('./img/con14.jpg')} />
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.listTime}>
                                <Text style={styles.listMonth}>3月</Text>
                                <Text style={styles.listDay}>20</Text>
                            </View>
                            <View style={styles.listCon}>
                                <Text style={styles.listDesc}>清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。</Text>
                                <View style={styles.listImgWrap}>
                                    <ScrollView horizontal>
                                        <Image style={styles.listImg} source={require('./img/con7.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con8.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con9.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con10.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con11.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con12.jpg')} />
                                    </ScrollView>
                                </View>
                            </View>
                        </View>       
                        <View style={styles.listItem}>
                            <View style={styles.listTime}>
                                <Text style={styles.listMonth}>12月</Text>
                                <Text style={styles.listDay}>22</Text>
                            </View>
                            <View style={styles.listCon}>
                                <Text style={styles.listDesc}>多肉开始发果冻色啦，呼呼呼</Text>
                                <View style={styles.listImgWrap}>
                                    <ScrollView horizontal>
                                        <Image style={styles.listImg} source={require('./img/con12.jpg')} />
                                        <Image style={styles.listImg} source={require('./img/con5.jpg')} />
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableHighlight underlayColor="#E8E8E8" style={styles.addBtn} onPress={this._onAddPress}>
                    <Image style={styles.addImg} source={require('./img/add.png')} />
                </TouchableHighlight>
            </View>
		)
	}

    _onAddPress() {
        console.log('press');
    }
}