import {PokemonImage} from '../PokemonImage';
import {Button} from '../Button/Button';
import {ButtonWrapper, Container} from './styles';
import {addPokeToTeam} from '../../services/pokeService';
import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import {useUserId} from '../../context/userInfo';

const Card = ({name, id, imagePath}) => {
  const {userId} = useUserId();
  const [redirect, setRedirect] = useState(false);

  const handleAddPokeToTeam = async () => {
    const requestBody = {
      name: id,
      userId: userId
    };
    await addPokeToTeam(requestBody);
    setRedirect(true);
  };

  return (
    redirect ? <Navigate to={'/dashboard'}/> :
      <Container className="pokedex-entry column is-3">
        <div className="pokemoncard has-text-centered">
          <div>
            <div className="pokemoncard-image has-background-light">
              <PokemonImage id={id} name={name}
                            imagePath={imagePath}/>
            </div>
            <div className="pokemoncard-content">
              <h1 className="title is-4 is-capitalized">{name}</h1>
              <p className="subtitle is-6">#{id}</p>
            </div>
            <ButtonWrapper>
              <Button onClick={() => handleAddPokeToTeam()}>Add</Button>
            </ButtonWrapper>
          </div>
        </div>
      </Container>
  );
};

export {Card};