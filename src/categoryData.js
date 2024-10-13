
import product101 from "./assets/product101.jpg"
import product102 from "./assets/product102.jpg"
import product103 from "./assets/product103.jpg"
import product104 from "./assets/product104.jpg"
import product105 from "./assets/product105.jpg"
import p106 from "./assets/product106.jpg"
import p107 from "./assets/product107.jpg"
import p201 from "./assets/p201.jpg"
import p202 from "./assets/p202.jpg"
import p203 from "./assets/p203.jpg"
import p204 from "./assets/p204.jpg"
import p301 from "./assets/p301.jpg"
import p302 from "./assets/p302.jpg"
import p303 from "./assets/p303.jpg"
import p304 from "./assets/p304.jpg"
  // Categories and their corresponding images
  const categories = [
    { 
      name: 'Outdoor', 
      images: {
        leftImage: [product101,product102,product104,product103],
        rightImage: [product105,p106,p107,product103]
      }
    },
    { 
      name: 'Studio', 
      images: {
        leftImage: [p201,p202,p203,p204],
        rightImage: [p202,p201,p203,p204]
      }
    },
    { 
      name: 'With Human', 
      images: {
        leftImage: [p301,p302,p303,p304],
        rightImage: [p301,p302,p303,p304]
      }
    },
    { 
      name: 'Try On', 
      images: {
        leftImage: [product101,product102,product104,product103],
        rightImage: [product105,p106,p107,product103]
      }
    },
    { 
      name: 'Character Consistency', 
      images: {
        leftImage: [p201,p202,p203,p204],
        rightImage: [p202,p201,p203,p204]
      }
    },
  ];
  export default categories