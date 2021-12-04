import {Form} from '@unform/web';
import {useRef, useState} from 'react';

import {Button, CardSearch, Header, Input} from '../../components';
import {Container, Content, DisplayCard, WrapperCard} from './PokeSearchStyles';
import {findPoke} from '../../services';

const PokeSearch = () => {
  const formRef = useRef(null);
  const [poke, setPoke] = useState(null);

  function handleDisplayCard() {
    if (poke !== undefined) {
      return (
        <CardSearch key={poke.name} name={poke.name} imagePath={poke.image} id={poke.id}/>
      );
    }
  }

  async function handleSearchPoke(data) {
    const response = await findPoke(data);
    setPoke(response);
  }

  return (
    <>
      <Header/>
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSearchPoke}>
            <h1>Digite o número ou o nome do poke desejado:</h1>
            <Input name="poke" placeholder="poke"/>
            <Button type="submit">Pesquisar</Button>
          </Form>
        </Content>
        <WrapperCard>
          <DisplayCard>
            {poke !== null && handleDisplayCard()}
          </DisplayCard>
        </WrapperCard>
      </Container>
    </>
  );
};

export {PokeSearch};