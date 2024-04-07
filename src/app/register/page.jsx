"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaApple, FaWpforms } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-[100dvh]">
      <div className="md:flex flex-col hidden flex-1">
        <div className="flex flex-row gap-1 items-center px-6 mt-8">
          <Image
            width={100}
            height={100}
            src={"/assets/images/logo.svg"}
            alt="Logo"
            className="w-16"
          />
          <span className="text-primary font-semibold">E-System</span>
        </div>
        <div className="flex-1 flex items-end mb-12 justify-center">
          <Image
            width={500}
            height={500}
            src={"/assets/images/image_login.png"}
            alt="Image Login"
            className="w-[600px]"
          />
        </div>
      </div>
      <div className="flex flex-col bg-blue-main w-full flex-1 md:flex-none md:w-[40%] md:max-w-[600px] text-white px-8 py-3">
        <h1 className="mt-12 text-3xl">Adventure start Here</h1>
        <p className="text-sm">Create new account to be adventure</p>
        <div className="flex flex-col gap-3 text-xs flex-1 justify-center">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <div className="border-[2px] px-3 rounded-[17px] py-3">
              <input
                className="bg-transparent w-full outline-none"
                type="text"
                name=""
                id="name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <label className="flex-1" htmlFor="email">
                Email
              </label>
              <button>Send code verify</button>
            </div>
            <div className="border-[2px] px-3 rounded-[17px] py-3 relative">
              <input
                className="bg-transparent w-full outline-none"
                type="email"
                name=""
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <label className="flex-1" htmlFor="password">
                Password
              </label>
            </div>
            <div className="border-[2px] pr-16 px-3 rounded-[17px] py-3 relative">
              <input
                className="bg-transparent w-full outline-none"
                type={showPassword ? "text" : "password"}
                name=""
                id="password"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className=" px-3 fill-white cursor-pointer absolute top-0 right-3 h-full flex items-center"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.055 11.2817C22.0244 11.2116 21.2769 9.55398 19.6076 7.88469C18.0587 6.33758 15.3975 4.49219 11.5001 4.49219C7.60269 4.49219 4.94152 6.33758 3.39261 7.88469C1.72332 9.55398 0.975816 11.2089 0.945269 11.2817C0.914554 11.3507 0.898682 11.4254 0.898682 11.5009C0.898682 11.5764 0.914554 11.6511 0.945269 11.7201C0.975816 11.7893 1.72332 13.4469 3.39261 15.1162C4.94152 16.6633 7.60269 18.5078 11.5001 18.5078C15.3975 18.5078 18.0587 16.6633 19.6076 15.1162C21.2769 13.4469 22.0244 11.792 22.055 11.7201C22.0857 11.6511 22.1015 11.5764 22.1015 11.5009C22.1015 11.4254 22.0857 11.3507 22.055 11.2817ZM11.5001 17.4297C8.68082 17.4297 6.2191 16.4037 4.18234 14.3813C3.32853 13.5328 2.60603 12.5616 2.03867 11.5C2.60587 10.4385 3.32839 9.46768 4.18234 8.61961C6.2191 6.59633 8.68082 5.57031 11.5001 5.57031C14.3194 5.57031 16.7811 6.59633 18.8179 8.61961C19.6718 9.46768 20.3944 10.4385 20.9616 11.5C20.3893 12.597 17.5196 17.4297 11.5001 17.4297ZM11.5001 7.36719C10.6827 7.36719 9.88368 7.60957 9.20405 8.06369C8.52441 8.51781 7.9947 9.16327 7.68189 9.91844C7.36909 10.6736 7.28725 11.5046 7.44671 12.3063C7.60618 13.108 7.99979 13.8444 8.57777 14.4223C9.15576 15.0003 9.89215 15.3939 10.6938 15.5534C11.4955 15.7129 12.3265 15.631 13.0817 15.3182C13.8368 15.0054 14.4823 14.4757 14.9364 13.7961C15.3905 13.1164 15.6329 12.3174 15.6329 11.5C15.6315 10.4043 15.1956 9.35398 14.4209 8.57924C13.6461 7.80449 12.5958 7.36861 11.5001 7.36719ZM11.5001 14.5547C10.896 14.5547 10.3054 14.3755 9.80302 14.0399C9.30068 13.7042 8.90915 13.2271 8.67795 12.669C8.44675 12.1108 8.38625 11.4966 8.50412 10.9041C8.62199 10.3115 8.91292 9.76722 9.34012 9.34001C9.76733 8.9128 10.3116 8.62187 10.9042 8.50401C11.4967 8.38614 12.1109 8.44663 12.6691 8.67784C13.2273 8.90904 13.7043 9.30057 14.04 9.80291C14.3756 10.3052 14.5548 10.8958 14.5548 11.5C14.5548 12.3102 14.233 13.0871 13.6601 13.66C13.0872 14.2329 12.3103 14.5547 11.5001 14.5547Z" />
                </svg>
                <div
                  className={`w-[2px] origin-top-left ${
                    !showPassword ? "h-0" : "h-[25px]"
                  } duration-500 ease-in-out bg-white rounded-[5px] top-[12px] rotate-45 right-[15px] absolute`}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="verifyid">Verif ID</label>
            <div className="border-[2px] px-3 rounded-[17px] py-3">
              <input
                className="bg-transparent w-full outline-none"
                type="text"
                name=""
                id="verifyid"
              />
            </div>
          </div>

          <div className="flex flex-row gap-2 mt-2 items-center">
            <input
              className="checked:fill-green-500"
              type="checkbox"
              name=""
              id="aggree"
            />
            <label htmlFor="aggree">I Agree to Privacy & Policy Terms</label>
          </div>
          <div className="flex w-full justify-center mt-3">
            <Link href={"/admin/home"}>
              <button className="bg-white px-12 py-2 text-primary rounded-[17px]">
                Sign Up
              </button>
            </Link>
          </div>
          <span className="text-center mt-4">Or Sign Up with :</span>
          <div className="flex flex-row flex-wrap justify-center gap-6">
            <button className="bg-white hover:bg-gray-100 rounded-[10px] py-2 px-4">
              <FaGoogle className="fill-primary h-[20px] w-[20px]" />
            </button>
            <button className="bg-white hover:bg-gray-100 rounded-[10px] py-2 px-4">
              <FaApple className="fill-primary h-[20px] w-[20px]" />
            </button>
          </div>
        </div>
        <div className="px-6 py-3 text-xs text-center">
          powered by @diprojectin.tech
        </div>
      </div>
    </div>
  );
}
