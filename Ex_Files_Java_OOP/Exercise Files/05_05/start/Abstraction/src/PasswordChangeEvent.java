public class PasswordChangeEvent extends SuperEvent {

    public PasswordChangeEvent(String id) {
        super(id);
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
