import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAnticlockwise2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 4h2a5 5 0 015 5v4h-2V9a3 3 0 00-3-3h-2v3L9 5l5-4v3zm1 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h10a1 1 0 011 1z" />
    </Svg>
  );
}

export default SvgAnticlockwise2Fill;
