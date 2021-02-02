import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgOrderPlayLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 4V2.068a.5.5 0 01.82-.385l4.12 3.433a.5.5 0 01-.321.884H2V4h15zM2 18h20v2H2v-2zm0-7h20v2H2v-2z" />
    </Svg>
  );
}

export default SvgOrderPlayLine;
