import React from 'react';
import { Text } from 'react-native';

type Props = {
  text: string;
}

const RemixIcon = ({text}: Props) => {
  return(
    <Text style={{fontSize: 50}}>Hello, {text}</Text>
  );
};

export default RemixIcon;