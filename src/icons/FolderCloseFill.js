import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderCloseFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 12c1.093 0 2.117.292 3 .803V6a1 1 0 00-1-1h-8.586l-2-2H3a1 1 0 00-1 1v16a1 1 0 001 1h10.803A6 6 0 0119 12zm1.414 6l2.122 2.121-1.415 1.414-2.12-2.12-2.122 2.12-1.414-1.414L17.585 18l-2.12-2.121 1.414-1.415L19 16.586l2.121-2.122 1.415 1.415-2.122 2.12z" />
    </Svg>
  );
}

export default SvgFolderCloseFill;
