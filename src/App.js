import React from "react";
import "./App.css";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import FuelInfo from "./components/FuelInfo";
import { UserProvider } from "./components/UserContext";
import { FuelProvider } from "./components/FuelContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <UserProvider>
          <UserInfo />
        </UserProvider>
        <FuelProvider>
          <FuelInfo />
        </FuelProvider>
      </main>
    </div>
  );
}

export default App;
