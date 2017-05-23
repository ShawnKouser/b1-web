"""
#a String is a List in Disguise
alphabet = 'abcdefghijklmnopqrstuvxyz'
print(alphabet[3])

names = ["Fred","Wanda","Sue"]
print(names[1])
print('The third ltter in the second name in the list in:', names[1][2])
# write the code that will print all the letter in the thired name each on a separate line
"""
# write method that takes a list of numbers and a float. multiply all numbers in the list by the float. 
#return the list of new numbers


def multi(numbers, aFloat): # calling a funtion and stroing it as a PERAMETER
    length = len(numbers) # this is a varible that keeps varible place where its located on the list
    index = 0 # store the value to keep track of where the number is on the list acts like a counter
    total = 0 # this is the total store of all the values
    result = [] # this allow these value to be store in a list this an empty list
    while (index < length): # this allow all the number to go through and count. 
        total = aFloat * numbers[index] # value of the list times float
        result.append(total) # adding the total to result
        index += 1 # that counter that will cycle the place value until it has gone through the list
    return (result) # return all the stored value and put it in list from
print(multi([1,2,3], 3.1)) #this prints the numbers that it holds the place values


def count(numbers):
    length = len(numbers) 
    index = 0 
    greater = 0
    result = [] 
    while (index < length):
        if (numbers[index] > 3):
            result.append(numbers[index])
            index +=1
        else:
            index +=1
    return(result)
print(count([1,2,3,4])) 

