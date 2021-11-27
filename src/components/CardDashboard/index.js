import {PokemonImage} from '../PokemonImage';
import {Button} from '../Button/Button';
import {ButtonWrapper, Container} from './styles';
import {findTeamByUserId, removePokeFromTeam} from '../../services/pokeService';
import {useUserId} from '../../context/userInfo';

const Card = ({name, id, imagePath}) => {
  const {userId} = useUserId();
  const {setMyTeam} = useUserId();

  const handleRemovePokeFromTeam = async () => {
    const team = await findTeamByUserId(userId);
    const requestBody = {
      teamId: team.id,
      pokeId: id
    };
    await removePokeFromTeam(requestBody);
    const response = await findTeamByUserId(userId);
    setMyTeam(response);
  };

  return (
    <Container className="pokedex-entry column is-3">
      <div className="pokemoncard has-text-centered">
        <div>
          <div className="pokemoncard-image has-background-light">
            <PokemonImage id={id} name={name} imagePath={imagePath}/>
          </div>
          <div className="pokemoncard-content">
            <h1 className="title is-4 is-capitalized">{name}</h1>
            <p className="subtitle is-6">#{id}</p>
          </div>
          <ButtonWrapper>
            <Button onClick={() => handleRemovePokeFromTeam()}>Remover</Button>
          </ButtonWrapper>
        </div>
      </div>
    </Container>
  );
};

export {Card};