
export const BadComponent = (props) =>{
    console.log(props)
    return(
        <div>
            {props ? "первый текст" : "второй текст"}
            <p>потому что в JavaScript любой объект считается "истинным" (true), даже пустой.</p>
        </div>

    );
}

