import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTapeLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10.83 13h2.34A3 3 0 1116 15H8a3 3 0 112.83-2zM4 5v14h16V5H4zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm5 10a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgTapeLine;
