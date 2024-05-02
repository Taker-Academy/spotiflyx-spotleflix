import { Spacing } from "@/components/Spacing";
import { HeaderHome } from "./home/HeaderHome";
import { HomeMusic } from "./home/Home";

export default function HomeMusicMain() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">

        <HeaderHome/>

        <Spacing size="sm"/>

        <HomeMusic/>

    </main>
  );
}
