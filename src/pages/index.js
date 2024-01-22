import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   async function getData() {
//     const response = await fetch("https://randomuser.me/api/");
//     const data = await response.json();
//     console.log(data);
//     console.log(data.results[0].name.first);
//   }
//   getData();
//   return <div>Hello</div>;
// }
export default function Home() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      console.log(data);
      setUserName(data.results[0].name.first);
    }
    getData();
  }, []);
  return (
    <div>
      <p>{userName}</p>
    </div>
  );
}
