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
import ImagePicker from 'react-native-image-picker';

import styles from './style.js';

export default class Add extends Component {
    static navigationOptions = {
        title: '添加多肉',
    };

	render() {
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
                </View>
                <View>
                    <Text>相册：</Text>
                </View>
            </View>
		)
	}

    _onPosterPress() {
        
        var options = {
            title: '请选择照片',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info below in README)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }
}