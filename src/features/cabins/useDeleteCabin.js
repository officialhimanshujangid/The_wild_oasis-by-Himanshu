/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {

    const queryClient = useQueryClient();
    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        mutationFn: (id) => deleteCabinApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            }),
                toast.success("cabin successfully deleted");
        },
        onError: (err) => toast.error(err.message),
    });
    return { isDeleting, deleteCabin };
}