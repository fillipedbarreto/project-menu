// CÓDIGO DA AULA REACT08
import { useState } from "react";
import hashtaurant from "./assets/hashtaurante.webp";
import './App.css';
import { Nav } from "./Nav"
import { MenuItem } from "./menuItem";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

export function App() {
    const navPages = [pratosPrincipais, sobremesas, bebidas];
    const [selNav, upSelNav] = useState(0);

    return (
        <>
            <img src={hashtaurant} className="capa" alt="Picture from the restaurant's patio"/>
            <Nav upSelNav={upSelNav}/>
            <div className="menu">
                {navPages[selNav].map(item => <MenuItem nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} alt={item.alt}/>)}
            </div>
        </>
    )
}