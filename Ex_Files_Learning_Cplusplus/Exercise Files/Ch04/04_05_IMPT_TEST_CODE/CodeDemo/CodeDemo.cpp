// Learning C++ 
// Challenge 04_05_IMPT_TEST_CODE
// Calculate a GPA, by Eduardo Corpeño 

#include <iostream>
#include <vector>
#include "records.h"

using namespace std;

vector<Student> students = {Student(1,"George P. Burdell"),
							Student(2,"Nancy Rhodes")};

vector<Course> courses = {Course(1,"Algebra",5),
						  Course(2,"Physics",4),
						  Course(3,"English",3),
						  Course(4,"Economics",4)};

vector<Grade> grades = {Grade(1,1,'B'),	Grade(1,2,'A'),	Grade(1,3,'C'),
						Grade(2,1,'A'),	Grade(2,2,'A'), Grade(2,4,'B')};

float GPA = 0.0f;
int id;

float grade_to_points(char grade);

int main(){
	cout << "Enter a student ID: ";
	cin >> id;

	// Calculate the GPA for the selected student.
	// Write your code here
  // GPA = TotalPoints/TotalCredits
  auto ptr = grades.begin();
  vector<float> grade_point_vec;
  vector<int> credit_vec;
  for (Grade& grade: grades) { // we make it a reference so it avoids unnecessarily copying all the data from grades to grade
    if (grade.get_student_id() == id) {
      grade_point_vec.push_back(grade_to_points(grade.get_grade()));
      for (auto& course: courses) { //auto is Course
        if (course.get_id() == grade.get_course_id()) {
          credit_vec.push_back(course.get_credits());
          break; // because it's useless to keep looking through since we found the course we need
        }
      }
    }
  }

  float numerator = 0.0f, denominator =0.0f;
  int i = 0;
  for (auto& points: grade_point_vec) {
    numerator += points * credit_vec[i];
    denominator += credit_vec[i];
    i++;
  }
  GPA = numerator/denominator;

  string student_str;
  int j = 0;
  while (j < students.size() && students[j].get_id() != id)
    j++;
	student_str = students[j].get_name(); // Change this to the selected student's name

	cout << "The GPA for " << student_str << " is " << GPA << endl;
	return (0);
}

float grade_to_points(char grade) {
  switch(grade) {
    case 'A':
      return 4.0f;
      break;
    case 'B':
      return 3.0f;
      break;
    case 'C':
      return 2.0f;
      break;
    case 'D':
      return 1.0f;
      break;
    default:
      return 0.0f;
  }
}




