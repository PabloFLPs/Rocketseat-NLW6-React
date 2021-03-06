import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import {BrowserRouter, Route} from "react-router-dom"

import {AuthContextProvider} from "./contexts/AuthContext"

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/rooms/new" exact={true} component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
