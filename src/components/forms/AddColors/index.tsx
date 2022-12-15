import { SubmitHandler, useForm } from "react-hook-form";

import { useAddColors } from "../../../hooks/useColors";

type FormValues = {
  name: string;
};

function AddColors() {
  const { register, handleSubmit } = useForm<FormValues>();
  const { mutate, isLoading } = useAddColors();
  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    mutate(data);
  };

  if (isLoading) {
    // todo Make Loader for POST request
    return <h2>Adding the Data</h2>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} className="input" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddColors;
