"""
Este es un módulo de búsqueda binaria.
Proporciona la función 'binary_search' para realizar una búsqueda binaria en una lista ordenada.
"""
def binary_search(lista, item):
    """
     Realiza una búsqueda binaria en una lista ordenada para encontrar el índice del elemento dado.

    Args:
        list (list): La lista **ordenada** en la que se realizará la búsqueda.
        item: El elemento que se desea encontrar.

    Returns:
        int or None: El índice del elemento en la lista si se encuentra, None si no se encuentra.
    """
    low = 0
    high = len(lista) - 1
    pasos = 0

    while low <= high:
        mid = (low + high) // 2
        guess = lista[mid]
        pasos +=1

        if guess == item:
            print(f'El total de pasos fue: {pasos}')
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 3))
