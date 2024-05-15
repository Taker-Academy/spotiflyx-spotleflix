import { Spacing } from "@/components/Spacing";
import { HeaderHome } from "../home/HeaderHome";
import { HomeMusic } from "../home/Home";
import { Footer } from "@/components/footer";

export default function HomeMusicMain() {
    return (
      <main className="flex min-h-screen flex-col items-center">

          <HeaderHome/>

          <Spacing size="sm"/>

          <HomeMusic/>

          <Footer/>

      </main>
    );
}
