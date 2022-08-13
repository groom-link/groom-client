import colors from '../../../../styles/colors';

const Setting = ({
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
        d="M22 17C21.0111 17 20.0444 17.2932 19.2221 17.8427C18.3999 18.3921 17.759 19.173 17.3806 20.0866C17.0022 21.0002 16.9031 22.0055 17.0961 22.9755C17.289 23.9454 17.7652 24.8363 18.4645 25.5355C19.1637 26.2348 20.0546 26.711 21.0245 26.9039C21.9945 27.0969 22.9998 26.9978 23.9134 26.6194C24.827 26.241 25.6079 25.6001 26.1573 24.7779C26.7068 23.9556 27 22.9889 27 22C27 20.6739 26.4732 19.4021 25.5355 18.4645C24.5979 17.5268 23.3261 17 22 17V17ZM22 24.5C21.5055 24.5 21.0222 24.3534 20.6111 24.0787C20.2 23.804 19.8795 23.4135 19.6903 22.9567C19.5011 22.4999 19.4516 21.9972 19.548 21.5123C19.6445 21.0273 19.8826 20.5819 20.2322 20.2322C20.5819 19.8826 21.0273 19.6445 21.5123 19.548C21.9972 19.4516 22.4999 19.5011 22.9567 19.6903C23.4135 19.8795 23.804 20.2 24.0787 20.6111C24.3534 21.0222 24.5 21.5055 24.5 22C24.5 22.663 24.2366 23.2989 23.7678 23.7678C23.2989 24.2366 22.663 24.5 22 24.5ZM33.2375 18.25H31.2688C31.2588 18.2225 31.2237 18.1163 31.2112 18.0888L32.5988 16.7013C33.0694 16.2299 33.3338 15.5911 33.3338 14.925C33.3338 14.2589 33.0694 13.6201 32.5988 13.1488L30.8488 11.3988C30.6158 11.1651 30.339 10.9798 30.0341 10.8537C29.7292 10.7276 29.4024 10.663 29.0725 10.6637C28.743 10.6633 28.4167 10.728 28.1123 10.8542C27.8078 10.9803 27.5314 11.1654 27.2988 11.3988L25.8375 12.765L25.75 12.725V10.7613C25.7493 10.0952 25.4844 9.45666 25.0133 8.98582C24.5422 8.51497 23.9035 8.25033 23.2375 8.25H20.7625C20.0965 8.25033 19.4578 8.51497 18.9867 8.98582C18.5156 9.45666 18.2507 10.0952 18.25 10.7613V12.7075L18.1425 12.7687L18.0888 12.7888L16.7062 11.4025C16.4736 11.1688 16.197 10.9834 15.8923 10.857C15.5877 10.7307 15.2611 10.6658 14.9312 10.6663V10.6663C14.6013 10.6655 14.2745 10.7301 13.9697 10.8562C13.6648 10.9823 13.3879 11.1676 13.155 11.4012L11.405 13.1513C10.9343 13.6226 10.67 14.2614 10.67 14.9275C10.67 15.5936 10.9343 16.2324 11.405 16.7038L12.78 18.1325C12.7638 18.1688 12.7387 18.2112 12.7262 18.2487H10.7625C10.0962 18.2491 9.45737 18.5139 8.98626 18.985C8.51515 19.4561 8.25033 20.095 8.25 20.7612V23.2388C8.25066 23.9048 8.51562 24.5433 8.9867 25.0142C9.45778 25.485 10.0965 25.7497 10.7625 25.75H12.7313C12.7413 25.7775 12.7763 25.8837 12.7888 25.9112L11.4012 27.2988C10.9306 27.7701 10.6662 28.4089 10.6662 29.075C10.6662 29.7411 10.9306 30.3799 11.4012 30.8512L13.1513 32.6013C13.6299 33.0578 14.266 33.3124 14.9275 33.3124C15.589 33.3124 16.2251 33.0578 16.7038 32.6013L18.0975 31.2075C18.125 31.2212 18.2225 31.2663 18.2487 31.2775V33.2413C18.2501 33.9071 18.5155 34.5452 18.9868 35.0155C19.4581 35.4858 20.0967 35.75 20.7625 35.75H23.2375C23.9035 35.7497 24.5422 35.485 25.0133 35.0142C25.4844 34.5433 25.7493 33.9048 25.75 33.2387V31.2925L25.9112 31.2112L27.2975 32.5975C27.7761 33.0547 28.4125 33.3098 29.0744 33.3098C29.7362 33.3098 30.3726 33.0547 30.8512 32.5975L32.6013 30.8475C33.0719 30.3762 33.3363 29.7373 33.3363 29.0712C33.3363 28.4052 33.0719 27.7663 32.6013 27.295L31.2263 25.8663C31.2425 25.83 31.2675 25.7875 31.28 25.75H33.2375C33.9035 25.7497 34.5422 25.485 35.0133 25.0142C35.4844 24.5433 35.7493 23.9048 35.75 23.2388V20.7612C35.7493 20.0952 35.4844 19.4567 35.0133 18.9858C34.5422 18.515 33.9035 18.2503 33.2375 18.25V18.25ZM33.2375 23.25H31.2762C30.7704 23.2649 30.2796 23.4256 29.863 23.713C29.4464 24.0003 29.1217 24.4019 28.9281 24.8695C28.7344 25.3371 28.6801 25.8507 28.7716 26.3484C28.8631 26.8462 29.0965 27.3068 29.4437 27.675L30.83 29.08L29.0625 30.83L27.675 29.4437C27.3069 29.0966 26.8463 28.8632 26.3487 28.7716C25.8511 28.6801 25.3376 28.7343 24.8701 28.9278C24.4025 29.1213 24.0009 29.4458 23.7135 29.8622C23.426 30.2786 23.2651 30.7692 23.25 31.275L23.2375 33.25L20.75 33.2387V31.275C20.7438 30.7647 20.5848 30.268 20.2936 29.8489C20.0024 29.4298 19.5923 29.1076 19.1162 28.9237C18.793 28.7893 18.4464 28.7196 18.0962 28.7188C17.7679 28.7173 17.4424 28.7806 17.1385 28.905C16.8346 29.0294 16.5582 29.2125 16.325 29.4437L14.92 30.83L13.17 29.0625L14.555 27.6775C14.903 27.3095 15.1371 26.8487 15.2291 26.3507C15.3211 25.8526 15.267 25.3386 15.0734 24.8706C14.8799 24.4026 14.555 24.0006 14.1381 23.713C13.7212 23.4255 13.23 23.2647 12.7237 23.25L10.75 23.2388L10.7625 20.75H12.7237C13.2296 20.7351 13.7204 20.5744 14.137 20.287C14.5536 19.9997 14.8783 19.5981 15.0719 19.1305C15.2656 18.6629 15.3199 18.1493 15.2284 17.6516C15.1369 17.1538 14.9035 16.6932 14.5563 16.325L13.17 14.92L14.9375 13.17L16.325 14.5563C16.6853 14.909 17.142 15.147 17.6375 15.2402C18.1329 15.3334 18.6449 15.2777 19.1088 15.08L19.1312 15.0712C19.604 14.8858 20.0107 14.5634 20.2991 14.1454C20.5875 13.7274 20.7445 13.2328 20.75 12.725L20.7625 10.75L23.25 10.7613V12.725C23.2499 13.2178 23.3954 13.6996 23.6683 14.1099C23.9412 14.5203 24.3293 14.8408 24.7838 15.0313C24.8163 15.0475 24.855 15.065 24.8925 15.08C25.3561 15.2777 25.8679 15.3335 26.3632 15.2403C26.8585 15.1471 27.315 14.909 27.675 14.5563L29.08 13.17L30.83 14.9375L29.445 16.3225C29.097 16.6905 28.8629 17.1513 28.7709 17.6493C28.6789 18.1474 28.733 18.6614 28.9266 19.1294C29.1201 19.5974 29.445 19.9994 29.8619 20.287C30.2788 20.5745 30.77 20.7353 31.2762 20.75H33.2375L33.25 20.7612L33.2375 23.25Z"
        fill={color}
      />
    </svg>
  );
};

export default Setting;