import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCompass2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.328 4.258L10.586 12 12 13.414l7.742-7.742A9.957 9.957 0 0122 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c2.4 0 4.604.847 6.328 2.258z" />
    </Svg>
  );
}

export default SvgCompass2Fill;
