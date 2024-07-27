
let bingou=[];
let i;
let j;
let aumento=1;

for (i = 0; i < 5; i++) {
    bingou[i] = [];
    for (j = 0; j < 5; j++) {
        bingou[i][j] = 3 * aumento;
        aumento++
    }  
}
console.log(bingou);
console.log("")
console.log("LETRA B \n");
for (j = 0; j < 5; j++) {
    console.log(bingou[j][0]+" ")
}
console.log("")
console.log("LETRA I \n");
for (j = 0; j < 5; j++) {
    console.log(bingou[j][1]+" ")
}
console.log("")
console.log("LETRA N \n");
for (j = 0; j < 5; j++) {
    console.log(bingou[j][2]+" ")
}
console.log("")
console.log("LETRA G \n");
for (j = 0; j < 5; j++) {
    console.log(bingou[j][3]+" ")
}
console.log("")
console.log("LETRA O \n");
for (j = 0; j < 5; j++) {
    console.log(bingou[j][4]+" ")
}
console.log("")
let cont3=0
numx=[]
console.log("X")
for(i=0;i<bingou.length;i++){
    for(j=0;j<bingou[i].length;j++){
        if(i === j || i+j===bingou[i].length-1){
            numx[cont3]=bingou[i][j];
            cont3++
        }
    }
}
console.log(numx)
console.log("")

for (i = 0; i < 3; i++) {
    for (j = 0; j < 5; j++) {
      if ((i === 0 && j === 1) || (i === 0 && j === 3) || (i === 1 && j === 2) || (i === 2 && j === 1) || (i === 2 && j === 3)) {
        console.log("x1: " + bingou[i][j]);
      }
    }
  }
console.log("")
for (i = 2; i < 5; i++) {
    for (j = 0; j < 3; j++) {
        if (i + j  == (j + 1)*2 || i + j === 4) {
            console.log("x2: "+bingou[i][j])
        }
    }
}
console.log(" ")
    
for (i = 2; i < 5; i++) {
    for (j = 2; j < 5; j++) {
        if (i + j  === (j - 1)*2 || i + j === 4 || (i===3 && j===3)|| (i===4 && j===2)|| (i===4 && j===4)) {
            console.log("x3: "+bingou[i][j])
        }
    }
}
console.log(" ")




