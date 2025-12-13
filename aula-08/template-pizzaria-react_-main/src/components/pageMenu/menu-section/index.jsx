import CardPizza from '../../cardPizza'
import pizza01 from '../../../assets/pizzas/pizza01.png'
import pizza02 from '../../../assets/pizzas/pizza02.png'
import pizza03 from '../../../assets/pizzas/pizza03.png'
import './style.css'

export const MenuSection = () => {
    return (
        <section className="cardapio-section">

            <h2>Cardápio Completo</h2>

            <div className="menu-grid">
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Frango" pizzaIngredients="Massa tradicional, Frango e Catupiry"/>
                <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Mussarela" pizzaIngredients="Massa tradicional e Mussarela"/>
                <CardPizza pizzaImage={pizza03} pizzaName="Pizza Calabreza" pizzaIngredients="Massa tradicional e Calabreza"/>
                <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Pepperoni" pizzaIngredients="Massa tradicional e pepperoni"/>
            </div>
        </section>
    )
}