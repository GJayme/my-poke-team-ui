import {Form} from '@unform/web';
import {FiLock, FiLogIn, FiMail} from 'react-icons/fi';
import {Link, useNavigate} from 'react-router-dom';
import {useCallback, useRef} from 'react';
import * as Yup from 'yup';

import {Background, Container, Content} from './SignInStyles';
import {Button, Input} from '../../components';
import {findUser} from '../../services';
import getValidationErrors from '../../utils/getValidationErrors';
import {useUserId} from '../../context/userInfo';

const schemaSignIn = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  password: Yup.string().min(6, 'Senha obrigatória')
});

const handleValidate = async (data) => {
  await schemaSignIn.validate(data, {
    abortEarly: false
  });
  return await findUser(data);
};

const SignIn = () => {
  const {setUserId} = useUserId();
  const formRef = useRef(null);
  const navigate = useNavigate();

  //useCallback vai recriar a função handleLogin se houver alteração no handleValidate, navigate, setUserId
  const handleLogin = useCallback(async (data) => {
    let errors = {};
    try {
      const response = await handleValidate(data);

      if (response !== undefined) {
        setUserId(response.id);
        navigate('/dashboard');
      }

    } catch (err) {
      errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, [navigate, setUserId]);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" type="password" icon={FiLock} placeholder="Senha"/>
          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="cadastrar">
          <FiLogIn/>
          Criar conta
        </Link>
      </Content>
      <Background/>
    </Container>
  );
};

export {SignIn};