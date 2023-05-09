// Learning C++ 
// Challenge 02_10
// Calculate an Average, by Eduardo Corpeño 

#include <iostream>

using namespace std;

int main(){
  int nums[5] = {1,23,32,24,337};
  float result = 0;
  // Write your code here
  for (int i : nums)
    result += i;

  cout << "The average is " << result/5 << endl;
  return (0);
}