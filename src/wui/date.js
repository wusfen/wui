import $ from "../libs/$";
import attrtpl from "../libs/attrtpl";

var tpl = `
    <div class="datepicker">
        <div for="item in list" class="_day">{{item}}</div>
    </div>
`

var render = attrtpl(tpl)
var html = render({
  list: [1, 2, 3]
})
console.log(html)





// "DOMSubtreeModified",
// "DOMNodeInserted",
// "DOMNodeRemoved",
// "DOMNodeRemovedFromDocument",
// "DOMNodeInsertedIntoDocument",
// "DOMAttrModified",
// "DOMCharacterDataModified"
var timer = null
document.addEventListener('DOMSubtreeModified', function (e) {

  clearTimeout(timer)
  timer = setTimeout(() => {
    $('input[type="date"]').attr('type', '_date')

    if (!$(e.target).closest('console').length) {
      console.log(e, $('input[type="date"]'))
    }
  }, 1);
}, true)


