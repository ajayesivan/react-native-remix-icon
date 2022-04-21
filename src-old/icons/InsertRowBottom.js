import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInsertRowBottom(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 13a5 5 0 11-.001 10.001A5 5 0 0112 13zm1 2h-2v1.999L9 17v2l2-.001V21h2v-2.001L15 19v-2l-2-.001V15zm7-12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16zM5 5v4h14V5H5z" />
    </Svg>
  );
}

export default SvgInsertRowBottom;
