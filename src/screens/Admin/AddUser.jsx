import React, { useEffect, useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAdd = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/user`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setName("");
        setImage("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="font-semibold text-center my-4">Kullancı Ekle</h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-11/12 h-64 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  {image?.name ? image.name : "Resim İçin Tıklayın"}
                </span>
              </p>
            </div>
            <input
              onChange={(e) => handleFileChange(e)}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="İsim"
          className="border-2 w-2/3 border-purple-400 p-2 rounded-lg my-4"
        />
        <button
          onClick={() => handleAdd()}
          className="font-semibold text-sm border-2 px-6 py-2 focus:bg-purple-400 focus:text-white border-purple-400 rounded-lg"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default AddUser;
