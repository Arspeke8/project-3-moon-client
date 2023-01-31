import logo from './logo.svg';
import './App.css';
import { Home } from './Home'
import WorkoutForm from './components/WorkoutForm.js';
import FitnessHistory from './components/FitnessHistory';

// const client = ApolloClient({
//   uri:'https://my-server-url.heroku.com/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
      <Home/>
      <WorkoutForm/>
      <FitnessHistory/>
    </div>
  );
}

export default App;
