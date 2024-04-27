let Name1: string = "Hamdan";

//lowercase
console.log("lowercase:", Name1.toLowerCase());

//uppercase
console.log("uppercase:", Name1.toUpperCase());

//Titlecase
console.log("Titlecase:", Name1.replace(/\b\w/g,c=> c.toUpperCase()));
