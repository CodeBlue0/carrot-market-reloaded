"use server";

export const handleForm = async (prevState: any, formData: FormData) => {
    console.log(prevState);
    return {
        errors: ["wrong password", "password too short"],
    }
  };