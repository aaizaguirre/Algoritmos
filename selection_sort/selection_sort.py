"""
Este módulo contiene funciones para:
    - Encontrar el índice del elemento más pequeño en una lista (find_smallest).
    - Ordenar una lista utilizando el algoritmo de ordenamiento por selección (selection_sort).
"""
def find_smallest(arr):
    """
    Encuentra el índice del elemento más pequeño en la lista dada.

    Args:
        arr (list): La lista en la que buscar el elemento más pequeño.

    Returns:
        int: El índice del elemento más pequeño en la lista.
    """
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selection_sort(arr):
    """
    Ordena la lista dada en orden ascendente utilizando el algoritmo de ordenamiento por selección.

    Args:
        arr (list): La lista que se va a ordenar.

    Returns:
        list: La lista ordenada.
    """
    new_arr = []
    for _ in range(len(arr)):
        smallest = find_smallest(arr)
        new_arr.append(arr.pop(smallest))
    return new_arr

print(selection_sort([5,3,6,2,10]))
