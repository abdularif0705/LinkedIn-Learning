#include <iostream>
#include <fstream>
#include "records.h"

using namespace std;

Student::Student(int the_id, string the_name){
  id = the_id;
  name = the_name;
}
int Student::get_id(){
  return id;
}
string Student::get_name(){
  return name;
}

Course::Course(int the_id, string the_name, unsigned char the_credits){
  id = the_id;
  name = the_name;
  credits = the_credits;
}
int Course::get_id(){
  return id;
}
string Course::get_name(){
  return name;
}
int Course::get_credits(){
  return credits;
}


Grade::Grade(int sid, int cid, char grd){
  student_id = sid;
  course_id = cid;
  grade = grd;
}
int Grade::get_student_id(){
  return student_id;
}
int Grade::get_course_id(){
  return course_id;
}
char Grade::get_grade(){
  return grade;
}

void StudentRecords::add_student(int sid, string sname){
  students.push_back(Student(sid, sname));
}

void StudentRecords::add_course(int cid, string cname, unsigned char ccredits){
  courses.push_back(Course(cid, cname, ccredits));
}

void StudentRecords::add_grade(int sid, int cid, char grade){
  grades.push_back(Grade(sid, cid, grade));
}

float StudentRecords::get_num_grade(char letter){
  float num_grd;          // float for the numeric grade
  switch (letter){
    case 'A': num_grd = 4.0f;
      break;
    case 'B': num_grd = 3.0f;
      break;
    case 'C': num_grd = 2.0f;
      break;
    case 'D': num_grd = 1.0f;
      break;
    default:  num_grd = 0.0f;
      break;
  };
  return num_grd;
}

string StudentRecords::get_student_name(int sid){
  int i = 0;
  while (i < students.size() && students[i].get_id() != sid)
    i++;
  return students[i].get_name();
}

unsigned char StudentRecords::get_course_credits(int cid){
  int i = 0;
  while (i < courses.size() && courses[i].get_id() != cid)
    i++;
  return courses[i].get_credits();
}

string StudentRecords::get_course_name(int cid){
  int i = 0;
  while (i < courses.size() && courses[i].get_id() != cid)
    i++;
  return courses[i].get_name();
}

float StudentRecords::get_GPA(int sid){
  float points = 0.0f, credits = 0.0f;
  for (Grade& grd : grades)
    if (grd.get_student_id() == sid){
      // calculate total credits and points
      unsigned char current_credits = get_course_credits(grd.get_course_id());
      credits += current_credits;
      points += get_num_grade(grd.get_grade()) * current_credits;
    }
  return (points / credits);
}

void StudentRecords::report_card(int sid, ostream& stream) { // replaced all cout with stream, if we want to use cout we'll have to send cout as an argument from the main function
  float points = 0.0f, credits = 0.0f;
  stream << endl << "Report Card for " + get_student_name(sid) << endl;
  for (Grade& grd : grades)
    if (grd.get_student_id() == sid) {
      // print course and grade
      stream << "Course: " << get_course_name(grd.get_course_id()) << " | Grade: " << grd.get_grade() << endl;
      // calculate total credits and points
      unsigned char current_credits = get_course_credits(grd.get_course_id());
      credits += current_credits;
      points += get_num_grade(grd.get_grade()) * current_credits;
    }
  stream << "GPA: " << points / credits << endl;
}

void StudentRecords::report_file(ofstream& outFile) {
  int sid;
  outFile.open("report_cards.txt");
  if (outFile.fail())
    cout << endl << "Couldn't open the file!" << endl;
  else{
    outFile << "======================================" << endl;
    for (auto& student : students){
      sid = student.get_id();
      report_card(sid, outFile); // sending outFile as the stream argument to write to file
      outFile << "======================================" << endl;
    }
    outFile.close();
    cout << "Created report_cards.txt successfully" << endl;
  }
}

