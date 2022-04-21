import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBuildingLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 19h2v2H1v-2h2V4a1 1 0 011-1h10a1 1 0 011 1v15h4v-8h-2V9h3a1 1 0 011 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z" />
    </Svg>
  );
}

export default SvgBuildingLine;
