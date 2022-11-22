import colors from '../../../../styles/colors';

const StarOutline = ({
  className,
  width = '40px',
  color = colors.grayScale.gray05
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={width}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1469_33491)">
        <path
          d="M39 17.9862L29.5552 25.7776L32.506 39L22 31.4448L11.494 39L14.4448 25.7776L5 17.9862L16.3327 16.3327L22 5L27.6673 16.3327L39 17.9862Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1469_33491">
          <rect width="44" height="44" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarOutline;
