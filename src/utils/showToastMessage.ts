import toast from 'react-hot-toast';

import colors from '../styles/colors';

const showToastMessage = (
  message: string,
  type: 'success' | 'error' | 'default'
) => {
  const toastOptions = {
    style: {
      background: colors.grayScale.gray04,
      color: colors.grayScale.white
    }
  };

  if (type === 'success') {
    toast.success(message, toastOptions);
    return;
  }
  if (type === 'error') {
    toast.error(message, toastOptions);
    return;
  }
  toast(message, toastOptions);
};

export default showToastMessage;
