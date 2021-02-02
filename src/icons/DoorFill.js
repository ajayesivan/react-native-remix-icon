import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDoorFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 3a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h12zm-4 8a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgDoorFill;
