import axios from "axios";
import React, { useState } from "react";
import { HashLoader } from "react-spinners";

const Admin = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const storage = sessionStorage.getItem("authStatus");

  const handleLogin = async () => {
    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/login`, {
        phone: phone.replace(/\s/g, ""),
      })
      .then((res) => {
        if (res.data.isAdmin) {
          sessionStorage.setItem("authStatus", true);
          window.location = "/admin/dashboard";
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setPhone("");
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-200 gap-4 shadow-lg rounded-lg w-11/12 h-1/2 mx-auto my-32 p-4 flex flex-col items-center justify-center">
      <h1 className="font-bold text-lg">Giriş Yap</h1>
      <input
        type="tel"
        value={phone}
        onChange={(e) => {
          if (e.target.value.length < 13) {
            var cleaned = ("" + e.target.value).replace(/\D/g, "");

            let normValue = `${cleaned.substring(0, 3)}${
              cleaned.length > 3 ? " " : ""
            }${cleaned.substring(3, 6)}${
              cleaned.length > 6 ? " " : ""
            }${cleaned.substring(6, 11)}`;

            setPhone(normValue);
          }
        }}
        placeholder="Telefon Numarası"
        className=" border-2 text-center p-2 my-2 w-3/4 rounded-md text-sm focus:outline-none font-semibold  border-transparent focus:border-purple-400"
      />
      <button
        disabled={phone.length !== 12}
        onClick={() => handleLogin()}
        className="font-semibold border-2 flex justify-center  w-1/2 disabled:border-gray-400 disabled:bg-gray-400 border-purple-400 px-8 py-2 rounded-lg text-sm hover:bg-purple-400 transition-colors duration-300 hover:text-white"
      >
        {loading ? <HashLoader size={20} /> : "Giriş Yap"}
      </button>
    </div>
  );
};

export default Admin;
