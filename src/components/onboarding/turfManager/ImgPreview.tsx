import Image from "next/image"

interface file {
    name: string;
    size: number;
    base64Url?: any;
}

interface iProps {
    file: file
}

export const ImgPreview = ({ file }: iProps) => {
    return (<div className="flex flex-col items-center">
        <Image height={550} width={550} src={file.base64Url as string} className="rounded h-32 w-32" alt="" />
        <small className="text-sm font-medium leading-none">{file.name}</small>
    </div>)
}