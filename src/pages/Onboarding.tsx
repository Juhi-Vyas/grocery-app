import { useNavigate } from "react-router-dom";

function Onboarding() {

  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-end items-center text-white p-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542838132-92c53300491e')",
      }}
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Welcome to our store
        </h1>

        <p className="mt-3 text-sm">
          Get your groceries in as fast as one hour
        </p>

        <button
  onClick={() => navigate("/phone-login")}
  className="mt-8 bg-green-500 w-72 py-4 rounded-2xl text-white font-semibold"
>
  Get Started
</button>
      </div>
    </div>
  );
}

export default Onboarding;