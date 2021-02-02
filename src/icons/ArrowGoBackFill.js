import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowGoBackFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 7v4L2 6l6-5v4h5a8 8 0 110 16H4v-2h9a6 6 0 100-12H8z" />
    </Svg>
  );
}

export default SvgArrowGoBackFill;
