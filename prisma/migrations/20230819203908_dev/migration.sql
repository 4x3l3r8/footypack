-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'PLAYER', 'TURF_OWNER', 'VENDOR');

-- CreateEnum
CREATE TYPE "DefaultTeams" AS ENUM ('BLUE', 'YELLOW');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Privacy" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "Ticket" AS ENUM ('PAID', 'FREE');

-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Successful', 'Completed');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('Game', 'Item');

-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "phoneNumber" VARCHAR(20),
    "firstname" TEXT,
    "lastname" TEXT,
    "userType" "UserType",
    "verified" BOOLEAN,
    "email" TEXT,
    "password" TEXT,
    "emailVerified" TIMESTAMP(3),
    "location" TEXT,
    "image" TEXT,
    "playerId" TEXT,
    "turfManagerId" TEXT,
    "adminId" TEXT,
    "vendorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "age" INTEGER,
    "ageRangeId" TEXT NOT NULL,
    "playerPositionId1" INTEGER,
    "playerPositionId2" INTEGER,
    "playerPositionId3" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teamId" TEXT,
    "walletId" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayPosition" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,

    CONSTRAINT "PlayPosition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgeRange" (
    "id" TEXT NOT NULL,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,

    CONSTRAINT "AgeRange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turf_Manager" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Turf_Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turf" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "turf_ManagerId" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "pitchSizesId" INTEGER[],
    "facilitiesId" INTEGER[],
    "images" TEXT[],
    "gameTimesId" INTEGER[],
    "price" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assigned_Inventory_Item" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "turfId" TEXT NOT NULL,
    "turf_ManagerId" TEXT NOT NULL,
    "returned" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assigned_Inventory_Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory_Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "quantity" INTEGER NOT NULL,
    "turfId" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inventory_Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory_Audit" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "inventory_ItemId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inventory_Audit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameTime" (
    "id" SERIAL NOT NULL,
    "day" "DayOfWeek" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "stoptTime" TIMESTAMP(3) NOT NULL,
    "turfId" TEXT,

    CONSTRAINT "GameTime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PitchSize" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PitchSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facility" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game_Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Game_Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "teamSizeId" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "locationId" TEXT NOT NULL,
    "ageRangeId" TEXT NOT NULL,
    "hostId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "privacy" "Privacy" NOT NULL,
    "ticket" "Ticket",
    "ticket_price" DECIMAL(10,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "matchDetailsId" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "locationId" TEXT NOT NULL,
    "ageRangeId" TEXT NOT NULL,
    "Gender" "Gender" NOT NULL,
    "hostId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "privacy" "Privacy" NOT NULL,
    "ticket" "Ticket",
    "ticket_price" DECIMAL(10,2),
    "winning_prize" DECIMAL(10,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "matchDetailsId" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchDetails" (
    "id" TEXT NOT NULL,
    "gameId" TEXT,
    "eventId" TEXT,
    "firstTeamPlayers" JSONB NOT NULL,
    "secondTeamPlayers" JSONB NOT NULL,
    "Stats" JSONB NOT NULL,
    "winningTeam" "DefaultTeams" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MatchDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "shopId" TEXT,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Turf_Transaction" (
    "id" TEXT NOT NULL,
    "turfId" TEXT NOT NULL,
    "transactionDetail" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "channel" TEXT NOT NULL,
    "payerId" TEXT NOT NULL,
    "transactionStatus" "Status" NOT NULL,
    "transactionRef" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turf_Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player_Wallet" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "walletBalance" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player_Transaction" (
    "id" TEXT NOT NULL,
    "playerWalletId" TEXT NOT NULL,
    "player_WalletId" TEXT NOT NULL,
    "transactionRef" TEXT NOT NULL,
    "transactionDetail" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "transactionStatus" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Player_Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shopOwnerid" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "options" JSONB NOT NULL,
    "shopId" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop_Transaction" (
    "id" TEXT NOT NULL,
    "transactionDetail" TEXT NOT NULL,
    "transactionRef" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "Channel" TEXT NOT NULL,
    "productId" TEXT,
    "orderId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shop_Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameTimeToTurf" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PitchSizeToTurf" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacilityToTurf" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GameToGame_Tag" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EventToGame_Tag" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_playerId_key" ON "User"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_turfManagerId_key" ON "User"("turfManagerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_adminId_key" ON "User"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "User_vendorId_key" ON "User"("vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userType_turfManagerId_key" ON "User"("userType", "turfManagerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userType_playerId_key" ON "User"("userType", "playerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userType_adminId_key" ON "User"("userType", "adminId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userType_vendorId_key" ON "User"("userType", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userType_phoneNumber_key" ON "User"("userType", "phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_userType_email_key" ON "User"("userType", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Player_userId_key" ON "Player"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Player_walletId_key" ON "Player"("walletId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayPosition_position_key" ON "PlayPosition"("position");

-- CreateIndex
CREATE UNIQUE INDEX "Turf_Manager_userId_key" ON "Turf_Manager"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Turf_name_key" ON "Turf"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Turf_latitude_longitude_key" ON "Turf"("latitude", "longitude");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_Item_turfId_name_key" ON "Inventory_Item"("turfId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "PitchSize_name_key" ON "PitchSize"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Facility_name_key" ON "Facility"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Game_matchDetailsId_key" ON "Game"("matchDetailsId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_locationId_teamSizeId_createdAt_key" ON "Game"("locationId", "teamSizeId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Event_matchDetailsId_key" ON "Event"("matchDetailsId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_locationId_createdAt_key" ON "Event"("locationId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MatchDetails_gameId_key" ON "MatchDetails"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "MatchDetails_eventId_key" ON "MatchDetails"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_userId_key" ON "Vendor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_shopId_key" ON "Vendor"("shopId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Player_Wallet_playerId_key" ON "Player_Wallet"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Shop_shopOwnerid_key" ON "Shop"("shopOwnerid");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_shopId_key" ON "Product"("name", "shopId");

-- CreateIndex
CREATE UNIQUE INDEX "_GameTimeToTurf_AB_unique" ON "_GameTimeToTurf"("A", "B");

-- CreateIndex
CREATE INDEX "_GameTimeToTurf_B_index" ON "_GameTimeToTurf"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PitchSizeToTurf_AB_unique" ON "_PitchSizeToTurf"("A", "B");

-- CreateIndex
CREATE INDEX "_PitchSizeToTurf_B_index" ON "_PitchSizeToTurf"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacilityToTurf_AB_unique" ON "_FacilityToTurf"("A", "B");

-- CreateIndex
CREATE INDEX "_FacilityToTurf_B_index" ON "_FacilityToTurf"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToGame_Tag_AB_unique" ON "_GameToGame_Tag"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToGame_Tag_B_index" ON "_GameToGame_Tag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToGame_Tag_AB_unique" ON "_EventToGame_Tag"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToGame_Tag_B_index" ON "_EventToGame_Tag"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_ageRangeId_fkey" FOREIGN KEY ("ageRangeId") REFERENCES "AgeRange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerPositionId1_fkey" FOREIGN KEY ("playerPositionId1") REFERENCES "PlayPosition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerPositionId2_fkey" FOREIGN KEY ("playerPositionId2") REFERENCES "PlayPosition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerPositionId3_fkey" FOREIGN KEY ("playerPositionId3") REFERENCES "PlayPosition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turf_Manager" ADD CONSTRAINT "Turf_Manager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turf" ADD CONSTRAINT "Turf_turf_ManagerId_fkey" FOREIGN KEY ("turf_ManagerId") REFERENCES "Turf_Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turf" ADD CONSTRAINT "Turf_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turf" ADD CONSTRAINT "Turf_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assigned_Inventory_Item" ADD CONSTRAINT "Assigned_Inventory_Item_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assigned_Inventory_Item" ADD CONSTRAINT "Assigned_Inventory_Item_turfId_fkey" FOREIGN KEY ("turfId") REFERENCES "Turf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assigned_Inventory_Item" ADD CONSTRAINT "Assigned_Inventory_Item_turf_ManagerId_fkey" FOREIGN KEY ("turf_ManagerId") REFERENCES "Turf_Manager"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory_Item" ADD CONSTRAINT "Inventory_Item_turfId_fkey" FOREIGN KEY ("turfId") REFERENCES "Turf"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory_Item" ADD CONSTRAINT "Inventory_Item_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "Turf_Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory_Audit" ADD CONSTRAINT "Inventory_Audit_inventory_ItemId_fkey" FOREIGN KEY ("inventory_ItemId") REFERENCES "Inventory_Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory_Audit" ADD CONSTRAINT "Inventory_Audit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_teamSizeId_fkey" FOREIGN KEY ("teamSizeId") REFERENCES "PitchSize"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Turf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_ageRangeId_fkey" FOREIGN KEY ("ageRangeId") REFERENCES "AgeRange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Turf_Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_matchDetailsId_fkey" FOREIGN KEY ("matchDetailsId") REFERENCES "MatchDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Turf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_ageRangeId_fkey" FOREIGN KEY ("ageRangeId") REFERENCES "AgeRange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Turf_Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_matchDetailsId_fkey" FOREIGN KEY ("matchDetailsId") REFERENCES "MatchDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turf_Transaction" ADD CONSTRAINT "Turf_Transaction_turfId_fkey" FOREIGN KEY ("turfId") REFERENCES "Turf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turf_Transaction" ADD CONSTRAINT "Turf_Transaction_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Player"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player_Wallet" ADD CONSTRAINT "Player_Wallet_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player_Transaction" ADD CONSTRAINT "Player_Transaction_player_WalletId_fkey" FOREIGN KEY ("player_WalletId") REFERENCES "Player_Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_shopOwnerid_fkey" FOREIGN KEY ("shopOwnerid") REFERENCES "Vendor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Vendor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_Transaction" ADD CONSTRAINT "Shop_Transaction_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_Transaction" ADD CONSTRAINT "Shop_Transaction_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameTimeToTurf" ADD CONSTRAINT "_GameTimeToTurf_A_fkey" FOREIGN KEY ("A") REFERENCES "GameTime"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameTimeToTurf" ADD CONSTRAINT "_GameTimeToTurf_B_fkey" FOREIGN KEY ("B") REFERENCES "Turf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PitchSizeToTurf" ADD CONSTRAINT "_PitchSizeToTurf_A_fkey" FOREIGN KEY ("A") REFERENCES "PitchSize"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PitchSizeToTurf" ADD CONSTRAINT "_PitchSizeToTurf_B_fkey" FOREIGN KEY ("B") REFERENCES "Turf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityToTurf" ADD CONSTRAINT "_FacilityToTurf_A_fkey" FOREIGN KEY ("A") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacilityToTurf" ADD CONSTRAINT "_FacilityToTurf_B_fkey" FOREIGN KEY ("B") REFERENCES "Turf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGame_Tag" ADD CONSTRAINT "_GameToGame_Tag_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGame_Tag" ADD CONSTRAINT "_GameToGame_Tag_B_fkey" FOREIGN KEY ("B") REFERENCES "Game_Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToGame_Tag" ADD CONSTRAINT "_EventToGame_Tag_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToGame_Tag" ADD CONSTRAINT "_EventToGame_Tag_B_fkey" FOREIGN KEY ("B") REFERENCES "Game_Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
