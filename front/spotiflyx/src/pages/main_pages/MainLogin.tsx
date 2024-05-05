import { Spacing } from "@/components/Spacing";
import { Header } from "../Header";
import { LogIn } from "../login/login";

export default function LoginMain() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">

        <Header/>

        <Spacing size="sm"/>

        <LogIn/>

    </main>
  );
}
