import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSettingsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 14a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export default SvgSettingsFill;
