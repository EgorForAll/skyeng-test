import "./App.css";
import Search from "./components/search/search";
import UsersList from "./components/list/users-list";
function App() {
  return (
    <div className="App">
      <Search />
      <UsersList />
    </div>
  );
}

export default App;
