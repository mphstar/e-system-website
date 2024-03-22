import Image from "next/image";

const IconsSidebar = ({ image, isNotif = false }) => {
  return (
    <div className="w-[30px] relative p-1">
      {isNotif && (
        <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0"></div>
      )}
      <Image
        width={500}
        height={500}
        src={image}
        alt="Home"
        className="w-fit items-center flex justify-center"
      />
    </div>
  );
};

export default IconsSidebar;
