import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHeading(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" />
    </Svg>
  );
}

export default SvgHeading;
