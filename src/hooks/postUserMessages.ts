import { useMutation } from "@tanstack/react-query";
import { postUserMessages } from "@/libs/api";
import 'react-toastify/dist/ReactToastify.css';
export const usePostUserMessages = () => {
  return useMutation<void, Error, { name: string; email: string; phone: string; message: string }>({
    mutationFn: async ({ name, email, phone, message }) => {
      await postUserMessages(name, email, phone, message);
    },
  });
};