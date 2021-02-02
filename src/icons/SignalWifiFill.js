import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSignalWifiFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0112 3z" />
    </Svg>
  );
}

export default SvgSignalWifiFill;
