import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowLeftDownFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.36 13.05L17.31 18H5.998V6.688l4.95 4.95 5.656-5.657 1.415 1.414z" />
    </Svg>
  );
}

export default SvgArrowLeftDownFill;
