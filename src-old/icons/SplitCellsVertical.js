import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSplitCellsVertical(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 3a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16zm-1 2H5v5.999L9 11v2H5v6h14v-6h-4v-2l4-.001V5zm-7 1l3 3h-2v6h2l-3 3-3-3h2V9H9l3-3z" />
    </Svg>
  );
}

export default SvgSplitCellsVertical;
