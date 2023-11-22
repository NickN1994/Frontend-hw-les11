function Product(props) {
    return (
        <>
            <article>
                <span>{props.label}</span>
                <img src={props.image} alt={props.alt}/>
                <p>{props.title}</p>
                <h4>€{props.price},-</h4>
            </article>
        </>
    )
}

export default Product;