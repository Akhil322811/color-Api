const divEle = document.getElementById("content");
// const color = inputEle1.Placeholder;
// const inputEle1  = document.querySelector("#inp").value
// console.log(inputEle1,"good");
// const dateRes = inputEle1;

console.log(dateRes,"hi");

async function fetchColor(dateRes){
    console.log(dateRes,"hi");
    const url=`https://colors.zoodinkers.com/api?date=${dateRes}`;
    const req = await fetch(url);
    const res = await req.json();
    console.log(res);
    divEle.style.backgroundColor=res.hex
}
// const specificDate= color



function func(e){
    const dateRes = e
    console.log(e,"functiomni");
    fetchColor(dateRes);

}