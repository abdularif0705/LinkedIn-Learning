import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Abstract File Reader class is useful because we can override the abstract parseLine
 * method and make new functionalities that reads the file and converts the contents to
 * all uppercase, lowercase, or whatever we want. We just have to create a new class that
 * extends the AbstractFileReader class and implements the parseLine functionality
 */
public abstract class AbstractFileReader {

    private final Path filePath;

    protected AbstractFileReader(String filePath) {
        this.filePath = Path.of(filePath);
    }

    public String getPath() {
        return filePath.toString();
    }

    public List<String> readFile() throws IOException {
        return Files.lines(filePath)
                .map(this::parseLine)
                .collect(Collectors.toList());
    }

    protected abstract String parseLine(String line);
}
