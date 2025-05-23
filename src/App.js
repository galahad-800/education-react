function App() {
    /*1 задача*/

    const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    const positive = array.filter((number) => number > 0);
    const listItems = positive.map(item => (<li>{item}</li>))

    /*2 задача*/


    const messages = [
        {message: 'hello', error: true},
        {message: 'javascript', error: false},
        {message: 'lincode', error: true},
        {message: 'react', error: true},
        {message: 'angular', error: false},
        {message: 'es6', error: false},
    ];
    const ItemsFiltered = messages.filter(item => item.error == false);
    console.log(ItemsFiltered);

    /*3 задача*/


    const words = ['lincode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];

    const WordsItem = words.map(item => {
        if (
            item.length <= 5
        ) {
            return '*'
        }
        return item
    })


    console.log(WordsItem);


    return (
        <div className="App">
            <ul>
                {listItems}

            </ul>
        </div>
    );
}

export default App;
