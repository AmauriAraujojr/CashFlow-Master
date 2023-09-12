import React, { createContext, useEffect, useState } from "react";
import { Api } from "../../../services.ts";
import jwtDecode from "jwt-decode";
import { ILoginFormData } from "../../pages/Login/LoginForm/LoginForm.tsx";
import { useNavigate } from "react-router-dom";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  logout: () => void;
  user: IUser | null;
  userLogin: (formdata: ILoginFormData
    
    , setLoading: React.Dispatch<React.SetStateAction<boolean>>
    
    ) => Promise<void>;
  load: boolean;
}

interface IUser {
  email: string;
  username: string;
  id: number;
  nome_empresa: string;
  avatar_empresa: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  const userLogin = async (formData: ILoginFormData
    
    ,setLoading: React.Dispatch<React.SetStateAction<boolean>>
    
    ) => {
    setLoading(true)

    try {
      const response = await Api.post("/users/login/", {
        username: formData.username,
        password: formData.password,
      });
      localStorage.setItem("@TOKEN", response.data.access);
      const jwt: any = jwtDecode(response.data.access);
      localStorage.setItem("@USERID", jwt.user_id);

      const newUser = {
        id: jwt.user_id,
        username: jwt.user_username,
        email: jwt.user_email,
        nome_empresa: jwt.user_nome_empresa,
        avatar_empresa: jwt.user_avatar_empresa,
      };

      setUser(newUser);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
    
    
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("@USERID");
    const token = localStorage.getItem("@TOKEN");

    const autoLogin = async () => {
      try {
        const response = await Api.get(`/user/${id}/`);

        setUser(response.data);

        navigate("/dashboard");
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      } finally {
        setLoad(false);
      }
    };

    if (token) {
      autoLogin();
    } else {
      setLoad(false);
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ logout, user, userLogin, load }}>
      {children}
    </UserContext.Provider>
  );
};
