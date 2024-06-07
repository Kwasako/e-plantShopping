const plantsArray = [
    {
      category: "Air Purifying",
      plants: [
        {
          id: 1,
          name: "Snake plant",
          imageUrl: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          price: 70,
          description: "A hardy, low-maintenance houseplant with upright, sword-shaped leaves."
        },
        {
          id: 2,
          name: "Spider plant",
          imageUrl: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_960_720.jpg",
          price: 90,
          description: "A houseplant with arching green and white-striped leaves and small offshoots."
        },
        {
          id: 3,
          name: "Aglaonema",
          imageUrl: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
          price: 69,
          description: "A versatile and low-maintenance indoor plant with striking foliage patterns."
        },
        {
          id: 4,
          name: "Succulents",
          imageUrl: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
          price: 69,
          description: "Fleshy leaves and ability to thrive in arid conditions."
        },
        {
          id: 5,
          name: "Cast iron plant",
          imageUrl: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
          price: 89,
          description: "A resilient and low-maintenance foliage plant."
        },
        {
          id: 6,
          name: "Pothos",
          imageUrl: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          price: 75,
          description: "Perfect for indoor spaces."
        },
        {
          id: 7,
          name: "ZZ plant",
          imageUrl: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 99,
          description: "Low-maintenance, dark green leaves, perfect for beginners."
        },
        {
          id: 8,
          name: "Aloe vera",
          imageUrl: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          price: 160,
          description: "Soothing, healing gel used in skincare and medicine."
        },
        {
          id: 9,
          name: "Rubber plant",
          imageUrl: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          price: 145,
          description: "Dark green leaves and easy care requirements."
        },
        {
          id: 10,
          name: "Boston fern",
          imageUrl: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          price: 120,
          description: "Vibrant green fronds."
        },
        {
          id: 11,
          name: "Peace lily",
          imageUrl: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          price: 150,
          description: "Ability to thrive in low light."
        }
      ]
    },
    {
      category: "Aromatic Fragrance",
      plants: [
        {
          id: 12,
          name: "Calendula",
          imageUrl: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
          price: 150,
          description: "Soothing properties."
        },
        {
          id: 13,
          name: "Chamomile",
          imageUrl: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
          price: 170,
          description: "Calming properties in teas and remedies."
        },
        {
          id: 14,
          name: "Peppermint",
          imageUrl: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
          price: 199,
          description: "Refreshing flavor and medicinal properties."
        },
        {
          id: 15,
          name: "Echinacea",
          imageUrl: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
          price: 189,
          description: "Commonly used to boost the immune system."
        },
        {
          id: 16,
          name: "Catnip",
          imageUrl: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
          price: 120,
          description: "Euphoria-inducing effects on cats."
        },
        {
          id: 17,
          name: "Basil",
          imageUrl: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
          price: 175,
          description: "Commonly used in cooking."
        },
        {
          id: 18,
          name: "Marigold",
          imageUrl: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
          price: 160,
          description: "Cheerful blooms and pest-repelling properties."
        },
        {
          id: 19,
          name: "Lemon balm",
          imageUrl: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          price: 180,
          description: "Used in culinary and medicinal applications."
        },
        {
          id: 20,
          name: "Mint",
          imageUrl: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          price: 100,
          description: "Refreshing flavor and aroma."
        },
        {
          id: 21,
          name: "Rosemary",
          imageUrl: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          price: 210,
          description: "Used in cooking and traditional medicine."
        },
        {
          id: 22,
          name: "Jasmine",
          imageUrl: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 130,
          description: "A fragrant, known for its white or yellow star-shaped blooms."
        },
        {
          id: 23,
          name: "Lavender",
          imageUrl: "https://static.vecteezy.com/system/resources/previews/002/965/261/non_2x/close-up-jasmine-flower-in-a-garden-beautiful-jasmine-white-flowers-free-photo.jpg",
          price: 155,
          description: "Soothing aroma and medicinal properties."
        }
      ]
    }
  ];
  




export default plantsArray