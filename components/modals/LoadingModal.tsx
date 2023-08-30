import Spinner from "../loaders/Spinner";

type LoadingModal = {
  isOpen: boolean;
};

export default function LoadingModal({ isOpen }: LoadingModal) {
  return (
    <div
      className={
        isOpen
          ? "fixed top-0 z-40 bottom-0 right-0 left-0 bg-white/5 backdrop-blur-md"
          : "hidden"
      }
    >
      <div className="flex items-center justify-center p-[30%]">
        <Spinner />
      </div>
    </div>
  );
}
