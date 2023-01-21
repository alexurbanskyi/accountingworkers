import React from "react";
import { useForm } from "react-hook-form";

function AddWorkers({setShow}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // const getLocalUser = localStorage.getItem("userList");
    // let allUser = [];
    // if (getLocalUser) {
    //   allUser = [...JSON.parse(getLocalUser)];
    // }

    // console.log("allUser --->", allUser);

    // const user = {
    //   firstName: inputFirstRef.current.value,
    //   lastName: inputLastRef.current.value,
    //   idCard: inputIdRef.current.value,
    // };
    // allUser = [...allUser, user];

    // localStorage.setItem("userList", JSON.stringify(allUser));
    console.log("DATA --->", data);
    reset({
      firstName: "",
      lastName: "",
      idCard: "",
    });
    setShow(false);
  }

  return (
    <div className="addworker-container">
      <div className="addworker-input-holder">
        <div className="addworker-input">
          <input {...register("firstName", { required: true })} />
          {errors.firstName && <p>This field is required</p>}
        </div>
        <div>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && <p>This field is required</p>}
        </div>
        <div>
          <input {...register("idCard", { required: true })} />
          {errors.idCard && <p>This field is required</p>}
        </div>
      </div>
      <button onClick={handleSubmit(onSubmit)}>CLOSE</button>
    </div>
  );
}

export default AddWorkers;
