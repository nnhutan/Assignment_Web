CREATE TABLE `Role` (
  `id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `User` (
  `id` int PRIMARY KEY,
  `fullname` varchar(255),
  `email` varchar(255),
  `phone_number` varchar(255),
  `address` varchar(255),
  `password` varchar(255),
  `role_id` int,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `Category` (
  `id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `Product` (
  `id` int PRIMARY KEY,
  `category_id` int,
  `title` varchar(255),
  `price` int,
  `discount` int,
  `thumbnail` varchar(255),
  `description` longtext,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `Customer_Contact` (
  `id` int PRIMARY KEY,
  `firstname` varchar(255),
  `lastname` varchar(255),
  `email` varchar(255),
  `phone_number` varchar(255)
);

CREATE TABLE `Oders` (
  `id` int PRIMARY KEY,
  `user_id` int,
  `note` varchar(255),
  `order_date` datetime,
  `status` int,
  `total_money` int
);

CREATE TABLE `Order_Detail` (
  `id` int PRIMARY KEY,
  `order_id` int,
  `product_id` int,
  `num` int,
  `total_money` int
);

CREATE TABLE `Comment` (
  `id` int PRIMARY KEY,
  `user_id` int,
  `content` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `Contact_Public` (
  `id` int PRIMARY KEY,
  `type` varchar(255),
  `content` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `News` (
  `id` int PRIMARY KEY,
  `title` varchar(255),
  `content` varchar(255),
  `thumbnail` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

ALTER TABLE `User` ADD FOREIGN KEY (`role_id`) REFERENCES `Role` (`id`);

ALTER TABLE `Product` ADD FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`);

ALTER TABLE `Order_Detail` ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);

ALTER TABLE `Order_Detail` ADD FOREIGN KEY (`order_id`) REFERENCES `Oders` (`id`);

ALTER TABLE `Oders` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `Comment` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);
