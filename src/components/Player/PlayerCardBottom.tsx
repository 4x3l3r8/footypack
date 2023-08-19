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
        <Avatar className="w-4 h-4 border-2 border-white">
          <AvatarImage src="/images/femaleAvatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-4 h-4 border border-white">
          <AvatarImage src="/images/maleAvatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-4 h-4 border border-white">
          <AvatarImage src="/images/femaleAvatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-4 h-4 border border-white">
          <AvatarImage src="/images/maleAvatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-4 h-4 text-xs text-primary font-bold bg-primary/50">
          <AvatarImage src="" />
          <AvatarFallback>+4</AvatarFallback>
        </Avatar>
        </div>
      </div>
    </>
  )
}

export default PlayerCardBottom