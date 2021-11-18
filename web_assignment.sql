-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 18, 2021 lúc 10:05 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `web_assignment`
--
CREATE DATABASE IF NOT EXISTS `web_assignment` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `web_assignment`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(18, 'Apple'),
(19, 'Samsung'),
(20, 'Xiaomi'),
(21, 'Oppo'),
(22, 'Vivo'),
(23, 'Vsmart'),
(24, 'Sony'),
(25, 'Nokia'),
(26, 'Huawei'),
(27, 'Lenovo');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `product_id`, `content`, `created_at`, `updated_at`) VALUES
(48, 1, 15, 'Rất chất lượng12', '2021-11-16 17:47:49', '2021-11-16 20:19:03'),
(49, 1, 15, 'Rất chất lượng2', '2021-11-16 17:47:49', '2021-11-16 20:45:05'),
(62, 1, 15, 'tooi chio tex thoi yhahaha', '2021-11-16 19:23:31', '2021-11-16 19:23:31'),
(64, 8, 16, 'ngon múp rụp nước', '2021-11-16 20:51:19', '2021-11-16 20:51:19'),
(65, 8, 16, 'toẹt vời', '2021-11-16 20:58:19', '2021-11-16 20:58:19'),
(66, 8, 17, 'rất ngon, cơ mà không đủ tiền', '2021-11-16 20:11:20', '2021-11-16 20:11:20'),
(67, 21, 15, 'thôi thôi xàm xí quá mấy bạn', '2021-11-17 14:20:33', '2021-11-17 14:20:33'),
(69, 21, 15, 'ngán mấy đồng chí quá', '2021-11-17 14:20:38', '2021-11-17 14:20:38'),
(71, 21, 15, 'cái này bình luận sau mà b', '2021-11-17 14:45:39', '2021-11-17 14:57:53'),
(79, 1, 15, '3464567', '2021-11-17 18:45:25', '2021-11-18 09:20:32'),
(80, 1, 15, '4', '2021-11-17 18:48:25', '2021-11-17 18:48:25'),
(81, 1, 15, '5', '2021-11-17 18:52:25', '2021-11-17 18:52:25'),
(82, 1, 15, 'gfhfghdf', '2021-11-18 09:23:32', '2021-11-18 09:23:32');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact_public`
--

CREATE TABLE `contact_public` (
  `id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `contact_public`
--

INSERT INTO `contact_public` (`id`, `type`, `content`, `created_at`, `updated_at`) VALUES
(3, 'Email', 'TheBell@thebell.com', '2021-11-06 09:47:54', '2021-11-07 04:11:40'),
(4, 'Phone', '0123456789', '2021-11-17 17:25:00', '2021-11-17 17:25:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer_contact`
--

CREATE TABLE `customer_contact` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer_contact`
--

INSERT INTO `customer_contact` (`id`, `firstname`, `lastname`, `email`, `phone_number`) VALUES
(1, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(2, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(3, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(4, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(5, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(6, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(7, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(8, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(9, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(10, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(11, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(12, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(13, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(14, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710'),
(15, 'Tân', 'Đinh Như', 'nhutan2001@gmail.com', '0362751710');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `thumbnail`, `created_at`, `updated_at`) VALUES
(1, 'Tâm trạng', '<p style=\"text-align: center;\"><strong>Tét thôi</strong></p><div class=\"se-component se-image-container __se__float-left\" contenteditable=\"false\" style=\"width: 100%;\"><figure style=\"margin: auto; width: 100%;\"><img src=\"data:image/png;base64,iVBORw0KGgoAA', 'https://ggstorage.oxii.vn/images/oxii-2019-7-11/728/the-nao-la-dan-ong-yeu-duoi-trong-tinh-yeu-anh-1.png', '2021-11-06 10:53:27', '2021-11-17 18:01:33'),
(18, 'testy', '<p><br></p>', 'https://ggstorage.oxii.vn/images/oxii-2019-7-11/728/the-nao-la-dan-ong-yeu-duoi-trong-tinh-yeu-anh-1.png', '2021-11-06 11:04:33', '2021-11-08 18:14:13'),
(28, 'Tiêu đề', '<div class=\"se-component se-image-container __se__float- __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto;\"><a href=\"https://cdn.tuoitre.vn/2021/11/5/biden-1636128696265659241784.jpg\" alt=\"https://cdn.tuoitre.vn/2021/11/5/biden-1636128696265659241784.jpg\" data-image-link=\"image\"><img src=\"https://cdn.tuoitre.vn/thumb_w/586/2021/11/5/biden-1636128696265659241784.jpg\" alt=\"Thuốc uống trị COVID-19: Nhiều nước chọn Molnupiravir, Mỹ chọn hàng Pfizer - Ảnh 1.\" rel=\"lightbox\" type=\"photo\" data-image-link=\"https://cdn.tuoitre.vn/2021/11/5/biden-1636128696265659241784.jpg\" data-proportion=\"true\" data-align=\"center\" data-index=\"0\" data-file-name=\"biden-1636128696265659241784.jpg\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"auto,auto\" style=\"\"></a></figure></div><div></div><p>Tổng thống Joe Biden cho biết Mỹ đã chọn mua hàng triệu liều thuốc của Pfizer - Ảnh: REUTERS</p><p>Ngày 5-11, Tổng thống Mỹ Joe Biden cho biết nước này đã đặt mua và sẽ sở hữu hàng triệu liều thuốc uống trị COVID-19 đang được thử nghiệm của Hãng dược phẩm Pfizer (Mỹ), nếu thuốc này cuối cùng cho thấy hiệu quả cao.</p><p>\"Nếu được Cục Quản lý thực phẩm và dược phẩm Mỹ (FDA) phê duyệt, chúng tôi có thể sớm có thuốc điều trị COVID-19 cho những người bị nhiễm bệnh.</p><p>Chúng tôi đã đặt mua hàng triệu liều. Liệu pháp này sẽ là một công cụ khác trong hộp công cụ của chúng tôi để bảo vệ mọi người khỏi những hậu quả tồi tệ nhất do COVID-19\", Tổng thống Biden cho biết.</p><p>Trước đó, trong thông báo phát ngày 5-11 về kết quả thử nghiệm tạm thời, Pfizer cho biết loại thuốc kháng virus dạng viên đang thử nghiệm của công ty này đã chứng minh giảm tới 89% nguy cơ nhập viện hoặc tử vong đối với những người trưởng thành có nguy cơ mắc COVID-19 nặng.&nbsp;</p><p>Theo Hãng tin Reuters, hiện nay nhiều quốc gia đổ xô đặt mua thuốc trị COVID-19 của Hãng dược phẩm Pfizer và của&nbsp;Merck &amp; Co (Mỹ).</p><p>Đến nay Hãng Merck &amp; Co đã ký 9 thỏa thuận bán tổng cộng hơn 3&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\">triệu liệu trình thuốc Molnupiravir cho chính phủ nhiều nước.</span></p><p>Trong lúc thuốc Molnupiravir của Merck &amp; Co vẫn đang chờ được phê duyệt ở Mỹ, Anh đã trở thành quốc gia đầu tiên trên thế giới phê duyệt loại thuốc này. Vương quốc Anh đã đặt mua 480.000 liệu trình thuốc Molnupiravir và mua 250.000 liệu trình thuốc của Pfizer.</p><p><br></p>', 'https://ggstorage.oxii.vn/images/oxii-2019-7-11/728/the-nao-la-dan-ong-yeu-duoi-trong-tinh-yeu-anh-1.png', '2021-11-06 16:24:04', '2021-11-06 16:24:04'),
(29, 'TP.HCM: Kiểm tra gói hỗ trợ Covid-19 tại Q.3', '<p>Ông Hiếu kiến nghị UBND Q.3 cần phân tích thêm việc phát hiện trùng tên, không đúng đối tượng trong giai đoạn nào như rà soát, lập chính sách, chi trả hay khi chi trả xong mới phát hiện sai đối tượng; đánh giá tác động của chính sách với người dân; hoạt động của<span>&nbsp;</span><a href=\"https://thanhnien.vn/tro-lai-muu-sinh-se-phai-lam-gi-de-khong-ai-bi-bo-roi-post1398329.html\">Trung tâm an sinh</a><span>&nbsp;</span>Q.3 ra sao...</p><p>Ông Nguyễn Minh Nhựt, Phó trưởng ban Ban<span>&nbsp;</span><a href=\"https://thanhnien.vn/van-hoa/\" target=\"_blank\" rel=\"noopener noreferrer\">Văn hóa</a><span>&nbsp;</span>- Xã hội HĐND TP.HCM cũng đánh giá tốt việc tuyên truyền chính sách tại Q.3, điều này thể hiện rõ qua số lượng phản ánh qua Tổng đài 1022 chuyển biến rõ rệt (đợt 1 có 397 phản ánh, đợt 2 tăng đột biến 8.903 phản ánh, đợt 3 giảm chỉ còn 1.919 tin). Đồng thời, kiến nghị, với tỷ lệ trùng lắp tên hỗ trợ cao, địa phương cần bổ sung bài học kinh nghiệm cho vấn đề này; đánh giá công tác nắm bắt dư luận xã hội.</p><table><tbody><tr><td><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img src=\"https://image.thanhnien.vn/w2048/Uploaded/2021/unhuwaa/2021_11_09/vo-van-hoan-790.jpg\" alt=\"TP.HCM: Kiểm tra gói hỗ trợ Covid-19 tại Q.3, có phường phê duyệt danh sách cao hơn tổng nhân khẩu trên địa bàn - ảnh 1\" data-proportion=\"true\" data-align=\"none\" data-index=\"0\" data-file-name=\"vo-van-hoan-790.jpg\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"auto,auto\" style=\"\"></figure></div><div><br></div></td></tr><tr><td><p>Ông Võ Văn Hoan, Phó chủ tịch UBND TP.HCM chất vấn về các con số duyệt chi tại Q.3</p><div><p>KHÁNH TRẦN</p></div></td></tr></tbody></table><h2><strong>\'Tại sao duyệt lên rất cao, nhưng chi trả rất thấp?\'</strong></h2><p>Tại buổi kiểm tra,<span>&nbsp;</span><a href=\"https://thanhnien.vn/giai-thich-cho-dan-hieu-post1397667.html\">ông Võ Văn Hoan</a>, Phó chủ tịch UBND TP.HCM chất vấn về các con số duyệt chi tại P.11 (Q.3).</p><p>Cụ thể, ông Hoan thắc mắc, tại P.11, đợt 2, số lao động tự do bổ sung đủ điều kiện hưởng theo Nghị quyết 09/2021 của HĐND TP.HCM (nhận 1 lần cho 2 đợt) lên tới 1.670 người, gấp 5 lần danh sách 371 người mà phường đã lập đợt 1. Tuy nhiên, thực tế chi chỉ khoảng 1.096 người. “Tại sao duyệt lên rất cao, nhưng chi trả rất thấp?”, ông Hoan nói.</p><p>Đồng thời, tại P.11, ở<span>&nbsp;</span><a href=\"https://thanhnien.vn/tp-hcm-con-1-4-trieu-nguoi-chua-nhan-goi-ho-tro-covid-19-dot-3-post1399251.html\">gói đợt 3</a>, địa phương đã phê duyệt 23.194 người có hoàn cảnh thật sự khó khăn. Ông Hoan nói, con số này “cao hơn bình thường”, lớn hơn cả tổng số nhân khẩu thực tế cư trú (thường trú, tạm trú, lưu trú) trên địa bàn là 21.631 người.</p><p>“Các phường khác số người phê duyệt hỗ trợ chỉ tầm 2/3 tổng số nhân khẩu. Chưa kể, tuy phê duyệt như thế, nhưng thực tế chi đến nay chỉ 18.341 người (đạt tỷ lệ 79,08%). Tại địa phương có vấn đề gì không?”, ông Hoan nêu thắc mắc.</p><p>Trả lời câu hỏi của ông Hoan, đại diện UBND P.11 cho biết, với chính sách hỗ trợ<span>&nbsp;</span><a href=\"https://thanhnien.vn/thoi-su/viec-lam/\" target=\"_blank\" rel=\"noopener noreferrer\">người lao động</a><span>&nbsp;</span>tự do đợt 1, phường chỉ lập danh sách 371 trường hợp. Tuy nhiên, trong quá trình lập danh sách thì phát sinh người lao động tự do khiến việc lập danh sách chậm trong khi tiến độ chi trả gấp rút nên dẫn đến số lượng người bổ sung.</p><p>Ở đợt 2, liên quan thắc mắc “phát chỉ 1.096/1.670 người” của ông Hoan, UBND P.11 cho hay, do số lượng hỗ trợ lớn nên phát chung với hộ lao động khó khăn. Các F0 tăng phải đi<span>&nbsp;</span><a href=\"https://thanhnien.vn/ca-nhiem-gia-tang-tp-hcm-ung-pho-the-nao-post1399371.html\">cách ly</a>, trong quá trình phát cũng có nhiều phản ánh không đúng nhóm đối tượng nên không phát...</p><p>Liên quan thắc mắc đợt 3, lập danh sách cao hơn tổng số nhân khẩu tại địa phương, UBND P.11 cũng thông tin do trong quá trình hướng dẫn triển khai chưa đồng bộ, rà soát,<span>&nbsp;</span><a href=\"https://thanhnien.vn/tp-hcm-chu-tich-phuong-ly-giai-danh-sach-ho-tro-co-hang-tram-nguoi-sinh-nam-1901-post1386472.html\">nhập liệu, lập danh sách</a><span>&nbsp;</span>đến 2 lần dẫn đến số lượng danh sách bị trùng (gần 2.000 người) trong khi trong khâu nhập liệu lập danh sách chưa sắp xếp.</p><p>“Đến khi chi thực tế, xác định đúng đối tượng mới phát hiện kịp thời việc trùng nên không chi”, UBND P.11 cho hay.</p><p>Ông Võ Văn Hoan nhận định, với gói hỗ trợ Covid-19, công đoạn nào trong quá trình thực hiện từ lúc lập danh sách đến thẩm định và chi hỗ trợ thì cũng cần rà soát, kiểm soát. \"Đây là sai sót chưa tới nơi tới chốn của địa phương, cũng như là bài học, kinh nghiệm trong quá trình thực hiện”.</p><p><br></p>', 'https://image.thanhnien.vn/660x370/Uploaded/2021/unhuwaa/2021_11_09/vo-van-hoan-790.jpg', '2021-11-09 04:38:37', '2021-11-09 04:49:37'),
(30, 'Tổng vốn hóa thị trường tiền điện tử đã vượt 3.000 tỉ USD', '<p>Dữ liệu mới nhất từ CoinGecko cho thấy tổng vốn hóa thị trường của tất cả các tiền điện tử niêm yết hiện nay đã đạt đến đỉnh cao chóng mặt, lên mức 3.000 tỉ USD.</p><p>Theo<span>&nbsp;</span><em>Neowin</em>, điều này đạt được khi giá trị<span>&nbsp;</span><a href=\"https://thanhnien.vn/bitcoin/\" target=\"_blank\" rel=\"noopener noreferrer\">Bitcoin</a><span>&nbsp;</span>và Ethereum đạt mức kỷ lục mới lần lượt là 66.000 USD và 4.790 USD. Được biết, ba cột mốc giá trị vốn hóa thị trường tích lũy của tiền điện tử đã đạt trong năm nay, gồm 1.000 tỉ USD vào ngày 7.1, sau đó là 2.000 tỉ USD vào ngày 6.4 và giờ đây là 3.000 tỉ USD.</p><p>CoinGecko chứa thông tin về 10.418 loại tiền điện tử khác nhau. Mỗi loại<span>&nbsp;</span><a href=\"https://thanhnien.vn/trung-quoc-manh-tay-voi-giao-dich-tien-dien-tu-post1115283.html\" target=\"_blank\">tiền điện tử</a><span>&nbsp;</span>này đang đóng góp vào vốn hóa thị trường tích lũy mới với hai tiền điện tử lớn nhất là Bitcoin và Ethereum, giá trị vốn hóa thị trường lần lượt là khoảng 1.240 tỉ USD và 567 tỉ USD. Trong những ngày gần đây, các loại tiền điện tử đang phát triển khác như Solana và Polkadot đang tăng giá trị, trong khi Shiba Inu cũng đã tăng giá một chút mặc dù hiện đã giảm 16,6% trong 7 ngày qua.</p><p>Hai vấn đề đang diễn ra với Bitcoin có thể đẩy giá trị vốn hóa thị trường tiền điện tử lên cao hơn nữa trong những tuần tới. Thứ nhất, một số nhà phân tích dự đoán Bitcoin sẽ bứt phá và đạt 75.000 USD vào cuối năm nay. Lý do thứ hai mà chúng ta có thể thấy nhiều sự quan tâm hơn là vì mạng Bitcoin sẽ trải qua một softfork trong 6 ngày được đặt tên là Taproot. Được biết, softfork là thuật ngữ chỉ một sự thay đổi trong giao thức tiền điện tử theo phương thức tương thích ngược.</p><p>Tuần trước, cựu Thủ tướng Vương quốc Anh Philip Hammond nói rằng ông nhận thấy việc sử dụng công nghệ tiền điện tử trong lĩnh vực<span>&nbsp;</span><a href=\"https://thanhnien.vn/tai-chinh-kinh-doanh/\" target=\"_blank\" rel=\"noopener noreferrer\">tài chính</a><span>&nbsp;</span>lớn hiện nay là không thể tránh khỏi. Các động thái biến tiền điện tử trở thành một lựa chọn đầu tư chủ đạo cũng có thể xuất hiện ở Úc, nơi một quỹ giao dịch trao đổi giao ngay (ETF) đối với các giao dịch qua Bitcoin và Ethereum đã được cơ quan giám sát chứng khoán của đất nước chấp thuận.</p><div><table><tbody><tr><td><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img src=\"https://image.thanhnien.vn/w2048/Uploaded/2021/xdrkxrvekx/2021_11_09/2298-6274.jpg\" alt=\"Tổng vốn hóa thị trường tiền điện tử đã vượt 3.000 tỉ USD - ảnh 1\" data-proportion=\"true\" data-align=\"none\" data-index=\"0\" data-file-name=\"2298-6274.jpg\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"auto,auto\" style=\"\"></figure></div><div><br></div></td></tr><tr><td><p>Bitcoin là động lực chính cho sự tăng trưởng giá trị vốn hóa của tiền điện tử</p><div><p>REUTERS</p></div></td></tr></tbody></table></div><p><br></p>', 'https://image.thanhnien.vn/w2048/Uploaded/2021/xdrkxrvekx/2021_11_09/2298-6274.jpg', '2021-11-09 04:42:40', '2021-11-09 04:42:40'),
(31, 'Mạng di động iTel', '<p>Điểm lại những vượt trội trong các dịch vụ của Mạng di động iTel phải kể đến những gói cước giá rẻ đa dạng, phù hợp với đại đa số người dùng như: Gói ITEL79, Gói MAY, ITEL77,… Trong đó ITEL79 luôn nằm trong top những gói cước được thuê bao iTel yêu thích nhất và tin dùng bởi “Rẻ mà MAX Sướng”. Chỉ 79.000 đồng để có 3G/ngày - 90G/tháng đáp ứng mọi nhu cầu sử dụng data tốc độ cao với chi phí rẻ dù học/ làm việc online, chơi game, xem phim, nghe nhạc,...</p><table><tbody><tr><td><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img src=\"https://image.thanhnien.vn/w2048/Uploaded/2021/puqgfdmzs-co/2021_11_08/itel79-1-8788.jpeg\" alt=\"Mạng di động iTel mang tới cho người dùng trải nghiệm ‘Rẻ mà MAX Sướng’ - ảnh 1\" data-proportion=\"true\" data-align=\"none\" data-index=\"0\" data-file-name=\"itel79-1-8788.jpeg\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"auto,auto\" style=\"\"></figure></div><div><br></div></td></tr><tr><td><p>ITEL79 được người dùng đặc biệt yêu thích bởi dung lượng khủng, giá cực rẻ, đem lại trải nghiệm Rẻ mà MAX Sướng</p></td></tr></tbody></table><p>ITEL79 - Gói cước di động cung cấp lưu lượng data khủng - giá rẻ là sản phẩm ghi dấu cho sự hợp tác giữa Mạng di động iTel và chuỗi cửa hàng FPT Shop trên toàn quốc. Theo đó, FPT Shop trở thành đơn vị độc quyền phân phối sản phẩm ITEL79 bên cạnh nhiều gói cước, dịch vụ viễn thông khác của Mạng di động iTel.</p><h2><a href=\"https://itel.vn/club?utm_source=iTel+-+PR&amp;utm_medium=iTel+Club+gioi+thieu&amp;utm_campaign=ITEL+CLUB+2021\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">iTel Club</a><span>&nbsp;</span>chính là chương trình ưu đãi lớn nhất của iTel nhằm gia tăng trải nghiệm Rẻ mà MAX Sướng cho khách hàng</h2><p>Chương trình khách hàng thân thiết của iTel gần đây đã được ra mắt với thông điệp: “iTel Club - Đầy ắp ưu đãi” như một lời khẳng định về những nỗ lực của iTel nhằm tối đa hóa lợi ích dành cho thuê bao của nhà mạng. Thông qua chương trình này, khách hàng sẽ có cơ hội tích lũy thật nhiều điểm thưởng và đổi lấy ngàn phần quà có giá trị.</p><table><tbody><tr><td><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img src=\"https://image.thanhnien.vn/w2048/Uploaded/2021/puqgfdmzs-co/2021_11_08/itel-club-2-5430.png\" alt=\"Mạng di động iTel mang tới cho người dùng trải nghiệm ‘Rẻ mà MAX Sướng’ - ảnh 2\" data-proportion=\"true\" data-align=\"none\" data-index=\"1\" data-file-name=\"itel-club-2-5430.png\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"auto,auto\" style=\"\"></figure></div><div><br></div></td></tr><tr><td><p>iTel Club như lời cảm ơn minh chứng cho mong muốn gắn bó lâu dài của iTel đối với khách hàng</p></td></tr></tbody></table><p>Thành viên của iTel Club có thể dễ dàng tích điểm, đổi ưu đãi thuận tiện, cùng vô số những cơ hội tích điểm, nâng hạng hội viên để nhận được ưu đãi hấp dẫn. iTel Club có số lượng quà tặng khủng, xịn sò về ăn uống, giải trí, mua sắm, làm đẹp, du lịch... từ nhiều đối tác nổi tiếng, đáp ứng được nhu cầu, sở thích đa dạng của mọi khách hàng. Số lượng voucher luôn được cập nhật mới lên tới 38.000+ quà tặng, đem đến cho khách hàng trải nghiệm Rẻ mà MAX Sướng.</p><p>Để tìm hiểu thêm thông tin về iTel cũng như các sản phẩm dịch vụ di động đầu số 087, khách hàng có thể liên hệ fanpage Mạng Di Động Itel - 087(@itel.fan) cũng như<span>&nbsp;</span><a href=\"http://itel.vn/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">website</a><span>&nbsp;</span>để được tư vấn tốt nhất.</p><p><br></p>', 'https://image.thanhnien.vn/w2048/Uploaded/2021/puqgfdmzs-co/2021_11_08/itel79-1-8788.jpeg', '2021-11-09 04:50:41', '2021-11-09 04:50:41'),
(32, 'MacBook Air M1 giảm giá bán', '<p>Một trong những máy tính xách tay tốt nhất của Apple - MacBook Air M1, đang được bán với mức giá tốt nhất từ trước đến nay, từ 800 USD.</p><p>Theo<span>&nbsp;</span><em>Engadget</em>, đây là mức giá được giảm trên<span>&nbsp;</span><a href=\"https://thanhnien.vn/amazon/\" target=\"_blank\" rel=\"noopener noreferrer\">Amazon</a>, nơi người dùng có thể mua model 256 GB với giá chỉ từ 800 USD, thấp hơn 800 USD so với giá bình thường của nó, trong khi model 512 GB cũng được giảm 200 USD giá bán và xuống mức 1.050 USD. Ở thời điểm này, các tùy chọn màu bạc ở cả hai phiên bản dung lượng lưu trữ đều đã bán hết.</p><p>Được biết, trong đánh giá của<span>&nbsp;</span><em>Engadget<span>&nbsp;</span></em>dành cho MacBook Air M1, máy đạt số điểm 94 do hiệu suất làm việc ấn tượng và không có tiếng ồn của quạt. Chip M1 làm cho MacBook Air nhanh và mượt hơn so với các mẫu trước đó, giúp máy hoạt động gần như ngay lập tức khi người dùng mở lên và tốc độ xử lý tổng thể tốt hơn. Người dùng cũng nhận thấy những cải tiến về GPU, điều này sẽ giúp máy có thể xử lý các tựa<span>&nbsp;</span><a href=\"https://thanhnien.vn/game/game/\" target=\"_blank\" rel=\"noopener noreferrer\">game</a><span>&nbsp;</span>Arcade của Apple một cách dễ dàng.</p><p>Apple đã loại bỏ quạt bên trong<span>&nbsp;</span><a href=\"https://thanhnien.vn/apple-cong-bo-bo-nao-cho-dong-mac-cao-cap-post1392423.html\" target=\"_blank\">MacBook Air M1</a>, vì vậy người dùng sẽ không bị làm phiền bởi tiếng ồn ào ngay cả khi máy chạy ở hiệu suất cao. Đó là một chi tiết nhỏ nhưng giúp trải nghiệm sử dụng máy tính xách tay tốt hơn nhiều. Bên cạnh đó, MacBook Air M1 cũng có thời lượng sử dụng pin kéo dài lên đến 16 giờ. Nhược điểm của sản phẩm nằm ở việc máy chỉ có 2 cổng USB-C, trái ngược hoàn toàn với nhiều cổng hữu ích trên<span>&nbsp;</span><a href=\"https://thanhnien.vn/macbook-pro/\" target=\"_blank\" rel=\"noopener noreferrer\">MacBook Pro</a><span>&nbsp;</span>mới.</p><div><table><tbody><tr><td style=\"text-align: center;\"><div class=\"se-component se-image-container __se__float- __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto;\"><img src=\"https://image.thanhnien.vn/w2048/Uploaded/2021/xdrkxrvekx/2021_11_09/2297-9473.jpg\" alt=\"MacBook Air M1 giảm giá bán xuống mức thấp kỷ lục mới - ảnh 1\" data-proportion=\"true\" data-align=\"center\" data-file-name=\"2297-9473.jpg\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-percentage=\"auto,auto\" style=\"\" data-index=\"0\" origin-size=\"768,512\" data-rotatex=\"\" data-rotatey=\"\"></figure></div><div style=\"text-align: center;\"><br></div></td></tr><tr><td style=\"text-align: center;\"><p style=\"text-align: center;\">MacBook Air M1 đang được bán với mức giá hấp dẫn trên Amazon</p><div style=\"text-align: center;\"><p style=\"text-align: center;\">CHỤP MÀN HÌNH THE VERGE</p></div></td></tr></tbody></table></div><p><br></p>', 'https://image.thanhnien.vn/w2048/Uploaded/2021/xdrkxrvekx/2021_11_09/2297-9473.jpg', '2021-11-09 04:34:43', '2021-11-09 04:47:44'),
(33, 'McAfee được mua lại với giá 14 tỉ USD', '<p>Hãng phần mềm bảo mật McAfee vừa thông báo đã được mua lại bởi một nhóm nhà đầu tư trong thỏa thuận trị giá hơn 14 tỉ USD.</p><p>Theo<span>&nbsp;</span><em>Theverge</em>, được thành lập vào năm 1987 bởi John McAfee, McAfee nổi tiếng với phần mềm diệt virus máy tính. Người sáng lập McAfee rời công ty vào năm 1994 và công ty được mua lại bởi Intel vào năm 2010 với giá 7,68 tỉ USD. Vào năm 2014, Intel thông báo họ bắt đầu loại bỏ thương hiệu McAfee cho phần mềm bảo mật và đổi tên thành “Intel Security”.</p><p>Tháng 10 năm ngoái,<span>&nbsp;</span><a href=\"https://thanhnien.vn/sau-mcafee-edward-snowden-canh-bao-nha-sang-lap-wikileaks-la-nguoi-tiep-theo-post1081994.html\" target=\"_blank\">McAfee</a><span>&nbsp;</span>trở lại thị trường chứng khoán đại chúng. McAfee cho biết trong thông báo rằng họ sẽ tiếp tục là một công ty “an ninh mạng cho<span>&nbsp;</span><a href=\"https://thanhnien.vn/tai-chinh-kinh-doanh/tieu-dung/\" target=\"_blank\" rel=\"noopener noreferrer\">người tiêu dùng</a><span>&nbsp;</span>thuần túy” sau khi bán mảng kinh doanh Enterprise cho công ty cổ phần tư nhân Symphony Technology Group với giá 4 tỉ USD vào tháng 7.</p><p>Công ty cho biết thỏa thuận vừa được công bố để bán cho một nhóm nhà đầu tư, bao gồm Advent International Corp., Permira Advisers và Crosspoint Capital Partners. Thương vụ dự kiến ​​sẽ kết thúc vào nửa đầu năm 2022.</p><p>Quay trở lại với John McAfee, người đã có một cuộc sống đầy rắc rối sau khi rời công ty. Vào năm 2012, ông trốn đến Guatemala khi nhà chức trách ở Belize tìm cách thẩm vấn ông có liên quan đến một vụ giết người hàng xóm. Vào tháng 3, ông bị buộc tội gian lận chứng khoán về một kế hoạch “bơm và bán phá giá tiền điện tử”, khi nhà chức trách cho biết ông và vệ sĩ của mình đã thuyết phục những người theo dõi Twitter của họ đầu tư vào một số đồng tiền nhất định, sau đó bán số tiền nắm giữ của họ khi giá tăng.</p><p>McAfee được phát hiện chết trong phòng giam ở Barcelona (Tây Ban Nha) vào tháng 6, không lâu sau khi Tây Ban Nha chấp thuận dẫn độ ông sang Mỹ để đối mặt với cáo buộc gian lận thuế.</p><div><table><tbody><tr><td><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img src=\"https://image.thanhnien.vn/w2048/Uploaded/2021/xdrkxrvekx/2021_11_09/2296-7093.jpg\" alt=\"McAfee được mua lại với giá 14 tỉ USD - ảnh 1\" data-proportion=\"true\" data-align=\"none\" data-index=\"0\" data-file-name=\"2296-7093.jpg\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"auto,auto\" style=\"\"></figure></div><div><br></div></td></tr><tr><td><p>McAfee đã chấp nhận bán mình với giá 14 tỉ USD</p><div><p>AFP</p></div></td></tr></tbody></table></div><p><br></p>', 'https://image.thanhnien.vn/w2048/Uploaded/2021/xdrkxrvekx/2021_11_09/2296-7093.jpg', '2021-11-09 04:38:45', '2021-11-09 04:38:45'),
(34, 'Hơn 360 triệu người dùng bị nghiện Facebook', '<p>Một cuộc khảo sát nội bộ của công ty Meta&nbsp;cho thấy cứ 8 người dùng Facebook thì lại có 1 người bị nghiện<span>&nbsp;</span><a href=\"https://thanhnien.vn/gioi-tre/the-gioi-mang/\" target=\"_blank\" rel=\"noopener noreferrer\">mạng xã hội</a><span>&nbsp;</span>này, gây ảnh hưởng nghiêm trọng đến<span>&nbsp;</span><a href=\"https://thanhnien.vn/suc-khoe/\" target=\"_blank\" rel=\"noopener noreferrer\">sức khỏe</a>, công việc và các mối quan hệ.</p><p>Theo<span>&nbsp;</span><em>Wall Street Journal</em>, các nhà nghiên cứu ước tính trong số 2,9 tỉ người dùng hiện tại, có khoảng 12,5% bị nghiện<span>&nbsp;</span><a href=\"https://thanhnien.vn/meta-len-ke-hoach-mo-cua-hang-ban-le-post1398518.html\">Facebook</a>, tương đương với hơn 360 triệu người.</p><p>Sử dụng Facebook nhiều quá mức có thể xem như biểu hiện của căn bệnh \"nghiện<span>&nbsp;</span><a href=\"https://thanhnien.vn/spacex-cham-giao-chao-ve-tinh-starlink-vi-thieu-chip-post1397220.html\">internet</a>\". Tình trạng này xuất hiện trên Facebook nhiều hơn bất kỳ<span>&nbsp;</span><a href=\"https://thanhnien.vn/facebook-tim-cach-loi-keo-nhom-doi-tuong-tu-6-9-tuoi-post1396886.html\">mạng xã hội</a><span>&nbsp;</span>nào khác, dù tất cả đều có những thủ thuật riêng để giữ chân người dùng.</p><p>Nghiên cứu về tác hại của mạng xã hội đối với đời sống con người đã được một nhóm nhân viên trong Facebook tiến hành cách nay vài năm. Sau khi bị giải tán vào năm 2019, nhóm đã chia sẻ những phát hiện của mình trong một bài thuyết trình nội bộ vào tháng 3.2020.</p><p>Qua nghiên cứu, họ nhận thấy nhiều người không thể kiểm soát thời gian sử dụng Facebook, từ đó gặp phải các vấn đề trong cuộc sống riêng, như bị giảm năng suất làm việc, bị mất ngủ do lướt Facebook quá nhiều, các mối quan hệ cá nhân phai nhạt khi mọi người chỉ còn liên hệ trực tuyến thay vì gặp mặt trực tiếp.</p><p>\"Tôi lướt Facebook mỗi ngày, bất cứ lúc nào - theo đúng nghĩa đen. Trừ khi tôi đi tắm. Tôi mất luôn khái niệm về thời gian\", một người dùng 22 tuổi nói với các nhà nghiên cứu.</p><p>Làm trong lĩnh vực truyền thông, Laurin Manning Gandy, 40 tuổi, tạo tài khoản trên Facebook vào cuối năm 2004 để phục vụ công việc. Gandy cho biết mỗi ngày bà phải kiểm tra số bình luận và lượt thích trên các bài đăng của mình, dành hơn 8 giờ mỗi ngày cho ứng dụng.</p><p>\"Cứ mỗi giây rảnh rỗi, tôi lại lấy điện thoại lướt Facebook. Facebook đã chiếm trọn tâm trí tôi\", Gandy nói.</p><p>Dần dần, Gandy không còn thời gian theo đuổi sở thích vẽ tranh của mình. Tháng 4 năm nay, bà xóa Facebook trên điện thoại nhưng sau đó vẫn phải cài đặt lại để đặt đồ ăn từ một nhà hàng.</p><p>Tuy nhiên,<span>&nbsp;</span><a href=\"https://thanhnien.vn/meta-len-ke-hoach-mo-cua-hang-ban-le-post1398518.html\">Meta</a><span>&nbsp;</span>đã phản bác bài báo của<span>&nbsp;</span><em>Wall Street Journal</em>. Công ty gọi tình trạng lướt Facebook quá mức là \"sử dụng có vấn đề\".<span>&nbsp;</span><em>Business Insider</em><span>&nbsp;</span>dẫn lời trưởng nhóm nghiên cứu Pratiti Raychoudhury của Facebook cho biết: \"Sử dụng có vấn đề không giống như nghiện (Facebook). Cụm \"sử dụng có vấn đề\" đã được dùng để mô tả mối quan hệ của con người đối với nhiều loại<span>&nbsp;</span><a href=\"https://thanhnien.vn/cong-nghe/\" target=\"_blank\" rel=\"noopener noreferrer\">công nghệ</a>, như TV và<span>&nbsp;</span><a href=\"https://thanhnien.vn/trung-quoc-tray-trat-voi-tham-vong-tu-chu-ban-dan-post1394972.html\">smartphone</a>\".</p><p>Raychoudhury cũng làm rõ rằng công ty vẫn đang triển khai những sản phẩm để hỗ trợ mọi người sử dụng Facebook một cách lành mạnh, chứ không ngừng hẳn việc nghiên cứu tác hại của mạng xã hội như<span>&nbsp;</span><em>Wall Street Journal</em><span>&nbsp;</span>đưa tin.</p><p>Bà nói: \"Dù chưa tìm thấy mối quan hệ nhân quả giữa mạng xã hội và chứng nghiện, nhưng về tổng thể, nghiên cứu cho thấy mạng xã hội nhìn chung không có tác động lớn đối với sức khỏe của người dùng\".</p><div><table><tbody><tr><td><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img src=\"https://image.thanhnien.vn/w2048/Uploaded/2021/kbfluau/2021_11_08/6147854ae3da2d001839ac16-2041.jpg\" alt=\"Hơn 360 triệu người dùng bị nghiện Facebook - ảnh 1\" data-proportion=\"true\" data-align=\"none\" data-index=\"0\" data-file-name=\"6147854ae3da2d001839ac16-2041.jpg\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"auto,auto\" style=\"\"></figure></div><div><br></div></td></tr><tr><td><p>Ước tính có khoảng 1/8 người nghiện Facebook</p><div><p>AFP/GETTY IMAGES</p></div></td></tr></tbody></table><table><tbody><tr><td><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img src=\"https://image.thanhnien.vn/w2048/Uploaded/2021/kbfluau/2021_11_08/facebook-addiction-2640.jpg\" alt=\"Hơn 360 triệu người dùng bị nghiện Facebook - ảnh 2\" data-proportion=\"true\" data-align=\"none\" data-index=\"1\" data-file-name=\"facebook-addiction-2640.jpg\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"auto,auto\" style=\"\"></figure></div><div><br></div></td></tr><tr><td><p>Nhiều người ví Facebook như chất gây nghiện</p><div><p>CHỤP MÀN HÌNH</p></div></td></tr></tbody></table><table><tbody><tr><td><div src=\"https://thanhnien.mediacdn.vn/325084952045817856/2021/10/26/cuu-nhan-vien-to-cao-facebook-thuc-day-bat-on-16352353383252021734834.mp4\"><div><div type=\"1\"><div><div><div></div><div><div><div><span style=\"box-sizing: inherit; color: inherit; font-size: inherit; line-height: inherit; margin-left: 0px; margin-right: 0px; margin-top: initial; margin-bottom: 0px; font-family: Arial, Helvetica, sans-serif; user-select: none; -webkit-tap-highlight-color: transparent; border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; overflow: hidden; padding: 0px; position: absolute; width: 1px;\">Current Time</span>0:09</div></div><div><div>/</div></div><div><div><span style=\"box-sizing: inherit; color: inherit; font-size: inherit; line-height: inherit; margin-left: 0px; margin-right: 0px; margin-top: initial; margin-bottom: 0px; font-family: Arial, Helvetica, sans-serif; user-select: none; -webkit-tap-highlight-color: transparent; border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; overflow: hidden; padding: 0px; position: absolute; width: 1px;\">Duration</span>2:09</div></div><div><div><div></div></div></div><div><div><div></div><div>Auto</div></div></div><div><div><div></div></div></div><div></div></div></div></div></div></div></div></td></tr><tr><td><div>Cựu nhân viên Facebook: kích động thù hận dễ hơn gợi lòng trắc ẩn</div></td></tr></tbody></table></div><p><br></p>', 'https://image.thanhnien.vn/w2048/Uploaded/2021/kbfluau/2021_11_08/6147854ae3da2d001839ac16-2041.jpg', '2021-11-09 04:25:47', '2021-11-09 04:25:47'),
(35, 'Cảm biến vân tay trên Pixel 6 trở nên chậm chạp', '<p>Google đã đưa ra lời giải thích về nguyên nhân khiến cảm biến vân tay trên Pixel 6 trở nên chậm chạp và khó sử dụng khiến nhiều người dùng khó chịu.</p><p>Theo<span>&nbsp;</span><em>Engadget</em>, Google nói đầu đọc dấu vân tay của Pixel 6 đang sử dụng thuật toán bảo mật nâng cao có thể mất nhiều thời gian hơn để kiểm tra các chữ số của người dùng hoặc yêu cầu tiếp xúc với cảm biến tốt hơn. Mặc dù vậy, Google không giải thích chi tiết về tuyên bố của mình.</p><p>Trước đó, một số người dùng cho rằng hiệu suất chậm chạp có thể là do<span>&nbsp;</span><a href=\"https://thanhnien.vn/google-pixel-6-pro-gap-su-co-man-hinh-nhap-nhay-post1397102.html\" target=\"_blank\">Google</a><span>&nbsp;</span>sử dụng đầu đọc dấu vân tay quang học dưới màn hình thay vì cảm biến siêu âm được thấy trong các điện thoại như Galaxy S21. Tuy nhiên, người dùng Reddit lưu ý có những điện thoại có cảm biến quang học hoạt động nhanh hơn, chẳng hạn như OnePlus 9. Điều này đặt ra nguyên nhân có thể bắt nguồn từ phần mềm khiến tốc độ xử lý cảm biến vân tay của Pixel 6 chậm hơn.</p><p>Hiện tại vẫn chưa rõ liệu Google có thể giải quyết vấn đề này thông qua bản cập nhật phần mềm hay không. Đối với người dùng tìm kiếm giải pháp thay thế tạm thời, họ được khuyến cáo có thể chọn biện pháp nhập mật mã bảo vệ thay vì mở khóa bằng khuôn mặt vì thiếu an toàn do không có cảm biến độ sâu, nơi hệ thống nhận dạng khuôn mặt đôi khi có thể bị đánh lửa bởi mặt nạ và ảnh.</p><div><table><tbody><tr><td><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img src=\"https://image.thanhnien.vn/w2048/Uploaded/2021/xdrkxrvekx/2021_11_08/2292-6777.jpg\" alt=\"Google lý giải nguyên nhân khiến máy quét vân tay Pixel 6 chậm chạp - ảnh 1\" data-proportion=\"true\" data-align=\"none\" data-index=\"0\" data-file-name=\"2292-6777.jpg\" data-file-size=\"0\" data-origin=\",\" data-size=\",\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"auto,auto\" style=\"\"></figure></div><div><br></div></td></tr><tr><td><p>Máy quét vân tay trên Pixel 6 hoạt động một cách chậm chạp</p><div><p>TOM’S GUIDE</p></div></td></tr></tbody></table></div><p><br></p>', 'https://image.thanhnien.vn/w2048/Uploaded/2021/xdrkxrvekx/2021_11_08/2292-6777.jpg', '2021-11-09 04:57:48', '2021-11-09 04:57:48'),
(36, 'testabc', '<h1>Giá xăng trước áp lực tăng lần thứ năm liên tiếp</h1><p>Với việc giá thế giới vẫn đi lên, doanh nghiệp đầu mối dự báo, giá xăng trong nước ngày mai sẽ tăng tiếp nhưng không mạnh như kỳ điều hành trước.</p><p>Dữ liệu từ Bộ Công Thương cho biết,<span>&nbsp;</span><a href=\"https://vnexpress.net/chu-de/gia-xang-dau-3026\" rel=\"dofollow\">giá xăng<span>&nbsp;</span></a>thành phẩm bình quân trên thị trường Singapore tính đến ngày 2/11 của RON 92 là 100,66 USD một thùng, xăng RON 95 là 104,16 USD một thùng, tăng 3-4% so với kỳ trước. Giá dầu ít biến động hơn, quanh 95 USD một thùng.</p><p>Theo lãnh đạo một doanh nghiệp đầu mối ở TP HCM, nếu nhà quản lý không trích Quỹ bình ổn, kỳ điều hành ngày mai, giá xăng có thể tăng 400-600 đồng một lít còn giá dầu có thể đứng yên. Nếu đúng như dự báo, đây sẽ là lần điều chỉnh tăng thứ năm liên tiếp trong vòng 2 tháng qua.</p><p>Còn nếu cơ quan quản lý trích và sử dụng Quỹ bình ổn theo tỷ lệ 50/50 (tức 50% sử dụng quỹ, 50% giảm), giá xăng sẽ điều chỉnh quanh 200-300 đồng một lít.</p><p>Ở một góc nhìn khác, một lãnh đạo đầu mối xăng dầu ở Hà Nội cho rằng, 4 lần tăng liên tiếp trước đó đang tạo \"cơn sốc\" lên<span>&nbsp;</span><a href=\"https://vnexpress.net/kinh-doanh/gia-hang-hoa-leo-thang-4381207.html\" rel=\"dofollow\">giá nhiều hàng hoá</a><span>&nbsp;</span>và<span>&nbsp;</span><a href=\"https://vnexpress.net/kinh-doanh/doanh-nghiep-them-lao-dao-voi-gia-xang-dau-tang-4377676.html\" rel=\"dofollow\">hoạt động vận chuyển</a>, điều này cũng khiến Chính phủ cân nhắc. Do đó, kỳ điều hành này ông kỳ vọng nhà điều hành có thể dùng các biện pháp mới để giữ nguyên<span>&nbsp;</span><a href=\"https://vnexpress.net/chu-de/gia-xang-dau-3026\" rel=\"dofollow\">giá xăng dầu</a>.</p><p>Tại cuộc họp Ban chỉ đạo giá mới đây, Phó thủ tướng Lê Minh Khái yêu cầu giữ bình ổn giá mặt hàng này, vừa để tháo gỡ khó khăn cho sản xuất, kinh doanh, lưu thông hàng hóa, vừa hỗ trợ thúc đẩy tăng trưởng kinh tế.</p><p>Bộ Công Thương cùng Bộ Tài chính được giao điều hành linh hoạt, tính toán mức trích lập, chi sử dụng quỹ bình ổn hợp lý để tạo dư địa cho điều hành giá trong dịp Tết Nguyên đán và tạo đà kiểm soát giá năm 2022.</p><div><svg><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path>đồng/lít<path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path>Giá xăng trong nước từ tháng 2 đến nay(Nguồn: Petrolimex, PVOil)<path></path><path></path>RON 95<path></path><path></path>Xăng E5 RON 92Ngày 10-2Ngày 25/2Ngày 12-3Ngày 27/3Ngày 12-4Ngày 27/4Ngày 12-5Ngày 27/5Ngày 11-6Ngày 26/6Ngày 12-7Ngày 27/7Ngày 11-8Ngày 26/8Ngày 10-9Ngày 25/9Ngày 11-10Ngày 26/101500017500200002250025000VnExpress<path></path><path></path><path></path><path></path>Ngày 11-8●</svg><span>&nbsp;</span>Xăng E5 RON 92:<span>&nbsp;</span>20 490</div><p>Ngày 26/10, mỗi lít xăng tăng 1.430-1.460 đồng và dầu tăng 120-1.010 đồng. Ở kỳ điều chỉnh này, cơ quan điều hành chi 1.100 đồng (nhiều hơn kỳ trước 150 đồng) từ Quỹ bình ổn để bù 400 đồng cho mỗi lít xăng E5 RON 92; RON 95. Dầu diesel và dầu hoả có mức chi quỹ lần lượt là 150 đồng và 100 đồng mỗi lít. Riêng dầu madut không chi quỹ, và mà trích quỹ bình ổn 100 đồng một kg.</p><p><br></p>', 'https://ggstorage.oxii.vn/images/oxii-2019-7-11/728/the-nao-la-dan-ong-yeu-duoi-trong-tinh-yeu-anh-1.png', '2021-11-09 06:10:16', '2021-11-09 06:10:16');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `total_money` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `note`, `order_date`, `status`, `total_money`) VALUES
(7, 1, '', '2021-11-13 16:00:14', 0, 0),
(8, 2, '', '2021-11-14 07:54:57', 0, 0),
(9, 21, '', '2021-11-15 09:55:16', 0, 0),
(10, 8, '', '2021-11-16 20:19:13', 0, 0),
(11, 28, '', '2021-11-18 08:26:51', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `total_money` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_detail`
--

INSERT INTO `order_detail` (`id`, `order_id`, `product_id`, `num`, `total_money`) VALUES
(22, 8, 22, 1, NULL),
(107, 9, 15, 1, NULL),
(113, 11, 15, 1, NULL),
(114, 11, 18, 1, NULL),
(115, 11, 16, 1, NULL),
(116, 11, 17, 1, NULL),
(129, 7, 15, 1, NULL),
(130, 7, 16, 1, NULL),
(131, 7, 17, 1, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `category_id`, `title`, `price`, `discount`, `thumbnail`, `description`, `created_at`, `updated_at`) VALUES
(15, 18, 'Điện thoại iPhone 13 Chính hãng VN/A 128GB', 21550000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/iphone-13-xanh.jpg', 'Apple ra mắt iPhone 13 Chính hãng VN/A (thế hệ 13) năm 2021 được coi là sự nâng cấp đáng giá so với iPhone 12 ra mắt năm ngoái. Điều đầu tiên nhất đó là phần tai thỏ (Notch) đã được thu hẹp lại đáng kể. Apple đã khắc phục rất tốt nhược điểm của các đời iPhone trước đó, mang đến cho iPhone 13 Chính hãng VN/A màn hình đẹp hơn rất nhiều.', '2021-11-13 07:36:55', '2021-11-13 07:36:55'),
(16, 18, 'Điện thoại iPhone 12 Pro Max Chính hãng 128GB', 25750000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/07/w300/iphone-12-pro-max-den.jpg', 'iPhone 12 Pro Max Chính hãng không thay đổi trong thiết kế màn hình, vẫn là màn hình tai thỏ giống với phiên bản tiền nhiệm nhưng kích thước màn hình có thay đổi lớn hơn 1 chút. Màn hình của iPhone 12 Pro Max Chính hãng được trang bị là Super Retina XDR OLED 6.7\'\', với độ phân giải Full HD+ mang đến trải nghiệm vô cùng tốt cho người dùng.', '2021-11-13 07:36:55', '2021-11-13 07:36:55'),
(17, 18, 'iPhone 11 Pro Max 64GB', 20050000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/07/w300/iphone-11-pro-max-trang.jpg', 'Được Apple giới thiệu từ 2019, iPhone 11 Pro Max là siêu phẩm được rất nhiều người mong chờ vì có thiết kế sang trọng bậc nhất kết hợp với màn hình lớn, cấu hình mạnh mẽ. Dù đã trải qua một thời gian nhưng đến nay, iPhone 11 Pro Max cũ vẫn luôn là sự lựa chọn hàng đầu khi nghĩ đến một chiếc Flagship cũ. ', '2021-11-13 07:36:55', '2021-11-13 07:36:55'),
(18, 19, 'Điện thoại Samsung Galaxy M22', 4300000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/galaxy-m22-den.jpg', 'Samsung Galaxy M22 tiếp tục là một mẫu điện thoại tầm trung thuộc dòng Galaxy M của nhà Samsung. Điện thoại Samsung Galaxy M22 sở hữu màn hình lớn, cấu hình mạnh trong phân khúc.', '2021-11-13 07:36:55', '2021-11-13 07:36:55'),
(19, 19, 'Điện thoại Samsung Galaxy M12', 3650000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/samsung-galaxy-m12-den.jpg', 'Smartphone thuộc dòng Galaxy M vốn được ưa chuộng bởi hiệu năng vượt trội và cấu hình ấn tượng trong phân khúc giá rẻ. Chiếc smartphone này được nâng cấp mạnh mẽ không chỉ sở hữu cấu hình ấn tượng với vi xử lý 8 nhân kết hợp tần số quét 90Hz đầu tiên trong phân khúc, mà Samsung Galaxy M12 còn có dung lượng pin bền bỉ 5000mAh có hỗ trợ sạc siêu tốc và bộ 4 camera 48MP đỉnh cao.', '2021-11-13 07:36:55', '2021-11-13 07:36:55'),
(20, 19, 'Điện thoại Samsung Galaxy A03s                                                                                                                                                                                                                                 ', 3100000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/samsung-galaxy-a03s-den.jpg', 'Samsung ra mắt điện thoại Samsung Galaxy A03s với Chip 8 nhân có hiệu năng vợt trội, dung lượng Pin lên đến 5.000mAh và nhiều nâng cấp mới. Samsung Galaxy A03s hứa hẹn sẽ thủ lĩnh trong phần khúc giá rẻ, đem lại trải nghiệm tuyệt vời cho người dùng. Cụ thể Galaxy A03s có gì nổi bật mời bạn cùng theo dõi tiếp dưới đây!', '2021-11-13 07:36:55', '2021-11-13 07:36:55'),
(21, 20, 'Điện thoại Xiaomi Redmi Note 11', 4650000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/xiaomi-redmi-note-11-den.jpg', 'Điểm nâng cấp đầu tiên phải kể đến đó là cấu hình, Note 11 đã được nâng cấp lên con chip Dimensity 810, mạnh hơn nhiều so với Snapdragon 678 trên người đàn anh Redmi Note 10. Nếu trước đây, Note 10 không dành cho việc chơi game thì giờ đây, Redmi Note 11 đã thay người anh gánh vác điều đó.', '2021-11-13 07:57:53', '2021-11-13 07:57:53'),
(22, 20, 'Điện thoại Xiaomi Poco X3 Pro', 5450000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/07/w300/poco-x3-pro-xanh-2.jpg', 'Xiaomi POCO X3 Pro là sản phẩm mới ra mắt với thiết kế khá độc đáo. Điện thoại đầu tiên trên Thế Giới được trang bị con chip Qualcomm Snapdragon 860 cho ra 1 hiệu năng cực mạnh. Xiaomi POCO X3 Pro còn có loa kép âm thanh đạt chứng nhận Hi-Res Audio chất lượng cao, tốc độ truyền tải dữ liệu cực cao với bộ nhớ UFS 3.1, đa nhiệm cũng siêu mượt mà bởi RAM lớn 6GB.', '2021-11-13 07:44:54', '2021-11-13 07:44:54'),
(23, 20, 'Điện thoại Xiaomi Redmi K40 Gaming Edition', 7150000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/07/w300/redmi-k40-gaming-den-1.png', 'Xiaomi Redmi K40 Gaming Edition chạy chip Dimensity 1200 6nm đem đến hiệu năng mạnh mẽ, máy kết hợp với RAM 6GB và 8GB (tuỳ từng phiên bản) đem đến khả năng chơi game bền bỉ, đa nhiệm các tác vụ trên máy một cách mượt mà trơn tru nhất. Xiaomi Redmi K40 Gaming Edition xứng đáng là một chiếc gaming phone giá rẻ, hiệu năng cao mà người tiêu dùng nhất định phải sở hữu.', '2021-11-13 07:36:55', '2021-11-13 07:36:55'),
(24, 21, 'Điện thoại Realme V15 5G', 4750000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w300/realme-v15-5g-2.png', 'Trước đó Realme Q3 cũng đã làm hài lòng Khách hàng rất nhiều. Nhưng nhiều Khách hàng thích sự hoàn hảo vẫn chưa hài lòng với màn hình LCD trên Realme Q3, camera của Q3 chỉ 48Mp, sạc nhanh 30W. Realme V15 đã khắc phục mọi yếu điểm của Q3. Hãng đã trang bị cho Realme V15 màn hình Amoled cực đẹp. Camera của V15 được nâng cấp lên 64Mp. Đồng thời Realme V15 được trang bị sạc nhanh 50W, có thể sạc đầy Pin trong 47 phút!', '2021-11-13 07:46:56', '2021-11-13 07:46:56'),
(25, 21, 'Điện thoại Realme Q3 Pro', 5650000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w300/realme-q3-pro-3-2.jpg', 'Realme Q3 Pro chạy vi xử lý Dimensity 1100 5G hiệu năng mạnh mẽ nhưng giá bán lại vô cùng hợp lý. Realme Q3 Pro hứa hẹn đem đến hiệu năng dùng máy tốt cùng với việc đa nhiệm các tác vụ trên máy một cách trơn tru, mượt mà dành cho người tiêu dùng.', '2021-11-13 07:30:57', '2021-11-13 07:30:57'),
(26, 21, 'Điện thoại Realme Q3 Pro Carnival', 6000000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/07/w300/realme-q3-pro-carnival-den.jpg', 'Realme Q3 Pro Carnival có màn hình Super AMOLED hiển thị đẹp, tần số quét màn hình 120Hz, độ sáng cao lên tới 600 nits. Realme Q3 Pro Carnival được mệnh danh là chiếc máy có màn hình đẹp với mức giá vô cùng hợp lý.', '2021-11-13 07:05:58', '2021-11-13 07:05:58'),
(27, 22, 'Điện thoại Vivo iQOO Z1x', 4950000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w300/vivo-iqoo-z1x-1.png', 'Trong số những điện thoại giá rẻ nhất Thế Giới được tích hợp 5G thì có sự xuất hiện của Vivo iQOO Z1x. 5G đã rất phổ biến trên Thế Giới và hiện tại Viettel đã thực hiện thành công cuộc gọi 5G đầu tiên tại Việt Nam. Tốc độ kết nối mạng di động 5G của Viettel đạt 1,5-1,7Gbps - vượt xa tốc độ giới hạn lý thuyết của mạng 4G LTE là 300Mbps, tương đương tốc độ của cáp quang thương mại. Tại thành phố Dallas, bang Texas-Mỹ, Nokia đã tuyên bố mạng 5G đạt tốc độ lên tới 4,7Gbps tương đương 600MBps nghĩa là bạn có down 1 bộ phim 1GB trong chưa tới 2s. Mặc dù là điện thoại tầm trung giá rẻ nhưng Vivo iQOO Z1x vẫn khẳng định mình là một sản phẩm đón đầu công nghệ.', '2021-11-13 07:01:59', '2021-11-13 07:01:59'),
(28, 22, 'Điện thoại Vivo iQOO Z3 (Snap 768G)', 5550000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w300/vivo-iqoo-z3-3.jpg', 'Điện thoại có màn hình LCD 6,58 inches với độ phân giải Full HD+ (tỷ lệ khung hình 20: 9) cho ra 1 trải nghiệm hình ảnh sắc nét, trong trẻo. Màn hình hỗ trợ HDR10 và có tốc độ làm tươi 120 Hz cộng với tốc độ lấy mẫu cảm ứng 180 Hz giúp các thao tác vuốt, chạm với độ trễ rất thấp sẽ rất mượt mà. Cấu hình mạnh và tốc độ làm tươi cao sẽ khiến trải nghiệm chơi game vô cùng tốt', '2021-11-13 07:33:59', '2021-11-13 07:33:59'),
(29, 22, 'Điện thoại Vivo iQOO Z5 (Snap 778G)', 6950000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/09/w300/vivo-iqoo-z5-xanh.jpg', 'Máy được trang bị vi xử lý Snapdragon 778G mới nhất, hiệu năng mạnh mẽ, tiến trình 6nm, hỗ trợ mạng 5G. Ngoài ra Vivo iQOO Z5 còn được hỗ trợ bởi hai phiên bản RAM 8GB và 12GB cùng bộ nhớ trong 128GB và 256GB đem đến khả năng đa nhiệm các ứng dụng, game và khả năng lưu trữ rất tốt.', '2021-11-13 08:04:00', '2021-11-13 08:04:00'),
(30, 23, 'Điện thoại Vsmart Aris Pro', 4550000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/09/w300/vsmart-aris-pro-2.jpg', 'Điện thoại sử dụng vi xử lý Qualcomm Snapdragon 730 - một con chip tầm trung cực mạnh tới từ nhà sản xuất chip hàng đầu Thế Giới. Có thể thoải mái sử dụng các tác vụ của máy cũng như chiến được các tựa game mạnh với Snapdragon 730 và RAM 8GB. Ngoài ra máy còn được trang bị viên pin dung lượng lớn 4000mAh, đi kèm sạc nhanh 18W hỗ trợ máy hoạt động suốt cả ngày dài.', '2021-11-13 08:26:01', '2021-11-13 08:26:01'),
(31, 23, 'Điện thoại Vsmart Aris', 4050000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/09/w300/vsmart-aris-1-1.jpg', 'Vsmart Aris Series tiên phong đi đầu công nghệ bảo mật lượng tử - công nghệ bảo mật cho thế giới tương lai. Công ty hàng đầu thế giới về công nghệ lượng tử ID Quantique tuyên bố tích hợp thành công chip lượng tử mới nhất Quantis QRNG vào sản phẩm Aris Series của Vsmart. Vsmart Aris được tích hợp chip lượng tử sẽ được đảm bảo an toàn dữ liệu tuyệt đối. Ngay cả khi chiếc điện thoại này lọt vào tay hacker.', '2021-11-13 08:01:02', '2021-11-13 08:01:02'),
(32, 23, 'Điện thoại Vsmart Live', 3400000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/02/w300/vsmart-live-trang.jpg', 'Vào năm ngoái, Vsmart đã giới thiệu mẫu smartphone Vsmart Live tới người dùng với mức giá khá cao lên tới 7 triệu đồng. Nhưng tại thời điểm hiện tại, mức giá của Vsmart Live chỉ còn một nửa. Chỉ với mức giá hơn 3 triệu đồng thì mẫu smartphone thương hiệu Việt này thê hiện sẽ ra sao? Hãy cùng MobileCity vào bài đánh giá nhé!', '2021-11-13 08:45:02', '2021-11-13 08:45:02'),
(33, 24, 'Điện thoại Sony Xperia XZ2', 2550000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/sony-xperia-xz-2-hong.jpg', 'Sony XZ2 cũng là mẫu smartphone đi đầu trong việc trang bị màn hình HDR tỷ lệ 18:9, loa âm thanh nổi ở mặt trước; camera 19MP độc nhất với khả năng quay HDR. Cấu hình cũng là điểm lợi thế rất lớn của XZ2 khi máy được trang bị con chip Snapdragon 845 còn rất tốt cho đến giờ. Có thể nói trên thị trường hiện tại, khó có chiếc máy giá rẻ nào có thể đem lại trải nghiệm nghe nhìn cũng như hiệu năng sử dụng vượt qua được Sony Xperia XZ2 cũ.', '2021-11-13 08:04:04', '2021-11-13 08:04:04'),
(34, 24, 'Điện thoại Sony Xperia XZ3', 4150000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/sony-xperia-xz-3-do.png', 'Điểm nâng cấp đáng chú ý nhất trên Xperia XZ3 có lẽ chính là màn hình hiển thị. Thay vì sử dụng màn hình IPS LCD, Sony đã quyết định trang bị cho chiếc điện thoại này một màn hình OLED với kích thước lên tới 6 inch. Bên cạnh đó, Sony Xperia XZ3 cũ cũng đi kèm với thông số kĩ thuật ấn tượng, đáp ứng đầy đủ nhu cầu của người dùng.', '2021-11-13 08:43:04', '2021-11-13 08:43:04'),
(35, 24, 'Điện thoại Sony Xperia 1', 5750000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/sony-xperia-1-den.jpg', 'Cấu hình cũng là điểm mạnh của Sony Xperia 1 cũ khi máy được trang bị con chip Snapdragon 855 còn rất mạnh ở thời điểm hiện tại.', '2021-11-13 08:21:05', '2021-11-13 08:21:05'),
(36, 25, 'Điện thoại Nokia X7 2018', 5650000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/01/w300/x7-do.jpg', 'Mới đây hãng sản xuất HMD Global đã chính thức trình làng chiếc smartphone Nokia X7 chính hãng tại Trung Quốc. Trong cùng phân khúc giá tầm trung, có thể nói Nokia X7 2018 là chiếc máy đãng sở hữu nhất. Khi máy được trang bị thiết kế sang trọng, Hiệu năng mạnh mẽ với chip SD710 và camera ống kính ZEISS. Hứa hẹn thiết bị này sẽ tiếp tục gây bão trên thị trường giống như đàn anh Nokia X6', '2021-11-13 08:16:06', '2021-11-13 08:16:06'),
(37, 25, 'Điện thoại Nokia X6 2018 RAM 4GB', 3750000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/01/w300/nokia-x6-xanh-trang.jpg', 'Vào ngày 16/5 vừa qua HMD Global đã chính thức ra mắt chiếc smartphone Nokia X6 tại Trung Quốc. Đây là chiếc smartphone tai thỏ đầu tiên của Nokia và cũng là chiếc máy đáng được mong đợi khi có mức giá tầm trung nhưng lại mang trên mình nhiều ưu điểm chỉ có trên các sản phẩm cao cấp.', '2021-11-13 08:57:06', '2021-11-13 08:57:06'),
(38, 25, 'Điện thoại Nokia X5 - 2018', 3550000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/01/w300/nokia-x5-trang.jpg', 'Vào ngày 18/7 vừa qua HMD Global tiếp tục bổ sung thêm chiếc smartphone tai thỏ thứ hai vào dòng X - Series của mình, đó chính là Nokia X5 xách tay. Dù nằm trong phân khúc giá rẻ những thiết bị này vẫn sơ hữu thiết hai mặt kính sang trọng giống trên đàn anh X6 và vẫn giữ màn hình tai thỏ khá bắt mắt.', '2021-11-13 08:46:07', '2021-11-13 08:46:07'),
(39, 26, 'Điện thoại Huawei Mate 20X (5G)', 16950000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/08/w300/mate-20-x.jpg', 'Huawei Mate 20X 5G được Huawei ra mắt ở Anh. Ngoài khả năng kết nối 5G, máy còn có màn hình rộng lên đến 7.2 inch và bút stylus M-Pen hỗ trợ 4.096 cấp độ tương tác lực.', '2021-11-13 08:45:08', '2021-11-13 08:45:08'),
(40, 26, 'Điện thoại Huawei Nova 5 Pro', 10550000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/06/w300/huawei-nova-5-1.jpg', 'Huawei Nova 5 Pro là chiếc smartphone cao cấp nhất của bộ 3 Huawei Nova 5. Với thiết kế sang trọng, hiệu năng khủng, camera đáp ứng mọi nhu cầu, chắc chắn chiếc smartphone này sẽ không làm chúng ta thất vọng. Hãy cùng nhau mở hộp sản phẩm này xem có gì đặc biệt bên trong nào.', '2021-11-13 08:25:09', '2021-11-13 08:25:09'),
(41, 26, 'Điện thoại Huawei Nova 5i', 7550000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/06/w300/huawei-nova-5i-1.jpg', 'Kết hợp thời trang, phong cách, ánh sáng Huawei đã tinh tế đặt được chữ S trên mặt lưng của sản phẩm khi có ánh sáng chiều vào, hơn nữa năm nay trên Huawei Nova 5i được trang bị tận 3 màu sắc: đỏ mật ong, xanh Su Yin, đen huyền diệu. Kết cấu chói hình chữ S, xoay giữa, nở hoa thay đổi mô hình ánh sáng mơ màng .', '2021-11-13 08:32:10', '2021-11-13 08:32:10'),
(42, 27, 'Điện thoại Lenovo Legion 2 Pro', 11450000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/04/w300/lenovo-legion-2-pro-white.jpg', 'Gaming Phone sở hữu con chip mạnh mẽ nhất Thế Giới thời điểm hiện tại là Snapdragon 888 với tiến trình 5nm cho ra 1 hiệu năng khủng khiếp và tiết kiệm điện năng tuyệt vời. Lenovo Legion 2 Pro còn có đa nhiệm mượt mà với RAM khủng ở cả 2 phiên bản 12-16GB. Với siêu Gaming Phone này của Lenovo thì người dùng có thể chơi được tất cả các tựa game trên di động với cấu hình cao nhất và trải nghiệm tốt nhất.', '2021-11-13 08:42:11', '2021-11-13 08:42:11'),
(43, 27, 'Điện thoại Lenovo Legion Pro (Duel)', 13150000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/07/w300/lenovo-legion-1.jpg', 'Lenovo Legion Pro được trang bị sạc nhanh 90W đi kèm với nó là viên pin 5.000 mAh. Lenovo Legion Pro có thiết kế hai cổng USB-C: một ở cạnh bên và một ở cạnh dưới. Khi chơi game ở chế độ ngang, người dùng có thể sử dụng cổng sạc ở cạnh bên để thuận tiện nhất khi chơi game và điều đặc biệt  nhất đó chính là có thể cắm cùng lúc hai cổng sạc này để kích hoạt công nghệ sạc 90W cho phép đầy viên pin 5.000 mAh của điện thoại chỉ trong vòng 30 phút.', '2021-11-13 08:21:12', '2021-11-13 08:21:12'),
(44, 20, 'Điện thoại Xiaomi Redmi K40 Pro (K40 Pro+)', 10350000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/07/w300/redmi-k40-pro-trang-2.jpg', 'Xiaomi Redmi K40 Pro được trang bị con chip mạnh mẽ nhất của Qualcomm và cũng là 1 trong những con chip di động mạnh mẽ nhất trên Thế Giới. Đây là con chip tiến trình 5nm đầu tiên trên Thế Giới tiêu tốn vô cùng ít điện năng so với thế hệ trước chip 7nm, 8nm. Xiaomi Redmi K40 Pro cho ra 1 hiệu năng, đa nhiệm tuyệt vời với chipset mạnh mẽ nhất, RAM 12GB.', '2021-11-13 09:40:00', '2021-11-13 09:40:00'),
(45, 18, 'Điện thoại iPhone 13 Pro Max 512GB', 44150000, 0, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/iphone-13-pro-max-den.jpg', 'So sánh với người đàn anh iPhone 12 Pro Max, chúng ta có thể dễ dàng nhìn ra những ưu điểm vượt trội của iPhone 13 Pro Max. Nâng cấp đáng giá đầu tiên chính là con chip Apple A15 siêu mạnh, (775.519 điểm Antutu) so với A14 (568.674 điểm Antutu). Thứ 2 phải kể đến là màn hình Promotion 120Hz với \"tai thỏ\" nhỏ gọn hơn cho trải nghiệm khác biệt hoàn toàn màn hình 60Hz trên iPhone 12 Pro Max', '2021-11-13 09:11:02', '2021-11-13 09:11:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tokens`
--

CREATE TABLE `tokens` (
  `user_id` int(11) NOT NULL,
  `token` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tokens`
--

INSERT INTO `tokens` (`user_id`, `token`, `created_at`) VALUES
(1, '15a19713ca99e12f3aec6133857106b6', '2021-10-29 09:06:36'),
(2, '820399fac579c9679718d8946903370b', '2021-11-04 16:26:25'),
(2, 'c4164344b725a4e47f6f93ec71dca803', '2021-11-04 16:27:33'),
(2, 'eccf08afb004af2809b695de6ac2fcb5', '2021-11-04 16:28:40');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `fullname`, `email`, `phone_number`, `address`, `password`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 'Đinh Như Tân', 'nhutan2001@gmail.com', '036217847', 'Hưng Thủy, Lệ Thủy, Quảng Bình', '00b05f1e0094de50a9edada33cee5d01', 1, '2021-10-29 08:55:11', '2021-11-18 08:16:48'),
(2, 'Đinh Như Tân', 'tan.dinh1710@hcmut.edu.vn', '0776217847', 'Quảng Bình', '00b05f1e0094de50a9edada33cee5d01', 2, '2021-11-04 15:57:23', '2021-11-15 10:24:15'),
(8, 'Đinh Diệu Anh', 'dieuanh@gmail.com', '087653267', 'Việt Nam', '00b05f1e0094de50a9edada33cee5d01', 2, '2021-11-06 05:35:26', '2021-11-09 05:32:46'),
(10, 'Đinh Như Tân', 'nhutan@gmail.com', '012345432', 'ABC', '00b05f1e0094de50a9edada33cee5d01', 1, '2021-11-06 05:45:05', '2021-11-09 05:33:14'),
(12, 'Nguyễn Văn A', 'nguyenvana@gmail.com', '0123456789', 'Sài Gòn', 'e2d826e04d1af4a1ff5f7de4c8b92be6', 1, '2021-11-08 17:26:39', '2021-11-13 15:42:54'),
(13, 'Trần Văn B', 'vanb@gmail.com', '0234567532', 'Hà Nội', '00b05f1e0094de50a9edada33cee5d01', 2, '2021-11-08 17:27:25', '2021-11-08 17:27:25'),
(14, 'Đoàn Văn C', 'doanvanc@gmail.com', '0987654312', 'Đà Nẵng', '00b05f1e0094de50a9edada33cee5d01', 2, '2021-11-08 17:28:04', '2021-11-08 17:28:04'),
(15, 'Nguyễn Khánh Huyền', 'khanhhuyen@gmail.com', '0546187431', 'Quảng Bình', '00b05f1e0094de50a9edada33cee5d01', 2, '2021-11-08 17:28:38', '2021-11-08 17:28:38'),
(16, 'Hồ Văn D', 'vand@gmail.com', '012485437', 'Huế', 'e2d826e04d1af4a1ff5f7de4c8b92be6', 2, '2021-11-08 17:29:11', '2021-11-08 17:29:11'),
(17, 'Lê Thị E', 'thie@gmail.com', '0876425573', 'Đà Lạt', '00b05f1e0094de50a9edada33cee5d01', 2, '2021-11-08 17:30:00', '2021-11-08 17:30:00'),
(18, 'ABC', 'abc@gmail.com', '01234565432', 'ABC', '0b8772b96bb93b4080a4d2dc6c82506d', 2, '2021-11-09 06:52:12', '2021-11-09 06:53:02'),
(19, 'sdafasdfasdf', 'nhutan2001sdfasdf@gmail.com', '', '', 'cad8a21e82c50b6b2f0ebcaca847cf10', 2, '2021-11-09 13:37:53', '2021-11-09 13:37:53'),
(20, 'fdsafasd', 'nhu@gmail.co', '', '', 'd0521106f6ba7f9ac0a7370fb28d0ec6', 2, '2021-11-11 04:33:22', '2021-11-11 04:33:22'),
(21, 'Đinh Như Tân clone', 'tan.dinh1710clone@hcmut.edu.vn', '0362751710', 'Quảng Bình', 'cad8a21e82c50b6b2f0ebcaca847cf10', 2, '2021-11-15 09:54:57', '2021-11-17 13:41:40'),
(23, 'Đinh Như Thịnh', 'nhuthinh@gmail.com', '', '', '00b05f1e0094de50a9edada33cee5d01', 2, '2021-11-17 15:52:13', '2021-11-17 15:52:13'),
(25, 'heello', 'heeloa@gmail.com', '', '', '00b05f1e0094de50a9edada33cee5d01', 2, '2021-11-17 15:54:49', '2021-11-18 08:16:20'),
(27, 'Đinh Như Hải', 'nhuhai@gmail.com', '012345654', 'Quảng Bình', '00b05f1e0094de50a9edada33cee5d01', 1, '2021-11-17 18:32:28', '2021-11-17 18:32:38'),
(28, 'abc', 'abcd@gmail.com', '', '', '00b05f1e0094de50a9edada33cee5d01', 2, '2021-11-18 08:26:43', '2021-11-18 08:26:43');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `contact_public`
--
ALTER TABLE `contact_public`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customer_contact`
--
ALTER TABLE `customer_contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`user_id`,`token`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT cho bảng `contact_public`
--
ALTER TABLE `contact_public`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `customer_contact`
--
ALTER TABLE `customer_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `comment_ibfk_4` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `comment_ibfk_5` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
