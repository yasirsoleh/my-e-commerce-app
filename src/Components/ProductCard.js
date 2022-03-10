function ProductCard(props) {
  return ( 
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={props.img_url} alt={props.title} className="place-self-center"></img></figure>
      <div className="card-body justify-end">
        <h2 className="card-title">{props.title}</h2>
        {/* <p>{props.description}</p> */}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
   );
}

export default ProductCard;