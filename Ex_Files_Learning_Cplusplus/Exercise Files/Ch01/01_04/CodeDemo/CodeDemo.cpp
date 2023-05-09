// Learning C++ 
// Challenge 01_04
// Console Interaction, by Eduardo Corpeño 

#include <iostream>
#include <string>

using namespace std;

int main(){
	string str;
  cout << "Enter your name: ";
	cin >> str;
	cout << "Hi there, " + str << "!" << endl;
	return 0;
}
