import db from "@/lib/db";
import { savaSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { checkExistUsername, getGithubProfile, getGithubToken } from "./action";

export async function GET(request: NextRequest) {
  // githun/start/ 페이지에서 유저가 승락하면 코드 파라미터를 보내주는 것을 확인
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }

  // 유저가 받은 코드와 github app의 아이디, 시크릿을 파라미터로 다시 POST 전송
  const { error, access_token } = await getGithubToken(code);
  if (error) {
    return new Response(null, {
      status: 400,
    });
  }

  // 받은 토큰으로 다시 유저의 정보 요청
  const { id, avatar_url, login } = await getGithubProfile(access_token);

  const user = await db.user.findUnique({
    where: {
      github_id: id + "",
    },
    select: {
      id: true,
    },
  });
  if (user) {
    await savaSession(user.id);
    return redirect("/profile");
  }

  // 유저의 깃허브 닉네임이 현재 우리 닉네임과 중복되는지 체크
  const ExistUserName = await checkExistUsername(login);

  const newUser = await db.user.create({
    data: {
      github_id: id + "",
      avatar: avatar_url,
      username: ExistUserName ? `${login}-gh` : login,
    },
    select: {
      id: true,
    },
  });
  await savaSession(newUser.id);
  return redirect("/profile");
}
