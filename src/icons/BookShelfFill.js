import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBookShelfFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1v-9.303l2.021 9.51a1 1 0 001.186.77l2.935-.623a1 1 0 00.77-1.186l-2.91-13.694a1 1 0 00-1.187-.77L15 5.302V5a1 1 0 00-1-1H9a1 1 0 00-1-1H4zm5 3h4v8H9V6zm4 10v3H9v-3h4zm-6 1v2H5v-2h2zm11.77 1.814l-.416-1.956.978-.208.416 1.956-.978.208z" />
    </Svg>
  );
}

export default SvgBookShelfFill;
