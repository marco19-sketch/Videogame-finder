import AvatarPicker from "../components/AvatarPicker";
import AvatarUrlInput from "../components/AvatarUrlInput";
import { useContext } from "react";
import { AppContext } from "../context/contextsCreation";

export default function AvatarPage() {
  const { avatar, setAvatar } = useContext(AppContext);

  console.log("AvatarPage re-rendered with url:", avatar);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800
     to-black flex flex-col items-center py-8 px-4 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-2 drop-shadow-lg">
        Choose your avatar
      </h1>
      <div className="flex flex-col items-center   mt-12 gap-4 p-6 bg-gray-900 text-white rounded-xl">
        <AvatarPicker />
        <AvatarUrlInput url={avatar} setUrl={setAvatar} />
      </div>
    </div>
  );
}
