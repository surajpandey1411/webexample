const fetchData=new Promise((resolve,reject) => {
setTimeout(() => {
 resolve("Data fetched");
}, 2000);
});
fetchData.then(data => console.log(data));