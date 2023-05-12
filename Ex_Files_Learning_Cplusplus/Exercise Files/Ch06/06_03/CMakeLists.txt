cmake_minimum_required(VERSION 3.25)
project(06_03)

set(CMAKE_CXX_STANDARD 20)

include_directories(CodeDemo)

add_executable(06_03
        CodeDemo/CodeDemo.cpp
        CodeDemo/records.cpp
        CodeDemo/records.h)
