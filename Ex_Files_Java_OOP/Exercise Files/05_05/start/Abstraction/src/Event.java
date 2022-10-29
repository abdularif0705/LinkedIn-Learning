public interface Event { // to use an interface another class implements it using the implements keyword
    Long getTimeStamp();
    void process();
}
