import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNumber5(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 2v2H9.3l-.677 6.445a6.5 6.5 0 11-2.93 7.133l1.94-.486A4.502 4.502 0 0016.5 16a4.5 4.5 0 00-4.5-4.5c-2.022 0-3.278.639-3.96 1.53l-1.575-1.182L7.5 2H18z" />
    </Svg>
  );
}

export default SvgNumber5;
