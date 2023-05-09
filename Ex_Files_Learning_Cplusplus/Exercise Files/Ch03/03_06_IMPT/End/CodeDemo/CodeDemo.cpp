// Learning C++ 
// Exercise 03_05
// Vectors, by Eduardo Corpeño 

#include <vector>
#include <iostream>
#include <string>
#include "cow.h"

using namespace std;

vector<int> primes;

int main(){
    primes.push_back(2);
    primes.push_back(3);
    primes.push_back(5);
    primes.push_back(7);
    primes.push_back(11);
    cout << "The vector has " << primes.size() << " elements." << endl;
    cout << "The element at index 2 is " << primes[2] << endl;
    primes[2] = 13;
    cout << "The element at index 2 is " << primes[2] << endl;
    cout << endl;

    vector<cow> cattle;
    cattle.push_back(cow("Betty", 6, meat));
    cattle.push_back(cow("Libby", 4, hide));
    cattle.push_back(cow("Trudy", 5, pet));
    cattle.push_back(cow("Betsy", 2, dairy));

    //  Vectors support iterators, which are special objects that allow you to traverse containers. They work with similar semantics as pointers. In fact, pointers are a type of iterator. In line 32, let me print the name of the first cow in the vector. To access the first element in a vector, we can use the begin function, which returns an iterator to the first element. Once again, notice that since iterators work like pointers, we can use the member of pointer or arrow operator to access the get_name function.
    cout << "The first cow is " << cattle.begin()->get_name() << endl;
    // Notice that in this case, I'm accessing the get_name function with the member of object or dot operator because this is not an iterator, it's an object.
    cout << "At index 1 we have " << cattle[1].get_name() << endl;
    // I can use a special function called prev as in previous, which guarantees going back a number of positions in the container. Let me use this to access the next to last cow.
    cout << "Next to last is " << prev(cattle.end(), 2)->get_name() << endl;
    // Conversely, to access the last element, we can use the n function, but this one returns an iterator to the element after the last element. So we need to decrease this iterator by one.
    cout << "The last cow is " << (cattle.end() - 1)->get_name() << endl;
    return (0);
}













