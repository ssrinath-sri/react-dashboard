import { FC } from 'react';
import Button from 'react-bootstrap/Button';


import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start cliking on below link to see some magic happen :)</p>
      <Button variant="secondary">Dash board</Button>{' '}
    </div>
  );
};
