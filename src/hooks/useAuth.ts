import { useContext } from "react";
import { AuthContext } from "src/contexts/auth";

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
