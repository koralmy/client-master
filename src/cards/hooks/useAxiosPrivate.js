import axios from "axios";
import { useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";

function useAxiosPrivate() {
  const { token } = useUser();

  const axiosPrivate = axios.create({
    baseURL:
      process.env.REACT_APP_API_URL ||
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
    headers: { "Content-Type": "application/json" },
  });

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["x-auth-token"]) {
          config.headers["x-auth-token"] = token;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
    };
  }, [token]);

  return axiosPrivate;
}

export default useAxiosPrivate;
