//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let age:number = 8 ;

if (age < 2){
    console.log('the person is a baby.')}
else if ( age >=2 && age < 4){
    console.log('"person is a toddler.')
}else if(age >= 4 && age < 13){
    console.log('"person is a kid.')
}else if (age >=13 && age < 20){
    console.log('"person is a teenager.')
}else if (age >= 20 && age < 65 ){
    console.log('"person is a adult.')
} else {
    console.log('the person is an elder')
} ;
