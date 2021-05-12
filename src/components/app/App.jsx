import React from 'react';
// import { Router, Route, Switch} from 'react-router';
import Villagers from '../../containers/Villagers';
import Detail from '../../containers/Detail';

export default function App() {
  return <Villagers />
  // (
    // <Router>
    //   <Switch>
    //     <Route exact path='/' render={(routerProps) => <Villagers {...routerProps} />}/>
    //     <Route path='/:id' render={(routerProps) => <Detail {...routerProps} />} />
    //   </Switch>
    // </Router>
    // <div>
    //   <Router>
    //     <Switch>
    //       <Route exact path="/" component={Villagers}/>
    //       <Route path="/:id" component={Detail}/>
    //     </Switch>
    //   </Router>
    // </div>
  // )
}
