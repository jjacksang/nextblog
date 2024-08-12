/*
  Warnings:

  - You are about to drop the `View` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "View" DROP CONSTRAINT "View_postId_fkey";

-- DropTable
DROP TABLE "View";

-- CreateTable
CREATE TABLE "view" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "view_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "view" ADD CONSTRAINT "view_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
