import { useEffect, useState } from "react";
import ListContainer from "./components/common/ListContainer";
import ListItem from "./components/reusable/ListItem";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=2`);
      const data = await response.json();
      setUsers(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <div className="flex flex-col mt-8 w-[300px]">
        <input
          className="input border border-gray-400 px-4 py-2 my-3 rounded-md outline-none"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <ListContainer>
          {users
            .filter(({ first_name }) =>
              first_name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((user) => (
              <ListItem
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                first_name={user.first_name}
              />
            ))}
        </ListContainer>
      </div>
    </div>
  );
};

export default App;
