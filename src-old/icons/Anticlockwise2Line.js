import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAnticlockwise2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13.414 6l1.829 1.828-1.415 1.415L9.586 5 13.828.757l1.415 1.415L13.414 4H16a5 5 0 015 5v4h-2V9a3 3 0 00-3-3h-2.586zM15 11v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h10a1 1 0 011 1zm-2 1H5v8h8v-8z" />
    </Svg>
  );
}

export default SvgAnticlockwise2Line;
