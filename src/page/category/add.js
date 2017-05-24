/**
 * 添加多肉
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Button, 
    View,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import styles from './style.js';

export default class Add extends Component {
    static navigationOptions = {
        title: '添加多肉',
    };

    constructor(props) {
        super(props);
        this.state = {avatarSource: ''};
    }

	render() {
        const avatarSource  = this.state.avatarSource;
        // const avatarSource  = {uri: 'http://img.funshion.com/sdw?oid=d25899ae9c87dfbb6f1680fd861c25e7&w=400&h=225'};
        console.log( avatarSource, '----' );
		return (
            <View>
                <View>
                    <Text>名称：</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>描述：</Text>
                    <TextInput multiline={true} />
                </View>
                <View>
                    <Text>封面：</Text>
                    <Button title="选择个封面" onPress={ () => this._onPosterPress() }/>
                    {avatarSource.length > 0 && 
                        <Image source={avatarSource} style={{width:100, height:100}}/>
                    }
                </View>
                <View>
                    <Text>相册：</Text>
                </View>
            </View>
		)
	}

    _onPosterPress() {
        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info below in README)
         */
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log('images = ', images);
        });
    }
}