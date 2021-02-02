import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMapPinFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM12 15a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgMapPinFill;
