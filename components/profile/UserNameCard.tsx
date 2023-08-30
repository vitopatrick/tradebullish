import { useFetchUser } from "@/hooks/useFetchUser";

const UserNameCard = () => {
  const {
    userState: user,
    loading,
  }: { userState: any | unknown; loading: boolean } = useFetchUser();

  return (
    <div className="mt-4 mb-10 px-3 font-body p-4 flex flex-col items-center justify-center">
      {/* parent flex container */}
      <div className="flex gap-4 items-center">
        {loading && (
          <p className="font-body text-neutral-400 text-xs">...loading</p>
        )}
        {!loading && (
          <div className="text-bg flex items-center justify-center w-[60px] uppercase h-[60px] rounded-full bg-neutral-300 text-4xl font-header  font-bold">
            {user?.name.slice(0, 2)}
          </div>
        )}

        <div>
          {loading && (
            <p className="font-body text-neutral-400 text-xs">...loading</p>
          )}
          {!loading && (
            <h1 className="font-bold text-xl text-white capitalize">
              {user?.name}
            </h1>
          )}
          {loading && (
            <p className="font-body text-neutral-400 text-xs">...loading</p>
          )}
          {!loading && (
            <h2
              className={
                user?.verified
                  ? "text-sm font-semibold capitalize text-teal-600"
                  : "text-sm font-semibold text-red-400 capitalize"
              }
            >
              {user?.verified ? "Verified" : "Not Verified"}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNameCard;
