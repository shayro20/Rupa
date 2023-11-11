import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import pic from "../public/demopic.jpg";
import { useState } from "react";
console.log(process.env.MONGODB_URI);

const inter = Inter({ subsets: ["latin"] });

function CatalogPage() {
  return (
    <>
      <div className="catalog-container">
        <div className="grid-container ">
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
            <Link href="/catalog/item">details</Link>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 1</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
          <div className="catalog-item-container">
            <Image className="item" src={pic} alt="demo image" />
            <h3>item 2</h3>
            <h3>price $</h3>
            <h3>available colors</h3>
            <div>
              <span>blue </span>
              <span>red </span>
              <span>orange </span>
              <span>green </span>
            </div>
            <h3>
              sizes
              <span> XS,S,M,L,XL</span>
            </h3>
            <button>add to cart</button>
            <button>buy now</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CatalogPage;
