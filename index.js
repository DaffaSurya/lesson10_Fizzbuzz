let x = "guru";
switch (x) {
    case "guru":
     console.log("mengajar") 
     break;
    case "polisi":
     console.log("menilang")
    break;
    case "pelaut":
      console.log("melaut")
     break;

    default:
     console.log("ga ngapa ngapain")
    break;
}  

let tummy = "kosong"

switch(tummy) {
    case "lapar":
    console.log("makan")
    break;

    case "kosong":
    console.log("asam lambung naik")
    break;

    case "penuh":
     console.log("ngantuk")
    break;

    default:
    console.log("tidur")

}

function getresult(button) {
    return (button ? 'munculkan sidebar' : 'hilangkan sidebar' )
}

 console.log(getresult(false));

for(let i=0; i<=10; i++) {
    console.log(i);
}

 const cars = ["bmw","volvo","hyundai","alphard"]

 for(let i = 0; i = cars.length; i++) {
   console.log(i);
}

for(let i = 5; i>=-5; i--) {
    console.log(i);
}

let X = 2;

for(let i=0; i<=20; i++) {
    if(i%x==0) {
        console.log(i)
    }
}


// with looping fizzbuzz
function Fizzbuzz(par1) {
     let result = par1
     for(let i=0; i<=15; i++) {
       if(par1%3==0 && par1%15==0) {
        result = "fizzbuzz"
       } else if(par1%3==0) {
        result = "Fizz"
       }else if(par1%5==0) {
        result = "buzz" 
       }else {
        result = "tidak tahu"
       }
     }

     return result
}

const fizzbuzz1 = Fizzbuzz(15);
const fiz1 = Fizzbuzz(6)
const Fizz2 = Fizzbuzz(10)

console.log(fizzbuzz1);
console.log(fiz1);
console.log(Fizz2);

// with looping fizzbuzz

// not function

for(let i=0; i<=15; i++) {
    if(i%3==0 && i%5==0) {
        console.log("FizzBuzz");
    }else if(i%3==0) {
        console.log("fizz");
    }else if(i%5==0) {
        console.log("buzz");
    }else {
        console.log("not category");
    }
}
// not function

// not looping
function result(param) {
 let x = param
  if(x%3==0 && x%5==0) {
    x = "fizzbuzz"
  }else if(x%3==0) {
    x = "fizz"
  }else if(x%5==0) {
    x = "buzz"
  } else {
    x = "unknown"
  }
  return x
}

const fizz1 = result(15);
const fizz2 = result(9);
const fizz3 = result(5);
const fizz4 = result(2);

console.log(fizz1);
console.log(fizz2);
console.log(fizz3);
console.log(fizz4);

// not looping