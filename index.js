function writeCards(arr,event)
{
    const newArr = [];
    for(let i = 0;i<arr.length;i++)
    {
        let mes = "Thank you, "+ arr[i] + ", for the wonderful "+ event + " gift!";
        newArr.push(mes);
    }
    return newArr;
}
function countDown(num)
{
    while(num>=0)
    {
        console.log(num);
        num--;
    }

}