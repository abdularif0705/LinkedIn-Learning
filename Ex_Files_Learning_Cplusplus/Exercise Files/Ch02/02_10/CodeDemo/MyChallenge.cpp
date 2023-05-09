//
// Created by abdul on 2023-05-01.
//

#include <iostream>

int main() {
  int array[] = {1423,4232,3234,4423,54234};
  float sum = 0;
  for (int i : array)
    sum += i;
  sum /= 5;
  std::cout << sum << std::endl;

  return 0;
}