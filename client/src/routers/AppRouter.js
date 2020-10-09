import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Layout from '../components/layout/Layout'

import SignIn from '../routes/authentication/SignIn'
import SignUp from '../routes/authentication/SignUp'

import HomePage from '../routes/pages/index'
import IntroPage from '../routes/pages/intro'
import ChatRoom from '../routes/pages/chatroom'

import ProfilePage from '../routes/profile/Profile'

import FindJobPage from '../routes/event/FindEvent'
import PostJobPage from '../routes/event/PostEvent'
import JobPage from '../routes/event/Event'

import NotFoundPage from '../routes/pages/notFound'
import CurrentUserContext from '../context/current-user.context'
import 'antd/dist/antd.css'
import question1 from '../routes/questions/question1';


const AppRouter=()=>{
    const [currentUser]= useContext(CurrentUserContext)
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path='/' component={HomePage} exact={true}/>
                    <Route path='/intro' component={IntroPage}/>
                    <Route path='/chatroom' component={ChatRoom}/>
                    <Route path='/profile/:id' component={ProfilePage}/>
                    <Route path='/postjob' component={PostJobPage}/>
                    <Route path='/findjob' component={FindJobPage}/>
                    <Route path='/event/:id' component={JobPage}/>
                    <Route path='/questions' component={question1}/>
                    <Route 
                        path='/signin' 
                        render={()=>
                            currentUser.token?(
                                <Redirect to='/'/>
                            ):(
                                <SignIn/>
                            )
                        }  
                    />
                    <Route 
                        path='/signup' 
                        render={()=>
                            currentUser.token?(
                                <Redirect to='/'/>
                            ):(
                                <SignUp/>
                            )
                        }  
                    />
                    <Route component={NotFoundPage}/>
                </Switch> 
            </Layout>
        </Router>
    )
}

export default AppRouter