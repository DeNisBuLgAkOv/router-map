import React from 'react';
import './index.css';
import ListCoordinate from 'components/ListCoordinate'
import MapRoute from 'components/MapRoute';
import AppContainer from 'components/Container';

const App: React.FC = () => (
  <AppContainer>
    <ListCoordinate />
    <MapRoute />
   </AppContainer>
);

export default App;