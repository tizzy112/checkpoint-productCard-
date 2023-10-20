import "./Productcard.css"
const Productcard = ({ pname, price, image }) => {
    //   const { name, price, image } = props;
      return (
        <div className="card">
          <img src={image} alt="product pics" />
          <div>
            <h3 className="title">{pname}</h3>
            <p>{price}</p>
          </div>
        </div>
      );
    };
    
    export default Productcard;