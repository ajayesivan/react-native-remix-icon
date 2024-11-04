import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAppsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.75 2.5A4.25 4.25 0 0111 6.75V11H6.75a4.25 4.25 0 010-8.5zm0 10.5H11v4.25A4.25 4.25 0 116.75 13zm10.5-10.5a4.25 4.25 0 010 8.5H13V6.75a4.25 4.25 0 014.25-4.25zM13 13h4.25A4.25 4.25 0 1113 17.25V13z" />
    </Svg>
  );
}

export default SvgAppsFill;
