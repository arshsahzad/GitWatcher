import {BrowserRouter,Switch,Route} from 'react-router-dom'
import DefaultPage from '../pages/DefaultPage/index'
import RepoPage from '../pages/RepoPage/index'

export default function Routers(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'  component={DefaultPage}/>
                <Route path='/profile/:user' exact component={RepoPage}/>
               
            </Switch>
        </BrowserRouter>
    )
}