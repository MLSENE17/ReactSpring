import React from 'react';
import { Switch,Route, BrowserRouter, Redirect, useHistory } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Classes from './page/Classes';
import EditEtudiant from './page/EditEtudiant';
import Etudiants from './page/Etudiants';
import Home from './page/Home';
import Login from './page/Login';
import NewEtudiantPage from './page/NewEtudiantPage';
import NotFound from './page/NotFound';
import ShowEtudiant from './page/ShowEtudiant';
import ShowImage from './page/ShowImage';
import NewClassePage from './page/NewClassePage';
import Storage from './Service.js/Storage';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
const App = () => {
  const login = window.location.pathname;
  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (Storage.isLogged() ) {
        next();
      }
      next.redirect('/login');
    } else {
      next();
    }
  };
  return (
    <div>
         <BrowserRouter>
               <GuardProvider guards={[requireLogin]} error={NotFound}>
                    <Switch>
                        <GuardedRoute path="/" exact component={Home}   meta={{ auth: true }} />
                          <GuardedRoute path="/etudiants" exact component={Etudiants} meta={{ auth: true }} />
                          <GuardedRoute path="/classes" exact component={Classes} meta={{ auth: true }} />
                          <GuardedRoute path="/classe/new" exact component={NewClassePage} meta={{ auth: true }} />
                          <GuardedRoute path="/etudiant/new" exact component={NewEtudiantPage} meta={{ auth: true }} />
                          <GuardedRoute  path="/etudiant/show/:id" exact component={ShowEtudiant} meta={{ auth: true }} />
                          <GuardedRoute path="/etudiant/edit/:id" exact component={EditEtudiant} meta={{ auth: true }} />
                          <GuardedRoute path="/login" exact component={Login} />
                          <GuardedRoute path="/all/image" exact component={ShowImage} meta={{ auth: true }} />
                          
                    </Switch>
               </GuardProvider>
         </BrowserRouter>
    </div>
  );
};

export default App;