function dotask(callback)
{
    console.log("Task started");
    callback();
}
function finished()
{
    console.log("Task finished");
}
dotask(finished);