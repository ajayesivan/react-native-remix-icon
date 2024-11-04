import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatSettingsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 12h-2V5H4v13.385L5.763 17H12v2H6.455L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v8zm-7.855 7.071a4.004 4.004 0 010-2.142l-.975-.563 1-1.732.976.563A3.996 3.996 0 0117 14.127V13h2v1.126c.715.184 1.352.56 1.854 1.072l.976-.564 1 1.732-.975.563a4.004 4.004 0 010 2.142l.975.563-1 1.732-.976-.564c-.502.511-1.14.888-1.854 1.072V23h-2v-1.126a3.996 3.996 0 01-1.854-1.072l-.976.564-1-1.732.975-.563zM18 20a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgChatSettingsLine;
