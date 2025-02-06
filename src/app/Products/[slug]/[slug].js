"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "@sanity/client";
import Image from "next/image";


const sanity = createClient({
  projectId: "2ft3n435",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query; 

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && slug.current == $slug][0] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url
        }`;

        const data = await sanity.fetch(query, { slug });
        console.log("Fetched Product:", data);
        setProduct(data);
      } catch (error) {
        console.error("Error Fetching Product:", error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <Image
        src={product.imageUrl || "/fallback.jpg"}
        alt={product.title}
        width={500}
        height={500}
        className="rounded-md"
      />
      <p className="mt-4 text-lg">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
    </div>
  );
};

export default ProductDetails;
