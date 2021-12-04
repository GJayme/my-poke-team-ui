import icons from '../../icons.svg';

const Logo = ({size = 50}) => (
  <figure style={{display: 'inline-block', height: size, width: size}}>
    <svg style={{height: size, width: size}}>
      <use xlinkHref={`${icons}#my-poke-team`}/>
    </svg>
  </figure>
);

export {Logo};
