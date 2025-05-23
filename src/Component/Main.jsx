

export const Main = (props) => {

    /*1 задача*/

    const isDay = props.hours < 18;

    /*3 задача*/
    const dark = true;

    /*4 задача <ParentBlock/>*/

    return (
        <main>
            <div>
                {
                    isDay > 18 ? "сейчас день" : "сейчас вечер"

                }
            </div>

            {
                dark ? <div className="dark">Hello, ternary operator! </div> : <div className="light">Hello, ternary operator! </div>
            }

<div>

</div>

        </main>
    )
}