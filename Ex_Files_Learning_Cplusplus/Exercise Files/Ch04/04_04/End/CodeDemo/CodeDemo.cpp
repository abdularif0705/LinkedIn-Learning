// Learning C++ 
// Exercise 04_04
// For Loops, by Eduardo Corpeño 

#include <iostream>
#include <vector>

using namespace std;

vector<int> num_list = {12, 25, 31, 47, 58};
float average;

int main() {
  average = 0.0f;
  for (int i = 0; i < num_list.size(); i++)
    average += num_list[i];
  average /= num_list.size();
  cout << "Average: " << average << endl;

  average = 0.0f;
  for (auto x : num_list)
    average += x;
  average /= num_list.size();
  cout << "Average: " << average << endl;

  return 0;
}
