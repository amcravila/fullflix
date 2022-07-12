import { Footer } from "../componentes/Footer";
import { Cards } from "../componentes/Cards";

function Inicial(){
    return(
        <div>
            <div>Div da imagem</div>
            <div>
                <h2>Filmes Populares (div dos cards)</h2>
                <Cards/>
            </div>
            <Footer/>
        </div>
    )
};

export default Inicial;