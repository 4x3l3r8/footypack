import React from 'react'
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { Separator } from "~/components/ui/separator";
import { Link2, Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Flag, Mail, Search, Share2 } from "lucide-react";
import Link from "next/link";

const GameShares = () => {
  return (
    <>
    <div className="flex items-center justify-between p-4 md:px-24">
        <h1 className="text-xl font-bold uppercase">game detail</h1>

        <div className="flex gap-4">
          <HoverCard>
            <HoverCardTrigger>
              <div className="rounded-full border-2 border-black p-1 ">
                <Mail size={14} />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto rounded-none bg-blue-900 p-2 px-4 text-white">
              Contact Us
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
              <div className="rounded-full border-2 border-black p-1 ">
                <Share2 size={14} />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-90 mr-4 md:mr-24">
              <div className="relative flex gap-2 border p-2">
                <Link2 /> <Separator orientation="vertical" />{" "}
                <input
                  type="text"
                  disabled
                  value="https://footypack.com/jd92jdu83jjeu"
                  className="w-80 border-0 text-blue-700 outline-0 focus:outline-0"
                />
                <button className="absolute right-0 top-0 h-full bg-gray-200 p-2">
                  Copy Link
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  href="#"
                  className="flex gap-2 rounded-sm bg-blue-900 p-2 text-white"
                >
                  <Facebook /> Facebook
                </Link>
                <Link
                  href="#"
                  className="flex gap-2 rounded-sm bg-blue-400 p-2 text-white"
                >
                  <Twitter /> Twitter
                </Link>
                <Link
                  href="#"
                  className="flex gap-2 rounded-sm bg-green-500 p-2 text-white"
                >
                  <Twitter /> WhatsApp
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
              <div className="rounded-full border-2 border-red-500 p-1 ">
                <Flag size={14} className="text-red-500" />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto bg-red-500 text-white p-2 mr-4 md:mr-24">
              <Dialog >
                <DialogTrigger >Report Game</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </>
  )
}

export default GameShares