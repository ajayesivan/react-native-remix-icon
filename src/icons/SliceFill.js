import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSliceFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13.768 12.232l2.121 2.122c-4.596 4.596-10.253 6.01-13.788 5.303L17.657 4.1l2.121 2.12-6.01 6.011z" />
    </Svg>
  );
}

export default SvgSliceFill;
