import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export default function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "delicious-carrot",
    password: process.env.COOKIE_PASSWORD!,
  });
}

export async function savaSession(user_id: number | undefined) {
  const session = await getSession();
  session.id = user_id;
  await session.save();
}
