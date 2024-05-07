 import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// "client" ertebat ba backend gql bargharar mikone
const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clvwa6gpe019t07uznl0n20re/master ",
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>

    <App />
  </ApolloProvider>
  
)
