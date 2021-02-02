import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChatVoiceLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM11 6h2v12h-2V6zM7 9h2v6H7V9zm8 0h2v6h-2V9z" />
    </Svg>
  );
}

export default SvgChatVoiceLine;
