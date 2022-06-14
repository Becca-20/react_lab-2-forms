const Cake = ({cake}) => {

    const {cakeName, ingredients, rating} = cake

    return (
        <>
            <h3>Name: {cakeName} </h3>
            <p>Ingredients: {ingredients} </p>
            <p>Rating: {rating} </p>
        </>
    );
};

export default Cake;