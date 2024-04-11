-- DropForeignKey
ALTER TABLE `smstoken` DROP FOREIGN KEY `SMSToken_userId_fkey`;

-- AddForeignKey
ALTER TABLE `SMSToken` ADD CONSTRAINT `SMSToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
