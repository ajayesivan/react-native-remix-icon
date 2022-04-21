import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeBoxLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 5v14h16V5H4zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9 6V6l5 5H8V9h4zm-5 4h9v2h-4v3l-5-5z" />
    </Svg>
  );
}

export default SvgExchangeBoxLine;
