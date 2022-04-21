import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNewspaperFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 22H5a3 3 0 01-3-3V3a1 1 0 011-1h14a1 1 0 011 1v7h4v9a3 3 0 01-3 3zm-1-10v7a1 1 0 002 0v-7h-2zM5 6v6h6V6H5zm0 7v2h10v-2H5zm0 3v2h10v-2H5zm2-8h2v2H7V8z" />
    </Svg>
  );
}

export default SvgNewspaperFill;
