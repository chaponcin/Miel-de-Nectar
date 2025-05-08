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
import rec2 from '../assets/rec2.png';
import rec3 from '../assets/rec3.png';
import rec4 from '../assets/rec4.png';
import rec5 from '../assets/rec5.png';
import rec6 from '../assets/rec6.png';
import rec7 from '../assets/rec7.png';
import rec8 from '../assets/rec8.png';
import rec9 from '../assets/rec9.png';


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
          img: poulet, 
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
          img: rec2,
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
          img: rec3,
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
          img: rec4,
          title: "4. Tarte aux Pommes au Miel",
          ingredients: [
            "1 pâte brisée",
            "4 pommes, pelées, épépinées et tranchées",
            "3 cuillères à soupe de miel",
            "1 cuillère à café de cannelle",
            "2 cuillères à soupe de beurre"
          ],
          instructions: [
            "Préchauffez le four à 180°C.",
            "Abaissez la pâte brisée dans un moule à tarte.",
            "Disposez les tranches de pommes sur la pâte.",
            "Dans une petite casserole, faites fondre le beurre et le miel à feu doux.",
            "Ajoutez la cannelle et mélangez.",
            "Versez ce mélange sur les pommes dans le moule à tarte, en veillant à bien les enrober.",
            "Pliez les bords de la pâte sur les pommes pour former une bordure rustique.",
            "Enfournez la tarte dans le four préchauffé et faites cuire pendant environ 30 à 35 minutes, ou jusqu’à ce que la croûte soit dorée et les pommes tendres.",
            "Retirez du four et laissez refroidir légèrement.",
            "Servez telle quelle ou accompagnée d'une boule de glace à la vanille pour un dessert encore plus gourmand."
          ]
        }, {
          img: rec5,
            title: "5. Salade de Chèvre Chaud au Miel",
            ingredients: [
              "4 tranches de fromage de chèvre",
              "4 cuillères à soupe de miel",
              "4 poignées de salade verte mélangée",
              "1/2 tasse de noix grillées",
              "2 cuillères à soupe d'huile d'olive",
              "2 cuillères à soupe de vinaigre balsamique",
              "Sel et poivre noir moulu, au goût"
            ],
            instructions: [
              "Préchauffez le four à 180°C.",
              "Disposez une tranche de fromage de chèvre sur chaque tranche de pain.",
              "Badigeonnez le fromage de chèvre avec du miel et faites-les cuire au four pendant 5 à 7 minutes, jusqu'à ce qu'ils soient dorés.",
              "Pendant ce temps, mélangez la salade verte, les noix grillées, l'huile d'olive, le vinaigre balsamique, le sel et le poivre dans un grand saladier.",
              "Une fois que le fromage de chèvre est prêt, déposez-le sur la salade.",
              "Servez immédiatement pour déguster le contraste entre le chaud et le froid."
            ]
          }, {
            img: rec6,
              title: "6. Saumon au Miel et à l'Orange",
              ingredients: [
                "4 filets de saumon",
                "Jus et zeste de 2 oranges",
                "1/4 de tasse de miel",
                "2 cuillères à soupe de sauce soja",
                "2 gousses d'ail hachées",
                "Sel et poivre noir moulu, au goût"
              ],
              instructions: [
                "Préchauffez le four à 200°C.",
                "Dans un bol, mélangez le jus et le zeste d'orange, le miel, la sauce soja, l'ail haché, le sel et le poivre.",
                "Placez les filets de saumon dans un plat allant au four et versez la sauce à l'orange et au miel par-dessus.",
                "Faites cuire au four pendant 15 à 20 minutes, en arrosant le saumon de sauce à mi-cuisson.",
                "Servez chaud, garni de quartiers d'orange et de persil frais."
              ]
            }, {
              img: rec7,
                title: "7. Brochettes de Fruits au Miel et à la Cannelle",
                ingredients: [
                  "Assortiment de fruits (ananas, fraises, bananes, etc.)",
                  "1/4 de tasse de miel",
                  "1 cuillère à café de cannelle en poudre"
                ],
                instructions: [
                  "Coupez les fruits en morceaux de taille égale.",
                  "Enfilez-les sur des brochettes en bois.",
                  "Dans un bol, mélangez le miel et la cannelle.",
                  "Badigeonnez les brochettes de fruits avec ce mélange.",
                  "Faites griller les brochettes jusqu'à ce que les fruits soient légèrement caramélisés."
                ]
              }, {
                img: rec8,
                  title: "8. Muffins au Miel et aux Amandes",
                  ingredients: [
                    "2 tasses de farine",
                    "1/2 tasse de miel",
                    "1/2 tasse d'amandes hachées",
                    "1/2 tasse de lait",
                    "1/4 de tasse de beurre fondu",
                    "2 œufs",
                    "1 cuillère à café de levure chimique",
                    "1 cuillère à café d'extrait de vanille"
                  ],
                  instructions: [
                    "Préchauffez le four à 180°C et préparez un moule à muffins.",
                    "Dans un bol, mélangez la farine, la levure chimique et les amandes hachées.",
                    "Dans un autre bol, battez les œufs, ajoutez le miel, le lait, le beurre fondu et l'extrait de vanille.",
                    "Incorporez les ingrédients humides aux ingrédients secs et mélangez jusqu'à obtenir une pâte homogène.",
                    "Remplissez les moules à muffins et faites cuire au four pendant 20 à 25 minutes."
                  ]
                }, {
                  img: rec9,
                    title: "9. Tartines au Fromage de Chèvre, au Miel et aux Figues",
                    ingredients: [
                      "4 tranches de pain de campagne",
                      "1/2 tasse de fromage de chèvre frais",
                      "4 cuillères à soupe de miel",
                      "4 figues fraîches ou séchées, tranchées",
                      "Quelques feuilles de roquette",
                      "Sel et poivre au goût"
                    ],
                    instructions: [
                      "Faites griller les tranches de pain.",
                      "Étalez généreusement le fromage de chèvre sur chaque tranche grillée.",
                      "Disposez les tranches de figues sur le fromage de chèvre.",
                      "Arrosez chaque tartine de miel.",
                      "Garnissez de quelques feuilles de roquette et assaisonnez avec du sel et du poivre.",
                      "Servez ces tartines sucrées-salées en apéritif ou en entrée."
                    ]
        }].map((recipe, index) => (
          <div key={index} className="w-full md:w-[45%] bg-white p-6 text-left mb-8">
    <img src={recipe.img} alt="recipe" className="w-[350px] mx-auto mb-4" />

            <p className="text-xl mb-2">{recipe.title}</p>
            <p>Ingrédients :</p>
            {recipe.ingredients.map((item, i) => <p key={i}>{item}</p>)}
            <p className=" mt-4">Instructions :</p>
            {recipe.instructions.map((item, i) => <p key={i}>{item}</p>)}
          </div>
        ))}

        {/* Image pages with consistent sizing */}
        {[bienetre, bienetre1, bienetre2, bienetre3, bienetre4, bienetre5, bienetre6, bienetre7, bienetre8, bienetre9, bienetre10].map((img, index) => (
          <div key={index} className="w-full md:w-[45%] mb-8">
            <img
              src={img}
              alt={`bienetre${index}`}
              className="w-full h-[900px] object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recettes;

