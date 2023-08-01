print("Form of Quadratic Equation is :- ax^2+bx+c")
import math
a=int(input("Enter 'a' of an quadratic question: "))
b=int(input("Enter 'b' of an quadratic question: "))
c=int(input("Enter 'c' of an quadratic question: "))

D=(b*b)-(4*a*c)

if (D<0):
    r1=r2=-b/(2*a)
    imaginary=math.sqrt(-D)/(2*a)
    print("Two distinct complex roots exist: r1=%f.2f and r2=%.2f" %(r1,r2))
elif(D==0):
    r1=r2=-b/(2*a)
    print("two equal and real exist: r1=%.2f and r2=%.2f" %(r1,r2))
elif(D>0):
    r1=(-b+ math.sqrt(D)/(2*a))
    r2=(-b- math.sqrt(D)/(2*a))
    print(" two real roots exist: r1=%.2f and r2=%.2f" %(r1,r2))
else:
    print("Enter a valid equation")
    

input("Enter any key to exit")
