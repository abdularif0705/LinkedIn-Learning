import java.sql.Timestamp;

public class PasswordChangeEvent implements Event {

    // These should not change after they're set by the constructor. So we have the keyword final.
    private final Long createdTimestamp;
    private final String id;

    public PasswordChangeEvent(String id) {
        this.id = id;
        // Get current Time with this code
        this.createdTimestamp = new Timestamp(System
                .currentTimeMillis()).getTime();
    }

    @Override
    public Long getTimeStamp() {
        return this.createdTimestamp;
    }

    @Override
    public void process() {
        System.out.println("Customer " + id + " changed their password. " +
                "Sending a confirmation email to the customer.");
    }
}
