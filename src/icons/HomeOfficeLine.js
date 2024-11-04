import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeOfficeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.673 1.612L20.8 9h-2.973L12 3.703 6 9.158V19h5v2H5a1 1 0 01-1-1v-9H1l10.327-9.388a1 1 0 011.346 0zM14 11h9v7h-9v-7zm2 2v3h5v-3h-5zm8 8H13v-2h11v2z" />
    </Svg>
  );
}

export default SvgHomeOfficeLine;
