const Biscuit = ({biscuit}) => {

    const {biscuitName, ingredients, rating} = biscuit

    return (
        <>
            <h3>Name: {biscuitName} </h3>
            <p>Ingredients: {ingredients} </p>
            <p>Rating: {rating} </p>
        </>
    );
};

export default Biscuit;