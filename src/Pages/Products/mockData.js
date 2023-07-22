import entertainment from "../../Assets/Images/entertainment.jpg";
import entertainment1 from "../../Assets/Images/entertainment1.jpg";
import entertainment2 from "../../Assets/Images/entertainment2.jpg";
import entertainment3 from "../../Assets/Images/entertainment3.jpg";
import entertainment4 from "../../Assets/Images/entertainment4.jpg";
import armchair from "../../Assets/Images/armchair.jpg";
import albanyTable from "../../Assets/Images/albanyTable.jpg";
import emperorBed from "../../Assets/Images/emperorBed.jpg";
import diningTable from "../../Assets/Images/diningTable.jpg";
import modernBookshelf from "../../Assets/Images/modernBookshelf.jpg";
export const productData = {
  productType: [
    { id: "1", type: "all", title: "All" },
    { id: "2", type: "office", title: "Office" },
    { id: "3", type: "livingroom", title: "Living Room" },
    { id: "4", type: "kitchen", title: "Kitchen" },
    { id: "5", type: "bedroom", title: "Bedroom" },
    { id: "6", type: "dining", title: "Dining" },
    { id: "7", type: "kids", title: "Kids" },
  ],
  products: [
    {
      id: "1",
      alt: "Entertainment Center",
      url: entertainment,
      moreurl: [entertainment1, entertainment2, entertainment3, entertainment4],
      title: "Entertainment Center",
      price: 599.99,
      stocks: "In Stock",
      brand: "Caressa",
      sku: "RecNZ0koOqEmilmoz",
      type: "livingroom",
    },
    {
      id: "2",
      alt: "Suede Armchair",
      url: armchair,
      moreurl: [entertainment1, entertainment2, entertainment3, entertainment4],
      title: "Suede Armchair",
      price: 159.99,
      stocks: "In Stock",
      brand: "Caressa",
      sku: "RecNZ0koOqEmilmoz",
      type: "office",
    },
    {
      id: "3",
      alt: "Albany Table",
      url: albanyTable,
      moreurl: [entertainment1, entertainment2, entertainment3, entertainment4],
      title: "Albany Table",
      price: 3099.99,
      stocks: "In Stock",
      brand: "Caressa",
      sku: "RecNZ0koOqEmilmoz",
      type: "kitchen",
    },
    {
      id: "4",
      alt: "Emperor Bed",
      url: emperorBed,
      moreurl: [entertainment1, entertainment2, entertainment3, entertainment4],
      title: "Emperor Bed",
      price: 239.99,
      stocks: "In Stock",
      brand: "Caressa",
      sku: "RecNZ0koOqEmilmoz",
      type: "bedroom",
    },
    {
      id: "5",
      alt: "Dining Table",
      url: diningTable,
      moreurl: [entertainment1, entertainment2, entertainment3, entertainment4],
      title: "Dining Table",
      price: 429.99,
      stocks: "In Stock",
      brand: "Caressa",
      sku: "RecNZ0koOqEmilmoz",
      type: "dining",
    },
    {
      id: "6",
      alt: "Modern Bookshelf",
      url: modernBookshelf,
      moreurl: [entertainment1, entertainment2, entertainment3, entertainment4],
      title: "Modern Bookshelf",
      price: 319.99,
      stocks: "In Stock",
      brand: "Caressa",
      sku: "RecNZ0koOqEmilmoz",
      type: "kids",
    },
  ],
  featuredProducts: [
    {
      id: "1",
      alt: "product",
      url: entertainment,
      moreurl: [entertainment1, entertainment2, entertainment3, entertainment4],
      title: "Entertainment Center",
      price: 599.99,
      stocks: "In Stock",
      brand: "Caressa",
      sku: "RecNZ0koOqEmilmoz",
    },
    {
      id: "4",
      alt: "Emperor Bed",
      url: emperorBed,
      moreurl: [entertainment1, entertainment2, entertainment3, entertainment4],
      title: "Emperor Bed",
      price: 239.99,
      stocks: "In Stock",
      brand: "Caressa",
      sku: "RecNZ0koOqEmilmoz",
      type: "bedroom",
    },
    {
      id: "6",
      alt: "Modern Bookshelf",
      url: modernBookshelf,
      moreurl: [entertainment1, entertainment2, entertainment3, entertainment4],
      title: "Modern Bookshelf",
      price: 319.99,
      stocks: "In Stock",
      brand: "Caressa",
      sku: "RecNZ0koOqEmilmoz",
      type: "kids",
    },
  ],
  selectedProducts: [],
  cartData: [],
  users: [],
  user: "",
};