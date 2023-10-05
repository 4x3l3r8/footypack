export enum UserType {
    ADMIN,
    PLAYER,
    TURF_OWNER,
    VENDOR
}

interface User {
    adminId?: null,
    createdAt: Date,
    email: string
    emailVerified: boolean;
    firstname: string,
    id: string,
    image: string,
    lastname: string,
    location: string
    name?: never
    password: string
    phoneNumber?: string
    playerId?: string
    turfManagerId?: string
    username: string
    userType: UserType
    vendorId: string
    verified: boolean
}