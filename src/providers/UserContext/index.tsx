import React, { createContext, useEffect, useState } from "react";
import { Api } from "../../../services.ts";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { IR } from "../../pages/Register/RegisterForm/formR.tsx";
import { IF } from "../../pages/Login/LoginForm/loginf.tsx";
import { toast } from "react-toastify";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  logout: () => void;
  user: IUser | null;
  userLogin: (formData: IF, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
  load: boolean;
  addNewUser: (formdata: IR, setLoad: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
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

  const userLogin = async (formData: IF
    
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

  const addNewUser=async(formdata:IR, setLoad:React.Dispatch<React.SetStateAction<boolean>>)=>{
    setLoad(true)
    try {

      await Api.post("/users/",{
        username:formdata.username,
        password:formdata.password,
        email: formdata.email,
        nome_empresa: formdata.nome_empresa,
        avatar_empresa: formdata.avatar_empresa
      });
      toast.success("Empresa cadastrada com sucesso!");
      navigate("/")
      
    } catch (error) {
      console.log(error)
    }finally{
      setLoad(false)
    }


  }

  return (
    <UserContext.Provider value={{ logout, user, userLogin, load, addNewUser }}>
      {children}
    </UserContext.Provider>
  );
};
