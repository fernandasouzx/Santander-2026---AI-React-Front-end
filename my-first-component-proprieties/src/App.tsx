import './App.css'
import { Recipe } from './components/Recipe'
import RefreshSparklingMintImage from './assets/recipes/RefreshSparklingMint.png'
import BlondeVanilaLatteImage from './assets/recipes/BlondeVanillaLatte.png'
import VanillaLatteImage from './assets/recipes/VanillaLatte.png'
import CaffeAmericanoImage from './assets/recipes/CaffeAmericano.png'
import CaffeMochaImage from './assets/recipes/CaffeMocha.png'
import LatteMacchiatoImage from './assets/recipes/LatteMacchiato.png'
import SpicedExpressoFlatWhiteImage from './assets/recipes/SpicedExpressoFlatWhite.png'
import IcedCaramelMacchiatoImage from './assets/recipes/IcedCaramelMacchiato.png'
import AffogatoImage from './assets/recipes/Affogato.png'
import CappuccinoImage from './assets/recipes/Cappuccino.png'
import IcedLatteImage from './assets/recipes/IcedLatte.png'

function App() {
  return (
    <>
      <h1 className='title'>Receitas Cafés StarBucks</h1>
      <div className='recipe-list'>
        <Recipe
          imageSrc={RefreshSparklingMintImage}
          coffee={{
            name: 'Sparkling Mint Expresso',
            description: 'Gelado e Refrescante',
            preparationTime: 3
          }}
        />

        <Recipe
          imageSrc={BlondeVanilaLatteImage}
          coffee={{
            name: 'Blonde Vanilla Latte',
            description: 'Impactante e Cremoso',
            preparationTime: 2
          }}
        />

        <Recipe
          imageSrc={VanillaLatteImage}
          coffee={{
            name: 'Vanilla Latte',
            description: 'Um clássico com um toque especial',
            preparationTime: 3
          }}
        />

        <Recipe
          imageSrc={CaffeAmericanoImage}
          coffee={{
            name: 'Caffe Americano',
            description: 'Um clássico com um toque especial',
            preparationTime: 3
          }}
        />

        <Recipe
          imageSrc={CaffeMochaImage}
          coffee={{
            name: 'Caffe Mocha',
            description: 'Um clássico Starbucks®',
            preparationTime: 3
          }}
        />

        <Recipe
          imageSrc={LatteMacchiatoImage}
          coffee={{
            name: 'Latte Macchiato',
            description: 'Cheio de sabor',
            preparationTime: 2
          }}
        />

        <Recipe
          imageSrc={SpicedExpressoFlatWhiteImage}
          coffee={{
            name: 'Spiced Expresso Flat White',
            description: 'Deliciosas notas de sabor',
            preparationTime: 3
          }}
        />

        <Recipe
          imageSrc={IcedCaramelMacchiatoImage}
          coffee={{
            name: 'Iced Caramel Macchiato',
            description: 'Rico com notas de baunilha',
            preparationTime: 3
          }}
        />

        <Recipe
          imageSrc={AffogatoImage}
          coffee={{
            name: 'Affogato',
            description: 'Impactante e Cremoso',
            preparationTime: 5
          }}
        />

        <Recipe
          imageSrc={CappuccinoImage}
          coffee={{
            name: 'Cappuccino',
            description: 'Impactante e Cremoso',
            preparationTime: 2
          }}
        />

        <Recipe
          imageSrc={IcedLatteImage}
          coffee={{
            name: 'Iced Latte',
            description: 'Impactante e Cremoso',
            preparationTime: 4
          }}
        />
      </div >
    </>
  )
}
export default App