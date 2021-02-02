import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDeviceFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 6h-8a1 1 0 00-1 1v13H4a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v3zm-6 2h8a1 1 0 011 1v12a1 1 0 01-1 1h-8a1 1 0 01-1-1V9a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgDeviceFill;
