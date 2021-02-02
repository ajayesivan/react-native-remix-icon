import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHeavyShowersLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 16.93a8 8 0 1111.458-9.831A5.5 5.5 0 0119 17.793v-2.13a3.5 3.5 0 10-4-5.612V10a6 6 0 10-10 4.472v2.458zM7 14h2v6H7v-6zm8 0h2v6h-2v-6zm-4 3h2v6h-2v-6z" />
    </Svg>
  );
}

export default SvgHeavyShowersLine;
