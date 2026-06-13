import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-green-500 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold">
          nectar
        </h1>

        <p className="text-white mt-2">
          online grocery
        </p>
      </div>
    </div>
  );
}

export default Splash;