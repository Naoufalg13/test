import React, { useEffect } from "react";
import Swal from "sweetalert2";
import io from "socket.io-client";
//import "antd/dist/antd.css";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("connection", function (data) {
      socket.emit("ready for data", {
        user: 10,
      });
    });

    socket.on("Nouvelle commande", (data) => {
      console.log("Nouvelle commande");
      Swal.fire({
        title: " Nouvelle commande " + data.message,
        icon: "success",
        confirmButtonText: "Ok",
      });
    });
    socket.on("disconnect", function () {
      socket.disconnect();
    });
  }, []);

  return <div style={{ height: 400, width: "100%" }}>test</div>;
}

export default App;
