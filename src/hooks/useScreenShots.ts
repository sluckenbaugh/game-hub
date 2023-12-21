import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { ScreenShot } from "../entities/ScreenShot";

const useScreenShots = (id: number) => {
    const apiClient = new APIClient<ScreenShot>(`games/${id}/screenshots`)
    return useQuery({
        queryKey: ['screenshots', id],
        queryFn: apiClient.getAll
}) 
}

export default useScreenShots;