import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export enum EUse {
  Default = 'default',
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Link = 'link',
}

interface IButton extends TouchableOpacityProps {
  title: string;
  use?: EUse;
}

const ButtonTemplate: FunctionComponent<IButton> = ({
  use = EUse.Default,
  title,
  ...props
}) => {
  const style = styles[use];
  const textStyle = styles[`text-${use}`];
  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
      activeOpacity={0.6}
      style={[styles.common, props.style, style]}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  common: {
    borderRadius: 6,
    borderColor: 'red',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  [EUse.Default]: {},
  [EUse.Danger]: {},
  [EUse.Primary]: {},
  [EUse.Success]: {},
  [EUse.Link]: {},

  [`text-${EUse.Default}`]: {},
  [`text-${EUse.Danger}`]: {},
  [`text-${EUse.Primary}`]: {},
  [`text-${EUse.Success}`]: {},
  [`text-${EUse.Link}`]: {},
});

export default ButtonTemplate;
