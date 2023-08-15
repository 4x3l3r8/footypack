import React from 'react'
import { Button } from '../ui/button'
import { signIn, signOut, useSession } from "next-auth/react";

const NavGetting = (props?: string) => {
    const { data: sessionData } = useSession();

  return (
    <>
        <div className={`ml-auto flex justify-center space-x-4 self-center align-middle ${props.extraStyle}`}>
        {!sessionData ? (
          <>
            <Button
              onClick={() => void signIn()}
              variant={"outline"}
              className="px-7"
            >
              Login
            </Button>
            <Button>Get Started</Button>
          </>
        ) : (
          <div className="self-center">
            Welcome {sessionData.user?.firstname} ,
            <Button variant={"link"} onClick={() => void signOut()}>
              Sign Out
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

export default NavGetting