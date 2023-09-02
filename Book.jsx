




const Book = (props) => {

    return props.name ?(
      <div>
        <h2>{props.name ? props.name : "Default Name"} </h2>
        <p>{props.year}</p>
        <p>{props.price}</p>
      </div>
    ) : null
  }

export default Book;








