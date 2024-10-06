"use client";
import AdminPage from "@/components/templates/AdminPage";
import { useRef, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";

const page = ({params}) => {
  const [image, setImage] = useState();
  const inputRef = useRef(null);

  return (
    <AdminPage selected="userDatabase" title={"Management User Profile"}>
      <div className="bg-white rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Profile Details</h2>

        <div className="mb-6 flex flex-col md:flex-row gap-2 items-start md:items-center">
          <img
            src={image ? image : "https://picsum.photos/200/300"}
            alt="Profile"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <input
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
            }}
            ref={inputRef}
            type="file"
            name=""
            className="hidden"
            id=""
          />
          <div>
            <button
              onClick={() => inputRef.current.click()}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Upload new photo
            </button>
            <button
              onClick={() => setImage(undefined)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
            >
              Reset
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama
            </label>
            <input
              type="text"
              defaultValue="Shintia Caroline"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              defaultValue="Shintia@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ID
            </label>
            <input
              type="text"
              defaultValue="2671783782"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alamat
            </label>
            <input
              type="text"
              defaultValue="Jln Merdeka No 23 Jakarta Barat"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Divisi
            </label>
            <input
              type="text"
              defaultValue="Management"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              defaultValue="+62787979979"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary
            </label>
            <input
              type="text"
              defaultValue="IDR 10.000.000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
            Save Changes
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </AdminPage>
  );
};

export default page;
