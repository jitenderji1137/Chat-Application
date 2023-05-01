import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [user] = useAuthState(auth);
  window.scrollTo(0, document.body.scrollHeight);
  return (
    <div className="App">
      <NavBar/>
      {user?<ChatBox/>:<Welcome/>}
    </div>
  );
}
export default App;