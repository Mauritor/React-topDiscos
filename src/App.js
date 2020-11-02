import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Top2020 from './components/Top2020';
import Top2021 from './components/Top2021';
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component= {Home} />
      <Route path="/top2020" component= {Top2020} />
      <Route path="/top2021" component= {Top2021} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
