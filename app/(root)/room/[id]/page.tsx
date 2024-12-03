import React from 'react';

const Room = ({params}: {params: {id: string}}) => {
    return (
        <div>
            Room: #{params.id}
        </div>
    )
};

export default Room;