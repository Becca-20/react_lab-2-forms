const CakeList = ({listOfCakes}) => {
    
    const cakeCompontents = listOfCakes.map((cake, index) => {
        return <Cake cake={cake} key={index}/>
    });

    return (
        <>
            {cakeCompontents}
        </>
    );
};

export default CakeList;