import { useContext } from "react";
import AuthProvider, { AuthContext } from "../context/AuthProvider"

const useAuth=()=>{
    return useContext(AuthContext);
}

export default useAuth;