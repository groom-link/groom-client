import colors from '../../../../styles/colors';
import { IconProps } from '../../../../types/icon';

const Left = ({
  className,
  width = '40px',
  height = '40px',
  color = colors.grayScale.gray05
}: IconProps) => {
  return (
    <svg
      {...{ className, width, height }}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5607 9.45691C29.1464 10.0661 29.1464 11.0539 28.5607 11.6631L18.6213 22L28.5607 32.3369C29.1464 32.9461 29.1464 33.9339 28.5607 34.5431C27.9749 35.1523 27.0251 35.1523 26.4393 34.5431L15.4393 23.1031C14.8536 22.4939 14.8536 21.5061 15.4393 20.8969L26.4393 9.45691C27.0251 8.8477 27.9749 8.8477 28.5607 9.45691Z"
        fill={color}
      />
    </svg>
  );
};

export default Left;
