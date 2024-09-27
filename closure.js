function outer(){
    let message="hello";

    function inner(){
        console.log(message)
    }
    inner();
}
let message="hi"
outer()