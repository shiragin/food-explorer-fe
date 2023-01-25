import { useParams } from "react-router";



export default function RecipePage() {

    const { id } = useParams();
console.log(id);

    return(
        <div>
            helooooooooooooo {id}

        </div>
    )
    
}