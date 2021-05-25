import { useQuery } from "react-query";
import { api } from "../api";

interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

export async function getUsers(): Promise<User[]> {
  const response = await api.get("/users");
  const data = await response.data;
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      created_at: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

export function useUsers() {
  return useQuery("user", getUsers, {
    staleTime: 1000 * 5, // 5secundos
  });
}
