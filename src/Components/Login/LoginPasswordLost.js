import React from 'react';
import Head from '../Helper/Head';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import UseForm from '../../Hooks/UseForm';
import UseFetch from '../../Hooks/UseFetch';
import { PASSOWRD_LOST } from '../../api';
import Error from '../Helper/Error';

const LoginiPasswordLost = () => {
  const login = UseForm();
  const { data, loading, error, request } = UseFetch();
  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSOWRD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const json = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section>
      <Head title="Perdeu sua Senha?" />
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled> Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginiPasswordLost;
