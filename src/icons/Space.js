import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSpace(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 9v4h16V9h2v5a1 1 0 01-1 1H3a1 1 0 01-1-1V9h2z" />
    </Svg>
  );
}

export default SvgSpace;
