public class AccountTransferEvent extends SuperEvent {

    public AccountTransferEvent(String id) {
        super(id);
    }

    // need this since we implement the Event interface and need all the methods
    // declared in the Event interface
    @Override
    public Long getTimeStamp() {
        return this.createdTimestamp;
    }

    @Override
    public void process() {
        System.out.println("Customer " + id + " needs to transfer " +
                "their service. Reaching out to CTE to remove " +
                "service form old device and add service to " +
                "new device");
    }
}
