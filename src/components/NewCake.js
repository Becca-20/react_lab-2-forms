const NewCake = ({addNewCake}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newCake = {
            cakeName: cakeName,
            ingredients: ingredients,
            rating: rating
        }

        setCakeName("");
        setIngredients("");
        setRating(0);
        addNewCake(newCake);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>

                <label htmlFor="cakeName">Cake Name: </label>
                <input
                    type="text"
                    id="cakeName"
                    value={cakeName}
                    onChange={(event) => setCakeName(event.target.value)}
                />

                <label htmlFor="ingredients">Ingredients: </label>
                <input
                    type="text"
                    id="ingredients"
                    value={ingredients}
                    onChange={(event) => setIngredients(event.target.value)}
                />

                <label htmlFor="rating">Rating: </label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                />
                <input type="submit" value="Add new cake"/>
            </form>
        </>
    )
}

export default NewCake;