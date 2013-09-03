var listOfPeople = ['Siarhei Mikhailau', 'Dzianis Skliar', 'Aliaksandr Kurash', 'Nikolay Zhgirovsky', 'Aliaksei Tryputsen', 'Aliaksei Patsiomkin', 'Raman Vysotski', 'Ilya Valasiuk', 'Aliaksandr Padabed', 'Dzmitry Osipau', 'Olga Bedulina', 'Dzianis Ziankovich', 'Marina Kamayeva', 'Siarhei Simanovich', 'Siarhei Vaitehovich', 'Aliaksandr Hudkou', 'Veranika Baradzina', 'Katsiaryna Utlik', 'Siarhei Fedarovich', 'Maxim Malets', 'Tatsiana Hlebik'];
var Autocomplete = function (index, arr){
    var input = document.getElementsByClassName('sf-input')[index];
    var resultList = document.getElementsByClassName('sf-result-list')[index];
    var checkList = arr;

    function removeChildren(node){
        var children = node.childNodes;
        while(children.length) {
            node.removeChild(children[0])
        }
    }

    function normalizeString(str){
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    }

    function checkForCoincidence(e){
        removeChildren(resultList);
        var e = e || window.event;
        if (e.keyCode == 16 || e.keyCode == 17 || e.keyCode == 18 || input.value === '' || e.shiftKey === true){
            return false;
        }
        for (var i = 0; i < checkList.length; i++){
           if(checkList[i].match('\\b'+normalizeString(input.value))){
                var li = document.createElement('li');
                li.innerHTML = checkList[i];
                resultList.appendChild(li);
            }
        }
    }

    function pasteCoincidence(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        search.value = target.innerHTML;
        removeChildren(resultList);
    }


    input.addEventListener('keyup', checkForCoincidence, false);
    resultList.addEventListener('click', pasteCoincidence, false);
};
var myAuto = new Autocomplete(0, listOfPeople);
