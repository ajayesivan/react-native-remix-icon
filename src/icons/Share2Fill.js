import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShare2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.414 9L12 2.586 5.586 9H11v7h2V9h5.414zM3 14v4a3 3 0 003 3h12a3 3 0 003-3v-4h-2v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4H3z" />
    </Svg>
  );
}

export default SvgShare2Fill;
