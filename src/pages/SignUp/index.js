import {useCallback, useRef, useState} from 'react';
import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi';
import {Form} from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import {Background, Container, Content} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button/Button';
import {Link, Navigate} from 'react-router-dom';
import {createUserAndTeam} from '../../services/userService';

const SignUp = () => {
  const [redirect, setRedirect] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos')
      });

      await schema.validate(data, {
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