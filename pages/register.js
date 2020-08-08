import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import classNames from "classnames";
import UserAPI from "../lib/api/user";
import { Switch, Default, Case } from "../components/react-switch";

export default function Register() {
  const { register, handleSubmit, errors, watch, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async ({ username, email, password }) => {
    setLoading(true);
    setServerError("");
    const { data, error } = await UserAPI.register(username, email, password);
    setLoading(false);
    if (error) {
      setServerError(error.message);
      return;
    }
    if (data.user) {
      reset({});
      console.log(data.user);
    }
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
          <Switch param={serverError !== ""}>
            <Case value={true}>
              <div>
                <p>{serverError}</p>
              </div>
            </Case>
            <Default>{""}</Default>
          </Switch>
          <button type="submit" className="btn-primary" disabled={loading}>
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
}
