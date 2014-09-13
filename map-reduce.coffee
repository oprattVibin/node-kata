sqr = (x) -> x * x
sum = (x,y) -> x + y

[1, 2, 3, 4].map(sqr).reduce(sum)
