print("Form of Quadratic Equation is :- ax^2+bx+c")

a=int(input("Enter 'a' of an quadratic question: "))
b=int(input("Enter 'b' of an quadratic question: "))
c=int(input("Enter 'c' of an quadratic question: "))

D=(b*b)-(4*a*c)
if (D<0):
    print("Nature is unequal and imaginary")
elif(D==0):
    print("Nature is equal and real")
elif(D>0):
    print("Nature is unequal real and rational")
else:
    print("Enter a valid equation")

input("Enter any key to exit")
