import React, {
    Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');

export var rem = width / 720;
export var WIDTH = width;
export var HEIGHT = height;