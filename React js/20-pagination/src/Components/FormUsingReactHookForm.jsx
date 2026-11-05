import { message } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormUsingReactHookForm = () => {
  const Signup = z
    .object({
      email: z.email({ message: "Enter a valid Email" }),
      password: z.string().min(8, { message: "Password is less than 8" }),
      confirmpassword: z
        .string()
        .min(8, { message: "Password is less than 8" }),
    })
    .superRefine(({ password, confirmpassword }, ctx) => {
      if (password !== confirmpassword) {
        ctx.addIssue({
             code: "custom",
          message: "Confirm password should be same as password",
          path: ["confirmpassword"],
        });
      }
    });
    const post=()=>new Promise((res,rej)=>{
        setTimeout(() => {
            res()
        }, 500);
    })

  const {   
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Signup),
  });

  const onSubmit = (data) => {
    console.log(data);
    post(data).then(()=>reset())
  };
  return (
    <div className="flex  items-center flex-col gap-6">
      <h1 className="text-2xl font-bold">React Hook Form</h1>

      <div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[500px] gap-2"
        >
          <input
            className="border p-2"
            type="email"
            placeholder="email"
            {...register("email")}
          />
          {errors["email"] ? (
            <span className="text-red-700 text-sm">
              {errors["email"].message}
            </span>
          ) : null}
          <input
            className="border p-2"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {errors["password"] ? (
            <span className="text-red-700 text-sm">
              {errors["password"].message}
            </span>
          ) : null}
          <input
            className="border p-2 "
            type="password"
            placeholder="confirmpassword"
            {...register("confirmpassword")}
          />
          {errors["confirmpassword"] ? (
            <span className="text-red-700 text-sm">
              {errors["confirmpassword"].message}
            </span>
          ) : null}
          <input type="submit" value="Submit" className="bg-blue-400 p-2" />
        </form>
      </div>
    </div>
  );
};

export default FormUsingReactHookForm;
