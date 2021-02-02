import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMapPinUserLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.084 15.812a7 7 0 10-10.168 0A5.996 5.996 0 0112 13a5.996 5.996 0 015.084 2.812zm-8.699 1.473L12 20.899l3.615-3.614a4 4 0 00-7.23 0zM12 23.728l-6.364-6.364a9 9 0 1112.728 0L12 23.728zM12 10a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 110-6 3 3 0 010 6z" />
    </Svg>
  );
}

export default SvgMapPinUserLine;
