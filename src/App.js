import './App.css';
import { Home } from './pages/Home';
import './App.css';
import { Header } from './screens/Header';
import { Footer } from './screens/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import  Login  from './pages/Login';
import { Signup } from './pages/Signup';
import { Navbar } from './screens/Navbar';
import WorkoutForm from './screens/WorkoutForm';
import FitnessHistory from './screens/FitnessHistory';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const Router = BrowserRouter;
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <div className='App'>
       <ApolloProvider client={client}>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='workoutform' element={<WorkoutForm />} />
          <Route path='/fitnesshistory' element={<FitnessHistory />} />
        
        </Routes>
        <Footer />
      </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
