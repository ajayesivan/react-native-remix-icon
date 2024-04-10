import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMemoriesFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 12c0-5.523-4.477-10-10-10a9.977 9.977 0 00-7.553 3.446L2 3v6h6L5.865 6.865A8 8 0 114 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10zM10.777 8.518l4.599 3.066a.5.5 0 010 .832l-4.599 3.066a.5.5 0 01-.777-.416V8.934a.5.5 0 01.777-.416z" />
    </Svg>
  );
}

export default SvgMemoriesFill;
