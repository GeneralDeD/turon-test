import { $axios } from "@/services";

export default function Home() {
  const testReq = async () => {
    const res = await $axios.get("/movie-list?page=1&items=20");

    console.log(res);
  };

  testReq();

  return <main>Test</main>;
}
