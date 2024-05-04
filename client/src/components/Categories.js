import { Link ,useNavigate} from "react-router-dom";
import './Header1.css'
import categories from "./CategoriesList";
import './Categories.css';
function Categories (props){

    return (
      <div className='cat-container-web1'>
       
            <div>
            <span className='pr-3'>APPLY FILTERS</span>
                { categories && categories.length>0 &&
                categories.map((item,index)=>{
                    return(
                        <span onClick={()=>props.handleCategory && props.handleCategory(item)}key={index}className='category-web1'>{item}</span>
                    )
                })}
            </div>
      </div>
        
    )
}
export default Categories;