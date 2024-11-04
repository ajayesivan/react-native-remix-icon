import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSortAlphabetDesc(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.869 11H2.667L6 3h2l3.333 8H9.131l-.41-1H5.28l-.41 1zm1.23-3h1.803L7 5.8 6.098 8zm15.9 0l-4-5-4 5h3v13h2V8h3zm-11 5H3v2h4.855L3 19v2h8v-2H6.146L11 15v-2z" />
    </Svg>
  );
}

export default SvgSortAlphabetDesc;
