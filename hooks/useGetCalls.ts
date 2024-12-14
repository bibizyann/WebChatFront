import {useEffect, useState} from "react";
import {Call, useStreamVideoClient} from "@stream-io/video-react-sdk";
import {useUser} from "@/hooks/useUser";

export const useGetCalls = () => {
    const [calls, setCalls] = useState<Call[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    const client = useStreamVideoClient();
    const {user} = useUser();

    useEffect(() => {
        const loadCalls = async () => {
            if (!client || !user?.Id) return;

            setIsLoading(true)

            try {
                const { calls } = await client.queryCalls({
                    sort: [{ field: 'starts_at', direction: -1 }],
                    filter_conditions: {
                        starts_at: { $exists: true },
                        $or: [
                            { created_by_user_id: user.Id.toString() },
                            { members: { $in: [user.Id.toString()] } },
                        ],
                    },
                })
                setCalls(calls)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        loadCalls()
    }, [client, user?.Id]);

    const now = new Date();

    const endedCalls = calls?.filter(({ state: { startsAt, endedAt } }: Call) => {
        return (startsAt && new Date(startsAt) < now) || !!endedAt
    })

    const upcomingCalls = calls?.filter(({ state: { startsAt } }: Call) => {
        return startsAt && new Date(startsAt) > now
    })
    // Maybe add a check of 'endedAt !== null'
    return { endedCalls, upcomingCalls, callRecordings: calls, isLoading }
}