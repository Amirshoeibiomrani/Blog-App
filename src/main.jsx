 import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import "./styles/fonts.css"

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import theme from './mui/theme.js'
 
 const client = new ApolloClient({
  uri:"https://api-us-west-2.hygraph.com/v2/clvwa6gpe019t07uznl0n20re/master",
  cache: new InMemoryCache()
 })

ReactDOM.createRoot(document.getElementById('root')).render(
 <ApolloProvider client={client}>
<ThemeProvider theme={theme}>

    <App />
</ThemeProvider>
   
 </ApolloProvider>
)
