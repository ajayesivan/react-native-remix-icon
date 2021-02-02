import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgParkingLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 3h7a6 6 0 110 12H8v6H6V3zm2 2v8h5a4 4 0 100-8H8z" />
    </Svg>
  );
}

export default SvgParkingLine;
