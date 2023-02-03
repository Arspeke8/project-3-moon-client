import './App.css';
import { Home } from './pages/Home';
import { Header } from './screens/Header';
import { Footer } from './screens/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Navbar } from './screens/Navbar';
import FitnessHistory from './screens/FitnessHistory';
import WorkoutForm from './screens/WorkoutForm';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const Router = BrowserRouter;

const client = new ApolloClient({
  uri:'http://localhost:3002/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className='App'>
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='workoutform' element={<WorkoutForm />} />
          <Route path='fitnesshistory' element={<FitnessHistory />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
