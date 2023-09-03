import Logo from "../../assets/Logo.svg";
import LogoGroup from "../../assets/LogoGroups.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../store/slices/auth/thunks";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticating } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) console.log("email or password is empty");
    try {
      await dispatch(login({ email, password }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isAuthenticating && navigate("/");
  }, [isAuthenticating, navigate]);

  return (
    <section className="w-screen h-screen overflow-y-hidden lg:grid lg:grid-cols-2">
      <article className="h-full w-full flex flex-col px-5 xl:px-[8.75rem] justify-center gap-8">
        <img src={Logo} className="w-12" alt="logo" />
        <p className="text-[2rem] font-semibold">Accede a tu cuenta</p>
        <p className="font-normal text-[#4B5563]">
          Aprende gratis en Namanyajugabelajar.io, ¡y empieza la carrera con la
          que llevas soñando desde que eras un embrión!
        </p>
        <form className="flex flex-col gap-[1.875rem]" onSubmit={handleLogin}>
          <div className="flex flex-col gap-[0.625rem]">
            <label className="font-bold" htmlFor="">
              Email
            </label>
            <input
              className="py-5 px-10 bg-[#F3F4F6] text-black"
              type="email"
              value={email}
              placeholder="saipul@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-[0.625rem]">
            <div className="w-full flex justify-between">
              <label className="font-bold" htmlFor="">
                Contraseña
              </label>
              <Link
                to="/reset-password"
                className="text-[#4F46E5] font-semibold"
              >
                ¿Ha olvidado su contraseña?
              </Link>
            </div>
            <input
              className="py-5 px-10 bg-[#F3F4F6] text-black"
              type="password"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex align-middle gap-[0.938rem]">
            <input
              className="w-[25px] bg-[#F3F4F6] rounded-[0.188rem] border border-transparent "
              type="checkbox"
              name=""
              id=""
            />{" "}
            <span className="text-base text-center font-semibold">
              Recuérdame
            </span>
          </div>
          <button className="bg-[#4F46E5] text-white py-5 rounded-md">
            Iniciar sesión
          </button>
        </form>
        <p className="text-[#4B5563] text-center font-normal">
          ¿Aún no tiene cuenta?{" "}
          <Link to="/register" className="text-[#4F46E5] font-semibold">
            Regístrese ahora
          </Link>
        </p>
      </article>
      <article className="hidden lg:flex lg:flex-col bg-[url('/RigthSide.svg')] bg-no-repeat bg-cover w-full justify-center">
        <img className="w-full" src={LogoGroup} alt="" />
        <div className="lg:w-[26rem] xl:w-[537px] self-center text-white">
          <p className="text-sm font-semibold opacity-60 mb-[10px]">
            NAMANYAJUGABELAJAR.IO
          </p>
          <p className="md:text-2xl xl:text-[28px]">
            Aprender online es cada vez más fácil, sigue aprendiendo aunque uses
            la cuota del Ministerio de Educación y Cultura jeje~
          </p>
        </div>
      </article>
    </section>
  );
};
