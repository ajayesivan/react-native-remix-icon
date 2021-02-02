import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCloudyFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9 20.986a8.5 8.5 0 117.715-12.983A6.5 6.5 0 0117 20.981V21H9v-.014z" />
    </Svg>
  );
}

export default SvgCloudyFill;
