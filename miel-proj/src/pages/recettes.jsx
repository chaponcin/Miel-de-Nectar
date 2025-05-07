import potImage from '../assets/culinaires.png';
import poulet from '../assets/poulet.png';
import bienetre from '../assets/bienetre.png';
import bienetre1 from '../assets/bienetre1.png';
import bienetre2 from '../assets/bienetre2.png';
import bienetre3 from '../assets/bienetre3.png';
import bienetre4 from '../assets/bienetre4.png';
import bienetre5 from '../assets/bienetre5.png';
import bienetre6 from '../assets/bienetre6.png';
import bienetre7 from '../assets/bienetre7.png';
import bienetre8 from '../assets/bienetre8.png';
import bienetre9 from '../assets/bienetre9.png';
import bienetre10 from '../assets/bienetre10.png';

function Recettes() {
  return (
    <div className="pt-[30px] px-4">
      <div className="flex flex-wrap justify-center gap-8 items-start">

        {/* Image page */}
        <div className="w-full md:w-[600px] mb-8">
          <img src={potImage} alt="pot" className="w-full h-auto mb-4" />
        </div>

        {/* Recipe Cards */}
        {[{
          title: "1. Poulet au Miel et à la Moutarde",
          ingredients: [
            "4 poitrines de poulet",
            "3 cuillères à soupe de miel",
            "2 cuillères à soupe de moutarde",
            "1 cuillère à soupe d'huile d'olive",
            "Sel et poivre au goût"
          ],
          instructions: [
            "Préchauffez le four à 200°C.",
            "Assaisonnez les poitrines de poulet avec du sel et du poivre.",
            "Dans un bol, mélangez le miel, la moutarde et l'huile d'olive.",
            "Badigeonnez les poitrines de poulet de ce mélange.",
            "Faites cuire au four pendant 25-30 minutes, en arrosant le poulet de sauce toutes les 10 minutes."
          ]
        }, {
          title: "2. Vinaigrette au Miel et à la Moutarde",
          ingredients: [
            "3 cuillères à soupe de miel",
            "2 cuillères à soupe de moutarde",
            "2 cuillères à soupe de vinaigre balsamique",
            "4 cuillères à soupe d'huile d'olive",
            "Sel et poivre au goût"
          ],
          instructions: [
            "Dans un bol, mélangez le miel, la moutarde et le vinaigre balsamique.",
            "Incorporez lentement l'huile d'olive en fouettant constamment pour émulsionner la vinaigrette.",
            "Assaisonnez avec du sel et du poivre selon vos préférences.",
            "Utilisez cette vinaigrette pour assaisonner vos salades préférées."
          ]
        }, {
          title: "3. Lait Doré au Curcuma et au Miel",
          ingredients: [
            "1 tasse de lait (végétal ou ordinaire)",
            "1 cuillère à café de curcuma en poudre",
            "1 cuillère à soupe de miel",
            "1 pincée de poivre noir"
          ],
          instructions: [
            "Dans une petite casserole, chauffez le lait à feu doux.",
            "Ajoutez le curcuma en poudre et le poivre noir. Mélangez bien.",
            "Laissez mijoter pendant 5 minutes.",
            "Retirez du feu et ajoutez le miel. Remuez jusqu'à ce qu'il soit bien incorporé.",
            "Servez chaud et savourez cette boisson réconfortante."
          ]
        }, {
          title: "4. Smoothie au Miel et aux Fruits",
          ingredients: [
            "1 banane",
            "1 tasse de lait (végétal ou ordinaire)",
            "1 cuillère à soupe de miel",
            "1/2 tasse de fraises"
          ],
          instructions: [
            "Mélangez tous les ingrédients dans un mixeur jusqu'à obtenir une consistance lisse.",
            "Servez dans un verre et dégustez."
          ]
        }].map((recipe, index) => (
          <div key={index} className="w-full md:w-[45%] bg-white p-6 text-left mb-8">
            <img src={poulet} alt="recipe" className="w-[350px] mx-auto mb-4" />
            <p className="text-xl mb-2">{recipe.title}</p>
            <p className="font-semibold">Ingrédients :</p>
            {recipe.ingredients.map((item, i) => <p key={i}>{item}</p>)}
            <p className="font-semibold mt-4">Instructions :</p>
            {recipe.instructions.map((item, i) => <p key={i}>{item}</p>)}
          </div>
        ))}

        {/* Image pages with consistent sizing */}
        {[bienetre, bienetre1, bienetre2, bienetre3, bienetre4, bienetre5, bienetre6, bienetre7, bienetre8, bienetre9, bienetre10].map((img, index) => (
          <div key={index} className="w-full md:w-[45%] mb-8">
            <img
              src={img}
              alt={`bienetre${index}`}
              className="w-full h-[850px] object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recettes;

