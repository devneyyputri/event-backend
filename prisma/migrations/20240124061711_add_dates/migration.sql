/*
  Warnings:

  - Added the required column `discexp` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pointsexp` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `discexp` DATETIME(3) NOT NULL,
    ADD COLUMN `pointsexp` DATETIME(3) NOT NULL;
