import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGhostFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2a9 9 0 019 9v7.5a3.5 3.5 0 01-6.39 1.976 2.999 2.999 0 01-5.223 0 3.5 3.5 0 01-6.382-1.783L3 18.499V11a9 9 0 019-9zm0 10c-1.105 0-2 1.12-2 2.5s.895 2.5 2 2.5 2-1.12 2-2.5-.895-2.5-2-2.5zM9.5 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </Svg>
  );
}

export default SvgGhostFill;
