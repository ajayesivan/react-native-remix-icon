import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCropLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 17v2H6a1 1 0 01-1-1V7H2V5h3V2h2v15h8zm2 5V7H9V5h9a1 1 0 011 1v11h3v2h-3v3h-2z" />
    </Svg>
  );
}

export default SvgCropLine;
