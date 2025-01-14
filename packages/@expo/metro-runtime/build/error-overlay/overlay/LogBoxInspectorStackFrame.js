/**
 * Copyright (c) 650 Industries.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LogBoxButton } from '../UI/LogBoxButton';
import * as LogBoxStyle from '../UI/LogBoxStyle';
import { CODE_FONT } from '../UI/constants';
import { getStackFormattedLocation } from '../formatProjectFilePath';
export function LogBoxInspectorStackFrame(props) {
    const { frame, onPress } = props;
    const location = getStackFormattedLocation(process.env.EXPO_PROJECT_ROOT, frame);
    return (React.createElement(View, { style: styles.frameContainer },
        React.createElement(LogBoxButton, { backgroundColor: {
                default: 'transparent',
                pressed: onPress ? LogBoxStyle.getBackgroundColor(1) : 'transparent',
            }, onPress: onPress, style: styles.frame },
            React.createElement(Text, { style: [styles.name, frame.collapse === true && styles.dim] }, frame.methodName),
            React.createElement(Text, { ellipsizeMode: "middle", numberOfLines: 1, style: [styles.location, frame.collapse === true && styles.dim] }, location))));
}
const styles = StyleSheet.create({
    frameContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    frame: {
        flex: 1,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    lineLocation: {
        flexDirection: 'row',
    },
    name: {
        color: LogBoxStyle.getTextColor(1),
        fontSize: 14,
        includeFontPadding: false,
        lineHeight: 18,
        fontWeight: '400',
        fontFamily: CODE_FONT,
    },
    location: {
        color: LogBoxStyle.getTextColor(0.8),
        fontSize: 12,
        fontWeight: '300',
        includeFontPadding: false,
        lineHeight: 16,
        paddingLeft: 10,
    },
    dim: {
        color: LogBoxStyle.getTextColor(0.4),
        fontWeight: '300',
    },
    line: {
        color: LogBoxStyle.getTextColor(0.8),
        fontSize: 12,
        fontWeight: '300',
        includeFontPadding: false,
        lineHeight: 16,
    },
});
//# sourceMappingURL=LogBoxInspectorStackFrame.js.map