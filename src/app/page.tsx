import LandingPage from "components/LandingPage";
import Video from "components/Video";
import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <main
      data-theme="retro"
      className="flex min-h-screen flex-col scroll-smooth"
    >
      <section className="flex min-h-screen items-center justify-center">
        <LandingPage />
      </section>
    </main>
  );
}
