import { useRouter } from "next/router";


const ProductDetail =  ({ product, error }) => {
    const router = useRouter();

    if(router.isFallback) {
        return <div>Loading...</div>;
    }

    if (error || !product) {
        return (
            <div>
                <h1>Product Not Found</h1>
                <p>We Couldn't find the product you're looking for.</p>
            </div>
        );
    }

    return (
        <div className="product-detail">
            <h1>{product.image}</h1>
            <Image src={product.image} alt={product.name} style={{ widht: "300px", height:"300px"}}/>
            <p>price:${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}