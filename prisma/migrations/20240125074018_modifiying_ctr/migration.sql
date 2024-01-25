/*
  Warnings:

  - You are about to drop the column `updated_at` on the `ctr` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ctr` DROP COLUMN `updated_at`,
    MODIFY `created_at` VARCHAR(191) NOT NULL;
