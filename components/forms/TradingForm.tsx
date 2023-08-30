import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

// yup schema
const schema = yup.object({
  amount: yup.number().required().positive().integer(),
  duration: yup.string().required(),
});

// formValues
type FormValues = {
  amount: number;
  duration: string;
};

export default function TradingForm() {
  // react hook form
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <div>
      <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1 my-4">
          <label htmlFor="amount" className="text-neutral-300 font-body">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            {...register("amount")}
            className="bg-main/5 text-white rounded-lg p-4 font-body outline-none border border-main"
          />
          <p className="font-body text-red-500 capitalize">
            {errors.amount?.message}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Time-frame" className="text-neutral-300 font-body">
            Duration
          </label>
          <select
            {...register("duration")}
            className="p-4 rounded-lg outline-none border border-main font-body bg-main/5 text-white"
          >
            <option value="1W">1W</option>
            <option value="1D">1D</option>
            <option value="24H">24H</option>
          </select>
          <p className="font-body text-red-500 capitalize">
            {errors.duration?.message}
          </p>
        </div>
        <div className="mt-6 mb-4 flex gap-3 items-center">
          <button
            type="submit"
            disabled={!isValid}
            className={
              !isValid
                ? "px-6 py-3 flex-1 text-white font-body rounded-lg bg-green-400/40"
                : "px-6 py-3 flex-1 text-white font-body rounded-lg bg-green-400"
            }
          >
            Call
          </button>
          <button
            type="submit"
            disabled={!isValid}
            className={
              !isValid
                ? "px-6 flex-1 py-3 text-white font-body rounded-lg bg-red-500/40"
                : "px-6 flex-1 py-3 text-white font-body rounded-lg bg-red-500"
            }
          >
            Put
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
