// Learning C++ 
// Challenge 06_03
// Upgrade to work with files, by Eduardo Corpeño 

#include <iostream>
#include <fstream>
#include <vector>
#include "records.h"

using namespace std;

void initialize();

StudentRecords SR;
int id;

int main(){
	initialize();

	cout << "Enter a student ID: ";
	cin >> id;

	SR.report_card(id);
	
	return (0);
}

void initialize(){
  ifstream inFile;
  string str, str2;
  char grade;
  int sid, cid, credits;

  inFile.open("K:\\Users\\abdul\\GitKraken\\LinkedIn Learning\\Ex_Files_Learning_Cplusplus\\Exercise Files\\Ch06\\06_03\\CodeDemo\\students.txt");
  if (inFile.fail())
    cout << endl << "File not found!" << endl;
  else {
    while (!inFile.eof()) {
      getline(inFile, str);
      sid = stoi(str);
      getline(inFile, str); // sname
      SR.add_student(sid, str);
    }
    inFile.close();
  }
	// SR.add_student(1, "George P. Burdell");
	// SR.add_student(2,"Nancy Rhodes");

  inFile.open("K:\\Users\\abdul\\GitKraken\\LinkedIn Learning\\Ex_Files_Learning_Cplusplus\\Exercise Files\\Ch06\\06_03\\CodeDemo\\courses.txt");
  if (inFile.fail())
    cout << endl << "File not found!" << endl;
  else {
    while (!inFile.eof()) {
      getline(inFile, str);
      cid = stoi(str);
      getline(inFile, str); // cname
      getline(inFile, str2);
      credits = stoi(str2);
      SR.add_course(cid, str, credits);
    }
    inFile.close();
  }
	// SR.add_course(1, "Algebra", 5);
	// SR.add_course(2, "Physics", 4);
	// SR.add_course(3, "English", 3);
	// SR.add_course(4,"Economics",4);

  inFile.open("K:\\Users\\abdul\\GitKraken\\LinkedIn Learning\\Ex_Files_Learning_Cplusplus\\Exercise Files\\Ch06\\06_03\\CodeDemo\\grades.txt");
  if (inFile.fail())
    cout << endl << "File not found!" << endl;
  else {
    while (!inFile.eof()) {
      // cout << str << ", ";
      getline(inFile, str);
      sid = stoi(str);
      getline(inFile, str);
      cid = stoi(str);
      getline(inFile, str);
      credits = stoi(str2);
      grade = str[0];
      // cout << letter << endl;
      SR.add_grade(sid, cid, grade);
    }
    inFile.close();
  }
	// SR.add_grade(1, 1, 'B');
	// SR.add_grade(1, 2, 'A');
	// SR.add_grade(1, 3, 'C');
	// SR.add_grade(2, 1, 'A');
	// SR.add_grade(2, 2, 'A');
	// SR.add_grade(2, 4, 'B');
}