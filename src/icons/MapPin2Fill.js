import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMapPin2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM12 13a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgMapPin2Fill;
