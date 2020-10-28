    var article=[];
    var data="";
    function read(data, article, callback){
      const fileUrl = "./input/data.txt";

    fetch(fileUrl)
      .then( r => r.text() )
      .then( t => splitData(data, t, article) )
     .then(parts => createArticles(parts,article))  
     .then(articles => console.log(articles[10].Cím))
     .then(()=>callback())  

    
    }
    
    function splitData(d, text){
    
    d = text.split("$$$");
    console.log(d);
    console.log(d.length);

    return d;
   
    }

    function createArticles(parts, article){
      var p= parts[4].split("__label__*");
      var cikkszovege = p[0];
      article.push({
          "Ajánlott_címkék": p[1] ,
          "Ajánlott_speciális_címkék": parts[1],
          "Eredeti_címékék" : parts[2],
          "Cím": parts[3],
          "Cikk_szövege" : cikkszovege
        })  
     for (let i = 0; i < parts.length-4; i = i+4) {   
       var p= parts[i+4].split('__label');
       var cikkszovege = p[0];
       article.push({
          "Ajánlott_címkék": p[1] ,
          "Ajánlott_speciális_címkék": parts[i+1],
          "Eredeti_címékék" : parts[i+2],
          "Cím": parts[i+3],
          "Cikk_szövege" : cikkszovege
        })         
        
     }
     console.log(article.length);
     return article;
  }



