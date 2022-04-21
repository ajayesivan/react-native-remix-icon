import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInsertColumnLeft(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 3a1 1 0 011 1v16a1 1 0 01-1 1h-6a1 1 0 01-1-1V4a1 1 0 011-1h6zm-1 2h-4v14h4V5zM6 7a5 5 0 11-.001 10.001A5 5 0 016 7zm1 2H5v1.999L3 11v2l2-.001V15h2v-2.001L9 13v-2l-2-.001V9z" />
    </Svg>
  );
}

export default SvgInsertColumnLeft;
