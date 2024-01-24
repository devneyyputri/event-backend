/*
  Warnings:

  - Added the required column `referalC` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `discount` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `referalC` VARCHAR(191) NOT NULL,
    MODIFY `points` INTEGER NOT NULL DEFAULT 10000;
