import { AiFillHome } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { bucket, store } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { UserContext } from "@/context/UserAuthContext";

const VerificationModal = ({ hide, setHide }: any) => {
  const [homeAddress, setHomeAddress] = useState("");
  const photoRef = useRef<null | undefined | any>();

  const { user: state }: any = useContext(UserContext);
  const router = useRouter();

  // submit verification form
  const submitVerification = async (e: any) => {
    // prevent Browser Default
    e.preventDefault();

    // check if the forms are Empty
    if (!homeAddress || !photoRef.current.files[0]) {
      toast("Please form correctly", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }

    try {
      // update the document
      const userRef = doc(store, "/users", `${state.email}`);
      await updateDoc(userRef, {
        address: homeAddress,
      });
      // hide modal
      setHide(false);
      toast("Upload Successful", {
        type: "success",
        position: "bottom-center",
        bodyClassName: "toast",
      });

      router.refresh();
      // upload Image
      const imgRef = ref(bucket, `proofImg/${photoRef.current.files[0].name}`);
      await uploadBytes(imgRef, photoRef.current.files[0]);
    } catch (e: any) {
      console.log(e);
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          hide
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-bg rounded-md font-body relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <FaTimes
              className="text-white text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="py-3 font-semibold text-white text-xl capitalize underline">
              Provide the details below
            </h2>
          </div>
          {/* form  */}
          <form>
            {/* enter address */}
            <div>
              <label htmlFor="address" className="text-white text-sm">
                Home Address
              </label>
              <div className="bg-neutral-300 flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                  className="w-full bg-transparent font-sec px-2 focus:outline-none text-bg"
                />
                <AiFillHome className="fill-card" />
              </div>
            </div>
            {/* implement Drag and drop */}
            <div className="mt-8">
              <label htmlFor="picture" className="text-sm text-white py-2">
                Picture of Workers ID,Driver license or National ID
              </label>
              <div className="rounded">
                <input
                  type="file"
                  name="id"
                  id="id"
                  ref={photoRef}
                  className="text-white"
                />
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={submitVerification}
              className="inline-block w-full mt-6 font-sec py-2 bg-main text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerificationModal;
