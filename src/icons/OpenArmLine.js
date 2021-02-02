import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgOpenArmLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 17v5h-2v-5c0-4.451 2.644-8.285 6.447-10.016l.828 1.82A9.002 9.002 0 0018 17zM8 17v5H6v-5A9.002 9.002 0 00.725 8.805l.828-1.821A11.002 11.002 0 018 17zm4-5a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export default SvgOpenArmLine;
