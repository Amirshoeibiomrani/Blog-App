 import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import "./styles/fonts.css"

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import theme from './mui/theme.js'
 
 const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache()
 })

ReactDOM.createRoot(document.getElementById('root')).render(
 <ApolloProvider client={client}>
<ThemeProvider theme={theme}>

    <App />
</ThemeProvider>
   
 </ApolloProvider>
)
