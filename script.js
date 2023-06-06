fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=india&freshness=Day&textFormat=Raw&safeSearch=Off',{
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': 'a3b970f302msh2f7df4a0c9be985p179c03jsn36cd9b3ac0f7',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
})
.then((respond)=>{

        return respond.json()
})
.then((respond)=>{
  console.log(respond)
  var data=respond
  print(data.value[1].name,data.value[1].image.thumbnail.contentUrl)
})
.catch((error)=>{
  console.log(error)
})
function print(data,thumbnail){
  document.querySelector('.box').innerHTML=data
  document.querySelector('.image').src=thumbnail
}