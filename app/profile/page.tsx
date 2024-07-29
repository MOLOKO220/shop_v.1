import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  console.log(session);
  return (
    <main className="Profile container">
      {!session?.user?.image ? (
        <img src="userImg.png" />
      ) : (
        <img src={session.user.image} alt="" />
      )}
      <h1>{session?.user?.name}</h1>
    </main>
  );
}
