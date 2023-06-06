fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-05-06&sortBy=publishedAt&apiKey=479bdad0d3eb4b6fa4555200a757181b')
.then((respond)=>{
        return respond.json()
})
.then((respond)=>{
  var data=respond.articles[1].description
  print(data)
})
.catch((error)=>{
  console.log(error)
})
function print(data){
  document.querySelector('.box').innerHTML=data
}