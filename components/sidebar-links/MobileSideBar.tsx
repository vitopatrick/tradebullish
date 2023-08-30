import { FaTimes } from "react-icons/fa";
import SideBarLinks from "./SideBarLinks";
import { Dispatch, SetStateAction } from "react";

type LoadingModal = {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};

export default function MobileSideBar({ isOpen, toggle }: LoadingModal) {
  return (
    <div
      className={
        isOpen
          ? "fixed top-0 z-40 bottom-0 right-0 left-0 bg-white/20 backdrop-blur-md"
          : "hidden"
      }
    >
      <div className="my-4 p-4">
        <button
          className="flex items-center gap-2 justify-center"
          onClick={() => toggle(false)}
        >
          <span className="text-white font-body">CLOSE</span>
          <FaTimes className="text-white" />
        </button>
      </div>

      <SideBarLinks />
    </div>
  );
}
