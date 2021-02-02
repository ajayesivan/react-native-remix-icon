import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFilterFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4z" />
    </Svg>
  );
}

export default SvgFilterFill;
