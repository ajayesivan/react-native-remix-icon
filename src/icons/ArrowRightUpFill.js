import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowRightUpFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13.05 12.36l-5.656 5.658-1.414-1.415 5.657-5.656-4.95-4.95H18V17.31z" />
    </Svg>
  );
}

export default SvgArrowRightUpFill;
