import logo from './logo.svg';
import './App.css';
import { Home } from './Home'

// const client = ApolloClient({
//   uri:'https://my-server-url.heroku.com/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
