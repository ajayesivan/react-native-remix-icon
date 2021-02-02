import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMusic2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 3v14a4 4 0 11-2-3.465V6H9v11a4 4 0 11-2-3.465V3h13z" />
    </Svg>
  );
}

export default SvgMusic2Fill;
