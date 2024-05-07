import{gql,useQuery} from "@apollo/client"

const QUERY = gql`
query{
  authors{name}
}`

function App() {
  const {loading,data}=useQuery(QUERY)
  console.log(data)
  return (
    <div>
App    </div>
  )
}

export default App