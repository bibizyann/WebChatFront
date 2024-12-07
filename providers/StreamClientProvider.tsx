import {
    StreamVideo,
    StreamVideoClient,
} from "@stream-io/video-react-sdk";
import {ReactNode, useEffect, useState} from "react";
import {getUser} from "@/app/(root)/getuser";
import {tokenProvider} from "@/actions/tokenProvider";
import Loader from "@/app/components/Loader";

let apiKey: string
apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY

export const StreamVideoProvider = ({children} : {children: ReactNode}) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const [user, setUser] = useState<user>()

    useEffect(() => {
        const updateUser = async () => {
            const updatedUser = await getUser()
            setUser(updatedUser)
        }
        updateUser()
    }, []);

    useEffect(() => {
        if (!user) return;
        if (!apiKey) throw new Error('Stream Api key missing')

        const client = new StreamVideoClient({apiKey: apiKey, user: {id: user?.Id.toString(), name: user?.Username, image: user?.AvatarUrl}, tokenProvider})

        setVideoClient(client)
    }, [user]);

    // if (!videoClient) return <Loader />
    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};
