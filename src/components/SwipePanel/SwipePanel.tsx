import React, { FunctionComponent, useRef } from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import style from './style';

export interface Props {
  height: number;
}

const SwipePanel: FunctionComponent<Props> = (props) => {
  const { height } = props;
  const translateY = useRef(new Animated.Value(-height)).current;

  const animatedStyle = {
    height,
    bottom: -height,
    transform: [
      {
        translateY,
      },
    ],
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log(event.nativeEvent.contentOffset.y);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {},
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.y0 + gestureState.dy > height) {
          translateY.setValue(gestureState.y0 + gestureState.dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        const { y0, dy, vy } = gestureState;
        if (vy > 100) {
          scrollToClose();
        } else if (vy < -100) {
          scrollToOpen();
        } else if (y0 + dy > height + 150) {
          scrollToClose();
        } else {
          scrollToOpen();
        }
      },
    }),
  ).current;

  return (
    <View style={[StyleSheet.absoluteFill, style.container]}>
      <View style={style.topLine} />
      <Animated.ScrollView
        style={[style.panel, animatedStyle]}
        onScroll={handleScroll}
      >
        {Array(30)
          .fill()
          .map((_, i) => (
            <View
              key={i}
              style={{
                borderColor: 'yellow',
                borderWidth: 4,
                height: 100,
                width: '100%',
                backgroundColor: 'blue',
              }}
            >
              <Text>{i}</Text>
            </View>
          ))}
      </Animated.ScrollView>
    </View>
  );
};

export default SwipePanel;
