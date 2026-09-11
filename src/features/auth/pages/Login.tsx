import { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import useLogin from "../hooks/useLogin";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useLogin();

  const onFinish = (values: { email: string; password: string }) => {
    mutate(values);
  };

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
              <LockOutlined
                style={{ fontSize: 27, color: "white" }}
              />
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
          <Form
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            className="login-form"
          >

            {/* Email */}
            <Form.Item
              label={
                <span className="text-sm text-gray-300">
                  Email
                </span>
              }
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email kiriting",
                },
                {
                  type: "email",
                  message: "Email noto'g'ri",
                },
              ]}
            >
              <Input
                size="large"
                prefix={
                  <MailOutlined className="text-gray-500" />
                }
                placeholder="Enter your email"
                className="custom-input"
              />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label={
                <span className="text-sm text-gray-300">
                  Password
                </span>
              }
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password kiriting",
                },
                {
                  min: 6,
                  message: "Password kamida 6 ta belgidan iborat bo'lishi kerak",
                },
              ]}
            >
              <Input
                size="large"
                type={showPassword ? "text" : "password"}
                prefix={
                  <LockOutlined className="text-gray-500" />
                }
                suffix={
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer text-gray-500 hover:text-white transition"
                  >
                    {showPassword ? (
                      <EyeInvisibleOutlined />
                    ) : (
                      <EyeOutlined />
                    )}
                  </span>
                }
                placeholder="Enter your password"
                className="custom-input"
              />
            </Form.Item>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm mb-5">

              <Form.Item
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox className="custom-checkbox">
                  <span className="text-gray-400">
                    Remember me
                  </span>
                </Checkbox>
              </Form.Item>

              <button
                type="button"
                className="text-purple-400 hover:text-purple-300 transition bg-transparent border-none cursor-pointer"
              >
                Forgot password?
              </button>

            </div>

            {/* Login button */}
            <Form.Item className="mb-0">
              <Button
                htmlType="submit"
                loading={isPending}
                block
                size="large"
                className="login-button"
              >
                {isPending ? "Loading..." : "Login"}
              </Button>
            </Form.Item>

          </Form>

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

        /* Ant Design Input */
        .login-form .custom-input {
          height: 52px;
          background: rgba(0, 0, 0, 0.20) !important;
          border: 1px solid rgba(255,255,255,0.10) !important;
          color: white !important;
          border-radius: 12px;
          box-shadow: none !important;
        }

        .login-form .custom-input:hover {
          border-color: rgba(139,92,246,0.7) !important;
        }

        .login-form .custom-input:focus,
        .login-form .custom-input.ant-input-affix-wrapper-focused {
          border-color: #8b5cf6 !important;
          box-shadow: 0 0 0 2px rgba(139,92,246,0.20) !important;
        }

        .login-form .custom-input input {
          background: transparent !important;
          color: white !important;
        }

        .login-form .custom-input input::placeholder {
          color: #6b7280 !important;
        }

        /* Ant Design label */
        .login-form .ant-form-item {
          margin-bottom: 20px;
        }

        .login-form .ant-form-item-label {
          padding-bottom: 8px;
        }

        /* Checkbox */
        .custom-checkbox .ant-checkbox-inner {
          background: rgba(0,0,0,0.2);
          border-color: rgba(255,255,255,0.15);
        }

        .custom-checkbox:hover .ant-checkbox-inner {
          border-color: #8b5cf6 !important;
        }

        /* Login button */
        .login-button {
          height: 52px !important;
          border: none !important;
          border-radius: 12px !important;
          background: linear-gradient(
            to right,
            #9333ea,
            #4f46e5
          ) !important;
          color: white !important;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(147,51,234,0.20);
          transition: all 0.2s ease;
        }

        .login-button:hover {
          transform: scale(1.01);
          box-shadow: 0 10px 30px rgba(147,51,234,0.40) !important;
        }

        .login-button:active {
          transform: scale(0.99);
        }

        .login-button.ant-btn-loading {
          opacity: 0.8;
        }

        /* Error text */
        .login-form .ant-form-item-explain-error {
          color: #f87171;
          font-size: 12px;
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
};