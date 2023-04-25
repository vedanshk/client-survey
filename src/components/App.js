import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom';

const Header = () =>  <h1>Header</h1>;
const DashBoard = () => <h1>DashBoard</h1>;
const Landing = () => <h1>Landing</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>

function App () {
  return (
    <div> 
      <BrowserRouter>
      
      <div>
      <Route path="/" component={Landing} />-

      </div>

      </BrowserRouter>
    <a href='http://localhost:4001/auth/google'> Sign in google</a>
   </div>
  )
}

export default App;