def sum(list):
    if list == []:
        return 0
    else:
        return list[0] + sum(list[1:])

def count(list):
    if list == []:
        return 0
    else:
        return 1 + count(list[1:])
            

list_1 = [1,2,3,4,15,10]
print(sum(list_1))
print(count(list_1))


