import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowGoForwardLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.172 7H11a6 6 0 100 12h9v2h-9a8 8 0 110-16h7.172l-2.536-2.536L17.05 1.05 22 6l-4.95 4.95-1.414-1.414L18.172 7z" />
    </Svg>
  );
}

export default SvgArrowGoForwardLine;
