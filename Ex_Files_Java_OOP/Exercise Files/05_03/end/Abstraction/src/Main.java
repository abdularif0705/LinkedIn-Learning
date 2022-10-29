public class Main {

    public static void main(String[] args) {
        PasswordChangeEvent eventOne = new PasswordChangeEvent("321928399");
        AccountTransferEvent eventTwo = new AccountTransferEvent("1936428194");
        MissedPaymentEvent eventThree = new MissedPaymentEvent("93827451");

        Event[] events = {eventOne, eventTwo, eventThree};

       // Using the event interface here abstracts away the actual implementation of how an event is processed.
        // All we know is that this functionality will take each event and process it after printing the timestamp
        // that was created. This reduces complexity and makes your code easier to read.
        for (Event e : events) {
            System.out.println(e.getTimeStamp());
            e.process();
            System.out.println();
        }
    }
}
