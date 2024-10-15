import React from "react";
import Card from "./components/UI/Card";
import { Klassaican, Newican, Skitca } from "./assets/icon";

const products = [
  {
    img: "https://s3-alpha-sig.figma.com/img/7f01/d61d/1b55b320007b55831d3a399939e9d770?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RV0xqvbXDEkf2QWgkA9f6Ko-zVsWP1jItFutrOkuee7VABN21wDO69wx7f2vYK4gz9R-3dMTiOVZ7sHmsHY17EOiFw0rPbYFRaGaiXPMzcIBfLwyMhQFjwW7EMOud5HNgh8ipb~4c9QImmeQYfAzm6XIGniHZodSRx94fmhlvEMvmWJvxnhhqSjmXCrQuIAmXHnwiTin35FUD-Ykqs~XUF57RGcFzBgWhHN8CAufh8V8ZfKSBcV1HNg~J7ohe0TvMnruiQ8KhQ2ra1HFs5L5PCdHSNG3rRQ2-E5DqSdJy9RDgd-aOO6Nd2XEGlz6HKY1zvGj2HxBBflmSamCObYK9w__",
    text: "Смартфон Apple iPhone 13 256gb синий 9(MLP3RU... ",
    discount: Skitca,
    discountClas:Klassaican,
    discountNew:Newican,



    title: 1,
    reiting: 4.1,
    reviews: 20,


    newPrice: "1000 KGS",
    oldPrice: "1200 KGS",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/7f01/d61d/1b55b320007b55831d3a399939e9d770?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RV0xqvbXDEkf2QWgkA9f6Ko-zVsWP1jItFutrOkuee7VABN21wDO69wx7f2vYK4gz9R-3dMTiOVZ7sHmsHY17EOiFw0rPbYFRaGaiXPMzcIBfLwyMhQFjwW7EMOud5HNgh8ipb~4c9QImmeQYfAzm6XIGniHZodSRx94fmhlvEMvmWJvxnhhqSjmXCrQuIAmXHnwiTin35FUD-Ykqs~XUF57RGcFzBgWhHN8CAufh8V8ZfKSBcV1HNg~J7ohe0TvMnruiQ8KhQ2ra1HFs5L5PCdHSNG3rRQ2-E5DqSdJy9RDgd-aOO6Nd2XEGlz6HKY1zvGj2HxBBflmSamCObYK9w__",
    text: "Смартфон Apple iPhone 13 256gb синий 9(MLP3RU...",
    discount: Skitca,
    discountClas:Klassaican,
    discountNew:Newican,


    title: 2,
    reiting: 4.5,
    reviews: 45,
    newPrice: "900 KGS",
    oldPrice: "1050 KGS",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/7f01/d61d/1b55b320007b55831d3a399939e9d770?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RV0xqvbXDEkf2QWgkA9f6Ko-zVsWP1jItFutrOkuee7VABN21wDO69wx7f2vYK4gz9R-3dMTiOVZ7sHmsHY17EOiFw0rPbYFRaGaiXPMzcIBfLwyMhQFjwW7EMOud5HNgh8ipb~4c9QImmeQYfAzm6XIGniHZodSRx94fmhlvEMvmWJvxnhhqSjmXCrQuIAmXHnwiTin35FUD-Ykqs~XUF57RGcFzBgWhHN8CAufh8V8ZfKSBcV1HNg~J7ohe0TvMnruiQ8KhQ2ra1HFs5L5PCdHSNG3rRQ2-E5DqSdJy9RDgd-aOO6Nd2XEGlz6HKY1zvGj2HxBBflmSamCObYK9w__",
    text: "Смартфон Apple iPhone 13 256gb синий 9(MLP3RU...",
    discount: Skitca,
    discountClas:Klassaican,
    discountNew:Newican,


    title: 10,
    reiting: 2,
    reviews: 10,
    newPrice: "800 KGS",
    oldPrice: "1000 KGS",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Наши товары</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {/* Отображение всех карточек товаров */}
        {products.map((product, index) => (
          <Card
            key={index}
            img={product.img}
            text={product.text}
            discountNew={product.discountNew}
            discount={product.discount}
            discountClas={product.discountClas}
            title={product.title}
            reiting={product.reiting}
            reviews={product.reviews}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
