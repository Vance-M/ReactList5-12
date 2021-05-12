import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import AvatarContainer from '../../containers/avatarContainer';
import CharacterDetail from '../characters/CharacterDetail';

export default function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route 
                    path="/" 
                    exact
                    render={(routerProps) => <AvatarContainer {...routerProps} />} 
                />
                <Route
                    path="/:avatarId"
                    exact
                    component={CharacterDetail}
                />
            </Switch>
        </Router>
    </div>
    )
}

// this is where react router dom

// surge.sh
