import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action="" className="flex flex-col gap-3">
        <FormInput
          required
          type="number"
          placeholder="Phone number"
          name="phone"
        />
        <FormInput
          required
          type="number"
          placeholder="Verification code"
          name="verification_code"
        />
        <FormButton text="Verify" />
      </form>
    </div>
  );
}