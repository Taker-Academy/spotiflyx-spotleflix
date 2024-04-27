import { Header } from "../pages/Header";
import Body from "../pages/register/body";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">

      <Header/>

      <Body/>

    </main>
  );
}
