import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import styled from '@emotion/styled';

import customAxios from '../api/customAxios';

const getProdcuts = async () => {
  const { data } = await customAxios.get('/product');
  console.log(data);
};

const postProducts = async (formData: FormData) => {
  const { data } = await customAxios.post('/product', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  console.log(data);
};

const Button = styled.button`
  padding: 10px;
  background-color: lightgray;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Test = () => {
  const [file, setFile] = useState<File>();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [companyId, setCompanyId] = useState('');

  const handleChangeFileInput: ChangeEventHandler<HTMLInputElement> = ({
    target: { files }
  }) => {
    if (!files || !files[0]) return;
    setFile(files[0]);
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    if (!file || !name || !price || !companyId) {
      alert('양식을 확인해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('thumbnailImage', file);
    formData.append('price', price);
    formData.append('companyId', companyId);
    formData.append('name', name);

    postProducts(formData);
  };

  return (
    <div>
      <h1>프로덕트 목록입니다.</h1>
      <h2>모든 테스트 결과는 콘솔에 표시됩니다. 개발자모드를 켜주세요.</h2>
      <Button onClick={() => getProdcuts()}>프로덕트 다운받기</Button>
      <Form encType="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="price">price</label>
        <input
          type="text"
          id="price"
          onChange={({ target: { value } }) => setPrice(value)}
        />
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          onChange={({ target: { value } }) => setName(value)}
        />
        <label htmlFor="thumbnailImage">thumbnailImage</label>
        <input
          type="file"
          id="thumbnailImage"
          onChange={handleChangeFileInput}
        />
        <label htmlFor="companyId">companyId</label>
        <input
          type="text"
          id="companyId"
          onChange={({ target: { value } }) => setCompanyId(value)}
        />
        <input type="submit" />
      </Form>
    </div>
  );
};

export default Test;
