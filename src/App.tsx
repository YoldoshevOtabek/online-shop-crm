import { AppRoute } from "./routes/AppRoute"
import { ConfigProvider, theme } from "antd";
import { useTheme } from "./context/ThemeContext";


export const App = () => {
  const { theme: isDark } = useTheme();
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark
        ? theme.defaultAlgorithm
          : theme.darkAlgorithm,

        token: {
          colorPrimary: "#1677ff",
          borderRadius: 8,
        },
      }}
    >
      <AppRoute/>
    </ConfigProvider>
  )
}
