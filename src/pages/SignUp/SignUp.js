import {Form} from '@unform/web';
import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi';
import {useCallback, useRef, useState} from 'react';
import * as Yup from 'yup';

import {Background, Container, Content} from './SignUpStyles';
import {Button, Input} from '../../components';
import {createUserAndTeam} from '../../services';
import getValidationErrors from '../../utils/getValidationErrors';
import {Link, Navigate} from 'react-router-dom';

const schemaSignUp = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  password: Yup.string().min(6, 'No mínimo 6 dígitos')
});

const SignUp = () => {
  const [redirect, setRedirect] = useState(false);
  const formRef = useRef(null);

  //handleSubmit vai ser recriado uma vez
  const handleSubmit = useCallback(async (data) => {
    try {
      await schemaSignUp.validate(data, {
        abortEarly: false
      });
      await createUserAndTeam(data);
      setRedirect(true);
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    redirect ? <Navigate to="/"/> :
      <Container>
        <Background/>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome"/>
            <Input name="email" icon={FiMail} placeholder="E-mail"/>
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft/>
            Voltar para logon
          </Link>
        </Content>
      </Container>
  );
};

export {SignUp};