// Learning C++ 
// Exercise 04_03
// While Loops, by Eduardo Corpeño 

#include <iostream>
#include <vector>

using namespace std;

vector<int> num_list = {12, 25, 31, 47, 58};

int main(){
    auto ptr = num_list.begin();
    
    while (ptr != num_list.end()){
        cout << *ptr << " ";
        ptr = next(ptr, 1);
    }
    cout << endl;

    int i = 0;
    do{
        cout << num_list[i] << " ";
        i++;
    } while (i < num_list.size());
    cout << endl;

    return (0);
}












