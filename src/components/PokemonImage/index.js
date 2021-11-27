const PokemonImage = ({name, size = 100, imagePath}) => (
  <div style={{padding: 20}}>
    <img
      src={imagePath}
      style={{height: size, width: size}}
      alt={name}
    />
  </div>
);

export {PokemonImage};