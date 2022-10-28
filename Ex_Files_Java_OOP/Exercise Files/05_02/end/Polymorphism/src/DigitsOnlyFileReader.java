public class DigitsOnlyFileReader extends AbstractFileReader {

    public DigitsOnlyFileReader(String filePath) {
        super(filePath);
    }

    /**
     * reads all digits in message.txt file and puts them into a List
     * @param line
     * @return
     */
    @Override
    protected String parseLine(String line) {
        return line.replaceAll("[^0-9]", ""); // replace all non digits in a line with a blank
    }
}
