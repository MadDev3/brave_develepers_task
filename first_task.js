function func(s, a, b) {
    if (s.match(/^$/)) {
        return -1;
    }
    var i = s.length -1,
        aIndex = -1,
        bIndex = -1;
    for (i; i >= 0; i--){
        var str = s.substring(i, i +1);
        if(str == a){
            aIndex = i;
        }
        if(str == b){
            bIndex = i;
        }
    }
    return Math.max(aIndex, bIndex);
}