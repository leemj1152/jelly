/*
  Warnings:

  - You are about to drop the column `githun_id` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[github_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_githun_id_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `githun_id`,
    ADD COLUMN `github_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_github_id_key` ON `User`(`github_id`);
