export const fetchCars = async (filters) => {
    const mockData = [
      { id: 1, name: "Toyota Camry", brand: "Toyota", price: 25000, fuel: "Petrol", seats: 5, image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/11344/1733916451269/front-left-side-47.jpg?impolicy=resize&imwidth=420" },
      { id: 2, name: "Honda Civic", brand: "Honda", price: 22000, fuel: "Petrol", seats: 5, image: "https://global.honda/content/dam/site/global-en/newsroom-new/cq_img/worldnews/2016/4161028/01.jpg" },
      { id: 3, name: "Ford F-150", brand: "Ford", price: 30000, fuel: "Diesel", seats: 5, image: "https://t3.ftcdn.net/jpg/03/74/16/54/360_F_374165471_f5Q76rTDES77pKdeH0VKDRt9cRjyaPT6.jpg" },
      { id: 4, name: "Tesla Model 3", brand: "Tesla", price: 40000, fuel: "Electric", seats: 5, image: "https://www.financialexpress.com/wp-content/uploads/2025/02/tesla-model-3-india.jpg" },
      { id: 5, name: "Chevrolet Malibu", brand: "Chevrolet", price: 24000, fuel: "Petrol", seats: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4C6XmLxWTiteNPMt2ljYKgdmJW1IVBXlklw&s" },
      { id: 6, name: "BMW 3 Series", brand: "BMW", price: 35000, fuel: "Petrol", seats: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4ZQEq4y40XXLQASznhZl_2S3V4kSn2r_Uw&s" },
      { id: 7, name: "Audi A4", brand: "Audi", price: 37000, fuel: "Diesel", seats: 5, image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/03/601501-32.jpg" },
      { id: 8, name: "Hyundai Elantra", brand: "Hyundai", price: 21000, fuel: "Petrol", seats: 5, image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Elantra/7888/1636975889286/front-left-side-47.jpg" },
      { id: 9, name: "Kia Seltos", brand: "Kia", price: 23000, fuel: "Diesel", seats: 5, image: "https://imgd.aeplcdn.com/664x374/n/6i7l3cb_1726635.jpg?q=80" },
      { id: 10, name: "Nissan Altima", brand: "Nissan", price: 26000, fuel: "Petrol", seats: 5, image: "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?vehicle=8_L34&resp=png&bkgnd=transparent&pov=E01&w=5781&h=5370&x=1719&y=1481&height=250&width=660&paint=KH3&fabric=G&brand=nisnna&sa=1_B,2_DB,4_A,5_L,6_H,7_Z,11_D,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2025&imwidth=3840" },
      { id: 11, name: "Jeep Compass", brand: "Jeep", price: 28000, fuel: "Diesel", seats: 5, image: "https://media.zigcdn.com/media/model/2024/Aug/jeep-compass_600x400.jpg" },
      { id: 12, name: "Volkswagen Jetta", brand: "Volkswagen", price: 27000, fuel: "Petrol", seats: 5, image: "https://imgd.aeplcdn.com/1920x1080/cw/ec/17725/Volkswagen-Jetta-Right-Front-Three-Quarter-55817.jpg?v=201711021421&q=80&q=80" },
      { id: 13, name: "Skoda Octavia", brand: "Skoda", price: 29000, fuel: "Diesel", seats: 5, image: "https://media.zigcdn.com/media/content/2024/Feb/cover_65cc9d807a6b8.jpg?tr=w-1200" },
      { id: 14, name: "Mercedes C-Class", brand: "Mercedes", price: 42000, fuel: "Petrol", seats: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSLiZpS79Zz3WvK36Zal8fL3B9NIXnAKBcg&s" },
      { id: 15, name: "Lexus ES", brand: "Lexus", price: 41000, fuel: "Petrol", seats: 5, image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/35351/es-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80" },
      { id: 16, name: "Mazda 6", brand: "Mazda", price: 25000, fuel: "Petrol", seats: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZkcb0Xv4ND9zAhprghdgHiDCakAHiPgVVdw&s" },
      { id: 17, name: "Subaru Impreza", brand: "Subaru", price: 22000, fuel: "Petrol", seats: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJCgZgsoGKbBFxjMfdAKj-TqR4-Nyrh1VZvLx1jL49v0bz6XvCflAGeS-oFef94GErz8&usqp=CAU" },
      { id: 18, name: "Volvo S60", brand: "Volvo", price: 38000, fuel: "Petrol", seats: 5, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/27032/s60-exterior-right-front-three-quarter-3.jpeg?q=80" },
      { id: 19, name: "Porsche Panamera", brand: "Porsche", price: 90000, fuel: "Petrol", seats: 5, image: "https://imgd.aeplcdn.com/642x336/n/cw/ec/165641/panamera-exterior-right-front-three-quarter.jpeg?isig=0&q=80" },
      { id: 20, name: "Jaguar XE", brand: "Jaguar", price: 45000, fuel: "Petrol", seats: 5, image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/43356/jaguar-xe-front-right-three-quarter-7.jpeg?q=80&q=80" }
    ];
  
    return mockData.filter(car => {
      return (
        (!filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
        (!filters.fuel || car.fuel === filters.fuel) &&
        (!filters.minPrice || car.price >= filters.minPrice) &&
        (!filters.maxPrice || car.price <= filters.maxPrice)
      );
    });
  };