
//import pages and components
import CoinFlip from './pages/CoinFlip';
// import Inspiration from './pages/Inspiration';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Header from './components/Header'
import Footer from './components/Footer';

//import styling
import './App.css';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
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
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          {/* <Header /> */}
          <div className="">
            <Routes>
              <Route
                path="/"
                element={<Login />}
              />
              <Route
                path="/coinflip"
                element={<CoinFlip />}
              />  
              <Route
                path="/profile"
                element={<UserProfile />}
              />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

