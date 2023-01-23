import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../Elements/Button/Button";
import "./AddWorkers.css";

function AddWorkers({ setShow }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: "", lastName: "", idCard: "" },
    mode: "onBlur",
  });

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
      <div className="addworker-wrapper">
        <div className="addworker-inputs-holder">
          <div className="addworker-input-wrapper">
            <input
              className="input"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <p className="error-title">This field is required</p>
            )}
          </div>
          <div className="addworker-input-wrapper">
            <input {...register("lastName", { required: true })} />
            {errors.lastName && (
              <p className="error-title">This field is required</p>
            )}
          </div>
          <div className="addworker-input-wrapper">
            <input {...register("idCard", { required: true })} />
            {errors.idCard && (
              <p className="error-title">This field is required</p>
            )}
          </div>
        </div>
        <div>
          <Button onPress={handleSubmit(onSubmit)}>Create</Button>
          <Button
            onPress={() => {
              setShow(false);
              reset();
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddWorkers;
