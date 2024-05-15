import { Spacing } from "@/components/Spacing";
import { Header } from "../Header";
import { LogIn } from "../login/login";
import { Footer } from "@/components/footer";

export default function LoginMain() {
  return (
    <main className="flex min-h-screen flex-col items-center">

        <Header/>

        <Spacing size="sm"/>

        <LogIn/>

        <Footer/>

    </main>
  );
}
