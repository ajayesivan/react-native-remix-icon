import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowLeftDownLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9 13.59l8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.585z" />
    </Svg>
  );
}

export default SvgArrowLeftDownLine;
