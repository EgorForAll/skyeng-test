import "../../css/App.css";
import Search from "../search/search";
import UsersList from "../list/users-list";
function App() {
  return (
    <div className="App">
      <Search />
      <UsersList />
    </div>
  );
}

export default App;
