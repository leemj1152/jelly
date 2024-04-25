import db from "@/lib/db";

export async function getGithubToken(code: string) {
  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code,
  }).toString();

  const accessTokenURL = `https://github.com/login/oauth/access_token?${accessTokenParams}`;
  const accessTokenResponse = await fetch(accessTokenURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });

  // POST에서 받은 Response로 에러 또는 토큰 받기
  const { error, access_token } = await accessTokenResponse.json();
  return { error, access_token };
}

export async function getGithubProfile(access_token: string) {
  const userProfileResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-cache",
  });
  const { id, avatar_url, login } = await userProfileResponse.json();
  return {
    id,
    avatar_url,
    login,
  };
}

export async function checkExistUsername(username: string) {
  const user = await db.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user);
}
