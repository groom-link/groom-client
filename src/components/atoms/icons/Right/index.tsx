import colors from '../../../../styles/colors';

const Right = ({
  className,
  width = '40px',
  color = colors.grayScale.gray05
}: IconProps) => {
  return (
    <svg
      {...{ className, width }}
      height="100%"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4393 9.45691C14.8536 10.0661 14.8536 11.0539 15.4393 11.6631L25.3787 22L15.4393 32.3369C14.8536 32.9461 14.8536 33.9339 15.4393 34.5431C16.0251 35.1523 16.9749 35.1523 17.5607 34.5431L28.5607 23.1031C29.1464 22.4939 29.1464 21.5061 28.5607 20.8969L17.5607 9.45691C16.9749 8.8477 16.0251 8.8477 15.4393 9.45691Z"
        fill={color}
      />
    </svg>
  );
};

export default Right;
