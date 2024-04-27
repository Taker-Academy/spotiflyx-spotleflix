import Image from "next/image";
import LogoSpotiflyx from "../components/logo/logo_spotiflyx.png";
import { Header } from "../Pages/RegisterPage/Header";
import { Spacing } from "@/components/Spacing";
import { Body } from "../Pages/RegisterPage/Body";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">

      <Header/>

      <Body/>

    </main>
  );
}
