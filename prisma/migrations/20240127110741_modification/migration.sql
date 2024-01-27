/*
  Warnings:

  - Added the required column `buyermail` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventtitle` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `buyermail` VARCHAR(191) NOT NULL,
    ADD COLUMN `eventtitle` VARCHAR(191) NOT NULL;
