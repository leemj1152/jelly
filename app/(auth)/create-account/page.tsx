"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          required
          type="text"
          placeholder="Username"
          name="username"
          errors={state?.fieldErrors.username}
          minLength={3}
          maxLength={10}
        />
        <FormInput
          required
          type="email"
          placeholder="Email"
          name="email"
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          required
          type="password"
          placeholder="Password"
          errors={state?.fieldErrors.password}
          minLength={PASSWORD_MIN_LENGTH}
        />
        <FormInput
          name="confirm_password"
          required
          type="password"
          placeholder="Confirm Password"
          errors={state?.fieldErrors.confirm_password}
          minLength={PASSWORD_MIN_LENGTH}
        />
        <FormButton text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
