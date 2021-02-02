import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgKey2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 01-7.708 6.294 5 5 0 016.294-7.708zm-.637 6.293A3 3 0 105.88 13.88a3 3 0 004.242 4.242z" />
    </Svg>
  );
}

export default SvgKey2Line;
