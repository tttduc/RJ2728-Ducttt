let h = 5;
for (i = 1; i <= h; i++){
    let str=" "
    for (j = 1; j <=i; j++){
        str += "*";
    }
    console.log(str);
}


let g = 5;
for (let i = 1; i <= g; i++){
    let tg=" "
    for (j = 1; j <= g-i; j++){
            tg += " " 
    }
        for (let j = 1; j <= 2*i-1; j++){
            tg+="*"
    }
    console.log(tg);
}