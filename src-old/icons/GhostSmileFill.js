import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGhostSmileFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2a9 9 0 019 9v7.5a3.5 3.5 0 01-6.39 1.976 2.999 2.999 0 01-5.223 0 3.5 3.5 0 01-6.382-1.783L3 18.499V11a9 9 0 019-9zm4 11h-2a2 2 0 01-3.995.15L10 13H8l.005.2a4 4 0 007.99 0L16 13zm-4-6a2 2 0 100 4 2 2 0 000-4z" />
    </Svg>
  );
}

export default SvgGhostSmileFill;
