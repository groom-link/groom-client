import colors from '../../../../styles/colors';

const File = ({
  width = '40px',
  color = colors.grayScale.gray06,
  className
}: IconProps) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1458_45025)">
        <path
          d="M33.25 8.25H10.75C10.4185 8.25 10.1005 8.3817 9.86612 8.61612C9.6317 8.85054 9.5 9.16848 9.5 9.5V34.5C9.5 34.8315 9.6317 35.1495 9.86612 35.3839C10.1005 35.6183 10.4185 35.75 10.75 35.75H28.25C28.4143 35.7493 28.5769 35.7167 28.7287 35.6538C28.8807 35.5909 29.0187 35.4988 29.135 35.3825L34.135 30.3825C34.3553 30.1396 34.4844 29.8276 34.5 29.5V9.5C34.5 9.16848 34.3683 8.85054 34.1339 8.61612C33.8995 8.3817 33.5815 8.25 33.25 8.25ZM27 29.5V33.25H12V10.75H32V28.25H28.25C27.9185 28.25 27.6005 28.3817 27.3661 28.6161C27.1317 28.8505 27 29.1685 27 29.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1458_45025">
          <rect width="44" height="44" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default File;
