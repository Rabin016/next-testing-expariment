import { useEffect, useState } from "react";
import User from "../../components/users/User";
import { usersApi } from "../../config/axios";

export default function Users() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await usersApi.get("/user");
      setAllUsers(data.data);
      allUsers && console.log(allUsers);
    })();
  }, []);
  if (allUsers) {
    return allUsers.map((user) => <User key={user.id} userData={user} />);
  }
}
