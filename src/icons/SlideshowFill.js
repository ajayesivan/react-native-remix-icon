import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSlideshowFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 21v2h-2v-2H3a1 1 0 01-1-1V6h20v14a1 1 0 01-1 1h-8zM8 10a3 3 0 103 3H8v-3zm5 0v2h6v-2h-6zm0 4v2h6v-2h-6zM2 3h20v2H2V3z" />
    </Svg>
  );
}

export default SvgSlideshowFill;
