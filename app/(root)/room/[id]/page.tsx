"use client";

import {StreamCall, StreamTheme} from "@stream-io/video-react-sdk";
import {useState} from "react";
import {useGetCallById} from "@/hooks/useGetCallById";
import Loader from "@/app/components/Loader";
import {useUser} from "@/hooks/useUser";

const Room = ({params}: {params: {id: string}}) => {
    const [isSetupComplete, setIsSetupComplete] = useState(false)
    const {call, isCallLoading} = useGetCallById(params.id);
    const { user, isLoaded } = useUser();

    if (!isLoaded || isCallLoading) return <Loader/>

    if (!call) return (
        <p className="text-center text-3xl font-bold text-white">
            Call Not Found
        </p>
    );

    return (
        <main className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme>
                    {!isSetupComplete ? (
                        'MeetingSetup'
                    ) : (
                        'Meeting Room'
                    )}
                </StreamTheme>
            </StreamCall>
        </main>
    )
};

export default Room;