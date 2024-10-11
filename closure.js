function outer(){
    let message="hello";
    let woord="verygood"

    function inner(){
        console.log(woord)
    }
    inner();
}
let message="hi"
outer()