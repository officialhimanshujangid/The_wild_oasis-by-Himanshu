/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
    const queryClient = useQueryClient();
    const { mutate: updateUser, status } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({ user }) => {
            toast.success("User successfully updated");
            // queryClient.setQueryData("user", user)
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (err) => toast.error(err.message),
    });
    const isUpdating = status === "pending" ? true : false
    return { updateUser, isUpdating };
}