/*
  Warnings:

  - You are about to drop the `view` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "view" DROP CONSTRAINT "view_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createDate" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "view";

-- CreateTable
CREATE TABLE "View" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "View_postId_key" ON "View"("postId");

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
