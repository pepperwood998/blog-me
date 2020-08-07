import { useRef } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import classNames from "classnames";

export default function Register() {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold">Register</h2>
      <Link href="/signin">
        <a className="mb-8 text-sm text-theme-500 hover:underline">
          Already have an account?
        </a>
      </Link>
      <form
        className="w-full px-10 mb-8 md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <input
            type="text"
            name="username"
            ref={register({ required: "is required" })}
            placeholder="Username"
            className={classNames({
              "input-text": true,
              "error": errors.username
            })}
          />
          <input
            type="email"
            name="email"
            ref={register({ required: "Email is required" })}
            placeholder="Email"
            className={classNames({
              "input-text": true,
              "error": errors.email
            })}
          />
          <input
            type="password"
            name="password"
            ref={register({ required: "Password is required" })}
            placeholder="Password"
            className={classNames({
              "input-text": true,
              "error": errors.password
            })}
          />
          <input
            type="password"
            name="cfPassword"
            ref={register({
              required: "Please confirm your password",
              validate: value =>
                value === password.current || "Password do not match"
            })}
            placeholder="Confirm password"
            className={classNames({
              "input-text": true,
              "error": errors.cfPassword
            })}
          />
          <button
            type="submit"
            className="float-right px-6 py-3 rounded text-lg bg-theme-500 hover:bg-theme-600 focus:bg-theme-700 text-primary-900 focus:outline-none"
          >
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
}
