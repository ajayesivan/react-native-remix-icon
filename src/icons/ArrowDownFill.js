import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowDownFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 12h7l-8 8-8-8h7V4h2z" />
    </Svg>
  );
}

export default SvgArrowDownFill;
