import {useCallback, useEffect} from 'react';

import {Container, DisplayCard} from './DashboardStyles';
import {CardDashboard, Header} from '../../components';
import {findTeamByUserIdService} from '../../services';
import {useUserId} from '../../context/userInfo';

const Dashboard = () => {
  const {userId} = useUserId();
  const {myTeam, setMyTeam} = useUserId();

  //useCallBack só é chamado quando setMyTeam ou userId é alterado
  const findTeamByUserId = useCallback(async () => {
    const response = await findTeamByUserIdService(userId);
    setMyTeam(response);
  }, [setMyTeam, userId]);

  useEffect(() => {
    findTeamByUserId().then();
  }, [findTeamByUserId]);

  function handleDisplayCard() {
    if (myTeam !== undefined) {
      return myTeam.pokes.map((poke) => (
        <CardDashboard key={poke.name} name={poke.name} imagePath={poke.image} id={poke.id}/>
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