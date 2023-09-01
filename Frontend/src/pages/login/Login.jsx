import Logo from "../../assets/Logo.svg";
import LogoGroup from "../../assets/LogoGroups.svg";

export const Login = () => {
  return (
    <section className="w-screen h-screen overflow-y-hidden lg:grid lg:grid-cols-2">
      <article className="h-full w-full flex flex-col px-5  xl:px-[8.75rem] justify-center gap-8">
        <img src={Logo} className="w-12" alt="logo" />
        <p className="text-[2rem] font-semibold">Masuk ke akun kamu</p>
        <p className="font-normal text-[#4B5563]">
          Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu
          cita-citata sejak dalam embrio!
        </p>
        <form className="flex flex-col gap-[1.875rem] ">
          <div className="flex flex-col gap-[0.625rem]  ">
            <label className="font-bold" htmlFor="">
              Email
            </label>
            <input
              className="py-5 px-10 bg-[#F3F4F6] text-black"
              type="email"
              value="saipul@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-[0.625rem]">
            <div className="w-full flex justify-between">
              <label className="font-bold" htmlFor="">
                Password
              </label>
              <span className="text-[#4F46E5] font-semibold">
                Lupa Kata Sandi?
              </span>
            </div>
            <input
              className="py-5 px-10 bg-[#F3F4F6] text-black"
              type="password"
              value="⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            />
          </div>
          <div className="flex align-middle gap-[0.938rem]">
            <input
              className="w-[1.563rem] h-[1.563rem] text-[#F3F4F6] rounded-[0.188rem] border border-transparent "
              type="checkbox"
              name=""
              id=""
            />{" "}
            <span className="text-base text-center font-semibold">
              Remember me
            </span>
          </div>
          <button className="bg-[#4F46E5] text-white py-5 rounded-md">
            Masuk
          </button>
        </form>
        <p className="text-[#4B5563] text-center font-normal">
          Belum punya akun?{" "}
          <span className="text-[#4F46E5] font-semibold">
            Daftar sekarang, gratis!
          </span>
        </p>
      </article>
      <article className="hidden lg:flex lg:flex-col bg-[url('/RigthSide.svg')] bg-no-repeat bg-cover w-full justify-center">
        <img className="w-full" src={LogoGroup} alt="" />
        <div className="lg:w-[26rem] xl:w-[537px] self-center text-white">
          <p className="text-sm font-semibold opacity-60 mb-[10px]">
            NAMANYAJUGABELAJAR.IO
          </p>
          <p className="md:text-2xl xl:text-[28px]">
            Belajar secara online semakin mudah – tetep belajar walaupun pake
            kuota dari Kemendikbud hehe~
          </p>
        </div>
      </article>
    </section>
  );
};
