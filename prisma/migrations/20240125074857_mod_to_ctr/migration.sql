/*
  Warnings:

  - You are about to drop the column `created_at` on the `ctr` table. All the data in the column will be lost.
  - Added the required column `year` to the `CTR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearmonth` to the `CTR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ymd` to the `CTR` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ctr` DROP COLUMN `created_at`,
    ADD COLUMN `year` INTEGER NOT NULL,
    ADD COLUMN `yearmonth` INTEGER NOT NULL,
    ADD COLUMN `ymd` INTEGER NOT NULL;
