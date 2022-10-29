import java.sql.Timestamp;

/**
 * Instead of creating an Abstract class like she did in 5_06 I just created a super class
 * to try something different from her. Although her answer is teaching how to do it using AbstractEvent instead of SuperEvent
 */
public class SuperEvent implements Event {
    // protected so it's subclasses can use it
    protected Long createdTimestamp;
    protected String id;

    public SuperEvent(String id) {
        this.createdTimestamp = new Timestamp(System
                .currentTimeMillis()).getTime();
        this.id = id;
    }

    @Override
    public Long getTimeStamp(){ return this.createdTimestamp; };


    @Override
    public void process() {

    }
}
