
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080B12] flex items-center justify-center px-4">

      {/* Background bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="bubble bubble-1"></span>
        <span className="bubble bubble-2"></span>
        <span className="bubble bubble-3"></span>
        <span className="bubble bubble-4"></span>
        <span className="bubble bubble-5"></span>
        <span className="bubble bubble-6"></span>
        <span className="bubble bubble-7"></span>
        <span className="bubble bubble-8"></span>
        <span className="bubble bubble-9"></span>
        <span className="bubble bubble-10"></span>
      </div>

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>

      {/* Login card */}
      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <LockKeyhole className="text-white" size={27} />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              Welcome back
            </h1>

            <p className="text-gray-400 mt-2 text-sm">
              Login to your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-13 pl-11 pr-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-gray-500 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </div>
           

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-13 pl-11 pr-12 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-gray-500 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-purple-600"
                />

                Remember me
              </label>

              <button
                type="button"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                Forgot password?
              </button>

            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full h-13 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Login
            </button>

          </form>

          {/* Bottom */}
          <p className="text-center text-sm text-gray-500 mt-7">
            Secure access to your dashboard
          </p>

        </div>
      </div>

      {/* Bubble animation */}
      <style>{`
        .bubble {
          position: absolute;
          bottom: -150px;
          display: block;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.03);
          box-shadow:
            inset 0 0 20px rgba(255,255,255,0.04),
            0 0 30px rgba(139,92,246,0.08);
          animation: floatBubble linear infinite;
        }

        .bubble-1 {
          width: 80px;
          height: 80px;
          left: 5%;
          animation-duration: 16s;
        }

        .bubble-2 {
          width: 35px;
          height: 35px;
          left: 15%;
          animation-duration: 12s;
          animation-delay: 3s;
        }

        .bubble-3 {
          width: 120px;
          height: 120px;
          left: 27%;
          animation-duration: 20s;
          animation-delay: 1s;
        }

        .bubble-4 {
          width: 50px;
          height: 50px;
          left: 42%;
          animation-duration: 14s;
          animation-delay: 5s;
        }

        .bubble-5 {
          width: 90px;
          height: 90px;
          left: 55%;
          animation-duration: 18s;
          animation-delay: 2s;
        }

        .bubble-6 {
          width: 30px;
          height: 30px;
          left: 68%;
          animation-duration: 11s;
          animation-delay: 4s;
        }

        .bubble-7 {
          width: 140px;
          height: 140px;
          left: 76%;
          animation-duration: 22s;
          animation-delay: 1s;
        }

        .bubble-8 {
          width: 45px;
          height: 45px;
          left: 88%;
          animation-duration: 13s;
          animation-delay: 6s;
        }

        .bubble-9 {
          width: 65px;
          height: 65px;
          left: 35%;
          animation-duration: 17s;
          animation-delay: 7s;
        }

        .bubble-10 {
          width: 25px;
          height: 25px;
          left: 92%;
          animation-duration: 10s;
          animation-delay: 2s;
        }

        @keyframes floatBubble {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          50% {
            transform: translateY(-50vh) translateX(40px) scale(1.1);
          }

          100% {
            transform: translateY(-115vh) translateX(-40px) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

