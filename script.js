//from 'readability' import Readability;
import Readability from readability;

let p_str = "";
merged = false;

var article = new Readability(document).parse();

parser = new DOMParser();

function mergePage()
{
    ps = document.body.getElementsByTagName("p");
    li = [];
    for (p of ps)
        li.push(p.textContent);
    p_str = li.join();
    //document.body.style.display = "none";
    merged = true;
}

function resize()
{
    if (!merged)
        mergePage();

    //li = wordWrap(p_str, 100);
    li = splitByWordCount(p_str, 20)
    var i = 0;
    body = document.body;
    body.innerHTML = null;
    for (item of li)
    {
        if (i % 2 == 0)
            div = "<div style='color:#ebdbb2;background-color:#282828'>";
        else 
            div = "<div style='color:#282828;background-color:#ebdbb2'>";
        div += item + "</div>";
        div = parser.parseFromString(div, "text/html").body.firstElementChild;
        body.appendChild(div);
        i++;
    }
}

document.body.onresize = resize();

//function wordWrap(str, len) {
    //l = str.split(" ").map((i) => i.length);
    //result = [];
    
    //while ()
//}

function splitByWordCount(str, count) {
  var arr = str.split(' ')
  var r = [];
  while (arr.length) {
    r.push(arr.splice(0, count).join(' '))
  }
  return r;
}
