import styled from 'styled-components';
import Recycle from './components/Recycle';
import './Eco_Friendly.css';
import Renewable from './components/Renewable';
import App from './components/Carbonprint';

const Main = styled.div`
background-color:#ebfadc;

.Line1{
height:85%;

}
`

function EcoFriendly() {
  return (
    <Main>
      <Recycle></Recycle>
      <Renewable></Renewable>
      <App />
    </Main>
  );
}

export default EcoFriendly;
