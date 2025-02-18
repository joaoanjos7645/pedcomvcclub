import { createContext, useContext, useEffect, useState } from "react";
import { getUser, loginUser, logoutUser } from "@/lib/auth";
import { useRouter, useSegments } from "expo-router";

type AuthContextType = {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const checkUser = async () => {
      const currentUser = await getUser();
      setUser(currentUser);
      if (!currentUser && segments[0] !== "login") {
        console.log(segments[0])
        router.replace("/login");
      }
    };

    checkUser();
  }, []);

  const login = async (email: string, password: string) => {
    const userData = await loginUser(email, password);
    setUser(userData);
    router.replace("/(tabs)");
  };

  const logout = () => {
    logoutUser();
    setUser(null);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
