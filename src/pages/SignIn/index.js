import {useRef, useState} from 'react';
import {FiLock, FiLogIn, FiMail} from 'react-icons/fi';

import {Background, Container, Content} from './styles';
import {Button} from '../../components/Button/Button';
import {Input} from '../../components/Input';
import {Form} from '@unform/web';
import {Link, Navigate} from 'react-router-dom';
import {findUser} from '../../services/userService';
import {useUserId} from '../../context/userInfo';

const Signin = () => {
  const {userId, setUserId} = useUserId();
  const [redirect, setRedirect] = useState(false);
  const formRef = useRef(null);

  //todo - Verificar o que esta de errado com o uso do Yup
  // const handleSubmit = useCallback(async (data) => {
  //   let errors = {};
  //   try {
  //     const schema = Yup.object().shape({
  //       email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  //       password: Yup.string().min(6, 'Senha obrigatória')
  //     });
  //
  //     await schema.validate(data, {
  //       abortEarly: false
  //     });
  //     await handleRedirect(data);
  //   } catch (err) {
  //     errors = getValidationErrors(err);
  //     formRef.current?.setErrors(errors);
  //   }
  // }, []);

  async function handleRedirect(data) {
    const response = await findUser(data);
    if (response !== undefined) {
      setUserId(response.id)
      setRedirect(true);
    }
  }

  return (
    redirect ? <Navigate to="/dashboard"/> :
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleRedirect}>
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

export {Signin};