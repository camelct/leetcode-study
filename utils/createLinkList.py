class Node(object):
    def __init__(self, val):
        self.val = val
        self.next = None

# [1, 2, 3, 4, 5]


def create_link_list(arr):
    print(arr[0])
    head = Node(arr[0])
    current = head
    for val in arr[1:]:
        current.next = Node(val)
        current = current.next
    return head


def print_link_list(head):
    current = head
    while current:
        print('%d -> ' % current.val, end='')
        current = current.next
    print(None)


# head = create_link_list([1, 2, 3, 4, 5])
# print_link_list(head)
