import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgScissors2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 14.121l-2.317 2.317a4 4 0 11-2.121-2.121L9.88 12 4.21 6.333a2 2 0 010-2.829l.708-.707L12 9.88l7.081-7.082.708.707a2 2 0 010 2.829L14.12 12l2.317 2.317a4 4 0 11-2.121 2.121L12 14.12zM6 20a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgScissors2Fill;
