import { useState } from "react";
import { auth } from "../firebase";
import ThemedButton from "../ThemedComponents/ThemedButton";
import ThemedInput from "../ThemedComponents/ThemedInput";
import useRadioCheck from "../customHooks/useRadioCheck";

export default function AvatarFileUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const playSound = useRadioCheck();

  const handleFileChange = e => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return setMessage("❌ Select a file first");
    const user = auth.currentUser;
    if (!user) return setMessage("❌ Not authenticated");

    try {
      const storageRef = ref(storage, `avatars/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      onUpload(url);
      setMessage("✅ Avatar uploaded!");
      setFile(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed");
    }
  };

  return (
    <>
    <p className='text-cyan-400 text-xl text-center'>Or upload an image</p>
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-900 rounded-xl">
      <ThemedInput type="file" accept="image/*" onChange={handleFileChange} className='cursor-pointer'/>
      <ThemedButton
        onClick={() => {
          handleUpload();
          playSound();
        }}
        className='p-4'>
        Upload File
      </ThemedButton>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400"
        />
      )}
      {message && <p className="text-cyan-400">{message}</p>}
    </div>
    </>
  );
}
