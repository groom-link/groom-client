const readFileAsURL = (file: File, callback: (url: string) => void) => {
  const fileReader = new FileReader();
  fileReader.addEventListener('load', ({ target }) => {
    if (!target) return;
    const { result } = target;
    if (typeof result !== 'string') return;
    callback(result);
  });
  fileReader.readAsDataURL(file);
};

export default readFileAsURL;
