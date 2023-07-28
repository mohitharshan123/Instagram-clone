import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SearchActive: React.FC<any> = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Circle cx={10} cy={10} r={7.75} stroke="#fff" strokeWidth={2.5} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="m22 22-6-6"
    />
  </Svg>
);
export default SearchActive;
