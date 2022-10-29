import { useQuery } from "react-query";
import User from "../../components/users/User";
import { getUsers } from "../../config/crudRequest";

export default function Users() {
  const { isLoading, isError, error, data } = useQuery("users", getUsers);

  if (data) {
    const usersData = data.data.data;
    return usersData.map((user) => <User key={user.id} userData={user} />);
  }
}
