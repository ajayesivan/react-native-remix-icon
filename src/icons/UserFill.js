import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUserFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 22a8 8 0 1116 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
    </Svg>
  );
}

export default SvgUserFill;
