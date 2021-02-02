import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSmartphoneLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 4v16h10V4H7zM6 2h12a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm6 15a1 1 0 110 2 1 1 0 010-2z" />
    </Svg>
  );
}

export default SvgSmartphoneLine;
