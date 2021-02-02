import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSendPlane2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3.741 1.408l18.462 10.154a.5.5 0 010 .876L3.741 22.592A.5.5 0 013 22.154V1.846a.5.5 0 01.741-.438zM5 13v6.617L18.85 12 5 4.383V11h5v2H5z" />
    </Svg>
  );
}

export default SvgSendPlane2Line;
