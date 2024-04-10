import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderSettingsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zm-3.823 8.809l-.991.572 1 1.731.991-.572c.393.371.872.653 1.405.811v1.145h1.998V16.35a3.495 3.495 0 001.405-.811l.992.572.999-1.73-.991-.573a3.507 3.507 0 000-1.622l.991-.572-1-1.732-.992.573a3.495 3.495 0 00-1.404-.812V8.5h-1.999v1.144a3.494 3.494 0 00-1.404.812L8.6 9.883 7.6 11.615l.991.572a3.508 3.508 0 000 1.622zm3.404.688a1.5 1.5 0 110-2.998 1.5 1.5 0 010 2.998z" />
    </Svg>
  );
}

export default SvgFolderSettingsFill;
