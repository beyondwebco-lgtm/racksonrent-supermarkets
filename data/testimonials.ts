export interface TestimonialSample {
  id: string;
  quote: string;
  authorTitle: string;
  category: "Supermarket Owner" | "Product Brand";
  location: string;
}

export const SAMPLE_TESTIMONIALS: TestimonialSample[] = [
  {
    id: "sample-1",
    quote: "Racks on Rent helped us turn an unused display corner inside our supermarket into a steady extra income stream while bringing our shoppers unique food and beverage products from local brands.",
    authorTitle: "FreshMart Supermarket Owner",
    category: "Supermarket Owner",
    location: "Hyderabad"
  },
  {
    id: "sample-2",
    quote: "Displaying our healthy snacks and beverages on an eye-level shelf in a busy supermarket gave us instant offline retail exposure without the massive cost of opening our own store.",
    authorTitle: "FMCG Brand Founder",
    category: "Product Brand",
    location: "Vijayawada"
  },
  {
    id: "sample-3",
    quote: "A brilliant platform bridging popular local supermarkets with growing FMCG companies looking for high-footfall display space to sell products directly to shoppers.",
    authorTitle: "Retail Store Manager",
    category: "Supermarket Owner",
    location: "Bengaluru"
  }
];


