import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFilePaper2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 2a3 3 0 013 3v2h-2v12a3 3 0 01-3 3H4a3 3 0 01-3-3v-2h16v2a1 1 0 00.883.993L18 20a1 1 0 00.993-.883L19 19v-4H3V5a3 3 0 013-3h14z" />
    </Svg>
  );
}

export default SvgFilePaper2Fill;
