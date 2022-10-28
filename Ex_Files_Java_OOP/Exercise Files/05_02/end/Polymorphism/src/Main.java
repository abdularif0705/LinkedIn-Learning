import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException {
        DigitsOnlyFileReader digitsOnlyFileReader = new DigitsOnlyFileReader
                ("K:\\Users\\abdul\\GitKraken\\LinkedIn Learning\\Ex_Files_Java_OOP\\Exercise Files\\05_02\\end\\Polymorphism\\message.txt");

        System.out.println(digitsOnlyFileReader.readFile());
        System.out.println(digitsOnlyFileReader.getPath());
    }
}
