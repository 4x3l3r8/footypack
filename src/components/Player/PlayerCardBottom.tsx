import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface playerCardBttm {
    eventTime:string;
    eventDate: string;
}

const PlayerCardBottom = ({ eventTime, eventDate }: playerCardBttm) => {
  return (
    <>
    <div className="mt-8 flex items-end justify-between">
        <div className="text-xs text-gray-500">
          <p className="font-semibold">{eventTime}</p>
          <p className="text-xs">{eventDate}</p>
        </div>

        <div className="flex">
        <Avatar className="w-5 h-5 border-3 -mr-2 border-white bg-primary">
          <AvatarImage src="/images/femaleAvatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-5 h-5 border-3 -mr-2 border-white bg-primary">
          <AvatarImage src="/images/maleAvatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-5 h-5 border-3 -mr-2 border-white bg-primary">
          <AvatarImage src="/images/femaleAvatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-5 h-5 border-3 -mr-2 border-white bg-primary">
          <AvatarImage src="/images/maleAvatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-5 h-5 -mr-2 bg-green-200 text-primary text-xs p-2 font-bold">
          <AvatarImage src="" />
          <AvatarFallback>+4</AvatarFallback>
        </Avatar>
        </div>
      </div>
    </>
  )
}

export default PlayerCardBottom