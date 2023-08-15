import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'

const BlogCard = () => {
  return (
    <>
    <Card className="relative h-auto transition-all hover:scale-105">
        <CardHeader className="relative h-56">
            <Image className="object-fit" src={`/images/blog_maradona.png`} fill alt=""/>
        </CardHeader>

        <CardContent className="relative h-1/2">
            <CardTitle className="font-graphik text-xl font-bold uppercase my-4">news and latest footpack information for you.</CardTitle>

            <CardDescription className="mb-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque explicabo iure quos numquam facilis. Voluptates sequi, facilis cumque vitae cum odit ducimus quod, aliquid, provident assumenda eligendi ut quo est?
            </CardDescription>

            <Button variant='link' className="capitalize p-0 m-0">Read More <MoveRight className='ml-2' /></Button>
        </CardContent>
      </Card>
    </>
  )
}

export default BlogCard