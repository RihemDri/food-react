import { useNavigate } from "react-router-dom";

function Item({data}) {
    console.log(data)
    let navigate = useNavigate();
    return (<>
    {

/*we check if the data is empty  */
(!data)?"Not Found":data.map(item=>
    {
        return(
            <div className="card" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
            <img src={item.strMealThumb} alt="" />
            conso
            <h3>{item.strMeal}</h3>
        
        
         </div>

        )

    })

    }
    
    
    </>  );
}

export default Item;