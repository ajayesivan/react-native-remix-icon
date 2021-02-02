import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStopLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 7v10h10V7H7zM6 5h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgStopLine;
