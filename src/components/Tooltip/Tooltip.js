import { Container } from './TooltipStyles';

const Tooltip = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export {Tooltip};