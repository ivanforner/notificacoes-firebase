import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import useNotification from "./hooks/useNotification";
import NotificationButton from "./components/NotificationButton";

function App() {
  const { sendTestNotification } = useNotification();

  return (
    <>
      <Header />
      <NotificationButton action={sendTestNotification}/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
