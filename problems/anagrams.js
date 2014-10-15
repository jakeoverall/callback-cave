/*
Write a function that accepts two parameters, a parent and a child string. 
Determine how many times the child string - or an anagram of the of the child string - 
appears in the parent string. There is a solution which can be done in near instant time.

```js
f('AdnBndAndBdaBn', 'dAn') // 4 ("Adn", "ndA", "dAn", "And")
f('AbrAcadAbRa', 'cAda') // 2
```
*/
var anagram = function (parent, child, i, j) {
    i = i || 0;
    if (!j && j !== 0) {
        j = child.length;
    }
    if (i > parent.length) {
        return 0;
    }
    if (parent[i] === child[j]) {
        if (j === 0) {
            return 1 + anagram(parent, child, i + 1, child.length)
        }
        var rmvChar = child;
        rmvChar.replace(j, '');
        return anagram(parent, rmvChar, i + 1, child.length);
    }
    if (j === 0) {
        return anagram(parent, child, i + 1, child.length);
    }
    return anagram(parent, child, i, j - 1)
}