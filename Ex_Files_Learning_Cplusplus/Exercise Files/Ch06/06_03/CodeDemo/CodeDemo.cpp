// Learning C++ 
// Challenge 06_03
// Upgrade to work with files, by Eduardo Corpeño 

#include <iostream>
#include <fstream>
#include <vector>
#include "records.h"

using namespace std;

void initialize();
void initialize(ifstream&);

StudentRecords SR;
int id;
ifstream inFile;
ofstream outFile;

int main(){
	initialize(inFile);
  SR.report_file(outFile);

  cout << "Enter a student ID: ";
  cin >> id;

  SR.report_card(id, cout); // instead of having 2 functions with one being overloaded, it's cleaner to just have 1 report_card method and send cout as an argument
	return (0);
}

void initialize(ifstream& inFile){
  string str, name;
  char grade;
  int sid, cid, credits, count = 0;

  inFile.open("K:\\Users\\abdul\\GitKraken\\LinkedIn Learning\\Ex_Files_Learning_Cplusplus\\Exercise Files\\Ch06\\06_03\\CodeDemo\\students.txt");
  if (inFile.fail())
    cout << endl << "File students.txt not found!" << endl;
  else {
    while (!inFile.eof()) {
      getline(inFile, str);
      sid = stoi(str);
      getline(inFile, name); // switched from str to name so it's easier to understand the code
      SR.add_student(sid, name);
      count++;
    }
    inFile.close();
    cout << "Found " << count << " students" << endl;
  }
	// SR.add_student(1, "George P. Burdell");
	// SR.add_student(2,"Nancy Rhodes");

  count = 0;
  inFile.open("K:\\Users\\abdul\\GitKraken\\LinkedIn Learning\\Ex_Files_Learning_Cplusplus\\Exercise Files\\Ch06\\06_03\\CodeDemo\\courses.txt");
  if (inFile.fail())
    cout << endl << "File courses.txt not found!" << endl;
  else {
    while (!inFile.eof()) {
      getline(inFile, str);
      cid = stoi(str);
      getline(inFile, name); // cname
      getline(inFile, str);
      credits = stoi(str);
      SR.add_course(cid, name, credits);
      count++;
    }
    inFile.close();
    cout << "Found " << count << " courses" << endl;
  }
	// SR.add_course(1, "Algebra", 5);
	// SR.add_course(2, "Physics", 4);
	// SR.add_course(3, "English", 3);
	// SR.add_course(4,"Economics",4);

  count = 0;
  inFile.open("K:\\Users\\abdul\\GitKraken\\LinkedIn Learning\\Ex_Files_Learning_Cplusplus\\Exercise Files\\Ch06\\06_03\\CodeDemo\\grades.txt");
  if (inFile.fail())
    cout << endl << "File grades.txt not found!" << endl;
  else {
    while (!inFile.eof()) {
      getline(inFile, str);
      sid = stoi(str);
      getline(inFile, str);
      cid = stoi(str);
      getline(inFile, str);
      grade = str[0];
      SR.add_grade(sid, cid, grade);
      count++;
    }
    inFile.close();
    cout << "Found " << count << " grades" << endl;
  }
	// SR.add_grade(1, 1, 'B');
	// SR.add_grade(1, 2, 'A');
	// SR.add_grade(1, 3, 'C');
	// SR.add_grade(2, 1, 'A');
	// SR.add_grade(2, 2, 'A');
	// SR.add_grade(2, 4, 'B');
}