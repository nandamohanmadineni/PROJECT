function sayHello()
{
    console.log('hello');
}
function execute(fn)
{
    fn();
}
execute(sayHello);



//other code
function add(){
    console.log("ADD");
}
function subtract()
{
    console.log("subtract");

}
function execute(operation)
{
    operation();
}
execute(add);
execute(subtract);