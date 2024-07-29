import { GoogleButton } from "@/component/GoogleButton";
import { SignInForm } from "@/component/SignInForm";

export default async function SignIn() {
  return (
    <main className="SignIn">
      <main className="container">
        <h1>Вход</h1>
        <GoogleButton />
        <SignInForm />
      </main>
    </main>
  );
}
