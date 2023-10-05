import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { type updateUserType } from "~/pages/onboarding/becomeaplayer";
import { api } from "~/utils/api";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import SignUpProgress from "./SignUp/SignUpProgress";


export interface IAppProps {
    continueToNextStep: () => void;
    updateUser: updateUserType
}

const PreferredPosition: React.FC<IAppProps> = ({ updateUser }) => {
    const [selectedPositions, setSelectedPositions] = useState<number[]>([]);
    const router = useRouter()
    const { data: myPlayerAccount } = api.player.getAPlayer.useQuery()

    const handlePositionToggle = (position: number) => {
        if (selectedPositions.includes(position)) {
            setSelectedPositions(selectedPositions.filter((pos) => pos !== position));
        } else if (selectedPositions.length < 3) {
            setSelectedPositions([...selectedPositions, position]);
        }
    };

    const submitData = updateUser.useMutation({
        onSuccess: (data) => {
            if (data.status === "Ok") {
                router.push('/player')
            }
        }
    })

    const createProfile = () => {
        submitData.mutate({
            userType: "PLAYER",
            ageRange: myPlayerAccount?.ageRangeId,
            gender: myPlayerAccount?.gender,
            playerPositionId1: selectedPositions[0],
            playerPositionId2: selectedPositions[1],
            playerPositionId3: selectedPositions[2]
        })
    }

    const { data: positionsList, isLoading } = api.utils.getAllPlayerPositions.useQuery()
    return (

        <section>
            <Card className="w-11/12 ml-14 shadow-lg md:w-10/12">
                <CardHeader>
                    <CardTitle className="uppercase">preferred position</CardTitle>
                    <CardDescription>
                        Select 3 (three) options that describes you.{" "}
                    </CardDescription>
                </CardHeader>
                <Separator />
                <CardContent>
                    <div className="space-y-1 leading-none max-h-96 overflow-y-auto">
                        {!isLoading ?
                            <div className="grid-cols mt-2 grid gap-2">
                                {positionsList?.map((position) => (
                                    <label
                                        htmlFor={position.position}
                                        key={position.id}
                                        className={`rounded-md cursor-pointer border p-4 ${selectedPositions.includes(position.id)
                                            ? " font-medium uppercase italic text-black"
                                            : " font-medium uppercase italic"
                                            } checkbox-container`}
                                    >
                                        <input
                                            type="checkbox"
                                            disabled={selectedPositions.length >= 3 && !selectedPositions.includes(position.id)}
                                            id={position.position}
                                            checked={selectedPositions.includes(position.id)}
                                            onChange={() => handlePositionToggle(position.id)}
                                            className="mr-2"
                                        />
                                        <span className="checkbox-custom mr-2"></span>
                                        {position.position}
                                    </label>
                                ))}
                            </div>
                            :
                            <div className="h-96">
                                <Skeleton className="h-full w-full rounded" />
                            </div>
                        }
                    </div>
                    <div className="mt-4">
                        <SignUpProgress
                            firstBtn="back"
                            secondBtn="create profile"
                            canProceed
                            progressValue={100}
                            onProceed={createProfile}
                        />
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export { PreferredPosition };

