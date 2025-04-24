import LoginForm from "../features/login/LoginForm";
import LoginIcons from "../ui/LoginIcons";
import loginPhoto from "/images/login-photo.jpg";

function Login() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex h-full flex-2/5 items-center justify-center">
        <LoginForm />
      </div>
      <div className="relative z-20 flex h-full flex-3/5 items-center justify-center bg-indigo-100">
        <img
          src={loginPhoto}
          alt="school login-photo"
          className="mix-blend-multiply"
        />
        <LoginIcons />
      </div>
    </div>
  );
}

export default Login;
