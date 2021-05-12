import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Villagers from '../../containers/Villagers';
import Detail from '../../containers/Detail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Villagers}/>
        <Route path="/:id" component={Detail}/>
      </Switch>
    </Router>
  )
}
