import { Loader } from "@deemlol/next-icons";


export default function Loading() {
  return (
  
  <div className="w-full h-full flex justify-center items-center">
    <Loader size={40} className="animate-spin" />
  </div>
  );
}