import Title from "./Title";

function Signup() {
  return (
    <>
      <Title title="Signin component" />
      <div className="w-[350px] p-4 flex flex-col gap-4 shadow-lg shadow-black/25 font-roboto">
        <div className="mb-3 flex flex-col gap-1">
          <h2 className="font-semibold text-xl font-roboto">Log In</h2>
          <p className="text-xs font-semibold text-gray-500 font-roboto">
            Get Started For Free
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border-[1px] caret-black border-gray-400 placeholder:text-gray-400 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border-[1px] border-gray-400 placeholder:text-gray-400 rounded-md"
          />
          <div className="p-2 flex flex-row gap-2">
            <input type="checkbox" />
            <p className="font-semibold text-sm">
              I accept the Terms and Conditions
            </p>
          </div>
        </div>
        <button
         className="py-1 px-[40%] text-lg bg-gradient-to-tr from-blue-500 to-blue-800 text-white rounded-md \
          transition-all duration-300 hover:scale-105 hover:to-blue-700"
         >
          Log In
        </button>
        <div className="flex flex-row gap-1">
          <a
            href="www.google.com"
            className="text-blue-500 text-sm font-semibold underline cursor-pointer"
          >
            Create Account
          </a>
          <a
            href="www.youtube.com"
            className="text-blue-500 text-sm font-semibold underline cursor-pointer"
          >
            Forgot Password
          </a>
        </div>
      </div>
    </>
  );
}

export default Signup;
