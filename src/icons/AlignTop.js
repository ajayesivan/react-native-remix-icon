import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAlignTop(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 3h18v2H3V3zm5 8v10H6V11H3l4-4 4 4H8zm10 0v10h-2V11h-3l4-4 4 4h-3z" />
    </Svg>
  );
}

export default SvgAlignTop;
