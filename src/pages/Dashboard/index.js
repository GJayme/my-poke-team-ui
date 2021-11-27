import {Header} from '../../components/Header';
import {Container, DisplayCard} from './styles';
import {Card} from '../../components/CardDashboard';
import {useEffect} from 'react';
import {findTeamByUserId} from '../../services/pokeService';

import {useUserId} from '../../context/userInfo';

const Dashboard = () => {
  const {userId} = useUserId();
  const {myTeam, setMyTeam} = useUserId();

  useEffect(async () => {
    const response = await findTeamByUserId(userId);
    setMyTeam(response);
  }, []);

  function handleDisplayCard() {
    if (myTeam !== undefined) {
      return myTeam.pokes.map((poke) => (
        <Card key={poke.name} name={poke.name} imagePath={poke.image} id={poke.id}/>
      ));
    }
  }

  return (
    <Container>
      <Header/>
      <DisplayCard>
        {myTeam !== null && handleDisplayCard()}
      </DisplayCard>
    </Container>
  );
};

export {Dashboard};