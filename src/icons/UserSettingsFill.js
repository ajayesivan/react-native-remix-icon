import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserSettingsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm2.595 5.811a3.505 3.505 0 010-1.622l-.992-.573 1-1.732.992.573A3.498 3.498 0 0117 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.991.573a3.512 3.512 0 010 1.622l.991.573-1 1.732-.992-.573a3.495 3.495 0 01-1.405.812V22.5h-2v-1.145a3.495 3.495 0 01-1.405-.812l-.992.573-1-1.732.992-.573zM18 17a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgUserSettingsFill;
