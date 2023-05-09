cmake_minimum_required(VERSION 3.25)
project(05_04)

set(CMAKE_CXX_STANDARD 20)

include_directories(CodeDemo)

add_executable(05_04
        CodeDemo/CodeDemo.cpp
        CodeDemo/records.cpp
        CodeDemo/records.h)
