import { Product } from './Product'
import { Promotion } from './Promotion'
import { Notice } from './Notice'

export const DummyProducts: Map<string, Product[]> = new Map([
    ["1", [
        new Product(1, "2019 BTS 5TH MUSTER DVD", "description", "", true, true, false, 52000, 1, "DVD", ""),
        new Product(2, "2019 BTS 5TH MUSTER BLU-RAY", "description", "", true, true, false, 66000, 1, "DVD", ""),
        new Product(3, "2020 Season's Greetings", "description", "", true, false, false, 42000, 1, "DVD", "SEASON'S GREETINGS"),
        new Product(4, "2020 Wall Calandar", "description", "", true, false, false, 20000, 1, "DVD", "SEASON'S GREETINGS"),
        new Product(5, "2020 Winter Package", "description", "", true, false, true, 43000, 1, "DVD", ""),
        new Product(37, "BTS 4th MUSTER", "description", "", true, false, true, 43000, 1, "DVD", ""),
        new Product(38, "BTS WORLD TOUR NEWYORK", "description", "", true, false, true, 43000, 1, "DVD", ""),
        new Product(39, "BTS WORLD TOUR EUROPE", "description", "", true, false, true, 43000, 1, "DVD", ""),
        new Product(6, "20 Baby Memo Pad", "description", "", false, false, false, 7000, 1, "COLLAB", "BT21"),
        new Product(7, "20 Baby Mini Flat Body Cushion", "description", "", false, false, false, 19000, 1, "COLLAB", "BT21"),
        new Product(8, "20 Baby Bag Charm(Body)", "description", "", false, false, true, 13000, 1, "COLLAB", "BT21"),
        new Product(9, "ON - 7 Vinyl", "description", "", false, false, false, 9800, 1, "ALBUM", ""),
        new Product(10, "Map Of The Soul : 7", "description", "", false, false, false, 19400, 1, "ALBUM", ""),
        new Product(11, "GLOBAL OFFICIAL FANCLUB ARMY MEMBERSHIP", "description", "", true, false, false, 33000, 1, "MEMBERSHIP", ""),
        new Product(12, "BWL Card_Ver.2", "description", "", false, false, true, 3000, 1, "POP-UP", "BWL"),
        new Product(13, "BWL iPhone Case(Hard)_iPhone X/Xs", "description", "", false, false, true, 20000, 1, "POP-UP", "BWL"),
        new Product(14, "HOME L Holder_Set", "description", "", false, false, true, 15000, 1, "POP-UP", "HOME"),
        new Product(15, "BTS Official Light Stick Ver.3", "description", "", false, false, true, 33000, 1, "MD", "OFFICIAL MD"),
        new Product(16, "CD Coaster", "description", "", true, false, false, 10000, 1, "MD", "ARMYPEDIA"),
        new Product(17, "Acrylic Keyring", "description", "", false, false, true, 15000, 1, "MD", "ARMYPEDIA"),
        new Product(18, "Puzzle", "description", "", false, false, true, 26000, 1, "MD", "ARMYPEDIA"),
        new Product(19, "PostCard", "description", "", false, false, true, 9000, 1, "MD", "ARMYPEDIA"),
        new Product(20, "Book1", "description", "", false, false, false, 22300, 1, "BOOK", ""),
        new Product(21, "Book2", "description", "", false, false, false, 20400, 1, "BOOK", ""),
        new Product(22, "Book3", "description", "", false, false, false, 22300, 1, "BOOK", ""),
        new Product(23, "Book4", "description", "", false, false, false, 15000, 1, "BOOK", ""),
        new Product(24, "Toy1", "description", "", false, false, true, 360000, 1, "ART TOY", ""),
        new Product(25, "Toy2", "description", "", false, false, true, 54000, 1, "ART TOY", ""),
        new Product(26, "Toy3", "description", "", false, false, true, 54000, 1, "ART TOY", ""),
    ]],
    ["2", [
        new Product(27, "The First Photobook H:OUR", "description", "", true, false, false, 38000, 2, "DVD", ""),
        new Product(28, "2020 Season's Greetings", "description", "", false, false, false, 38000, 1, "DVD", ""),
        new Product(29, "2020 Season's Greetings", "description", "", true, false, false, 42000, 1, "DVD", "SEASON'S GREETINGS"),
        new Product(30, "2020 Wall Calandar", "description", "", true, false, false, 20000, 1, "DVD", "SEASON'S GREETINGS"),
        new Product(31, "2020 Winter Package", "description", "", true, false, true, 43000, 1, "DVD", ""),
    ]],
    ["3", [
        new Product(32, "The First Photobook H:OUR", "description", "", true, false, false, 38000, 2, "DVD", ""),
        new Product(33, "2020 Season's Greetings", "description", "", false, false, false, 38000, 1, "DVD", ""),
        new Product(34, "2020 Season's Greetings", "description", "", true, false, false, 42000, 1, "DVD", "SEASON'S GREETINGS"),
        new Product(35, "2020 Wall Calandar", "description", "", true, false, false, 20000, 1, "DVD", "SEASON'S GREETINGS"),
        new Product(36, "2020 Winter Package", "description", "", true, false, true, 43000, 1, "DVD", ""),
    ]]
])

export const DummyPromotions: Map<string, Promotion[]> = new Map([
    ["1", [
        new Promotion("BT21 신규 상품 오픈", "한층 더 귀여워진 BT21로 새로운 일상을 준비하세요", "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/promotions%2Fpromotion_bts_1.png?alt=media&token=a0576cbf-d6e2-497b-ac0b-d1cd8d85f3b5", 1),
        new Promotion("5TH MUSTER [MAGIC SHOP]", "기적 같은 시간을 기록한 DvD/BLU-RAY 예약 판매", "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/promotions%2Fpromotion_bts_2.png?alt=media&token=a7262439-5b64-42e7-88da-d8c49f2c3906", 1),
        new Promotion("MAP OF THE SOUL : 7 발매", "온전한 나를 찾은 방탄소년단의 7년", "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/promotions%2Fpromotion_bts_3.png?alt=media&token=8be85356-d7ea-4956-9779-b83453b4533f", 1),
        new Promotion("BTS GLOBAL OFFICIAL FANCLUB ARMY MEMBERSHIP", "BTS 공식 멤버십 가입은 위버스샵에서!", "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/promotions%2Fpromotion_bts_4.png?alt=media&token=7f5d4684-399a-4f4e-a2ff-6ce61f49d055", 1),
    ]],
    ["2", [
        new Promotion("Promotion1", "description", "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/promotions%2Fpromotion_bts_4.png?alt=media&token=7f5d4684-399a-4f4e-a2ff-6ce61f49d055", 1),
        new Promotion("Promotion2", "description", "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/promotions%2Fpromotion_bts_4.png?alt=media&token=7f5d4684-399a-4f4e-a2ff-6ce61f49d055", 1),
    ]],
    ["3", [
        new Promotion("Promotion", "description", "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/promotions%2Fpromotion_bts_4.png?alt=media&token=7f5d4684-399a-4f4e-a2ff-6ce61f49d055", 1),
    ]]
])

export const DummyNotice = [
    new Notice("[안내] BTS GLOBAL OFFICIAL FANCLUB ARMY MEMBERSHIP KIT 배송 연기 안내", (Date.now() - 1 * 1000 * 60 * 60 * 24)),
    new Notice("BT21 신규 상품 판매 안내", (Date.now() - 2 * 1000 * 60 * 60 * 24)),
    new Notice("BTS MAP OF THE SOUL TOUR - EUROPE ticket sale will be rescheduled", (Date.now() - 3 * 1000 * 60 * 60 * 24)),
]