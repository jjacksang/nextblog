-- DropIndex
DROP INDEX "Post_content_idx";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "content" DROP NOT NULL;
