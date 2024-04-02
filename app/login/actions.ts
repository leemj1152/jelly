"use server";

export const handleForm = async (prevState: any, data: FormData) => {
  "use server";
  console.log("server action");
  return {
    errors: ["비밀번호가 틀렸습니다", "비밀번호가 너무 짧습니다."],
  };
};
