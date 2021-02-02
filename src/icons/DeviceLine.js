import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDeviceLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 8h2a1 1 0 011 1v12a1 1 0 01-1 1h-8a1 1 0 01-1-1v-1H4a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v5zm-2 0V4H5v14h7V9a1 1 0 011-1h4zm-3 2v10h6V10h-6z" />
    </Svg>
  );
}

export default SvgDeviceLine;
