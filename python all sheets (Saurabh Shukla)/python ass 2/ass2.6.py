m=int(input("Enter the month: "))
if (m==1 or m==3 or m==5 or m==7 or m==8 or m==10 or m==12):
    print("There are 31 day in the month")
elif (m==4 or m==6 or m==9 or m==11):
    print("There are 30 days in month")
elif (m==2):
    print("Month has 28 days")
else:
    print("Please enter a valid month")

input("Enter any key to exit")
