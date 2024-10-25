import React from "react";
import AdminReview from "./components/UI/admin/AdminReview";

const App = () => {
  const reviews = [
    {
      id: 1,
      productName: 'Asus',
      phote: 'https://s3-alpha-sig.figma.com/img/f94a/bea0/956e5acd322ff3bad53fbbba2de488ca?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k29nSZM46ymd9w7Sp~NmR6bSIfiAoqjv2Hcoh0WQAn4XdeFSmgbQxG98tVu4SQRiT-9u8XSmzQCOEyCF6ro6QxKfO~G-oZoz5upnscs~LiJHnAqLVd1Ur-F-VVilvM8fWb4RppnquAY2WugE69tOwVB-1cXhM0yfW~e0rKwTDG9YIC~Dah1URoZek48ev3FvvZ0tIOQ4Jxir8uq9Bk~9be18zhIj7cW0A7NkCp1DCkoJ79UZogLv3-SSiuxKMbNLv2SPlT1UM6shpyC-r7IsgiRq8GFYKQR9XsdpVGwomDCupauL6uKfOux3hwiG~Q2vTY1meXqaxi1idl67HGNupA__',
      model: 'Model 1212121212',
      comment: 'Эссуптан, красавчик!',
      rating: 4,
      user: 'Aдыл Бакытов',
      userEmail: 'Adyl@mail.com',
      date: '20.06.22 - 14:15'
    },
    {
      id: 2,
      productName: 'Asus',
      phote: 'https://s3-alpha-sig.figma.com/img/f94a/bea0/956e5acd322ff3bad53fbbba2de488ca?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k29nSZM46ymd9w7Sp~NmR6bSIfiAoqjv2Hcoh0WQAn4XdeFSmgbQxG98tVu4SQRiT-9u8XSmzQCOEyCF6ro6QxKfO~G-oZoz5upnscs~LiJHnAqLVd1Ur-F-VVilvM8fWb4RppnquAY2WugE69tOwVB-1cXhM0yfW~e0rKwTDG9YIC~Dah1URoZek48ev3FvvZ0tIOQ4Jxir8uq9Bk~9be18zhIj7cW0A7NkCp1DCkoJ79UZogLv3-SSiuxKMbNLv2SPlT1UM6shpyC-r7IsgiRq8GFYKQR9XsdpVGwomDCupauL6uKfOux3hwiG~Q2vTY1meXqaxi1idl67HGNupA__',
      model: 'Model 1212121212',
      comment: 'Эссуптан, красавчик!',
      rating: 5,
      user: 'Адыл Бакытов',
      userEmail: 'Adyl@mail.com',
      date: '20.06.22 - 14:15'
    },
    // Добавьте другие отзывы
  ];

  return (
    <div>
      <h1>Отзывы</h1>
      <AdminReview reviews={reviews} /> {/* Передача массива отзывов */}
    </div>
  );
};

export default App;
