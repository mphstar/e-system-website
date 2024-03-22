import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100dvh]">
      <Suspense fallback={<Loading />}>
        <p>Check here</p>
        <Link href={"/admin/home"}>
          <button className="bg-green-500 px-2 py-1 rounded-md text-white">Pindah</button>
        </Link>
      </Suspense>
    </div>
  );
}
