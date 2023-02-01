
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navbar } from "./Components/Navbar";
const Router = BrowserRouter;


// const client = ApolloClient({
//   uri:'https://my-server-url.heroku.com/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
