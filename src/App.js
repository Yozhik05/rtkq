import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { createUser, fetchUsers } from "./userSlice";

export default function App() {
  const userRef = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const handleAddUser = () => {
    dispatch(createUser(userRef.current.value));
    console.log(users);
  };
  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };
  return (
    <div className="App">
      <input ref={userRef} />
      <button onClick={handleAddUser}> Add</button>
      <button onClick={handleFetchUsers}> Fetch Users</button>
      <div>
        {users.map((val, ind) => <div key={ind}>{val.name}</div>) || ""}
      </div>
    </div>
  );
}
