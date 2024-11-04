import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatSettingsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M22 12h-2V5H4v13.385L5.763 17H12v2H6.455L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7.855 7.071a4 4 0 0 1 0-2.142l-.975-.563 1-1.732.976.563A4 4 0 0 1 17 14.127V13h2v1.126c.715.184 1.352.56 1.854 1.072l.976-.564 1 1.732-.975.563a4 4 0 0 1 0 2.142l.975.563-1 1.732-.976-.564c-.502.511-1.14.888-1.854 1.072V23h-2v-1.126a4 4 0 0 1-1.854-1.072l-.976.564-1-1.732zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgChatSettingsLine;
