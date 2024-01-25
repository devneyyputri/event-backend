-- CreateTable
CREATE TABLE `CTR` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventid` INTEGER NOT NULL,
    `clicks` INTEGER NOT NULL,
    `shown` INTEGER NOT NULL,
    `bought` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CTR_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CTR` ADD CONSTRAINT `CTR_eventid_fkey` FOREIGN KEY (`eventid`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
