import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPencilFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414l-2.122 2.121-4.242-4.242z" />
    </Svg>
  );
}

export default SvgPencilFill;
