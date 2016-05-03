setInterval(function() {
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var noReplace = false;
        var node = element.childNodes[j];

        if (node.nodeType === 3)    //if the node type is a text of element or attr
        {
            var text = node.nodeValue;
			//console.log(typeof text);
			/*
			if ($(node).text().indexOf('I ') > -1)
				var replacedText = text.replace(/I /gi , "Mesa ");	
			else if ($(node).text().indexOf('i ') > -1)
				var replacedText = text.replace(/i /gi , "Mesa ");														
			*/

				if (text.indexOf('I ') > -1)
				{
					var replacedText = text.replace(/I /gi , "Mesa ");			
				}		
				else if (text.indexOf('i ') > -1 || text.indexOf("i'm") > -1)
				{
					var replacedText = text.replace(/i /gi , "mesa ");			
				}		
				else if (text.indexOf('You ') > -1)
				{
					var replacedText = text.replace(/You /gi , "Yousa ");			
				}		
				else if (text.indexOf('you ') > -1)
				{
					var replacedText = text.replace(/you /gi , "yousa ");			
				}
				else if (text.indexOf('will ') > -1)
				{
					var replacedText = text.replace(/will /gi , "willsa ");			
				}									
				else
				{
					var replacedText = text;
				}						
		}
			

			
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }  
}

  // method to be executed;
}, 5000);


