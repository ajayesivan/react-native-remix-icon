import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderSettingsLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm4.591 8.809a3.508 3.508 0 010-1.622l-.991-.572 1-1.732.991.573a3.495 3.495 0 011.404-.812V8.5h2v1.144c.532.159 1.01.44 1.403.812l.992-.573 1 1.731-.991.573a3.508 3.508 0 010 1.622l.991.572-1 1.731-.991-.572a3.495 3.495 0 01-1.404.811v1.145h-2V16.35a3.495 3.495 0 01-1.404-.811l-.991.572-1-1.73.991-.573zm3.404.688a1.5 1.5 0 100-2.998 1.5 1.5 0 000 2.998z" />
    </Svg>
  );
}

export default SvgFolderSettingsLine;
