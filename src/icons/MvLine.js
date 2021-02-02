import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMvLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM4 5v14h16V5H4zm8 7.17V6h5v2h-3v7a3 3 0 11-2-2.83z" />
    </Svg>
  );
}

export default SvgMvLine;
