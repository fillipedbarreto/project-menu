export function Nav(props) {
    return (
        <div className="navegacao">
            <input type="radio" name="nav__option" id="nav__link0" onClick={() => props.upSelNav(0)} defaultChecked />
            <label htmlFor="nav__link0">Main Dishes</label>
            <input type="radio" name="nav__option" id="nav__link1" onClick={() => props.upSelNav(1)}/>
            <label htmlFor="nav__link1">Deserts</label>
            <input type="radio" name="nav__option" id="nav__link2" onClick={() => props.upSelNav(2)}/>
            <label htmlFor="nav__link2">Beverages</label>
        </div>
    )
}