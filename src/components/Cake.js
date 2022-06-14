const Cake = ({cake}) => {

    const {name, ingredients = [], rating} = cake

    return (
        <>
            <h3>Name: {name} </h3>
            <p>Ingredients: {ingredients} </p>
            <p>Rating: {rating} </p>
        </>
    );
};

export default Cake;