import Image from "next/image";
const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        width={200}
        height={200}
        priority={true}
        alt="updalla apshir"
      />
    </section>
  );
};

export default MyProfilePic;
